/* Transcapixaba — main JS */

// ---------- MOBILE MENU ----------
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".nav__burger");
  const links = document.querySelector(".nav__links");
  if (burger && links) {
    burger.addEventListener("click", () => {
      links.classList.toggle("nav__links--open");
      document.body.classList.toggle("nav-is-open", links.classList.contains("nav__links--open"));
    });
    // Fecha menu ao clicar num link final (não em trigger de dropdown)
    links.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        if (a.closest(".nav__item--has-drop") && !a.closest(".nav__drop")) return;
        links.classList.remove("nav__links--open");
        document.body.classList.remove("nav-is-open");
      });
    });
  }

  // ---------- NAV SCROLL STATE ----------
  const nav = document.querySelector(".nav");
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 60) nav.classList.add("is-scrolled");
      else nav.classList.remove("is-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ---------- VIDEO PLAYER ----------
  document.querySelectorAll(".video-poster").forEach((p) => {
    p.addEventListener("click", () => {
      const wrap = p.closest(".video-wrap");
      const src = p.dataset.video;
      if (!wrap || !src) return;
      const iframe = document.createElement("iframe");
      iframe.src = src + "?autoplay=1&rel=0";
      iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      iframe.allowFullscreen = true;
      wrap.appendChild(iframe);
      p.remove();
    });
  });

  // ---------- DROPDOWN MENU ----------
  document.querySelectorAll(".nav__item--has-drop > a").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      const isMobile = window.matchMedia("(max-width: 960px)").matches;
      const parent = trigger.parentElement;
      const hasHref = trigger.getAttribute("href") && trigger.getAttribute("href") !== "#";
      if (isMobile || !hasHref) {
        e.preventDefault();
        document.querySelectorAll(".nav__item--has-drop.is-open").forEach((el) => {
          if (el !== parent) el.classList.remove("is-open");
        });
        parent.classList.toggle("is-open");
      }
    });
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav__item--has-drop")) {
      document.querySelectorAll(".nav__item--has-drop.is-open").forEach((el) => el.classList.remove("is-open"));
    }
  });

  // ---------- ACTIVE NAV LINK ----------
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href && href.split("#")[0] === path) {
      a.classList.add("is-active");
      const parentDrop = a.closest(".nav__item--has-drop");
      if (parentDrop) parentDrop.querySelector(":scope > a").classList.add("is-active");
    }
  });

  // ---------- COUNTDOWN ----------
  const cd = document.getElementById("countdown");
  if (cd) {
    // Próxima edição: 13 a 25 de julho de 2026 — countdown até a largada
    const target = new Date("2026-07-13T08:00:00-03:00").getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff < 0) {
        cd.innerHTML = '<div class="countdown__box" style="grid-column:1/-1"><div class="countdown__num">ACONTECENDO AGORA</div></div>';
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff / 3600000) % 24);
      const m = Math.floor((diff / 60000) % 60);
      const s = Math.floor((diff / 1000) % 60);
      cd.querySelectorAll(".countdown__num").forEach((el, i) => {
        const v = [d, h, m, s][i];
        el.textContent = String(v).padStart(2, "0");
      });
    };
    tick();
    setInterval(tick, 1000);
  }

  // ---------- CARROSSEL ----------
  document.querySelectorAll(".carousel").forEach((carousel) => {
    const slides = carousel.querySelectorAll(".carousel__slide");
    const dots = carousel.querySelectorAll(".carousel__dot");
    const prev = carousel.querySelector(".carousel__btn--prev");
    const next = carousel.querySelector(".carousel__btn--next");
    const autoplay = parseInt(carousel.dataset.autoplay || "0", 10);
    if (!slides.length) return;
    let i = 0;
    let timer = null;
    const go = (n) => {
      i = ((n % slides.length) + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle("is-active", k === i));
      dots.forEach((d, k) => d.classList.toggle("is-active", k === i));
    };
    const stop = () => { if (timer) { clearInterval(timer); timer = null; } };
    const start = () => { if (autoplay && !timer) timer = setInterval(() => go(i + 1), autoplay); };
    const reset = () => { stop(); start(); };
    prev && prev.addEventListener("click", () => { go(i - 1); reset(); });
    next && next.addEventListener("click", () => { go(i + 1); reset(); });
    dots.forEach((d, k) => d.addEventListener("click", () => { go(k); reset(); }));
    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    let tx = 0;
    carousel.addEventListener("touchstart", (e) => { tx = e.touches[0].clientX; }, { passive: true });
    carousel.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 50) { go(dx > 0 ? i - 1 : i + 1); reset(); }
    }, { passive: true });
    start();
  });

  // ---------- SCROLL REVEAL ----------
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll("[data-reveal]").forEach((el) => obs.observe(el));
});
