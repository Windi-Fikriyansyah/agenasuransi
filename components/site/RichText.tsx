import React from "react";

/**
 * Render teks sederhana dengan dukungan **tebal** (markdown minimal)
 * agar admin dapat menebalkan kata tanpa editor WYSIWYG.
 */
export function RichText({
  text,
  strongClassName = "text-white",
}: {
  text?: string;
  strongClassName?: string;
}) {
  if (!text) return null;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") && part.length > 4 ? (
          <strong key={i} className={strongClassName}>
            {part.slice(2, -2)}
          </strong>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

/** Kelas span untuk kartu terakhir agar grid tetap penuh (literal untuk Tailwind). */
export function lastItemSpan(index: number, total: number) {
  if (index !== total - 1) return "";
  const md = total % 2 === 1 ? "md:col-span-2" : "";
  const lg = total % 3 === 2 ? "lg:col-span-2" : "";
  return `${md} ${lg}`.trim();
}
