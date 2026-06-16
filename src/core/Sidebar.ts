// ============================================================
// Sidebar — renders nav, listens to router for active state.
// ============================================================

import { routes } from "./routes";
import type { Router } from "./Router";
import type { RouteKey } from "./routes";
import { appStore } from "../store";
import { selectUser } from "../store";

export class Sidebar {
  private el: HTMLElement;
  private router: Router;
  private unsubNav: (() => void) | null = null;
  private navItems: Map<RouteKey, HTMLButtonElement> = new Map();

  constructor(router: Router) {
    this.router = router;
    this.el = this.render();
  }

  getElement(): HTMLElement {
    return this.el;
  }

  mount(): void {
    // Subscribe to route changes to keep active state in sync
    this.unsubNav = this.router.onNavigate((key) => this.setActive(key));
  }

  unmount(): void {
    this.unsubNav?.();
  }

  private render(): HTMLElement {
    const user = selectUser(appStore.getState());

    const sidebar = document.createElement("aside");
    sidebar.className = "sidebar";

    // Logo
    const logo = document.createElement("div");
    logo.className = "sidebar__logo";
    logo.innerHTML = `
      <div class="sidebar__logo-mark">₿</div>
      <div>
        <div class="sidebar__logo-text">مانی هیست</div>
        <div class="sidebar__logo-sub">Money Heist</div>
      </div>
    `;

    // Nav
    const nav = document.createElement("nav");
    nav.className = "sidebar__nav";
    nav.setAttribute("role", "navigation");
    nav.setAttribute("aria-label", "منوی اصلی");

    for (const route of routes) {
      const btn = document.createElement("button");
      btn.className = "nav-item";
      btn.setAttribute("aria-label", route.titleFa);
      btn.dataset["key"] = route.key;
      btn.innerHTML = `
        <span class="nav-item__icon">${route.icon}</span>
        <span class="nav-item__label">${route.titleFa}</span>
      `;
      btn.addEventListener("click", () => {
        this.router.navigate(route.key);
      });

      this.navItems.set(route.key, btn);
      nav.appendChild(btn);
    }

    // Footer — user info
    const initials = user.nameFa
      ? user.nameFa
          .split(" ")
          .map((w) => w[0])
          .join("")
          .slice(0, 2)
      : user.name.slice(0, 2).toUpperCase();

    const footer = document.createElement("div");
    footer.className = "sidebar__footer";
    footer.innerHTML = `
      <div class="sidebar__avatar">${initials}</div>
      <div class="sidebar__user-name">${user.nameFa ?? user.name}</div>
    `;

    sidebar.appendChild(logo);
    sidebar.appendChild(nav);
    sidebar.appendChild(footer);

    return sidebar;
  }

  private setActive(key: RouteKey): void {
    for (const [k, btn] of this.navItems) {
      btn.classList.toggle("nav-item--active", k === key);
      btn.setAttribute("aria-current", k === key ? "page" : "false");
    }
  }
}
