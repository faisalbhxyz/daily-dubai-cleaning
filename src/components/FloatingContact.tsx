import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import type { Dictionary } from "@/lib/i18n/types";
import { siteConfig } from "@/lib/site";

export function FloatingContact({ dict }: { dict: Dictionary }) {
  return (
    <div className="floating-contact" aria-label={dict.sticky.quickContact}>
      <a
        className="floating-btn floating-call"
        href={siteConfig.phoneHref}
        aria-label={`${dict.floating.call} ${siteConfig.phone}`}
        title={`${dict.floating.call} ${siteConfig.phone}`}
      >
        <PhoneIcon />
      </a>
      <a
        className="floating-btn floating-wa"
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={dict.floating.chat}
        title={dict.floating.chat}
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
