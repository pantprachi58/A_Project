"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import { portfolioCategories, portfolioItems } from "@/lib/siteData";
import styles from "./Portfolio.module.scss";

export default function Portfolio({ initialCategory = "All" }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const slides = useMemo(
    () => filteredItems.map((item) => ({ src: item.img, alt: item.title, title: item.title })),
    [filteredItems]
  );

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-eyebrow">Gallery</span>
          <h2 className="section-title mt-2">Our Portfolio</h2>
          <p className={styles.lead}>A curated collection of my finest work</p>
        </div>

        <div className={`d-flex flex-wrap justify-content-center gap-2 mb-5 ${styles.filters}`} data-aos="fade-up">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`${styles.filterBtn} ${activeCategory === category ? styles.filterBtnActive : ""}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="row g-3">
          {filteredItems.map((item, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={item.id} data-aos="zoom-in" data-aos-delay={(index % 4) * 80}>
              <button
                type="button"
                className={styles.itemBtn}
                onClick={() => setLightboxIndex(index)}
                aria-label={`Open ${item.title}`}
              >
                <div className={styles.itemFrame}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className={styles.itemImage}
                  />
                  <div className={styles.itemOverlay}>
                    <span>{item.title}</span>
                  </div>
                </div>
              </button>
            </div>
          ))}

          {filteredItems.length === 0 && (
            <p className="text-center text-muted">No photos found for this category yet.</p>
          )}
        </div>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
      />
    </section>
  );
}
