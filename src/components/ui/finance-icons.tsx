interface SvgProps {
  size?: number;
  color?: string;
  opacity?: number;
  className?: string;
}

const c = (color?: string) => color ?? "var(--brand-gold)";

export function IconPiggyBank({ size = 40, color, opacity = 1, className }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity} className={className}>
      <ellipse cx="22" cy="27" rx="14" ry="11" stroke={c(color)} strokeWidth="2" strokeLinejoin="round" />
      <path d="M36 22c2.5 1 4 3.5 4 6s-1.5 4.5-4 5.5" stroke={c(color)} strokeWidth="2" strokeLinecap="round" />
      <path d="M22 16c0-3 2-5 5-5" stroke={c(color)} strokeWidth="2" strokeLinecap="round" />
      <circle cx="27" cy="11" r="2" fill={c(color)} />
      <path d="M14 32l-3 5" stroke={c(color)} strokeWidth="2" strokeLinecap="round" />
      <path d="M30 32l3 5" stroke={c(color)} strokeWidth="2" strokeLinecap="round" />
      <circle cx="17" cy="25" r="1.5" fill={c(color)} />
      <path d="M22 18v-2" stroke={c(color)} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconBarChart({ size = 40, color, opacity = 1, className }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity} className={className}>
      <rect x="6" y="28" width="8" height="14" rx="1.5" fill={c(color)} fillOpacity="0.3" stroke={c(color)} strokeWidth="1.5" />
      <rect x="20" y="18" width="8" height="24" rx="1.5" fill={c(color)} fillOpacity="0.3" stroke={c(color)} strokeWidth="1.5" />
      <rect x="34" y="8" width="8" height="34" rx="1.5" fill={c(color)} fillOpacity="0.5" stroke={c(color)} strokeWidth="1.5" />
      <line x1="4" y1="43" x2="44" y2="43" stroke={c(color)} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconLineChart({ size = 40, color, opacity = 1, className }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity} className={className}>
      <polyline points="4,38 14,26 22,30 32,14 44,8" stroke={c(color)} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4" cy="38" r="2.5" fill={c(color)} />
      <circle cx="14" cy="26" r="2.5" fill={c(color)} />
      <circle cx="22" cy="30" r="2.5" fill={c(color)} />
      <circle cx="32" cy="14" r="2.5" fill={c(color)} />
      <circle cx="44" cy="8" r="2.5" fill={c(color)} />
      <line x1="4" y1="43" x2="44" y2="43" stroke={c(color)} strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
      <line x1="4" y1="8" x2="4" y2="43" stroke={c(color)} strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
    </svg>
  );
}

export function IconTarget({ size = 40, color, opacity = 1, className }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity} className={className}>
      <circle cx="24" cy="24" r="18" stroke={c(color)} strokeWidth="1.5" strokeOpacity="0.4" />
      <circle cx="24" cy="24" r="11" stroke={c(color)} strokeWidth="1.5" strokeOpacity="0.7" />
      <circle cx="24" cy="24" r="5" fill={c(color)} fillOpacity="0.8" />
      <line x1="24" y1="4" x2="24" y2="10" stroke={c(color)} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="38" x2="24" y2="44" stroke={c(color)} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4" y1="24" x2="10" y2="24" stroke={c(color)} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="38" y1="24" x2="44" y2="24" stroke={c(color)} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconShield({ size = 40, color, opacity = 1, className }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity} className={className}>
      <path d="M24 4l16 6v12c0 9-7 16-16 20C15 38 8 31 8 22V10z" stroke={c(color)} strokeWidth="2" strokeLinejoin="round" fill={c(color)} fillOpacity="0.08" />
      <path d="M17 24l5 5 9-10" stroke={c(color)} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCoins({ size = 40, color, opacity = 1, className }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity} className={className}>
      <ellipse cx="18" cy="16" rx="12" ry="5" stroke={c(color)} strokeWidth="1.5" fill={c(color)} fillOpacity="0.1" />
      <path d="M6 16v6c0 2.8 5.4 5 12 5s12-2.2 12-5v-6" stroke={c(color)} strokeWidth="1.5" />
      <path d="M6 22v6c0 2.8 5.4 5 12 5" stroke={c(color)} strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="32" cy="30" rx="10" ry="4" stroke={c(color)} strokeWidth="1.5" fill={c(color)} fillOpacity="0.15" />
      <path d="M22 30v6c0 2.2 4.5 4 10 4s10-1.8 10-4v-6" stroke={c(color)} strokeWidth="1.5" />
    </svg>
  );
}

export function IconWallet({ size = 40, color, opacity = 1, className }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity} className={className}>
      <rect x="4" y="14" width="40" height="26" rx="3" stroke={c(color)} strokeWidth="2" fill={c(color)} fillOpacity="0.07" />
      <path d="M4 20h40" stroke={c(color)} strokeWidth="1.5" />
      <rect x="30" y="23" width="10" height="8" rx="2" fill={c(color)} fillOpacity="0.3" stroke={c(color)} strokeWidth="1.5" />
      <circle cx="35" cy="27" r="1.5" fill={c(color)} />
      <path d="M10 14V10a2 2 0 012-2h24a2 2 0 012 2v4" stroke={c(color)} strokeWidth="1.5" />
    </svg>
  );
}

export function IconPieChart({ size = 40, color, opacity = 1, className }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity} className={className}>
      <path d="M24 8a16 16 0 110 32A16 16 0 0124 8z" stroke={c(color)} strokeWidth="1.5" fill={c(color)} fillOpacity="0.08" />
      <path d="M24 8v16h16A16 16 0 0024 8z" fill={c(color)} fillOpacity="0.35" stroke={c(color)} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M24 24l11.3 11.3A16 16 0 0124 40z" fill={c(color)} fillOpacity="0.2" stroke={c(color)} strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

export function IconTrendUp({ size = 40, color, opacity = 1, className }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity} className={className}>
      <path d="M6 36l12-12 8 6 16-18" stroke={c(color)} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 12h12v12" stroke={c(color)} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCalendar({ size = 40, color, opacity = 1, className }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity} className={className}>
      <rect x="6" y="10" width="36" height="32" rx="3" stroke={c(color)} strokeWidth="1.5" fill={c(color)} fillOpacity="0.07" />
      <line x1="6" y1="20" x2="42" y2="20" stroke={c(color)} strokeWidth="1.5" />
      <line x1="16" y1="6" x2="16" y2="14" stroke={c(color)} strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="6" x2="32" y2="14" stroke={c(color)} strokeWidth="2" strokeLinecap="round" />
      <rect x="14" y="26" width="6" height="5" rx="1" fill={c(color)} fillOpacity="0.5" />
      <rect x="28" y="26" width="6" height="5" rx="1" fill={c(color)} fillOpacity="0.3" />
    </svg>
  );
}

export function IconGrowth({ size = 40, color, opacity = 1, className }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity} className={className}>
      <path d="M24 40V28" stroke={c(color)} strokeWidth="2" strokeLinecap="round" />
      <path d="M24 28c0-6 5-10 10-10" stroke={c(color)} strokeWidth="2" strokeLinecap="round" />
      <path d="M24 28c0-4-3-8-8-9" stroke={c(color)} strokeWidth="2" strokeLinecap="round" />
      <path d="M10 20l4-4 4 4" stroke={c(color)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="12" r="6" stroke={c(color)} strokeWidth="1.5" fill={c(color)} fillOpacity="0.1" />
      <path d="M22 12l2 2 3-3" stroke={c(color)} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconScale({ size = 40, color, opacity = 1, className }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity} className={className}>
      <line x1="24" y1="8" x2="24" y2="40" stroke={c(color)} strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="40" x2="34" y2="40" stroke={c(color)} strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="16" x2="38" y2="16" stroke={c(color)} strokeWidth="2" strokeLinecap="round" />
      <path d="M10 16l-6 10c0 3.3 2.7 6 6 6s6-2.7 6-6z" fill={c(color)} fillOpacity="0.2" stroke={c(color)} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M38 16l-6 10c0 3.3 2.7 6 6 6s6-2.7 6-6z" fill={c(color)} fillOpacity="0.35" stroke={c(color)} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="24" cy="8" r="2.5" fill={c(color)} />
    </svg>
  );
}
