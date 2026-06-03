export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "기능", href: "#solutions" },
  { label: "문제", href: "#problem" },
  { label: "도입 흐름", href: "#process" },
  { label: "요금", href: "#pricing" },
];

export const footerLinks: NavLink[] = [
  { label: "기능", href: "#solutions" },
  { label: "요금", href: "#pricing" },
  { label: "얼리어답터 신청", href: "#apply" },
];

export const primaryCta = { label: "무료 얼리어답터 신청", href: "#apply" };
export const secondaryCta = { label: "데모 받아보기", href: "#solutions" };
