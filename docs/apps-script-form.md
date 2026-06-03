# 얼리어답터 신청 폼 백엔드 (Google Sheet + Apps Script)

신청 데이터를 **내 Google Sheet**에 직접 쌓고, 신청이 들어오면 메일로도 알림을 받는 설정.
제3자 서비스를 거치지 않아 개인정보(이름·연락처)가 내 구글 계정 안에만 저장됩니다.

폼은 `Content-Type: text/plain`으로 전송해 CORS preflight를 피하고, Apps Script 웹 앱의
응답을 정상적으로 읽어 성공/실패를 분기합니다.

---

## 1. Google Sheet 만들기

1. [sheets.new](https://sheets.new) 로 새 스프레드시트 생성 (예: `Dionomy 얼리어답터 신청`)
2. 1행에 헤더를 넣어 둡니다(선택, 가독성용):
   `접수시각 | 이름 | 스튜디오 | 연락처 | 카테고리 | 기타카테고리 | 동의`

## 2. Apps Script 코드 붙여넣기

1. 시트 상단 메뉴 **확장 프로그램 → Apps Script**
2. 기본 `Code.gs` 내용을 아래로 전부 교체
3. `NOTIFY_EMAIL` 을 알림 받을 주소로 변경 (비워 두면 메일 알림 생략)

```javascript
// 알림 받을 이메일 (비워 두면 메일 발송 생략)
const NOTIFY_EMAIL = "you@example.com";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.studio || "",
      data.phone || "",
      data.category || "",
      data.categoryOther || "",
      data.consent ? "동의" : "",
    ]);

    if (NOTIFY_EMAIL) {
      const category =
        data.category === "기타" ? data.categoryOther : data.category;
      MailApp.sendEmail(
        NOTIFY_EMAIL,
        "[Dionomy] 새 얼리어답터 신청",
        [
          "이름: " + (data.name || ""),
          "스튜디오: " + (data.studio || ""),
          "연락처: " + (data.phone || ""),
          "카테고리: " + (category || ""),
        ].join("\n"),
      );
    }

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

// GET 으로 배포 상태 확인용
function doGet() {
  return json({ ok: true, msg: "dionomy form endpoint alive" });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
```

## 3. 웹 앱으로 배포

1. 우상단 **배포 → 새 배포**
2. 유형 선택(톱니바퀴) → **웹 앱**
3. 설정
   - 설명: 아무거나 (예: `form v1`)
   - **실행 계정: 나(본인)**
   - **액세스 권한: 모든 사용자(Anyone)** ← 중요. 로그인 없이 폼이 POST 할 수 있어야 함
4. **배포** → 최초 1회 권한 승인(본인 구글 계정, "고급 → 안전하지 않음으로 이동" 거쳐 허용)
5. 발급된 **웹 앱 URL**(`https://script.google.com/macros/s/.../exec`) 복사

> 코드를 수정하면 매번 **배포 → 배포 관리 → 편집(연필) → 버전: 새 버전 → 배포** 해야
> 반영됩니다. URL 은 그대로 유지됩니다.

## 4. 프로젝트에 연결

`.env` (없으면 `.env.example` 복사해서 생성):

```
PUBLIC_FORM_ENDPOINT=https://script.google.com/macros/s/.../exec
```

다시 빌드/배포하면 폼이 이 URL 로 전송합니다. 값이 비어 있으면 폼은 콘솔 스텁으로만
동작(데이터 미전송)하므로 로컬 개발 중에는 비워 둬도 됩니다.

## 5. 확인

- 배포된 사이트(또는 `npm run build && npm run preview`)에서 폼 제출
- Google Sheet 에 행이 추가되는지 + 알림 메일 수신 확인
- 같은 브라우저는 `localStorage`(`dionomy:applied`)로 중복 신청이 막히므로,
  재테스트 시 시크릿 창을 쓰거나 해당 키를 지우세요

## 트러블슈팅

- **시트에 안 쌓임**: 배포 액세스 권한이 "모든 사용자"인지, 코드 수정 후 "새 버전"으로
  재배포했는지 확인
- **브라우저 콘솔에 CORS/전송 실패**: 드물게 응답 읽기가 막히면, 폼 코드의 `fetch` 에
  `mode: "no-cors"` 를 추가하는 대안이 있습니다(이 경우 응답을 못 읽으니 항상 성공으로
  간주 — 데이터는 정상 저장됨)
