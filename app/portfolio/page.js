import fs from "node:fs";
import path from "node:path";
import { Suspense } from "react";
import PortfolioGallery from "./PortfolioGallery";
import { portfolioItems } from "@/lib/siteData";

export const metadata = {
  title: "Portfolio | Ankush Painuly Photography",
};

const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;
const PORTFOLIO_DIR = path.join(process.cwd(), "public", "images", "portfolio");

// Drop photos into public/images/portfolio/<Category>/ (e.g. "Wedding",
// "Pre Wedding") and they appear here automatically. Files placed directly in
// public/images/portfolio/ are listed under "Featured". If the folder is
// empty, the images from siteData are used instead.
function readPortfolioFolder() {
  if (!fs.existsSync(PORTFOLIO_DIR)) return [];
  const items = [];
  const add = (category, dir, file, url) => {
    if (!IMAGE_EXT.test(file)) return;
    items.push({ id: `${category}-${file}`, title: file.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "), category, img: `${url}/${encodeURIComponent(file)}` });
  };
  for (const entry of fs.readdirSync(PORTFOLIO_DIR, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      const dir = path.join(PORTFOLIO_DIR, entry.name);
      for (const file of fs.readdirSync(dir).sort()) {
        add(entry.name, dir, file, `/images/portfolio/${encodeURIComponent(entry.name)}`);
      }
    } else {
      add("Featured", PORTFOLIO_DIR, entry.name, "/images/portfolio");
    }
  }
  return items;
}

export default function PortfolioPage() {
  const fromFolder = readPortfolioFolder();
  const items = fromFolder.length ? fromFolder : portfolioItems;
  const categories = [...new Set(items.map((i) => i.category))];

  return (
    <Suspense fallback={null}>
      <PortfolioGallery items={items} categories={categories} />
    </Suspense>
  );
}
