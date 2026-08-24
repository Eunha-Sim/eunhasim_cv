(function () {
  "use strict";

  // 페이지가 <title>·<meta name="description">에 data-ko/data-en을 두지 않은 경우에만
  // 사용하는 예비 문구입니다. (하역기 페이지가 이 경로를 사용합니다.)
  const fallback = {
    ko: {
      title: "대형원료 하역기 자동화 | 심은하",
      description: "대형원료 하역기 자동화 물리 시뮬레이션과 관련 특허 출원 정보입니다.",
      languageLabel: "언어 선택",
      iframeTitle: "대형원료 하역기 자동화 인터랙티브 시뮬레이션",
    },
    en: {
      title: "Large-Scale Ship Unloader Automation | Eunha Sim",
      description: "Physics simulation and related patent application for large-scale ship unloader automation.",
      languageLabel: "Select language",
      iframeTitle: "Interactive simulation of large-scale ship unloader automation",
    },
  };

  const titleElement = document.querySelector("title");
  const descriptionElement = document.querySelector('meta[name="description"]');

  const setLanguage = (language, { updateUrl = true } = {}) => {
    const selected = language === "en" ? "en" : "ko";
    const copy = fallback[selected];

    document.documentElement.lang = selected;

    document.title = titleElement?.dataset[selected] ?? copy.title;
    descriptionElement?.setAttribute(
      "content",
      descriptionElement.dataset[selected] ?? copy.description,
    );

    document.querySelector("#project-language-switch")?.setAttribute("aria-label", copy.languageLabel);
    document.querySelector("#ship-unloader-simulator")?.setAttribute("title", copy.iframeTitle);

    const backLink = document.querySelector("#resume-back-link");
    if (backLink) {
      backLink.href = `../index.html?lang=${selected}#research`;
    }

    // iframe·링크·이미지의 title 속성 번역
    document.querySelectorAll("[data-title-ko][data-title-en]").forEach((element) => {
      element.setAttribute("title", selected === "en" ? element.dataset.titleEn : element.dataset.titleKo);
    });

    // <head>의 data-ko/data-en이 textContent로 덮이지 않도록 body로 범위를 제한합니다.
    document.body.querySelectorAll("[data-ko][data-en]").forEach((element) => {
      element.textContent = element.dataset[selected];
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === selected));
    });

    localStorage.setItem("resume-language", selected);

    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", selected);
      window.history.replaceState({}, "", url);
    }
  };

  const queryLanguage = new URL(window.location.href).searchParams.get("lang");
  const storedLanguage = localStorage.getItem("resume-language");
  const initialLanguage = ["ko", "en"].includes(queryLanguage)
    ? queryLanguage
    : ["ko", "en"].includes(storedLanguage)
      ? storedLanguage
      : "ko";

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  setLanguage(initialLanguage, { updateUrl: Boolean(queryLanguage) });
})();
