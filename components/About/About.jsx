"use client";

import { siteConfig, stats } from "@/lib/siteData";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.text}>{siteConfig.aboutBio}</p>
            <p className={styles.text}>{siteConfig.aboutSecondary}</p>
          </div>

          <div className="col-md-6" data-aos="fade-left">
            <div className="row g-4">
              {stats.map((stat) => (
                <div className="col-6" key={stat.id}>
                  <div className={styles.statCard}>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
