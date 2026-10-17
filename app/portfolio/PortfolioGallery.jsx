"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Lightbox from "yet-another-react-lightbox";
import { siteConfig } from "@/lib/siteData";
import styles from "./PortfolioGallery.module.scss";

export default function PortfolioGallery({ items, categories }) {
  const requested = useSearchParams().get("category");
  const [active, setActive] = useState(categories.includes(requested) ? requested : "All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const visible = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.category === active)),
    [active, items]
  );
  const slides = useMemo(() => visible.map((i) => ({ src: i.img, alt: i.title, title: i.title })), [visible]);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Portfolio</h1>
        <p className={styles.intro}>
          Selected work by {siteConfig.name} — weddings, portraits, fashion and brands, photographed in{" "}
          {siteConfig.location}.
        </p>
        <nav className={styles.filters} aria-label="Portfolio categories">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`${styles.filter} ${active === c ? styles.filterActive : ""}`}
            >
              {c}
            </button>
          ))}
        </nav>
      </header>

      <div className={styles.grid}>
        {visible.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={styles.tile}
            onClick={() => setLightboxIndex(index)}
            aria-label={`Open ${item.title}`}
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className={styles.image}
              priority={index < 2}
            />
            <span className={styles.caption}>
              <span>{item.title}</span>
              <span>{item.category}</span>
            </span>
          </button>
        ))}
      </div>

      <Lightbox open={lightboxIndex >= 0} index={lightboxIndex} close={() => setLightboxIndex(-1)} slides={slides} />
    </div>
  );
}
