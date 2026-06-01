export type RiskLevel = "high" | "medium" | "watch";

export interface CareCard {
  name: string;
  meta: string; // 수강 과목 · 기간 등
  level: RiskLevel;
  signal: string; // AI가 읽은 위험 신호(근거)
  action: string; // 권장 액션 초안
}

export const riskLabel: Record<RiskLevel, string> = {
  high: "이탈 위험 높음",
  medium: "주의 필요",
  watch: "관찰 권장",
};

// "이번 주에 챙겨야 할 수강생" 카드 — Solution 3 목업에 사용
export const careCards: CareCard[] = [
  {
    name: "김서연",
    meta: "재즈 피아노 · 8개월차",
    level: "high",
    signal:
      "최근 3주간 수업 간격이 평소의 2배로 벌어졌고, 잔여 2회 · 재등록 안내 전",
    action:
      "이번 주 중 안부 겸 상담을 제안해 보세요. 보강 일정 1회를 함께 잡으면 흐름이 회복됩니다.",
  },
  {
    name: "이준호",
    meta: "주말 살사반 · 4개월차",
    level: "medium",
    signal: "출석은 유지되지만 같은 진도를 3회 반복 — 지루함을 느낄 위험",
    action: "강사에게 다음 단계 동작을 미리 제안하도록 권장합니다.",
  },
  {
    name: "박하늘",
    meta: "수채 드로잉 · 2개월차",
    level: "watch",
    signal: "수강권 잔여 1회, 만족도 설문 미응답",
    action: "재등록 안내와 함께 짧은 피드백을 요청해 보세요.",
  },
];

export const careTrustBadge = "AI는 제안하고, 결정은 원장님이 합니다.";
export const careTrustBody =
  "Dionomy의 AI는 자동으로 메시지를 보내거나 판단을 확정하지 않습니다. 근거와 초안만 제안하고, 마지막 선택은 언제나 원장님과 강사의 몫입니다.";
