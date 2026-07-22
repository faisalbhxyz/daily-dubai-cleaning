import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { siteConfig } from "@/lib/site";

export function MobileStickyBar() {
  return (
    <div className="mobile-sticky" role="navigation" aria-label="Quick contact">
      <a className="sticky-call" href={siteConfig.phoneHref}>
        <PhoneIcon />
        Call Now
      </a>
      <a
        className="sticky-wa"
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
        WhatsApp Now
      </a>
    </div>
  );
}
