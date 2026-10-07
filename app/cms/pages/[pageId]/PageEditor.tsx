"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import {
  Save,
  RotateCcw,
  ExternalLink,
  ChevronLeft,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Plus,
  Trash2,
  ArrowUp,
  ArrowDown,
  Upload,
  Image as ImageIcon,
  Sparkles,
} from "lucide-react";
import { savePageAction } from "../../actions";
import { Icon, ICON_NAMES } from "@/components/site/Icon";
import type { PageDefinition } from "@/lib/content/registry";
import type {
  Field,
  PrimitiveField,
  StringListField,
  GroupField,
  ListField,
  Section,
} from "@/lib/content/schema-types";

interface PageEditorProps {
  pageDef: PageDefinition;
  initialData: any;
}

export default function PageEditor({ pageDef, initialData }: PageEditorProps) {
  const [data, setData] = useState<any>(initialData);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [saveStatus, setSaveStatus] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const sections = pageDef.schema.sections;
  const currentSection: Section | undefined = sections[activeSectionIndex];

  // Helper untuk get/set nested path
  const getValue = (path: string[]) => {
    let curr = data;
    for (const key of path) {
      if (curr === undefined || curr === null) return undefined;
      curr = curr[key];
    }
    return curr;
  };

  const setValue = (path: string[], val: any) => {
    setData((prev: any) => {
      const clone = JSON.parse(JSON.stringify(prev || {}));
      let curr = clone;
      for (let i = 0; i < path.length - 1; i++) {
        const key = path[i];
        if (!curr[key] || typeof curr[key] !== "object") {
          curr[key] = {};
        }
        curr = curr[key];
      }
      curr[path[path.length - 1]] = val;
      return clone;
    });
  };

  const handleSave = () => {
    setSaveStatus({ type: "idle" });
    startTransition(async () => {
      const res = await savePageAction(pageDef.id, data);
      if (res.success) {
        setSaveStatus({
          type: "success",
          message: "Perubahan berhasil disimpan dan dipublikasikan!",
        });
        setTimeout(() => setSaveStatus({ type: "idle" }), 4000);
      } else {
        setSaveStatus({
          type: "error",
          message: res.error || "Gagal menyimpan perubahan.",
        });
      }
    });
  };

  const handleResetToDefault = () => {
    if (
      confirm(
        "Apakah Anda yakin ingin mengembalikan konten halaman ini ke teks bawaan sistem?"
      )
    ) {
      setData(pageDef.defaults);
    }
  };

  // Upload handler
  const handleUploadFile = async (
    file: File,
    onSuccess: (url: string) => void
  ) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (res.ok && result.url) {
        onSuccess(result.url);
      } else {
        alert(result.error || "Gagal mengupload gambar.");
      }
    } catch (err: any) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-6xl mx-auto w-full">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#14234d]">
        <div className="flex items-center gap-3">
          <Link
            href="/cms"
            className="p-2 rounded-xl bg-[#0b1638] text-slate-300 hover:text-white border border-[#1b2f69] transition-colors"
            title="Kembali ke Dashboard"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#e5b842] font-bold uppercase tracking-wider bg-[#0b1638] px-2 py-0.5 rounded border border-[#1b2f69]">
                Editor Halaman
              </span>
              <span className="text-xs text-slate-400">{pageDef.route}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
              {pageDef.title}
            </h1>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <a
            href={pageDef.route}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0b1638] text-slate-300 hover:text-white border border-[#1b2f69] px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all"
            title="Buka Halaman Publik"
          >
            <span>Preview</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={handleResetToDefault}
            type="button"
            className="bg-[#0b1638] text-slate-300 hover:text-amber-300 border border-[#1b2f69] px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            title="Reset ke nilai default"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset Default</span>
          </button>

          <button
            onClick={handleSave}
            disabled={isPending}
            className="bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold px-4 py-2 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 gold-glow-btn cursor-pointer shadow-lg transition-all disabled:opacity-60"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Menyimpan...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Simpan Perubahan</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Save Status Alert */}
      {saveStatus.type === "success" && (
        <div className="p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-200 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{saveStatus.message}</span>
        </div>
      )}
      {saveStatus.type === "error" && (
        <div className="p-3.5 rounded-xl bg-rose-950/70 border border-rose-500/50 text-rose-200 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
          <span>{saveStatus.message}</span>
        </div>
      )}

      {/* Section Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-[#14234d] scrollbar-none">
        {sections.map((sec, idx) => {
          const isActive = idx === activeSectionIndex;
          return (
            <button
              key={idx}
              onClick={() => setActiveSectionIndex(idx)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-[#e5b842] text-[#070f26] font-bold shadow-md"
                  : "bg-[#070f26] text-slate-300 hover:text-white border border-[#1b2f69]"
              }`}
            >
              {sec.title}
            </button>
          );
        })}
      </div>

      {/* Current Section Content */}
      {currentSection && (
        <div className="bg-[#070f26] border border-[#1b2f69] rounded-2xl p-4 sm:p-6 space-y-6 shadow-xl">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              {currentSection.title}
            </h2>
            {currentSection.description && (
              <p className="text-xs text-slate-400 mt-0.5">
                {currentSection.description}
              </p>
            )}
          </div>

          <div className="space-y-5">
            {currentSection.fields.map((field) => (
              <FieldRenderer
                key={field.key}
                field={field}
                basePath={currentSection.key ? [currentSection.key] : []}
                getValue={getValue}
                setValue={setValue}
                handleUploadFile={handleUploadFile}
              />
            ))}
          </div>
        </div>
      )}

      {/* Sticky Bottom Save Bar */}
      <div className="sticky bottom-4 z-20 bg-[#070f26]/95 backdrop-blur-md border border-[#1b2f69] rounded-2xl p-3 sm:p-4 shadow-2xl flex items-center justify-between gap-3">
        <span className="text-xs text-slate-400 hidden sm:inline">
          Jangan lupa menekan simpan setelah mengedit konten.
        </span>
        <button
          onClick={handleSave}
          disabled={isPending}
          className="ml-auto bg-gradient-to-r from-[#d4af37] via-[#f5c542] to-[#d4af37] hover:from-[#c59e2a] hover:to-[#e5b842] text-[#070f26] font-extrabold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 gold-glow-btn cursor-pointer shadow-lg transition-all disabled:opacity-60"
        >
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Menyimpan...</span>
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              <span>Simpan Perubahan</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

/* ========================================================================
   FIELD RENDERER DISPATCHER
   ======================================================================== */

interface FieldRendererProps {
  field: Field;
  basePath: string[];
  getValue: (path: string[]) => any;
  setValue: (path: string[], val: any) => void;
  handleUploadFile: (file: File, onSuccess: (url: string) => void) => Promise<void>;
}

function FieldRenderer({
  field,
  basePath,
  getValue,
  setValue,
  handleUploadFile,
}: FieldRendererProps) {
  const currentPath = field.key ? [...basePath, field.key] : basePath;
  const value = getValue(currentPath);

  switch (field.type) {
    case "text":
    case "url":
      return (
        <div>
          <label className="block text-xs font-semibold text-slate-200 mb-1">
            {field.label}
          </label>
          <input
            type="text"
            value={value ?? ""}
            placeholder={field.placeholder}
            onChange={(e) => setValue(currentPath, e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#e5b842] transition-colors"
          />
          {field.help && (
            <p className="text-[11px] text-slate-400 mt-1">{field.help}</p>
          )}
        </div>
      );

    case "textarea":
      return (
        <div>
          <label className="block text-xs font-semibold text-slate-200 mb-1">
            {field.label}
          </label>
          <textarea
            rows={3}
            value={value ?? ""}
            placeholder={field.placeholder}
            onChange={(e) => setValue(currentPath, e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#e5b842] transition-colors resize-y"
          />
          {field.help && (
            <p className="text-[11px] text-slate-400 mt-1">{field.help}</p>
          )}
        </div>
      );

    case "richtext":
      return (
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-xs font-semibold text-slate-200">
              {field.label}
            </label>
            <span className="text-[10px] text-[#e5b842]">
              Gunakan **kata** untuk menebalkan
            </span>
          </div>
          <textarea
            rows={4}
            value={value ?? ""}
            placeholder={field.placeholder}
            onChange={(e) => setValue(currentPath, e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#e5b842] transition-colors resize-y"
          />
          {field.help && (
            <p className="text-[11px] text-slate-400 mt-1">{field.help}</p>
          )}
        </div>
      );

    case "image":
      return (
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-slate-200">
            {field.label}
          </label>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {value ? (
              <div className="relative w-24 h-16 rounded-lg overflow-hidden border border-[#1b2f69] bg-[#0b1638] shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={value}
                  alt={field.label}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-24 h-16 rounded-lg border border-dashed border-[#1b2f69] bg-[#0b1638] flex items-center justify-center text-slate-500 shrink-0">
                <ImageIcon className="w-6 h-6" />
              </div>
            )}

            <div className="flex-1 w-full space-y-2">
              <input
                type="text"
                value={value ?? ""}
                placeholder="/images/contoh.jpg atau https://..."
                onChange={(e) => setValue(currentPath, e.target.value)}
                className="w-full px-3 py-2 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#e5b842]"
              />

              <div className="flex items-center gap-2">
                <label className="bg-[#0b1638] hover:bg-[#112357] text-[#e5b842] border border-[#e5b842]/40 text-[11px] font-bold px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 cursor-pointer transition-colors">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Foto Baru</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        handleUploadFile(file, (url) => setValue(currentPath, url));
                      }
                    }}
                  />
                </label>
                {field.help && (
                  <span className="text-[11px] text-slate-400">{field.help}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      );

    case "icon":
      return (
        <div>
          <label className="block text-xs font-semibold text-slate-200 mb-1">
            {field.label}
          </label>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0b1638] border border-[#e5b842] flex items-center justify-center text-[#e5b842] shrink-0">
              <Icon name={value} className="w-5 h-5" />
            </div>
            <select
              value={value || "ShieldCheck"}
              onChange={(e) => setValue(currentPath, e.target.value)}
              className="flex-1 px-3 py-2 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs text-white focus:outline-none focus:border-[#e5b842]"
            >
              {ICON_NAMES.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
      );

    case "stringList": {
      const items: string[] = Array.isArray(value) ? value : [];
      return (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-200">
              {field.label} ({items.length})
            </label>
            <button
              type="button"
              onClick={() => setValue(currentPath, [...items, ""])}
              className="text-[11px] bg-[#0b1638] text-[#e5b842] hover:bg-[#122459] border border-[#e5b842]/40 font-bold px-2.5 py-1 rounded-lg inline-flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-3 h-3" />
              <span>Tambah {field.itemLabel || "Item"}</span>
            </button>
          </div>

          <div className="space-y-2">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-xs text-slate-500 pt-2.5 w-5 text-right">
                  {idx + 1}.
                </span>
                {field.multiline ? (
                  <textarea
                    rows={2}
                    value={item}
                    onChange={(e) => {
                      const updated = [...items];
                      updated[idx] = e.target.value;
                      setValue(currentPath, updated);
                    }}
                    className="flex-1 px-3 py-2 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs text-white focus:outline-none focus:border-[#e5b842]"
                  />
                ) : (
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => {
                      const updated = [...items];
                      updated[idx] = e.target.value;
                      setValue(currentPath, updated);
                    }}
                    className="flex-1 px-3 py-2 bg-[#0b1638] border border-[#1b2f69] rounded-xl text-xs text-white focus:outline-none focus:border-[#e5b842]"
                  />
                )}
                <button
                  type="button"
                  onClick={() => {
                    const updated = items.filter((_, i) => i !== idx);
                    setValue(currentPath, updated);
                  }}
                  className="p-2 text-rose-400 hover:text-rose-200 hover:bg-rose-950/40 rounded-lg cursor-pointer transition-colors"
                  title="Hapus"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    }

    case "group":
      return (
        <div className="p-4 rounded-xl bg-[#0b1638]/70 border border-[#1b2f69] space-y-4">
          <div>
            <h3 className="text-xs font-bold text-[#e5b842] uppercase tracking-wider">
              {field.label}
            </h3>
            {field.help && (
              <p className="text-[11px] text-slate-400">{field.help}</p>
            )}
          </div>
          <div className="space-y-4">
            {field.fields.map((f) => (
              <FieldRenderer
                key={f.key}
                field={f}
                basePath={currentPath}
                getValue={getValue}
                setValue={setValue}
                handleUploadFile={handleUploadFile}
              />
            ))}
          </div>
        </div>
      );

    case "list": {
      const items: any[] = Array.isArray(value) ? value : [];
      return (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                {field.label} ({items.length})
              </h3>
              {field.help && (
                <p className="text-[11px] text-slate-400">{field.help}</p>
              )}
            </div>
            <button
              type="button"
              onClick={() => {
                const emptyItem: any = {};
                field.fields.forEach((f) => {
                  emptyItem[f.key] = "";
                });
                setValue(currentPath, [...items, emptyItem]);
              }}
              className="text-[11px] bg-[#0b1638] text-[#e5b842] hover:bg-[#122459] border border-[#e5b842]/40 font-bold px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Tambah {field.itemLabel}</span>
            </button>
          </div>

          <div className="space-y-3">
            {items.map((item, idx) => {
              const itemTitle =
                (field.titleKey && item[field.titleKey]) ||
                `${field.itemLabel} #${idx + 1}`;

              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0b1638] border border-[#162758] space-y-3"
                >
                  {/* Card item header */}
                  <div className="flex items-center justify-between pb-2 border-b border-[#14234d]">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-[#e5b842] bg-[#070f26] px-2 py-0.5 rounded border border-[#1b2f69]">
                        #{idx + 1}
                      </span>
                      <strong className="text-xs font-bold text-white truncate max-w-xs">
                        {itemTitle}
                      </strong>
                    </div>

                    <div className="flex items-center gap-1">
                      {idx > 0 && (
                        <button
                          type="button"
                          onClick={() => {
                            const updated = [...items];
                            const temp = updated[idx - 1];
                            updated[idx - 1] = updated[idx];
                            updated[idx] = temp;
                            setValue(currentPath, updated);
                          }}
                          className="p-1 text-slate-400 hover:text-white"
                          title="Pindah ke Atas"
                        >
                          <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                      )}
                      {idx < items.length - 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            const updated = [...items];
                            const temp = updated[idx + 1];
                            updated[idx + 1] = updated[idx];
                            updated[idx] = temp;
                            setValue(currentPath, updated);
                          }}
                          className="p-1 text-slate-400 hover:text-white"
                          title="Pindah ke Bawah"
                        >
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          const updated = items.filter((_, i) => i !== idx);
                          setValue(currentPath, updated);
                        }}
                        className="p-1 text-rose-400 hover:text-rose-200"
                        title="Hapus Item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Render nested fields */}
                  <div className="space-y-3">
                    {field.fields.map((subField) => (
                      <FieldRenderer
                        key={subField.key}
                        field={subField}
                        basePath={[...currentPath, String(idx)]}
                        getValue={getValue}
                        setValue={setValue}
                        handleUploadFile={handleUploadFile}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    default:
      return null;
  }
}
