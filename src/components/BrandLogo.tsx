import Image from "next/image";

const LOGO_PNG = "/brand/only-icon.png";
const ICON_SVG = "/brand/monaiq-icon.svg";

type BrandLogoProps = {
  /** Full app mark (same as mobile `AppLogo` / `app.json` icon). */
  variant?: "app" | "wave";
  size?: number;
  className?: string;
  priority?: boolean;
};

/**
 * MonAIQ brand assets from `mobile/assets/` (only-icon.png, monaiq-icon.svg).
 */
export function BrandLogo({
  variant = "app",
  size = 40,
  className = "",
  priority = false,
}: BrandLogoProps) {
  const src = variant === "app" ? LOGO_PNG : ICON_SVG;
  const r = Math.min(22, Math.round(size * 0.45));

  return (
    <div
      className={`relative shrink-0 overflow-hidden border border-ink/10 glass-panel bg-paper-elevated/95 shadow-lift ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: r,
      }}
    >
      <Image
        src={src}
        alt=""
        width={size}
        height={size}
        className="h-full w-full object-contain p-[9%]"
        sizes={`${size}px`}
        priority={priority}
      />
    </div>
  );
}
