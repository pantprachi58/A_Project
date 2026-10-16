"use client";

import Image from "next/image";
import { services } from "@/lib/siteData";
import styles from "./Services.module.scss";

const isRemote = (src) => src.startsWith("http");

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div
        className={styles.sectionBg}
        style={{ backgroundImage: "url(/images/ankush-profile.jpg)" }}
        aria-hidden="true"
      />
      <div className={`container ${styles.content}`}>
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-eyebrow">What I Offer</span>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.lead}>
            Professional photography services tailored to capture your most precious moments
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, i) => (
            <div className="col-sm-6 col-lg-4" key={service.key} data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <div className={styles.frontImageWrap}>
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        unoptimized={isRemote(service.img)}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className={styles.frontImage}
                      />
                    </div>
                    <div className={styles.frontBody}>
                      <h3 className={styles.frontTitle}>{service.title}</h3>
                      <p className={styles.frontDesc}>{service.desc}</p>
                      <span className={styles.hoverLabel}>Hover to Learn More</span>
                    </div>
                  </div>

                  <div
                    className={styles.flipCardBack}
                    style={{ backgroundImage: `url(${service.img})` }}
                  >
                    <div className={styles.backOverlay} />
                    <div className={styles.backBody}>
                      <h3 className={styles.backTitle}>{service.title}</h3>
                      <ul className={styles.featureList}>
                        {service.features.map((feature) => (
                          <li key={feature}>&bull; {feature}</li>
                        ))}
                      </ul>
                      <div className={styles.price} style={{ color: service.priceColor }}>
                        {service.price}
                      </div>
                      <a href="#contact" className={styles.quoteBtn}>
                        Get Quotation
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
