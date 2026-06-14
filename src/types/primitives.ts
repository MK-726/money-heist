// ============================================================================
// The innermost layer - shared value types used everywhere.
// No imports from other project files.
// ============================================================================


// ------ IDs ------
export type ID = string;

// ------ Currency ------
export type CurrencyCode = "IRR" | "USD" | "EUR" | "AED" | "GBP" | "TRY" |
    "CAD" | "AUD" | "JPY"

export interface Money {
    amount: number,
    currency: CurrencyCode;
}

// ------ Time ------
export type ISODateString = string; // "2025-06-14"
export type ISODateTimeString = string; // "2025-06-14T12:00:00Z"

export type TimeHorizon = "short" | "medium" | "long";

export interface DateRange {
    from: ISODateString;
    to: ISODateString;
}

// ------ Common Enums ------
export type Direction = "up" | "down" | "neutral";
 
export type RiskLevel = "very_low" | "low" | "medium" | "high" | "very_high";
 
export type HealthStatus = "critical" | "warning" | "fair" | "good" | "excellent";
 
// ------ Percentage / Ratio ------
export type Percentage = number; // 0–100
export type Ratio = number;      // 0–1

// ------ Change ------
export interface Change {
  value: number;
  percentage: Percentage;
  direction: Direction;
}
 
// ------ Localization ------
export type Locale = "fa" | "en";
 