export interface PricingPlan {
  audience: string;
  price: string;
  unit?: string;
  description: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
}

export const pricingHeading = "수강생과 강사는 무료, 원장님만 구독합니다.";
export const pricingLead =
  "수강생과 강사는 비용 없이 앱을 씁니다. 원장님은 수강생 수에 맞춘 월 구독으로, 딱 쓰는 만큼만 냅니다.";

export const pricingPlans: PricingPlan[] = [
  {
    audience: "수강생 · 강사",
    price: "무료",
    description: "전용 앱으로 일정 변경, 잔여 확인, 알림까지 — 비용 부담 없이.",
    features: [
      "학원 전용 앱 이용",
      "일정 변경 · 잔여 횟수 확인",
      "변경 · 확정 알림 수신",
    ],
  },
  {
    audience: "원장",
    price: "월 구독",
    unit: "수강생 수 기반 티어",
    description:
      "운영 허브, 화이트라벨 앱, AI 이탈 신호 CRM을 모두 포함합니다.",
    highlight: true,
    badge: "전 기능 포함",
    features: [
      "통합 운영 허브 + 백오피스 통계",
      "화이트라벨 전용 앱 빌더",
      "AI 이탈 신호 CRM",
      "수강생 수에 맞춘 합리적 티어",
    ],
  },
];

export const earlyAdopterBanner = {
  eyebrow: "한정 모집",
  title: "초기 10개 학원, 무료 얼리어답터",
  body: "서울 권역 성인 취미 학원 10곳을 무료 얼리어답터로 모십니다. 전용 앱 제작과 온보딩을 함께하고, 제품을 같이 만들어 갑니다.",
};
