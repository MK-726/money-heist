// ============================================================
// User profile, preferences, and app-level settings.
// ============================================================

import type { ID, CurrencyCode, Locale } from "./primitives";

// ------ User Profile ------
export interface UserProfile {
    id: ID;
    name: string;
    nameFa?: string;
    email?: string;
    createdAt: string;
    lastActiveAt: string;
}

// ------ Preferences ------
export interface UserPreferences {
    defaultCurrency: CurrencyCode;
  locale: Locale;
  theme: "dark" | "light" | "system";
  showTomanNotRial: boolean;     // display IRR in Toman (÷10)
  monthlyReviewReminderDay?: number; // 1–28
  fiSafeWithdrawalRate: number;  // default 4 (%)
  emergencyFundTargetMonths: number; // default 6
}

// ------ App State ------
export interface AppState {
    user: UserProfile;
    preferences: UserPreferences;
    lastSyncedAt?: string;
}