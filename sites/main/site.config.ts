import { defineSite, type SiteConfig } from "@site/theme/site-config";
// The business's details (name, contact details, address, opening hours, links): src/data/business.json.
import business from "./src/data/business.json";
// Colours and fonts: src/data/style.json (Craeft's Site styles change them there).
import style from "./src/data/style.json";

// The site's settings. Everything here is public (it's built into the pages). What each setting
// means: packages/theme/src/site-config.ts.
export default defineSite({
  ...(business as Pick<SiteConfig, "name" | "description" | "businessType" | "contact" | "areasServed" | "openingHours" | "logo" | "social">),
  ...(style as Pick<SiteConfig, "colours" | "fonts" | "look">),
  origin: "https://saaki-s-plumbing-services-www.dev-darazhar.workers.dev",
  locale: "en-GB",
  pages: {
    about: true,
    areas: true,
    reviews: true
  },
  forms: {
    inbox: "saaki@gmail.com",
    turnstileSiteKey: "0x4AAAAAAF8bkvK-O7_8pc3U"
  }
});
