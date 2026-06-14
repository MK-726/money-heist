// ============================================================================
// The innermost layer - shared value types used everywhere.
// No imports from other project files.
// ============================================================================


// ------ IDs ------
export type ID = string;

// ------ Currency ------
export type CurrencyCode = "IRR" | "USD" | "EUR" | "AED" | "GBP" | "TRY" |
    "CAD" | "AUD"

export interface Money {
    amount: number,
    currency: CurrencyCode;
}