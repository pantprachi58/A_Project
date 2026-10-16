import { siteConfig } from "./siteData";

export function buildWhatsAppUrl(data) {
  const lines = [
    "New inquiry from the website:",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone && `Phone: ${data.phone}`,
    `Category: ${data.eventType}`,
    data.eventDate && `Event Date: ${data.eventDate}`,
    `Message: ${data.message}`,
  ].filter(Boolean);

  const whatsappNumber = siteConfig.phone.replace(/\D/g, "");
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}
