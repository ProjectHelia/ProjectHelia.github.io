import Image from "next/image";
import { LOGO_URL, SITE_NAME } from "../content";

// site logo, used in both the nav and the footer.
// `size` is the height; width follows the file's own aspect ratio, so a
// banner, a square or a round logo all drop in without changes here.
export default function Logo({ size = 48 }: { size?: number }) {
  return (
    <Image
      src={LOGO_URL}
      alt={SITE_NAME}
      // Only the pre-load placeholder box — the real ratio comes from the file.
      width={909}
      height={205}
      priority
      className="w-auto"
      style={{ height: size }}
    />
  );
}
