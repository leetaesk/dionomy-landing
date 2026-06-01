// 화이트라벨 데모(island)에서 학원 카드를 누르면 미리보기 앱이 통째로 리브랜딩된다.
// 색(accent)·이름·원장·로고·주간 시간표·일정·통계가 모두 학원별로 교체된다.

export interface CalBlock {
  label: string; // 시간표 블록 라벨
  day: number; // 0=월 … 6=일
  start: number; // 시작 시각(시). 14.0 ~ 21.0, 0.5 단위 허용
  duration: number; // 길이(시간)
  tone: 0 | 1; // 색 농도(약/강)
  now?: boolean; // 진행 중(=solid accent) 강조
}

export interface ScheduleItem {
  time: string; // "16:00"
  dur: string; // "1.5h"
  title: string; // "수채화 입문 · 화요반"
  place: string; // "A스튜디오 · 8명"
  status: "live" | "soon"; // 진행 중 / 예정
}

export interface Tenant {
  id: string;
  name: string; // 학원명 (앱 상단 + 카드)
  owner: string; // "이수진 강사님"
  category: string; // 카드 보조 텍스트
  accent: string; // 브랜드 메인 색
  accentSoft: string; // 연한 배경
  accentInk: string; // 진한 대비 텍스트
  logo: string; // 인라인 SVG (rounded-rect 배경 = currentColor, 흰 글리프)
  date: string; // "6월 16일 (월)"
  classCount: number; // 오늘 수업 수
  attendCount: number; // 출석 예정 인원
  blocks: CalBlock[];
  schedule: ScheduleItem[];
}

// ── 학원별 로고 마크 (40×40, 배경은 currentColor → accent로 칠해짐) ──────────
const logoBallet = `<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect width="40" height="40" rx="11" fill="currentColor"/><circle cx="20" cy="12.4" r="3.5" fill="#fff"/><path d="M20 17.4c-1.2 5.9-4.9 7.4-8.4 8.7a1 1 0 0 0 .35 1.94c3.86-.2 6.45-1.55 8.05-3.6 1.6 2.05 4.19 3.4 8.05 3.6a1 1 0 0 0 .35-1.94c-3.5-1.3-7.2-2.8-8.4-8.7Z" fill="#fff"/></svg>`;
const logoPottery = `<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect width="40" height="40" rx="11" fill="currentColor"/><path d="M11.4 18h17.2l-1.7 7.4a4 4 0 0 1-3.9 3.1h-6a4 4 0 0 1-3.9-3.1L11.4 18Z" fill="#fff"/><ellipse cx="20" cy="18" rx="8.6" ry="2.5" fill="#fff" opacity=".55"/></svg>`;
const logoMusic = `<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect width="40" height="40" rx="11" fill="currentColor"/><path d="M26 11.6l-9.2 2.25a1.4 1.4 0 0 0-1.05 1.36v9.04a3.7 3.7 0 1 0 1.9 3.23V18.4l7.5-1.83v4.04a3.7 3.7 0 1 0 1.9 3.23V13a1.4 1.4 0 0 0-1.95-1.4Z" fill="#fff"/></svg>`;
const logoDrawing = `<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><rect width="40" height="40" rx="11" fill="currentColor"/><path d="M27.5 11.8c-9.2 0-15.3 5.2-15.3 12.2 0 1.1.13 2.06.4 2.96 1.7-5 5.8-8.5 11.9-10.06-4.1 2.7-7.55 6.2-9.4 11 1 .2 2.06.3 3.2.3 8.2 0 12.3-6.1 12.3-13.2 0-1.3-.3-2.5-3.1-3.2Z" fill="#fff"/></svg>`;

export const tenants: Tenant[] = [
  {
    id: "ballet",
    name: "모먼트 발레",
    owner: "김서연 원장님",
    category: "성인 발레 · 바디컨디셔닝",
    accent: "#e11d48",
    accentSoft: "#ffe4e8",
    accentInk: "#5a0c20",
    logo: logoBallet,
    date: "6월 16일 (월)",
    classCount: 3,
    attendCount: 27,
    blocks: [
      { label: "바 핏", day: 0, start: 14, duration: 1, tone: 0, now: true },
      { label: "발레 입문", day: 0, start: 16, duration: 1.5, tone: 1 },
      { label: "발레 중급", day: 0, start: 20, duration: 1, tone: 0 },
      { label: "포인트", day: 2, start: 19, duration: 1, tone: 1 },
      { label: "스트레칭", day: 4, start: 17.5, duration: 1, tone: 0 },
      { label: "성인 발레", day: 5, start: 15, duration: 1.5, tone: 1 },
    ],
    schedule: [
      {
        time: "14:00",
        dur: "1h",
        title: "바 핏 · 입문반",
        place: "A룸 · 9명",
        status: "live",
      },
      {
        time: "16:00",
        dur: "1.5h",
        title: "성인 발레 입문",
        place: "A룸 · 12명",
        status: "soon",
      },
      {
        time: "20:00",
        dur: "1h",
        title: "발레 중급",
        place: "B룸 · 6명",
        status: "soon",
      },
    ],
  },
  {
    id: "pottery",
    name: "클레이 도예공방",
    owner: "박도윤 원장님",
    category: "물레 · 핸드빌딩",
    accent: "#c2410c",
    accentSoft: "#ffe9d7",
    accentInk: "#4a1c08",
    logo: logoPottery,
    date: "6월 16일 (월)",
    classCount: 4,
    attendCount: 18,
    blocks: [
      {
        label: "물레 입문",
        day: 0,
        start: 14.5,
        duration: 2,
        tone: 1,
        now: true,
      },
      { label: "핸드빌딩", day: 0, start: 18, duration: 1.5, tone: 0 },
      { label: "유약", day: 2, start: 16, duration: 1, tone: 0 },
      { label: "물레 심화", day: 3, start: 19, duration: 2, tone: 1 },
      { label: "초벌 정리", day: 5, start: 14, duration: 1, tone: 0 },
      { label: "원데이", day: 6, start: 15.5, duration: 2, tone: 1 },
    ],
    schedule: [
      {
        time: "14:30",
        dur: "2h",
        title: "물레 입문 · 월요반",
        place: "작업실 1 · 6명",
        status: "live",
      },
      {
        time: "18:00",
        dur: "1.5h",
        title: "핸드빌딩 클래스",
        place: "작업실 2 · 7명",
        status: "soon",
      },
      {
        time: "20:00",
        dur: "1h",
        title: "유약 마무리",
        place: "가마실 · 5명",
        status: "soon",
      },
    ],
  },
  {
    id: "music",
    name: "블루노트 뮤직",
    owner: "이수진 강사님",
    category: "재즈 피아노 · 우쿨렐레",
    accent: "#4f46e5",
    accentSoft: "#e3e2fd",
    accentInk: "#211c5e",
    logo: logoMusic,
    date: "6월 16일 (월)",
    classCount: 3,
    attendCount: 24,
    blocks: [
      { label: "코드 이론", day: 0, start: 14, duration: 1, tone: 0 },
      {
        label: "재즈피아노",
        day: 0,
        start: 16,
        duration: 1.5,
        tone: 1,
        now: true,
      },
      { label: "우쿨 토요", day: 0, start: 18, duration: 1, tone: 0 },
      { label: "재즈 중급", day: 0, start: 20, duration: 1, tone: 1 },
      { label: "보컬", day: 2, start: 19, duration: 1, tone: 0 },
      { label: "앙상블", day: 4, start: 17, duration: 2, tone: 1 },
    ],
    schedule: [
      {
        time: "16:00",
        dur: "1.5h",
        title: "재즈 피아노 · 중급",
        place: "A스튜디오 · 8명",
        status: "live",
      },
      {
        time: "18:00",
        dur: "1h",
        title: "우쿨렐레 · 토요반",
        place: "B스튜디오 · 6명",
        status: "soon",
      },
      {
        time: "20:00",
        dur: "1h",
        title: "재즈 피아노 · 심화",
        place: "A스튜디오 · 5명",
        status: "soon",
      },
    ],
  },
  {
    id: "drawing",
    name: "온실 드로잉",
    owner: "한지우 강사님",
    category: "수채화 · 라인 드로잉",
    accent: "#0d9488",
    accentSoft: "#d2f5ef",
    accentInk: "#053b35",
    logo: logoDrawing,
    date: "6월 16일 (월)",
    classCount: 3,
    attendCount: 21,
    blocks: [
      {
        label: "수채 입문",
        day: 0,
        start: 15,
        duration: 1.5,
        tone: 1,
        now: true,
      },
      { label: "펜 드로잉", day: 0, start: 18, duration: 1, tone: 0 },
      { label: "인물", day: 0, start: 20, duration: 1.5, tone: 1 },
      { label: "보태니컬", day: 2, start: 16, duration: 2, tone: 0 },
      { label: "수채 심화", day: 3, start: 19, duration: 1, tone: 1 },
      { label: "원데이", day: 5, start: 14, duration: 2, tone: 0 },
    ],
    schedule: [
      {
        time: "15:00",
        dur: "1.5h",
        title: "수채화 입문 · 월요반",
        place: "1관 · 10명",
        status: "live",
      },
      {
        time: "18:00",
        dur: "1h",
        title: "펜 드로잉 클래스",
        place: "2관 · 7명",
        status: "soon",
      },
      {
        time: "20:00",
        dur: "1.5h",
        title: "인물 드로잉 · 심화",
        place: "1관 · 4명",
        status: "soon",
      },
    ],
  },
];
