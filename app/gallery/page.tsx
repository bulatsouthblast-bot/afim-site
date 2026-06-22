import type { Metadata } from "next";
import { SectionPage } from "@/components/SectionPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "Галерея | AFIM",
  "Фотографии тренировок, турниров и жизни Академии футбола имени Асылбека Момунова.",
  ["галерея футбольной академии", "фото футбольной школы", "AFIM фото"],
  "/gallery",
);

export default function GalleryPage() {
  return <SectionPage number="05" title="Галерея" description="Техника, характер, команда и игра — моменты, из которых складывается путь будущего футболиста." />;
}
