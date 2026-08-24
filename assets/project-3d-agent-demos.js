(function () {
  "use strict";

  // 배포 주소가 바뀌면 이 두 상수만 수정하면 됩니다.
  // 각 URL은 iframe의 src와 '새 창에서 보기' 링크 양쪽에 함께 적용됩니다.
  const DEMO_ONE_URL = "https://gorgeous-quokka-4c72fe.netlify.app";
  const DEMO_TWO_URL = "https://melodic-monstera-00f1f3.netlify.app";

  const demos = [
    { url: DEMO_ONE_URL, frame: "#demo-one-frame", link: "#demo-one-link" },
    { url: DEMO_TWO_URL, frame: "#demo-two-frame", link: "#demo-two-link" },
  ];

  demos.forEach(({ url, frame, link }) => {
    const iframe = document.querySelector(frame);
    const anchor = document.querySelector(link);

    if (iframe) {
      iframe.src = url;
    }

    if (anchor) {
      anchor.href = url;
    }
  });
})();
