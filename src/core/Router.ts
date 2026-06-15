// ============================================================
// Hash-based router.
// Listens to hashchange, matches a route, mounts the
// corresponding FeatureModule into a container element.
//
// Usage:
//   const router = new Router(contentEl);
//   router.register("dashboard", dashboardModule);
//   router.start();
// ============================================================

import type { FeatureModule } from "./FeatureModule";
import { matchRoute, defaultRoute } from "./routes";
import type { RouteKey } from "./routes";

type NavListener = (key: RouteKey) => void;

export class Router {
  private container: HTMLElement;
  private modules: Map<RouteKey, FeatureModule> = new Map();
  private currentKey: RouteKey | null = null;
  private navListeners: Set<NavListener> = new Set();

  constructor(container: HTMLElement) {
    this.container = container;
  }

  register(key: RouteKey, module: FeatureModule): this {
    this.modules.set(key, module);
    return this; // fluent
  }

  start(): void {
    window.addEventListener("hashchange", () => this.handleChange());

    // Navigate to current hash, or default
    if (!window.location.hash || window.location.hash === "#") {
      window.location.hash = defaultRoute.path.replace("#", "");
    }

    this.handleChange();
  }

  navigate(key: RouteKey): void {
    const route = matchRoute(`#/${key}`);
    window.location.hash = route.path.replace("#", "");
  }

  // Subscribe to nav changes (e.g. for sidebar to highlight active item)
  onNavigate(listener: NavListener): () => void {
    this.navListeners.add(listener);
    return () => this.navListeners.delete(listener);
  }

  getCurrentKey(): RouteKey | null {
    return this.currentKey;
  }

  private handleChange(): void {
    const route = matchRoute(window.location.hash);

    if (route.key === this.currentKey) return;

    // Unmount current
    if (this.currentKey !== null) {
      this.modules.get(this.currentKey)?.unmount();
    }

    // Clear container
    this.container.innerHTML = "";

    // Mount next
    const next = this.modules.get(route.key);
    if (next) {
      next.mount(this.container);
    } else {
      this.container.innerHTML = `
        <p style="color:#db0c26;padding:2rem;">
        Module "${route.key}" not registered.
        </p>`;
    }

    this.currentKey = route.key;
    this.navListeners.forEach((l) => l(route.key));
  }
}
