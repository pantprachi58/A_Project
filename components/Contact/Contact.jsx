"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/lib/siteData";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Contact.module.scss";

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

const contactInfo = [
  { icon: MapPin, label: "Location", value: siteConfig.location },
  { icon: Phone, label: "Call Us", value: siteConfig.phone },
  { icon: Mail, label: "Email Us", value: siteConfig.email },
];

const socialLinks = [
  { icon: FaInstagram, label: "Instagram", href: siteConfig.social.instagram },
  { icon: FaFacebook, label: "Facebook", href: siteConfig.social.facebook },
  { icon: FaLinkedin, label: "LinkedIn", href: siteConfig.social.linkedin },
];

export default function Contact() {
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
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title mt-2">Let&apos;s Connect</h2>
          <p className={styles.lead}>
            Let&apos;s discuss your project and create something extraordinary together.
          </p>
        </div>

        <div className="row g-5">
          <div className="col-lg-5" data-aos="fade-right">
            <div className={styles.infoList}>
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div className={styles.infoItem} key={label}>
                  <span className={styles.infoIcon}>
                    <Icon size={18} />
                  </span>
                  <div>
                    <div className={styles.infoLabel}>{label}</div>
                    <div className={styles.infoValue}>{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.socialRow}>
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={styles.socialIcon}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left">
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
                    rows={4}
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    placeholder="Tell us about your requirements, special requests, or any questions you have..."
                    {...register("message", { required: "Please tell us a bit about your requirements" })}
                  />
                  {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-gradient rounded-pill px-4 d-inline-flex align-items-center gap-2" disabled={submitting}>
                    {submitting ? "Sending..." : "Send Request"} <Send size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
