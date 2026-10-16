"use client";

import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Image from "next/image";
import { Send, Sparkles, X } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./QuotationModal.module.scss";

const shootTypes = [
  "General Inquiry",
  "Wedding",
  "Pre Wedding",
  "Portrait",
  "Event",
  "Commercial",
  "Fashion",
  "Maternity",
  "Engagement",
];

export default function QuotationModal({ show, onHide }) {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", email: "", phone: "", eventType: "General Inquiry", eventDate: "", message: "" },
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 400));
    setSubmitting(false);
    window.open(buildWhatsAppUrl(data), "_blank", "noopener,noreferrer");
    toast.success("Thanks! Opening WhatsApp so you can send us your details.");
    reset();
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      dialogClassName={styles.dialog}
      contentClassName={styles.content}
      onExited={() => reset()}
    >
      <button type="button" className={styles.closeBtn} onClick={onHide} aria-label="Close">
        <X size={20} />
      </button>

      <div className={styles.grid}>
        <div className={styles.visual}>
          <Image
            src="/images/wedding-photo.jpg"
            alt="Get a photography quotation"
            fill
            sizes="(max-width: 767px) 100vw, 380px"
            className={styles.visualImage}
          />
          <div className={styles.visualOverlay} />
          <div className={styles.visualContent}>
            <span className={styles.visualBadge}>
              <Sparkles size={14} /> Free Quotation
            </span>
            <h3 className={`script-text ${styles.visualTitle}`}>Let&apos;s capture your story</h3>
            <p className={styles.visualText}>
              Share a few details and we&apos;ll send you a personalised quote on WhatsApp within minutes.
            </p>
          </div>
        </div>

        <div className={styles.formSide}>
          <div className={styles.formHeader}>
            <span className="section-eyebrow">Get In Touch</span>
            <h3 className={styles.formTitle}>Request a Quotation</h3>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Your Name</label>
                <input
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Your full name"
                  {...register("name", { required: "Please enter your name" })}
                />
                {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
              </div>

              <div className="col-md-6">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: { value: /^\S+@\S+\.\S+$/, message: "Please enter a valid email address" },
                  })}
                />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>

              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input className="form-control" placeholder="Your phone number" {...register("phone")} />
              </div>

              <div className="col-md-6">
                <label className="form-label">Category</label>
                <select className="form-select" {...register("eventType")}>
                  {shootTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Event Date</label>
                <input type="date" className="form-control" {...register("eventDate")} />
              </div>

              <div className="col-12">
                <label className="form-label">Message</label>
                <textarea
                  rows={3}
                  className={`form-control ${errors.message ? "is-invalid" : ""}`}
                  placeholder="Tell us about your requirements..."
                  {...register("message", { required: "Please tell us a bit about your requirements" })}
                />
                {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
              </div>

              <div className="col-12">
                <button
                  type="submit"
                  className={`btn btn-gradient rounded-pill px-4 w-100 d-inline-flex align-items-center justify-content-center gap-2 ${styles.submitBtn}`}
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Get My Quotation"} <Send size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
