"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/siteData";
import QuotationModal from "@/components/QuotationModal/QuotationModal";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showQuotation, setShowQuotation] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setExpanded(false);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <a className={`navbar-brand d-flex align-items-center gap-2 ${styles.brand}`} href="/">
          <Image src="/images/apLogo.png" alt={siteConfig.name} width={1983} height={793} priority className={styles.logo} />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className={`nav-link ${styles.navLink}`} href={link.href} onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button
                type="button"
                className={`btn btn-gradient rounded-pill px-4 d-inline-flex align-items-center gap-2 ${styles.ctaBtn}`}
                onClick={() => {
                  handleNavClick();
                  setShowQuotation(true);
                }}
              >
                <Phone size={16} /> Get Quotation
              </button>
            </li>
          </ul>
        </div>
      </div>

      <QuotationModal show={showQuotation} onHide={() => setShowQuotation(false)} />
    </nav>
  );
}
