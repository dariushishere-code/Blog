/* ============================================
   Portfolio — interactions & preloader
   ============================================ */

(function () {
  "use strict";

  // ===== Viking Rune Background Generator =====
  const runes = [
    "ᚠ",
    "ᚢ",
    "ᚦ",
    "ᚨ",
    "ᚱ",
    "ᚲ",
    "ᚷ",
    "ᚹ",
    "ᚺ",
    "ᚾ",
    "ᛁ",
    "ᛃ",
    "ᛇ",
    "ᛈ",
    "ᛉ",
    "ᛊ",
    "ᛏ",
    "ᛒ",
    "ᛖ",
    "ᛗ",
    "ᛚ",
    "ᛜ",
    "ᛞ",
    "ᛟ",
  ];

  const container = document.getElementById("vikingBg");
  const COUNT = 50;

  function createRune() {
    if (!container) return;
    const el = document.createElement("div");
    el.className =
      "rune" +
      (Math.random() > 0.65 ? " dim" : "") +
      (Math.random() > 0.5 ? " drift" : "");
    el.textContent = runes[Math.floor(Math.random() * runes.length)];
    el.style.left = Math.random() * 100 + "vw";
    const size = 1.6 + Math.random() * 2.4;
    el.style.fontSize = size + "rem";
    const duration = 22 + Math.random() * 28;
    const delay = Math.random() * -duration;
    el.style.animationDuration = duration + "s";
    el.style.animationDelay = delay + "s";
    el.style.animationTimingFunction = "cubic-bezier(0.25, 0.1, 0.25, 1)";
    container.appendChild(el);
  }

  if (container) {
    for (let i = 0; i < COUNT; i++) createRune();
  }

  // ===== Left fixed glyph rail (glitch on scroll) =====
  const rail = document.getElementById("glyphRail");
  if (rail) {
    const RAIL_COUNT = 14;
    for (let i = 0; i < RAIL_COUNT; i++) {
      const span = document.createElement("span");
      span.className = "rail-rune";
      span.textContent = runes[Math.floor(Math.random() * runes.length)];
      rail.appendChild(span);
    }

    let lastScrollY = 0;
    window.addEventListener(
      "scroll",
      () => {
        const y = window.scrollY || window.pageYOffset;
        if (Math.abs(y - lastScrollY) > 18) {
          const children = Array.from(rail.querySelectorAll(".rail-rune"));
          const swaps = 3 + Math.floor(Math.random() * 4);
          for (let i = 0; i < swaps; i++) {
            const idx = Math.floor(Math.random() * children.length);
            const el = children[idx];
            el.classList.add("is-glitch");
            el.textContent = runes[Math.floor(Math.random() * runes.length)];
            setTimeout(
              () => el.classList.remove("is-glitch"),
              120 + Math.random() * 180,
            );
          }
          lastScrollY = y;
        }
      },
      { passive: true },
    );
  }

  // Theme preference listener (unchanged)
  try {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        // setTheme exists in your project
        if (typeof setTheme === "function") {
          setTheme(e.matches ? "dark" : "light");
        }
      }
    });
  } catch (_) {}

  // ---------- Year in footer ----------
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---------- Preloader (hardened for mobile) ----------
  const preloader = document.getElementById("preloader");
  const countEl = document.getElementById("preloader-count");
  const progressEl = document.getElementById("preloader-progress");

  let preloaderFinished = false;

  function finishPreloader() {
    if (preloaderFinished) return;
    preloaderFinished = true;

    if (preloader) {
      preloader.classList.add("is-done");
      setTimeout(() => {
        preloader.setAttribute("aria-hidden", "true");
      }, 700);
    }
    document.body.classList.add("is-ready");
  }

  function runPreloader() {
    // Always finish after 2.2 s max – never stuck on phones
    const hardTimeout = setTimeout(finishPreloader, 2200);

    if (!preloader || !countEl || !progressEl) {
      clearTimeout(hardTimeout);
      finishPreloader();
      return;
    }

    let progress = 0;
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      if (preloaderFinished) return;

      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      progress = Math.round(eased * 100);

      countEl.textContent = String(progress).padStart(2, "0");
      progressEl.style.width = progress + "%";

      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        clearTimeout(hardTimeout);
        setTimeout(finishPreloader, 180);
      }
    }

    requestAnimationFrame(tick);
  }

  // Multiple safe triggers so mobile never hangs
  function startPreloaderSafely() {
    if (preloaderFinished) return;
    runPreloader();
  }

  if (document.fonts && document.fonts.ready) {
    Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 600))])
      .then(startPreloaderSafely)
      .catch(startPreloaderSafely);
  } else {
    startPreloaderSafely();
  }

  // Extra safety nets
  window.addEventListener("load", startPreloaderSafely);
  document.addEventListener("DOMContentLoaded", startPreloaderSafely);
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    startPreloaderSafely();
  }
  // Final absolute fallback
  setTimeout(startPreloaderSafely, 300);

  // ---------- Mobile nav ----------
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  // ---------- Header scroll state ----------
  const header = document.getElementById("header");
  function onScroll() {
    const y = window.scrollY || window.pageYOffset;
    if (header) {
      header.classList.toggle("is-scrolled", y > 24);
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- Scroll reveal ----------
  const revealEls = document.querySelectorAll(
    ".section-header, .project, .about-left, .about-right, .contact .section-label, .contact-title, .contact-sub, .contact-actions, .contact-links",
  );
  revealEls.forEach((el) => el.classList.add("reveal"));

  const projectList = document.querySelector(".project-list");
  if (projectList) {
    projectList.classList.add("reveal-stagger");
    projectList
      .querySelectorAll(".project")
      .forEach((p) => p.classList.remove("reveal"));
  }

  const skillsList = document.querySelector(".skills-list");
  if (skillsList) {
    skillsList.classList.add("reveal-stagger");
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
    observer.observe(el);
  });

  // Hero entrance after preloader
  const heroTitle = document.querySelector(".hero-title");
  const heroSub = document.querySelector(".hero-sub");
  const heroCta = document.querySelector(".hero-cta");
  const heroLabel = document.querySelector(".hero-label");

  [heroLabel, heroTitle, heroSub, heroCta].forEach((el, i) => {
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = `opacity 0.55s cubic-bezier(0.25,0,0,1) ${0.15 + i * 0.08}s, transform 0.55s cubic-bezier(0.25,0,0,1) ${0.15 + i * 0.08}s`;
  });

  const bodyObserver = new MutationObserver(() => {
    if (document.body.classList.contains("is-ready")) {
      [heroLabel, heroTitle, heroSub, heroCta].forEach((el) => {
        if (!el) return;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
      bodyObserver.disconnect();
    }
  });
  bodyObserver.observe(document.body, {
    attributes: true,
    attributeFilter: ["class"],
  });
})();
