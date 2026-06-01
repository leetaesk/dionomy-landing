# dionomy 랜딩페이지

성인 취미 학원(악기·댄스·드로잉·베이킹 등)을 위한 **학원 앱 빌더 dionomy**의 B2B 랜딩페이지.
단일 목표는 학원 원장이 **"얼리어답터 신청" / "데모 보기"** CTA를 누르게 하는 것이며,
**"조용한 이탈(silent churn)"** 을 감정적 훅으로 삼습니다.

## 기술 스택

- **[Astro 5](https://astro.build)** — 정적 마케팅 페이지, 기본 zero-JS
- **[Tailwind CSS v4](https://tailwindcss.com)** — `@tailwindcss/vite` 플러그인 + CSS-first `@theme` 토큰
- **[Pretendard](https://github.com/orioncactus/pretendard)** — self-host(가변 폰트 · unicode-range 다이내믹 서브셋)
- 인터랙션은 프레임워크 없이 바닐라 `<script>`로 처리 (화이트라벨 테마 데모, 신청 폼)

## 개발

```bash
pnpm install
pnpm dev        # 개발 서버 (http://localhost:4321)
pnpm build      # 정적 빌드 → dist/
pnpm preview    # 빌드 결과 미리보기
```

정적 호스팅(Vercel/Netlify/Cloudflare Pages)에 `dist/`를 그대로 배포합니다.

## 구조

```
src/
├─ data/            # 섹션 카피·리스트 데이터 (수정은 대부분 여기서)
│  ├─ site.ts          사이트 메타/SEO
│  ├─ navigation.ts    내비·푸터·CTA
│  ├─ problem.ts       조용한 이탈 3스텝
│  ├─ solutions.ts     핵심 3솔루션 카피
│  ├─ care.ts          AI 케어 카드(이번 주 챙길 수강생)
│  ├─ themes.ts        화이트라벨 데모 프리셋
│  ├─ differentiation.ts  경쟁사 비교표
│  ├─ process.ts       도입 흐름
│  ├─ pricing.ts       요금/얼리어답터 배너
│  └─ categories.ts    신청 폼 카테고리 + 클로징 카피
├─ styles/global.css   디자인 토큰(@theme) · 베이스 · 유틸
├─ layouts/BaseLayout.astro   head/SEO/OG/JSON-LD · 폰트 · 스크롤 리빌
├─ components/
│  ├─ ui/              Button · Eyebrow · PhoneFrame · CheckList · SectionHeader
│  ├─ Nav · Hero · Problem
│  ├─ Solutions(→ SolutionHub · SolutionWhitelabel · SolutionAiCrm)
│  ├─ Differentiation · Process · Pricing · FinalCta · Footer
└─ pages/index.astro   단일 페이지 조립
```

## 디자인 토큰

2-tier 시맨틱 구조 — primitive 팔레트(`--color-primary-*`, `--color-ink-*`) →
시맨틱 역할(`brand` / `fg` / `bg` / `border` / `signal-*`). 컴포넌트는 시맨틱 토큰만 참조.
메인 브랜드 컬러는 iris-indigo **`#5b5bd6`** (primary-600).

## 남은 TODO

- [ ] **신청 폼 백엔드 연결** — 현재 `FinalCta.astro`에서 `console.log` 스텁 + 성공 토스트.
      `// TODO: 폼 백엔드(Formspree/Tally/자체 API) 연결` 지점 참고.
- [ ] **OG 이미지** — `public/og-image.png` (1200×630) 실제 제작. 현재 메타에 경로만 지정.
- [ ] **문의 이메일** — `src/data/site.ts`의 `email` placeholder 교체.
- [x] Pretendard self-host (다이내믹 서브셋 적용 완료).
