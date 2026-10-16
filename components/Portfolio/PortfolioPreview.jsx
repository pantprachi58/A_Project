"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { portfolioPreview } from "@/lib/siteData";
import styles from "./PortfolioPreview.module.scss";

const isRemote = (src) => src.startsWith("http");

export default function PortfolioPreview() {
  const openCategory = (category) => {
    window.open(`/portfolio?category=${encodeURIComponent(category)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-eyebrow">Gallery</span>
          <h2 className={styles.title}>Our Portfolio</h2>
          <p className={styles.lead}>A curated collection of our finest photography work</p>
        </div>

        <div className="row g-4">
          {portfolioPreview.map((item, i) => (
            <div className="col-sm-6 col-lg-3" key={item.key} data-aos="fade-up" data-aos-delay={(i % 4) * 100}>
              <div
                className={styles.card}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.key} portfolio in new tab`}
                onClick={() => openCategory(item.key)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openCategory(item.key);
                  }
                }}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    unoptimized={isRemote(item.img)}
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className={styles.image}
                  />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.cardTitle}>
                    {item.title} <ExternalLink size={14} className={styles.linkIcon} />
                  </h3>
                  <p className={styles.desc}>{item.desc}</p>
                  <span className={styles.readMore}>Read More...</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
