"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/siteData";
import ReviewModal from "./ReviewModal";
import styles from "./Reviews.module.scss";
import "swiper/css";
import "swiper/css/pagination";

export default function Reviews() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="reviews" className={styles.reviews}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-title mt-2">Client Reviews</h2>
          <p className={styles.lead}>What our clients say about our work</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
            className={styles.swiper}
          >
            {testimonials.map((review) => (
              <SwiperSlide key={review.id}>
                <div className={styles.card}>
                  <div className={styles.stars}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <p className={styles.comment}>&ldquo;{review.comment}&rdquo;</p>
                  <div className={styles.author}>
                    <span className={styles.avatar}>{review.name.charAt(0)}</span>
                    <div>
                      <div className={styles.name}>{review.name}</div>
                      <div className={styles.role}>{review.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-4" data-aos="fade-up">
          <button type="button" className="btn btn-gradient rounded-pill px-4" onClick={() => setShowModal(true)}>
            Share Your Experience
          </button>
        </div>
      </div>

      <ReviewModal show={showModal} onHide={() => setShowModal(false)} />
    </section>
  );
}
