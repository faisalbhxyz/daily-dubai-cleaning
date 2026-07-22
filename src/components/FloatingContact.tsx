import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { siteConfig } from "@/lib/site";

export function FloatingContact() {
  return (
    <div className="floating-contact" aria-label="Quick contact">
      <a
        className="floating-btn floating-call"
        href={siteConfig.phoneHref}
        aria-label={`Call ${siteConfig.phone}`}
        title={`Call ${siteConfig.phone}`}
      >
        <PhoneIcon />
      </a>
      <a
        className="floating-btn floating-wa"
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
