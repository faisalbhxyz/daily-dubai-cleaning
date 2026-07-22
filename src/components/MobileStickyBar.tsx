import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import type { Dictionary } from "@/lib/i18n/types";
import { siteConfig } from "@/lib/site";

export function MobileStickyBar({ dict }: { dict: Dictionary }) {
  return (
    <div className="mobile-sticky" role="navigation" aria-label={dict.sticky.quickContact}>
      <a className="sticky-call" href={siteConfig.phoneHref}>
        <PhoneIcon />
        {dict.sticky.callNow}
      </a>
      <a
        className="sticky-wa"
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
        {dict.sticky.whatsappNow}
      </a>
    </div>
  );
}
