/* ============================================
   Portfolio — interactions (performance-tuned)
   Editorial dark theme · Viking rune background
   ============================================ */

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const saveData =
    (navigator.connection && navigator.connection.saveData) || false;
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  // ===== i18n — English / Persian =====
  const translations = {
    en: {
      "nav.work": "Work",
      "nav.about": "About",
      "nav.gallery": "Gallery",
      "nav.contact": "Contact",
      "preloader.chapter": "00 · Entering",
      "preloader.label": "Assembling",
      "hero.label": "Frontend Developer",
      "hero.name1": "Alireza",
      "hero.name2": "Ebrahimi",
      "hero.sub1": "Building interfaces where type does the talking.",
      "hero.sub2": "Precision, contrast, and deliberate space.",
      "hero.ctaWork": "View Work",
      "hero.ctaContact": "Get in touch",
      "hero.status": "Available for work · 2026",
      "work.label": "Selected Work",
      "work.title": "Projects",
      "p1.title": "Aureum — Gold Marketplace",
      "p1.desc": "A Next.js + Tailwind CSS storefront concept for a gold marketplace (bars, coins, jewelry, antique pieces), in a black / gold / ivory theme.",
      "p2.title": "Simple Portfolio",
      "p2.desc": "A statically-generated Next.js site: fast, SEO-friendly, deployable to Netlify with zero server config. Includes a working blog you can publish to from a browser-based admin panel — no code editor required once it's set up.",
      "p3.title": "Service UI",
      "p3.desc": "A pixel-close recreation of a light-themed salon / barbershop Services + Order interface using only HTML and CSS.",
      "p4.title": "Spotify Search app",
      "p4.desc": "A full-stack Spotify search application built with:",
      "about.label": "About",
      "about.title1": "Making digital",
      "about.title2": "feel intentional",
      "about.lead": "Dynamic front-end developer with a passion for creating seamless and engaging user experiences. Proficient in HTML, CSS, JavaScript, and modern frameworks like React, I leverage my strong problem-solving skills to transform complex design concepts into responsive, interactive web applications.",
      "about.body": "I believe that continuous learning, strong teamwork, and professional dedication are essential for building successful software products. Let’s build the future together!",
      "stat.years": "Years experience",
      "stat.projects": "Shipped projects",
      "stat.systems": "Design systems",
      "skills.label": "Focus",
      "contact.label": "Contact",
      "contact.title1": "Let’s build",
      "contact.title2": "something sharp",
      "contact.sub": "Open to new collaborations, Remote full-time roles, and thoughtful side projects.",
      "footer.copy": "Alireza Ebrahimi. All rights reserved.",
      "footer.note": "Built with intention.",
      "gal.label": "Photography",
      "gal.title1": "Through the",
      "gal.title2": "lens",
      "gal.lead": "Photography is how I slow the world down. What began as a curiosity with light and shadow has grown into a deliberate practice of noticing — architecture, quiet streets, and the fleeting geometry of everyday life.",
      "gal.body": "Over the years I’ve shot film and digital, travelled with only a single lens, and learned that the strongest frames are rarely the most dramatic. They are the ones that feel honest. This gallery is a living collection of that work — a visual journal rather than a finished portfolio.",
      "gal.frames": "Selected Frames",
      "gal.gallery": "Gallery",
      "gal.hint": "Drag or scroll horizontally",
      "gal.cta": "More frames coming soon. For prints or collaboration inquiries, reach out."
    },
    fa: {
      
  "nav.work": "پروژه‌ها",
  "nav.about": "درباره من",
  "nav.gallery": "گالری",
  "nav.contact": "تماس با من",

  "preloader.chapter": "۰۰ · شروع",
  "preloader.label": "در حال آماده‌سازی",

  "hero.label": "توسعه‌دهنده فرانت‌اند",
  "hero.name1": "علیرضا",
  "hero.name2": "ابراهیمی",
  "hero.sub1": "رابط‌هایی می‌سازم که با طراحی و جزئیات، حرف خودشان را می‌زنند.",
  "hero.sub2": "دقت، کنتراست و طراحی هدفمند.",
  "hero.ctaWork": "مشاهده پروژه‌ها",
  "hero.ctaContact": "در ارتباط باشیم",
  "hero.status": "آماده همکاری · ۲۰۲۶",

  "work.label": "پروژه‌های منتخب",
  "work.title": "پروژه‌ها",

  "p1.title": "آورئوم — بازار طلا",
  "p1.desc": "فروشگاهی مفهومی با Next.js و Tailwind برای بازار طلا؛ شامل شمش، سکه، جواهرات و آثار عتیقه، با ترکیبی از رنگ‌های مشکی، طلایی و عاجی.",

  "p2.title": "پورتفولیوی شخصی",
  "p2.desc": "وب‌سایتی سریع و مدرن با Next.js، بهینه‌شده برای موتورهای جستجو و قابل استقرار روی Netlify، بدون نیاز به تنظیمات پیچیده سرور. وبلاگ نیز از طریق پنل مدیریت مرورگر کنترل می‌شود.",

  "p3.title": "رابط کاربری خدمات",
  "p3.desc": "بازطراحی دقیق رابط کاربری یک سالن زیبایی و آرایشگاه با طراحی روشن و مینیمال؛ شامل بخش خدمات و ثبت سفارش، با استفاده از HTML و CSS.",

  "p4.title": "جستجوی اسپاتیفای",
  "p4.desc": "یک اپلیکیشن فول‌استک برای جستجو و پیدا کردن موسیقی در اسپاتیفای، ساخته‌شده با:",

  "about.label": "درباره من",
  "about.title1": "بیایید دنیای دیجیتال را",
  "about.title2": "با فکر و هدف بسازیم",
  "about.lead": "من یک توسعه‌دهنده فرانت‌اند هستم که به ساخت تجربه‌های کاربری روان، دقیق و چشم‌نواز علاقه دارم. با HTML، CSS، جاوااسکریپت و React کار می‌کنم و ایده‌ها و طراحی‌های پیچیده را به رابط‌هایی کاربردی، واکنش‌گرا و جذاب تبدیل می‌کنم.",
  "about.body": "یادگیری مداوم، کار تیمی و تعهد به کیفیت را پایه ساخت محصولات خوب می‌دانم. بیایید با هم چیزی ارزشمند بسازیم.",

  "stat.years": "سال تجربه",
  "stat.projects": "پروژه منتشرشده",
  "stat.systems": "سیستم طراحی",

  "skills.label": "حوزه‌های تمرکز",

  "contact.label": "تماس با من",
  "contact.title1": "بیایید چیزی",
  "contact.title2": "متفاوت بسازیم",
  "contact.sub": "برای همکاری‌های جدید، موقعیت‌های شغلی تمام‌وقت و پروژه‌های جانبی، با تمرکز بالا و حساسیت روی جزئیات آماده‌ام.",

  "footer.copy": "علیرضا ابراهیمی. تمامی حقوق محفوظ است.",
  "footer.note": "با دقت و هدف ساخته شده.",

  "gal.label": "عکاسی",
  "gal.title1": "از پشت",
  "gal.title2": "لنز",
  "gal.lead": "عکاسی برای من فرصتی است برای کمی آرام‌تر دیدن دنیا. همه‌چیز از کنجکاوی درباره نور و سایه شروع شد و به تمرینی برای بهتر دیدن تبدیل شد؛ از معماری و خیابان‌های آرام گرفته تا هندسه ظریف و زودگذر زندگی روزمره.",
  "gal.body": "سال‌هاست با دوربین‌های فیلمی و دیجیتال عکاسی می‌کنم و گاهی ترجیح می‌دهم تنها با یک لنز به سفر بروم. به نظرم بهترین عکس‌ها همیشه آن‌هایی نیستند که بیشترین هیجان را دارند؛ گاهی ساده‌ترین قاب‌ها صادقانه‌ترین تصویر را ثبت می‌کنند. این گالری یک دفتر تصویری زنده است، نه مجموعه‌ای که برای همیشه بسته شده باشد.",
  "gal.frames": "قاب‌های منتخب",
  "gal.gallery": "گالری",
  "gal.hint": "بکشید یا به‌صورت افقی اسکرول کنید",
  "gal.cta": "قاب‌های بیشتری به‌زودی اضافه می‌شوند. برای سفارش چاپ یا همکاری، با من در تماس باشید.",
    }  
};

  function getLang() {
    try { return localStorage.getItem("ae-lang") || "en"; } catch (_) { return "en"; }
  }

  function setLang(lang) {
    if (!translations[lang]) return;
    const dict = translations[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
    try { localStorage.setItem("ae-lang", lang); } catch (_) {}
  }

  function initI18n() {
    setLang(getLang());
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = btn.getAttribute("data-lang");
        if (!next || next === getLang()) return;
        const transitionEl = document.getElementById("page-transition");
        if (transitionEl && !prefersReducedMotion) {
          transitionEl.classList.add("is-active");
          transitionEl.setAttribute("aria-hidden", "false");
          setTimeout(() => {
            setLang(next);
            setTimeout(() => {
              transitionEl.classList.remove("is-active");
              transitionEl.setAttribute("aria-hidden", "true");
            }, 180);
          }, 220);
        } else {
          setLang(next);
        }
      });
    });
  }

  // ===== Cursor light system (Killian-inspired) =====
  function initHeroFlashlight() {
    if (prefersReducedMotion || isMobile) return;

    const hero = document.getElementById("hero");
    const heroLight = document.getElementById("heroFlashlight");
    const globalLight = document.getElementById("cursorLight");

    // Global soft cursor light
    if (globalLight) {
      let gx = window.innerWidth / 2;
      let gy = window.innerHeight / 2;
      let rafG = 0;
      function applyGlobal() {
        globalLight.style.transform =
          "translate(" + gx + "px, " + gy + "px) translate(-50%, -50%)";
        rafG = 0;
      }
      window.addEventListener(
        "pointermove",
        (e) => {
          gx = e.clientX;
          gy = e.clientY;
          if (!rafG) rafG = requestAnimationFrame(applyGlobal);
        },
        { passive: true },
      );
      document.body.classList.add("is-cursor-light");
    }

    // Stronger hero-local flashlight
    if (hero && heroLight) {
      let raf = 0;
      let mx = 50;
      let my = 40;
      function apply() {
        heroLight.style.setProperty("--mx", mx + "%");
        heroLight.style.setProperty("--my", my + "%");
        raf = 0;
      }
      hero.addEventListener(
        "pointermove",
        (e) => {
          const rect = hero.getBoundingClientRect();
          mx = ((e.clientX - rect.left) / rect.width) * 100;
          my = ((e.clientY - rect.top) / rect.height) * 100;
          if (!raf) raf = requestAnimationFrame(apply);
        },
        { passive: true },
      );
      hero.addEventListener(
        "pointerleave",
        () => {
          mx = 50;
          my = 40;
          if (!raf) raf = requestAnimationFrame(apply);
        },
        { passive: true },
      );
      hero.classList.add("is-flashlight-ready");
    }
  }


  // ===== Viking Rune Background =====
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

  // ---------- Year ----------
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
      setTimeout(() => preloader.setAttribute("aria-hidden", "true"), 550);
    }
    document.body.classList.add("is-ready");
  }

  function runPreloader() {
    const hardTimeout = setTimeout(finishPreloader, 1300);

    if (!preloader || !countEl || !progressEl) {
      clearTimeout(hardTimeout);
      finishPreloader();
      return;
    }

    const duration = 850;
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
        setTimeout(finishPreloader, 100);
      }
    }
    requestAnimationFrame(tick);
  }

  function startPreloaderSafely() {
    if (preloaderFinished) return;
    runPreloader();
  }

  if (document.fonts && document.fonts.ready) {
    Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 260))])
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
  setTimeout(startPreloaderSafely, 180);

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

  // ---------- Header scroll ----------
  const header = document.getElementById("header");
  let scrollTicking = false;
  function onScroll() {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY || window.pageYOffset;
      if (header) header.classList.toggle("is-scrolled", y > 20);
      scrollTicking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- Intersection Observer reveals ----------
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
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -36px 0px" },
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
      { threshold: 0.08, rootMargin: "0px 0px -28px 0px" },
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

  // ---------- 3D Horizontal Gallery ----------
  function init3DGallery() {
    const track = document.getElementById("gallery3dTrack");
    if (!track) return;

    const items = Array.from(track.querySelectorAll(".gallery-3d-item"));
    if (!items.length) return;

    const allImgs = [];
    items.forEach((item) => {
      const img = item.querySelector("img");
      if (!img) return;
      allImgs.push(img);
      if (img.complete && img.naturalWidth > 0) {
        img.dataset.loaded = "true";
        item.classList.add("is-img-ready");
      } else {
        img.addEventListener("load", () => {
          img.dataset.loaded = "true";
          item.classList.add("is-img-ready");
        }, { once: true });
        img.addEventListener("error", () => {
          img.dataset.loaded = "error";
        }, { once: true });
      }
    });

    function warmRemainingImages() {
      const pending = allImgs.filter(
        (img) => img.dataset.loaded !== "true" && img.dataset.loaded !== "error"
      );
      if (!pending.length) return;
      let i = 0;
      const batch = 3;
      function nextBatch() {
        const slice = pending.slice(i, i + batch);
        if (!slice.length) return;
        i += batch;
        slice.forEach((img) => {
          if (img.decode) img.decode().catch(() => {});
          if (img.loading === "lazy") img.loading = "eager";
        });
        if (i < pending.length) {
          if ("requestIdleCallback" in window) {
            requestIdleCallback(nextBatch, { timeout: 800 });
          } else {
            setTimeout(nextBatch, 120);
          }
        }
      }
      if ("requestIdleCallback" in window) {
        requestIdleCallback(nextBatch, { timeout: 1400 });
      } else {
        setTimeout(nextBatch, 400);
      }
    }

    if (document.body.classList.contains("is-ready")) {
      warmRemainingImages();
    } else {
      const readyObs = new MutationObserver(() => {
        if (document.body.classList.contains("is-ready")) {
          warmRemainingImages();
          readyObs.disconnect();
        }
      });
      readyObs.observe(document.body, { attributes: true, attributeFilter: ["class"] });
      setTimeout(warmRemainingImages, 2200);
    }

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

        const rotateY = progress * -38;
        const scale = 1 - Math.abs(progress) * 0.16;
        const translateZ = -Math.abs(progress) * 70;
        const opacity = 1 - Math.abs(progress) * 0.42;

        item.style.transform = `translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
        item.style.opacity = String(Math.max(0.38, opacity));

        if (Math.abs(progress) < 0.16) {
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
    requestAnimationFrame(update3D);

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
      const walk = (x - startX) * 1.35;
      track.scrollLeft = scrollLeft - walk;
    });

    track.style.cursor = "grab";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init3DGallery);
  } else {
    init3DGallery();
  }

  // ---------- Hero entrance after preloader ----------
  const heroBits = [
    document.querySelector(".hero-label"),
    document.querySelector(".hero-title"),
    document.querySelector(".hero-sub"),
    document.querySelector(".hero-cta"),
    document.querySelector(".hero-status"),
  ];
  heroBits.forEach((el, i) => {
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(12px)";
    el.style.transition = `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${0.08 + i * 0.07}s, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${0.08 + i * 0.07}s`;
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

  // ---------- Page transitions ----------
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
    }, 300);
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

  // =====================================================
  // Contact section — topo mountains + soft particle mist
  // =====================================================
  function initContactFx() {
    const section = document.getElementById("contact");
    if (!section) return;

    const topoIO = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("is-topo-drawn");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "120px 0px", threshold: 0.02 },
    );
    topoIO.observe(section);

    const canvas = document.getElementById("contact-fx");
    if (!canvas || prefersReducedMotion || isMobile) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    let particles = [];
    let raf = 0;
    let running = false;

    const COUNT_P = 48;

    function resize() {
      const rect = section.getBoundingClientRect();
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function makeParticle() {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.6 + Math.random() * 2.2,
        vx: (Math.random() - 0.5) * 0.28,
        vy: -0.12 - Math.random() * 0.35,
        a: 0.08 + Math.random() * 0.28,
        life: 0.4 + Math.random() * 0.6,
        hue: Math.random() > 0.55 ? 350 : 0,
      };
    }

    function seed() {
      particles = [];
      for (let i = 0; i < COUNT_P; i++) particles.push(makeParticle());
    }

    function tick() {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);

      const g = ctx.createRadialGradient(
        w * 0.5,
        h * 0.15,
        0,
        w * 0.5,
        h * 0.15,
        Math.max(w, h) * 0.55,
      );
      g.addColorStop(0, "rgba(255, 58, 242, 0.1)");
      g.addColorStop(0.45, "rgba(0, 245, 212, 0.05)");
      g.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.0018;

        if (p.life <= 0 || p.y < -10 || p.x < -20 || p.x > w + 20) {
          particles[i] = makeParticle();
          particles[i].y = h + 8;
          continue;
        }

        const alpha = Math.max(0, p.a * p.life);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle =
          p.hue > 0
            ? `rgba(255, 58, 242, ${alpha})`
            : `rgba(0, 245, 212, ${alpha * 0.55})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    }

    function start() {
      if (running) return;
      running = true;
      section.classList.add("is-fx-ready");
      raf = requestAnimationFrame(tick);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    resize();
    seed();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) start();
          else stop();
        });
      },
      { rootMargin: "80px 0px", threshold: 0.05 },
    );
    io.observe(section);

    let resizeTimer = 0;
    window.addEventListener(
      "resize",
      () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          resize();
          seed();
        }, 120);
      },
      { passive: true },
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initContactFx);
  } else {
    initContactFx();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initI18n();
      initHeroFlashlight();
    });
  } else {
    initI18n();
    initHeroFlashlight();
  }
})();
