// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Header scroll state + back-to-top visibility
const header = document.getElementById("site-header");
const backTop = document.getElementById("backToTop");
const onScroll = () => {
  const y = window.scrollY || document.documentElement.scrollTop;
  header.classList.toggle("scrolled", y > 10);
  backTop.classList.toggle("show", y > 400);
  highlightActiveLink();
};
window.addEventListener("scroll", onScroll);

// Back to top
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const primaryMenu = document.getElementById("primary-menu");
menuToggle?.addEventListener("click", () => {
  const open = primaryMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

// Mega menu open/close (on click, close when clicking outside)
document.querySelectorAll(".has-mega").forEach(li => {
  const trigger = li.querySelector(".mega-trigger");
  if (!trigger) return;
  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    const expanded = li.getAttribute("aria-expanded") === "true";
    document.querySelectorAll(".has-mega").forEach(n => n.setAttribute("aria-expanded","false"));
    li.setAttribute("aria-expanded", String(!expanded));
  });
});
document.addEventListener("click", () => {
  document.querySelectorAll(".has-mega").forEach(n => n.setAttribute("aria-expanded","false"));
});

// Smooth close menu after clicking a link (mobile)
primaryMenu?.querySelectorAll("a[href^='#']").forEach(a => {
  a.addEventListener("click", () => {
    primaryMenu.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded","false");
  });
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

// Observe all reveal elements
document.querySelectorAll(".reveal").forEach(el => {
  io.observe(el);
});

// Fallback: show all content after 1 second if animations don't trigger
setTimeout(() => {
  document.querySelectorAll(".reveal:not(.in)").forEach(el => {
    el.classList.add("in");
  });
}, 1000);

// Active link highlight based on scroll position
const sections = Array.from(document.querySelectorAll("main section[id]"));
const links = Array.from(document.querySelectorAll(".menu a[href^='#']"));
function highlightActiveLink(){
  const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 120;
  let current = null;
  for (const s of sections){
    if (s.offsetTop <= pos) current = s.id;
  }
  links.forEach(l => {
    const isActive = l.getAttribute("href") === `#${current}`;
    l.classList.toggle("is-active", !!isActive);
  });
}
highlightActiveLink();

// ===== Events (simple in-code data; swap to fetch('events.json') if you prefer) =====
const EVENTS = [
  { title: "中秋游园会 Mid-Autumn Festival Carnival", date: "2025-10-04", location: "", desc: "At the beginning of a new school year, CSSS celebrates the Mid-Autumn Festival with a carnival featuring lantern riddles, tie-dye, musical chairs, mooncake making, and other cultural games. Whether for new students or graduating students, the festival carries a sense of nostalgia for home. 新学年伊始，CSSS都会举办中秋游园会，庆祝中秋佳节。我们会在游园会中设置各式各样的摊位，比如猜灯谜，扎染，抢凳子，做月饼等游戏，传承中国文化的同时为大家带来欢乐。不管对于刚刚入学的新生，还是即将毕业的同学，游园会承载着对与家乡的思念，正所谓千里共婵娟。", tags:["cultural"] },
  { title: "好声音 UVA Voice", date: "2025-10-11", location: "", desc: "Annual singing competition with auditions, preliminary rounds, and finals. A platform for music-loving students to showcase their talents and compete for the championship.", tags:["cultural"] },
  { title: "好声音 UVA Voice Finals", date: "2025-11-08", location: "", desc: "Final round of the UVA Voice singing competition. Enjoy diverse musical styles and participate in group singing segments.", tags:["cultural"] },
  { title: "Commerce Panel", date: "2025-11-15", location: "", desc: "Learn about the McIntire School of Commerce from current students. Get valuable insights, personal experiences, and updates about one of UVA's most popular majors.", tags:["career"] },
  { title: "春晚 Chinese New Year Gala", date: "2026-02-24", location: "", desc: "Annual celebration of Chinese New Year featuring student performances including lion dances, plays, songs, and traditional dances. Chinese snacks and New Year couplets will be provided.", tags:["cultural"] }
];

// Events functionality (only if events list exists)
const eventsList = document.getElementById("events-list");
if (eventsList) {
  function renderEvents(filter = "all"){
    eventsList.innerHTML = "";
    EVENTS
      .filter(ev => filter==="all" ? true : ev.tags?.includes(filter))
      .sort((a,b) => new Date(a.date) - new Date(b.date))
      .forEach(ev => {
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
          <h3>${ev.title}</h3>
          <p><strong>${new Date(ev.date).toLocaleDateString([], {year:'numeric', month:'short', day:'numeric'})}</strong>${ev.location ? ' · ' + ev.location : ''}</p>
          <p class="muted">${ev.desc}</p>
        `;
        eventsList.appendChild(card);
      });
  }
  renderEvents();

  // Chip filters
  document.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach(c => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      renderEvents(chip.dataset.filter || "all");
    });
  });
}
