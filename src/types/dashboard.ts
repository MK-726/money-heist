// ============================================================
// Aggregated views surfaced on the Dashboard command center.
// These are read-only projections — never the source of truth.
// ============================================================

import type { Money, ISODateString, Percentage, Change, HealthStatus, Direction } from "./primitives";
import type { AssetAllocation } from "./assets";
import type { EmergencyFund } from "./budget";
import type { Goal } from "./roadmap";
import type { ScenarioResult } from "./analysis";

// ------ Net Worth ------
export interface NetWorthSnapshot {
  totalAssets: Money;
  totalLiabilities: Money;
  netWorth: Money;
  change30d: Change;
  change1y: Change;
  asOf: ISODateString;
}

// ------ Debt Ratio ------
export interface DebtRatioSummary {
  debtToIncomeRatio: Percentage;
  debtToAssetRatio: Percentage;
  status: HealthStatus;
  direction: Direction;
}

// ------ Alert ------
export type AlertSeverity = "info" | "warning" | "critical";

export type AlertType =
  | "rebalancing_needed"
  | "emergency_fund_low"
  | "debt_high"
  | "goal_off_track"
  | "scenario_risk"
  | "market_alert"
  | "custom";

export interface DashboardAlert {
  id: string;
  type: AlertType;
  severity: AlertSeverity;
  title: string;
  titleFa: string;
  message: string;
  messageFa: string;
  actionRoute?: string;  // e.g., "/portfolio/rebalance"
  createdAt: ISODateString;
  dismissed: boolean;
}

// ------ Market Data ------
export interface MarketDataPoint {
  label: string;
  labelFa: string;
  value: number;
  unit: string;
  change: Change;
  asOf: ISODateString;
}

// ------ Dashboard State ------
export interface DashboardSummary {
  asOf: ISODateString;
  netWorth: NetWorthSnapshot;
  allocation: AssetAllocation;
  debtRatio: DebtRatioSummary;
  emergencyFund: EmergencyFund;
  topGoals: Goal[];              // top 3 by priority
  latestScenarioResult?: ScenarioResult;
  alerts: DashboardAlert[];
  marketData: MarketDataPoint[];
  overallHealthScore: number;    // 0–100
  overallHealthStatus: HealthStatus;
}