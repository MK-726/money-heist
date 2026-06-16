// ============================================================
// App — composes the shell: sidebar + content area.
// Instantiated once in main.ts.
// ============================================================

import { Router } from "./Router";
import { Sidebar } from "./Sidebar";
import type { RouteKey } from "./routes";
import type { FeatureModule } from "./FeatureModule";

export class App {
  private root: HTMLElement;
  private router: Router;
  private sidebar: Sidebar;
  private contentEl: HTMLElement;

  constructor(rootSelector: string) {
    const root = document.querySelector<HTMLElement>(rootSelector);
    if (!root) throw new Error(`Root element "${rootSelector}" not found.`);
    this.root = root;

    // Content area
    this.contentEl = document.createElement("main");
    this.contentEl.className = "content";
    this.contentEl.setAttribute("role", "main");

    // Router operates on content area
    this.router = new Router(this.contentEl);

    // Sidebar
    this.sidebar = new Sidebar(this.router);
  }

  register(key: RouteKey, module: FeatureModule): this {
    this.router.register(key, module);
    return this;
  }

  start(): void {
    // Assemble shell — sidebar right, content left (RTL)
    this.root.appendChild(this.sidebar.getElement());
    this.root.appendChild(this.contentEl);

    this.sidebar.mount();
    this.router.start();
  }
}
