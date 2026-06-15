// ============================================================
// Route definitions.
// Each route maps a hash path to a feature key.
// ============================================================

export type RouteKey =
  | "dashboard"
  | "learn"
  | "analyze"
  | "portfolio"
  | "budget"
  | "roadmap";

export interface Route {
  path: string; // e.g. "#/dashboard"
  key: RouteKey;
  titleEn: string;
  titleFa: string;
  icon: string; // emoji or icon identifier for nav
}

export const routes: Route[] = [
  {
    path: "#/dashboard",
    key: "dashboard",
    titleEn: "Dashboard",
    titleFa: "داشبورد",
    icon: "⬛",
  },
  {
    path: "#/learn",
    key: "learn",
    titleEn: "Learn",
    titleFa: "یادگیری",
    icon: "📖",
  },
  {
    path: "#/analyze",
    key: "analyze",
    titleEn: "Analyze",
    titleFa: "تحلیل",
    icon: "🔬",
  },
  {
    path: "#/portfolio",
    key: "portfolio",
    titleEn: "Portfolio",
    titleFa: "سبد دارایی",
    icon: "📊",
  },
  {
    path: "#/budget",
    key: "budget",
    titleEn: "Budget",
    titleFa: "بودجه",
    icon: "💳",
  },
  {
    path: "#/roadmap",
    key: "roadmap",
    titleEn: "Roadmap",
    titleFa: "نقشه راه",
    icon: "🗺️",
  },
];

export const defaultRoute = routes[0]!;

export function matchRoute(hash: string): Route {
  return routes.find((r) => r.path === hash) ?? defaultRoute;
}
