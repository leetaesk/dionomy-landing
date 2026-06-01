export interface ProcessStep {
  step: string;
  title: string;
  body: string;
}

export const processHeading = "시작은 상담 한 번이면 충분합니다.";
export const processLead =
  "복잡한 세팅은 Dionomy가 맡습니다. 원장님은 평소처럼 학원을 운영하시면 됩니다.";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "상담 · 온보딩",
    body: "학원 운영 방식을 함께 정리합니다. 회원권 정책과 차감 규칙을 그대로 옮겨 담습니다.",
  },
  {
    step: "02",
    title: "전용 앱 생성",
    body: "로고와 테마를 입힌 우리 학원 전용 앱이 만들어집니다. 수강생은 앱으로 일정을 바꾸기 시작합니다.",
  },
  {
    step: "03",
    title: "운영 데이터 축적",
    body: "일정·출석·결제·수강권이 한 곳에 쌓입니다. 흩어진 관리가 사라집니다.",
  },
  {
    step: "04",
    title: "AI 케어 시작",
    body: "데이터가 쌓이면 AI가 이탈 신호를 읽기 시작합니다. 매주 챙길 수강생을 먼저 알려드립니다.",
  },
];
