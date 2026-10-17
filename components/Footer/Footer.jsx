import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { navLinks, siteConfig } from "@/lib/siteData";
import styles from "./Footer.module.scss";

const socialLinks = [
  { icon: FaInstagram, label: "Instagram", href: siteConfig.social.instagram },
  { icon: FaFacebook, label: "Facebook", href: siteConfig.social.facebook },
  { icon: FaLinkedin, label: "LinkedIn", href: siteConfig.social.linkedin },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <Image src="/images/apLogo.png" alt={siteConfig.name} width={1983} height={793} className={`mb-2 ${styles.logo}`} />
            <p className={styles.desc}>{siteConfig.heroSubtitle}</p>
            <div className="d-flex gap-2 mt-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={styles.socialIcon}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <h6 className={styles.heading}>Quick Links</h6>
            <ul className={styles.linkList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4">
            <h6 className={styles.heading}>Contact</h6>
            <ul className={styles.linkList}>
              <li>
                <MapPin size={14} className="me-2" /> {siteConfig.location}
              </li>
              <li>
                <Phone size={14} className="me-2" /> {siteConfig.phone}
              </li>
              <li>
                <Mail size={14} className="me-2" /> {siteConfig.email}
              </li>
            </ul>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={`d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 ${styles.bottom}`}>
          <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <div className="d-flex gap-3">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
