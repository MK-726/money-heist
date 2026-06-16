// ============================================================
// Placeholder feature modules.
// Each one satisfies the FeatureModule interface and renders
// a simple heading. Replace with real modules one by one.
// ============================================================

import type { FeatureModule } from "../core/FeatureModule";

function placeholder(
  titleFa: string,
  titleEn: string,
  description: string,
): FeatureModule {
  let container: HTMLElement | null = null;

  return {
    mount(el: HTMLElement): void {
      container = el;
      el.innerHTML = `
        <div style="
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 16px;
        ">
          <span style="
            font-family: var(--font-english);
            font-size: var(--text-xs);
            color: var(--color-primary);
            text-transform: uppercase;
            letter-spacing: 0.12em;
          ">${titleEn}</span>
          <h1 style="
            font-family: var(--font-persian-title);
            font-size: var(--text-2xl);
            font-weight: 800;
            color: var(--color-text);
            line-height: 1.2;
          ">${titleFa}</h1>
          <p style="
            font-family: var(--font-persian-text);
            font-size: var(--text-base);
            color: var(--color-text-muted);
            margin-top: 4px;
            max-width: 480px;
            line-height: 1.7;
          ">${description}</p>
          <div style="
            margin-top: 32px;
            padding: 20px 24px;
            border: 1px dashed var(--color-border);
            border-radius: var(--radius-md);
            color: var(--color-text-subtle);
            font-family: var(--font-english);
            font-size: var(--text-xs);
            letter-spacing: 0.06em;
          ">در حال توسعه — UNDER CONSTRUCTION</div>
        </div>
      `;
    },

    unmount(): void {
      if (container) container.innerHTML = "";
    },
  };
}

export const dashboardModule = placeholder(
  "داشبورد",
  "Dashboard",
  "خلاصه وضعیت مالی، دارایی‌ها، اهداف و هشدارها.",
);
export const learnModule = placeholder(
  "یادگیری",
  "Learn",
  "دانش‌نامه مالی شخصی‌سازی‌شده برای بهبود تصمیم‌گیری.",
);
export const analyzeModule = placeholder(
  "تحلیل",
  "Analyze",
  "سناریوها، پیش‌بینی‌ها و تست استرس سبد دارایی.",
);
export const portfolioModule = placeholder(
  "سبد دارایی",
  "Portfolio",
  "مدیریت و ردیابی دارایی‌ها در همه کلاس‌های سرمایه‌گذاری.",
);
export const budgetModule = placeholder(
  "بودجه",
  "Budget",
  "درآمد، هزینه، بدهی و جریان نقدی ماهانه.",
);
export const roadmapModule = placeholder(
  "نقشه راه",
  "Roadmap",
  "اهداف مالی، برنامه خرید خانه، مهاجرت و استقلال مالی.",
);
