// ============================================================
// Single entry point for all project types.
// Import order mirrors the Golden Rule: innermost → outward.
// ============================================================

export * from './primitives' // 1. Base value types
export * from './user'       // 2. User & preferences
export * from './assets'     // 3. Asset classes & transactions
export * from './budget'     // 4. Cash flow & debt