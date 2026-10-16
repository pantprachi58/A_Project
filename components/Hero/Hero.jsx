"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/siteData";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <Image
        src="/images/ankush-profile.jpg"
        alt={siteConfig.name}
        fill
        priority
        sizes="100vw"
        className={styles.heroImage}
      />
      <h1 className={`script-text ${styles.signature}`}>{siteConfig.name}</h1>
    </section>
  );
}
