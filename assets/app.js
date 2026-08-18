(function () {
  "use strict";

  const data = window.ResumeData;

  if (!data) {
    return;
  }

  const copy = {
    ko: {
      documentTitle: "심은하 | Web Resume",
      description: "Physical AI와 로봇 시스템을 연구하는 심은하의 웹 이력서입니다.",
      skip: "본문으로 바로가기",
      navLabel: "주요 섹션",
      languageLabel: "언어 선택",
      print: "인쇄 · PDF",
      eyebrow: "WEB RESUME · 2026",
      current: "CURRENT",
      phone: "PHONE",
      profileAlt: "심은하 프로필 사진",
      nav: {
        education: "Education",
        research: "Research",
        career: "Career",
        awards: "Awards",
        skills: "Skills",
      },
      sections: {
        education: ["Education", "고등학교부터 석사까지의 학업 이력"],
        research: ["Research Experience", "학부연구생 및 석사 연구 경험"],
        career: ["Career", "산업 연구 및 자동화 업무"],
        awards: ["Awards & Presentations", "수상 및 학술 발표"],
        skills: ["Skills", "연구와 프로젝트에서 활용한 기술"],
        languages: ["Languages", "어학 성적"],
      },
      projectLabel: "PROJECTS",
      topicLabel: "주제",
      viewPoster: "포스터 보기",
      posterKicker: "AWARD POSTER",
      closePoster: "포스터 닫기",
      footer: "© 2026 심은하. 마지막 업데이트: 2026년 8월",
      contact: "Contact",
    },
    en: {
      documentTitle: "Eunha Sim | Web Resume",
      description: "Web resume of Eunha Sim, a Physical AI and robotics researcher.",
      skip: "Skip to main content",
      navLabel: "Primary navigation",
      languageLabel: "Select language",
      print: "Print · PDF",
      eyebrow: "WEB RESUME · 2026",
      current: "CURRENT",
      phone: "PHONE",
      profileAlt: "Profile photo of Eunha Sim",
      nav: {
        education: "Education",
        research: "Research",
        career: "Career",
        awards: "Awards",
        skills: "Skills",
      },
      sections: {
        education: ["Education", "Academic history from high school through master's degree"],
        research: ["Research Experience", "Undergraduate and graduate research appointments"],
        career: ["Career", "Industrial research and automation"],
        awards: ["Awards & Presentations", "Awards and academic presentations"],
        skills: ["Skills", "Technologies used in research and engineering projects"],
        languages: ["Languages", "English proficiency scores"],
      },
      projectLabel: "PROJECTS",
      topicLabel: "TOPIC",
      viewPoster: "View poster",
      posterKicker: "AWARD POSTER",
      closePoster: "Close poster",
      footer: "© 2026 Eunha Sim. Last updated: August 2026",
      contact: "Contact",
    },
  };

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const localized = (value, language) => {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return value[language] ?? value.ko ?? "";
    }
    return value ?? "";
  };

  const byDate = (items) => [...items].sort((a, b) => a.sortKey.localeCompare(b.sortKey));
  const byDateDescending = (items) => [...items].sort((a, b) => b.sortKey.localeCompare(a.sortKey));

  const renderMeta = (items, language) => {
    if (!items?.length) return "";

    return `
      <ul class="meta-list">
        ${items.map((item) => `<li>${escapeHtml(localized(item, language))}</li>`).join("")}
      </ul>
    `;
  };

  const renderEducation = (language) => {
    const container = document.querySelector("#education-list");
    container.innerHTML = byDateDescending(data.education)
      .map(
        (item) => `
          <article class="timeline-item">
            <time>${escapeHtml(item.period)}</time>
            <div class="timeline-marker" aria-hidden="true"></div>
            <div class="timeline-content">
              <h3>${escapeHtml(localized(item.institution, language))}</h3>
              <p class="item-title">${escapeHtml(localized(item.title, language))}</p>
              ${renderMeta(item.meta, language)}
              ${
                item.thesis
                  ? `<div class="thesis-block">
                      <span>${escapeHtml(localized(item.thesis.label, language))}</span>
                      <p>${escapeHtml(localized(item.thesis.text, language))}</p>
                    </div>`
                  : ""
              }
            </div>
          </article>
        `,
      )
      .join("");
  };

  const renderExperience = (selector, items, language) => {
    const container = document.querySelector(selector);
    container.innerHTML = byDateDescending(items)
      .map(
        (item) => `
          <article class="timeline-item">
            <time>${escapeHtml(localized(item.period, language))}</time>
            <div class="timeline-marker" aria-hidden="true"></div>
            <div class="timeline-content">
              <h3>${escapeHtml(localized(item.institution, language))}</h3>
              <p class="item-title">${escapeHtml(localized(item.title, language))}</p>
              <div class="project-list" aria-label="${escapeHtml(copy[language].projectLabel)}">
                ${item.projects
                  .map(
                    (project) => `
                      <p><span aria-hidden="true">↳</span>${escapeHtml(localized(project, language))}</p>
                    `,
                  )
                  .join("")}
              </div>
              ${
                item.links?.length
                  ? `<div class="experience-links">
                      ${item.links
                        .map(
                          (link) => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(localized(link.title, language))}">${escapeHtml(localized(link.label, language))}<span aria-hidden="true">↗</span></a>`,
                        )
                        .join("")}
                    </div>`
                  : ""
              }
            </div>
          </article>
        `,
      )
      .join("");
  };

  const renderAwards = (language) => {
    const container = document.querySelector("#awards-list");
    container.innerHTML = byDate(data.awards)
      .map(
        (item, index) => `
          <article class="compact-item">
            <time>${escapeHtml(item.date)}</time>
            <span class="type-chip">${escapeHtml(localized(item.type, language))}</span>
            <div class="award-content">
              <h3>${escapeHtml(localized(item.title, language))}</h3>
              <p>${escapeHtml(localized(item.institution, language))}</p>
              ${
                item.topic
                  ? `<p class="award-topic"><span>${escapeHtml(copy[language].topicLabel)}</span>${escapeHtml(localized(item.topic, language))}</p>`
                  : ""
              }
              ${
                item.poster
                  ? `<button class="poster-action" type="button" data-award-index="${index}" aria-label="${escapeHtml(`${localized(item.title, language)}. ${copy[language].viewPoster}`)}">${escapeHtml(copy[language].viewPoster)} <span aria-hidden="true">↗</span></button>`
                  : ""
              }
            </div>
          </article>
        `,
      )
      .join("");

    container.querySelectorAll(".poster-action").forEach((button) => {
      button.addEventListener("click", () => {
        openPoster(Number(button.dataset.awardIndex), language);
      });
    });
  };

  const openPoster = (index, language) => {
    const item = byDate(data.awards)[index];
    const dialog = document.querySelector("#poster-dialog");
    const image = document.querySelector("#poster-dialog-image");

    if (!item?.poster || !dialog || !image) return;

    setText("#poster-dialog-kicker", copy[language].posterKicker);
    setText("#poster-dialog-title", localized(item.title, language));
    setText("#poster-dialog-topic", localized(item.topic, language));
    document.querySelector("#poster-close").setAttribute("aria-label", copy[language].closePoster);
    image.src = item.poster.src;
    image.alt = localized(item.poster.alt, language);
    document.body.classList.add("modal-open");
    dialog.showModal();
  };

  const renderSkills = (language) => {
    const container = document.querySelector("#skills-list");
    container.innerHTML = data.skills
      .map(
        (group) => `
          <article class="skill-group">
            <h3>${escapeHtml(localized(group.category, language))}</h3>
            <div class="tag-list">
              ${group.items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
            </div>
          </article>
        `,
      )
      .join("");
  };

  const renderCredentials = (language) => {
    const container = document.querySelector("#credentials-list");
    container.innerHTML = data.credentials
      .map(
        (item) => `
          <article class="credential-card">
            <p class="credential-type">${escapeHtml(localized(item.type, language))}</p>
            <h3>${escapeHtml(localized(item.name, language))}</h3>
            <p class="credential-score">${escapeHtml(localized(item.score, language))}</p>
            <time>${escapeHtml(item.date)}</time>
          </article>
        `,
      )
      .join("");
  };

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };

  const setLanguage = (language, { updateUrl = true } = {}) => {
    const selected = language === "en" ? "en" : "ko";
    const labels = copy[selected];

    document.documentElement.lang = selected;
    document.title = labels.documentTitle;
    document.querySelector('meta[name="description"]').setAttribute("content", labels.description);
    document.querySelector('meta[property="og:title"]').setAttribute("content", labels.documentTitle);

    document.querySelector(".skip-link").textContent = labels.skip;
    document.querySelector(".primary-nav").setAttribute("aria-label", labels.navLabel);
    document.querySelector(".language-switch").setAttribute("aria-label", labels.languageLabel);

    setText("#hero-eyebrow", labels.eyebrow);
    setText("#hero-name", localized(data.profile.name, selected));
    setText("#hero-role", localized(data.profile.role, selected));
    setText("#hero-summary", localized(data.profile.summary, selected));
    document.querySelector("#profile-photo").setAttribute("alt", labels.profileAlt);
    setText("#current-label", labels.current);
    setText("#current-value", localized(data.profile.current, selected));
    setText("#phone-label", labels.phone);
    setText("#print-label", labels.print);
    setText("#footer-copy", labels.footer);
    setText("#footer-contact", labels.contact);

    Object.entries(labels.nav).forEach(([key, value]) => {
      setText(`[data-nav="${key}"]`, value);
    });

    Object.entries(labels.sections).forEach(([key, values]) => {
      setText(`#${key}-title`, values[0]);
      setText(`#${key}-subtitle`, values[1]);
    });

    renderEducation(selected);
    renderExperience("#research-list", data.research, selected);
    renderExperience("#career-list", data.career, selected);
    renderAwards(selected);
    renderSkills(selected);
    renderCredentials(selected);

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

  document.querySelector("#print-button").addEventListener("click", () => window.print());

  const posterDialog = document.querySelector("#poster-dialog");
  document.querySelector("#poster-close").addEventListener("click", () => posterDialog.close());
  posterDialog.addEventListener("click", (event) => {
    if (event.target === posterDialog) posterDialog.close();
  });
  posterDialog.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    document.querySelector("#poster-dialog-image").removeAttribute("src");
  });

  const profilePhoto = document.querySelector("#profile-photo");
  if (window.ResumeProfilePhoto) {
    profilePhoto.src = window.ResumeProfilePhoto;
  } else {
    profilePhoto.closest(".profile-photo-frame").hidden = true;
  }

  setLanguage(initialLanguage, { updateUrl: Boolean(queryLanguage) });
})();
