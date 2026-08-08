/* ============================================
   Portfolio — interactions (performance-tuned)
   ============================================ */

(function () {
  "use strict";

  // Prefer reduced motion / save data
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const saveData =
    (navigator.connection && navigator.connection.saveData) || false;
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  // ===== Viking Rune Background (lighter on mobile) =====
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
  // Fewer runes on mobile / save-data for faster paint
  const COUNT = prefersReducedMotion || saveData ? 0 : isMobile ? 18 : 36;

  function createRune() {
    if (!container) return;
    const el = document.createElement("div");
    el.className =
      "rune" +
      (Math.random() > 0.65 ? " dim" : "") +
      (Math.random() > 0.5 ? " drift" : "");
    el.textContent = runes[Math.floor(Math.random() * runes.length)];
    el.style.left = Math.random() * 100 + "vw";
    const size = 1.4 + Math.random() * 2;
    el.style.fontSize = size + "rem";
    const duration = 24 + Math.random() * 26;
    const delay = Math.random() * -duration;
    el.style.animationDuration = duration + "s";
    el.style.animationDelay = delay + "s";
    container.appendChild(el);
  }

  // Defer rune creation until after first paint
  if (container && COUNT > 0) {
    const spawn = () => {
      for (let i = 0; i < COUNT; i++) createRune();
    };
    if ("requestIdleCallback" in window) {
      requestIdleCallback(spawn, { timeout: 1200 });
    } else {
      setTimeout(spawn, 200);
    }
  }

  // ===== Left fixed glyph rail (skip on mobile / reduced motion) =====
  const rail = document.getElementById("glyphRail");
  if (rail && !isMobile && !prefersReducedMotion) {
    const RAIL_COUNT = 12;
    for (let i = 0; i < RAIL_COUNT; i++) {
      const span = document.createElement("span");
      span.className = "rail-rune";
      span.textContent = runes[Math.floor(Math.random() * runes.length)];
      rail.appendChild(span);
    }

    let lastScrollY = 0;
    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = window.scrollY || window.pageYOffset;
          if (Math.abs(y - lastScrollY) > 24) {
            const children = Array.from(rail.querySelectorAll(".rail-rune"));
            const swaps = 2 + Math.floor(Math.random() * 3);
            for (let i = 0; i < swaps; i++) {
              const idx = Math.floor(Math.random() * children.length);
              const el = children[idx];
              el.classList.add("is-glitch");
              el.textContent = runes[Math.floor(Math.random() * runes.length)];
              setTimeout(
                () => el.classList.remove("is-glitch"),
                100 + Math.random() * 140,
              );
            }
            lastScrollY = y;
          }
          ticking = false;
        });
      },
      { passive: true },
    );
  }

  // ---------- Year in footer ----------
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Preloader (shorter, non-blocking) ----------
  const preloader = document.getElementById("preloader");
  const countEl = document.getElementById("preloader-count");
  const progressEl = document.getElementById("preloader-progress");
  let preloaderFinished = false;

  function finishPreloader() {
    if (preloaderFinished) return;
    preloaderFinished = true;
    if (preloader) {
      preloader.classList.add("is-done");
      setTimeout(() => preloader.setAttribute("aria-hidden", "true"), 500);
    }
    document.body.classList.add("is-ready");
  }

  function runPreloader() {
    // Hard max 1.4s so first content paints sooner
    const hardTimeout = setTimeout(finishPreloader, 1400);

    if (!preloader || !countEl || !progressEl) {
      clearTimeout(hardTimeout);
      finishPreloader();
      return;
    }

    const duration = 900;
    const start = performance.now();

    function tick(now) {
      if (preloaderFinished) return;
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const progress = Math.round(eased * 100);
      countEl.textContent = String(progress).padStart(2, "0");
      progressEl.style.width = progress + "%";
      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        clearTimeout(hardTimeout);
        setTimeout(finishPreloader, 120);
      }
    }
    requestAnimationFrame(tick);
  }

  function startPreloaderSafely() {
    if (preloaderFinished) return;
    runPreloader();
  }

  // Don't wait long for fonts — paint fast
  if (document.fonts && document.fonts.ready) {
    Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 280))])
      .then(startPreloaderSafely)
      .catch(startPreloaderSafely);
  } else {
    startPreloaderSafely();
  }

  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    startPreloaderSafely();
  } else {
    document.addEventListener("DOMContentLoaded", startPreloaderSafely, {
      once: true,
    });
  }
  setTimeout(startPreloaderSafely, 200);

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

  // ---------- Header scroll state (rAF throttled) ----------
  const header = document.getElementById("header");
  let scrollTicking = false;
  function onScroll() {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY || window.pageYOffset;
      if (header) header.classList.toggle("is-scrolled", y > 24);
      scrollTicking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- Scroll reveal (single observer) ----------
  const revealEls = document.querySelectorAll(
    ".section-header, .project, .about-left, .about-right, .contact .section-label, .contact-title, .contact-sub, .contact-actions, .contact-links, .gallery-intro, .gallery-cta",
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
  if (skillsList) skillsList.classList.add("reveal-stagger");

  const galleryGrid = document.querySelector(".gallery-grid");
  if (galleryGrid) {
    galleryGrid.classList.add("reveal-stagger");
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    );
    document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything
    document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
      el.classList.add("is-visible");
    });
  }

  // Hero entrance after preloader
  const heroBits = [
    document.querySelector(".hero-label"),
    document.querySelector(".hero-title"),
    document.querySelector(".hero-sub"),
    document.querySelector(".hero-cta"),
  ];
  heroBits.forEach((el, i) => {
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(14px)";
    el.style.transition = `opacity 0.45s cubic-bezier(0.25,0,0,1) ${0.1 + i * 0.06}s, transform 0.45s cubic-bezier(0.25,0,0,1) ${0.1 + i * 0.06}s`;
  });

  const bodyObserver = new MutationObserver(() => {
    if (document.body.classList.contains("is-ready")) {
      heroBits.forEach((el) => {
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

  // ---------- Smooth page transitions ----------
  const transitionEl = document.getElementById("page-transition");
  function navigateWithTransition(href) {
    if (!transitionEl || prefersReducedMotion) {
      window.location.href = href;
      return;
    }
    transitionEl.classList.add("is-active");
    transitionEl.setAttribute("aria-hidden", "false");
    setTimeout(() => {
      window.location.href = href;
    }, 320);
  }

  document.querySelectorAll("a.page-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:")) return;
      e.preventDefault();
      navigateWithTransition(href);
    });
  });

  if (transitionEl) transitionEl.classList.remove("is-active");
})();
