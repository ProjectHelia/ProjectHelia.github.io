import Image from "next/image";
import { LOGO_URL, SITE_NAME } from "../content";

// site logo, used in both the nav and the footer.
// `size` is the height; width follows the file's own aspect ratio, so a
// banner, a square or a round logo all drop in without changes here.
export default function Logo({ size = 44 }: { size?: number }) {
  return (
    <Image
      src={LOGO_URL}
      alt={SITE_NAME}
      // Only the pre-load placeholder box — the real ratio comes from the file.
      width={150}
      height={150}
      priority
      // rounded-full clips the badge's white square corners away, which is
      // why the logo doesn't need a transparent background. Drop this class
      // if you ever swap in a wordmark or banner.
      className="w-auto rounded-full"
      style={{ height: size }}
    />
  );
}
