/* ============================================
   Portfolio — interactions (performance-tuned)
   + Proper Intersection Observer scroll animations
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

  // ===== Left fixed glyph rail =====
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

  // ---------- Preloader ----------
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

  // ---------- Header scroll state ----------
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

  // =====================================================
  // INTERSECTION OBSERVER — Scroll Animations (once only)
  // =====================================================
  function initScrollAnimations() {
    if (prefersReducedMotion) {
      document
        .querySelectorAll(".reveal, .reveal-stagger")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

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

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target); // fire ONLY once — never again
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    const staggerObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    );

    document.querySelectorAll(".reveal-stagger").forEach((el) => {
      staggerObserver.observe(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollAnimations);
  } else {
    initScrollAnimations();
  }

  // =====================================================
  // 3D HORIZONTAL GALLERY
  // Images load once and stay loaded.
  // Smooth 3D rotateY + scale based on distance from center.
  // =====================================================
  function init3DGallery() {
    const track = document.getElementById("gallery3dTrack");
    if (!track) return;

    const items = Array.from(track.querySelectorAll(".gallery-3d-item"));
    if (!items.length) return;

    // Mark images as permanently loaded so browser does not re-fetch
    items.forEach((item) => {
      const img = item.querySelector("img");
      if (img) {
        // Once the image has loaded, keep it in memory
        if (img.complete) {
          img.dataset.loaded = "true";
        } else {
          img.addEventListener(
            "load",
            () => {
              img.dataset.loaded = "true";
            },
            { once: true },
          );
        }
      }
    });

    let ticking = false;

    function update3D() {
      const trackRect = track.getBoundingClientRect();
      const centerX = trackRect.left + trackRect.width / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2;
        const distance = itemCenter - centerX;
        const maxDist = trackRect.width * 0.55;
        const progress = Math.max(-1, Math.min(1, distance / maxDist));

        // 3D transforms
        const rotateY = progress * -42; // degrees
        const scale = 1 - Math.abs(progress) * 0.18;
        const translateZ = -Math.abs(progress) * 80;
        const opacity = 1 - Math.abs(progress) * 0.45;

        item.style.transform = `translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
        item.style.opacity = String(Math.max(0.4, opacity));

        // Active state for caption + brightness
        if (Math.abs(progress) < 0.18) {
          item.classList.add("is-active");
        } else {
          item.classList.remove("is-active");
        }
      });

      ticking = false;
    }

    function onTrackScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update3D);
    }

    track.addEventListener("scroll", onTrackScroll, { passive: true });
    window.addEventListener("resize", onTrackScroll, { passive: true });

    // Initial paint
    requestAnimationFrame(update3D);

    // Optional: drag to scroll (desktop)
    let isDown = false;
    let startX;
    let scrollLeft;

    track.addEventListener("mousedown", (e) => {
      isDown = true;
      track.style.cursor = "grabbing";
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });

    track.addEventListener("mouseleave", () => {
      isDown = false;
      track.style.cursor = "grab";
    });

    track.addEventListener("mouseup", () => {
      isDown = false;
      track.style.cursor = "grab";
    });

    track.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.4;
      track.scrollLeft = scrollLeft - walk;
    });

    track.style.cursor = "grab";
  }

  // Init 3D gallery after DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init3DGallery);
  } else {
    init3DGallery();
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
