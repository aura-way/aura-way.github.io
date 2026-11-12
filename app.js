(() => {
  if (window.lucide) window.lucide.createIcons();
  const menu = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    }));
  }
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
function down_load() {}
