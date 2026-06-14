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