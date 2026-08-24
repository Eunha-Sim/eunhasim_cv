# 심은하 Web Resume

개인 자료와 분리된 정적 웹 이력서입니다. 별도 빌드 과정 없이 실행할 수 있습니다.

## 로컬 미리보기

`website` 폴더에서 다음 명령을 실행합니다.

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 엽니다.

## 콘텐츠 수정

- 이력 내용과 한·영 문구: `assets/resume-data.js`
- 프로필 사진: `assets/profile-photo.js` (이력서 DOCX의 증명사진을 웹용으로 축소한 데이터)
- 수상 포스터: `assets/posters/`
- 화면 문구와 동작: `assets/app.js`
- 디자인과 인쇄 레이아웃: `assets/styles.css`

## 공개 전 확인

- 이 폴더의 내용만 별도 공개 저장소에 업로드합니다.
- 상위 폴더의 지원서, 면허증, 연락처·주소가 포함된 원본 문서는 업로드하지 않습니다.
- KAIST 입학 월, 서울대 연구 시작일, RIST 부서명, 학술대회 발표일을 공식 이력과 대조합니다.
- 포스터가 포함된 원본 PDF 전체는 개인정보 때문에 공개하지 않습니다.
