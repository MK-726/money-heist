// ============================================================
// Scenario modeling, stress testing, projections, Monte Carlo.
// ============================================================

import type { ID, Money, ISODateString, Percentage, RiskLevel } from "./primitives";
import type { AssetAllocation } from "./assets";

// ------ Scenario ------
export type ScenarioType =
  | "high_inflation"
  | "currency_crisis"
  | "market_crash"
  | "recession"
  | "geopolitical_shock"
  | "income_loss"
  | "crypto_collapse"
  | "optimistic_growth"
  | "combined_crisis"
  | "custom";

export interface ScenarioParameter {
  key: string;
  label: string;
  labelFa: string;
  value: number;
  unit: "percentage" | "multiplier" | "months" | "years";
}

export interface Scenario {
  id: ID;
  name: string;
  nameFa: string;
  type: ScenarioType;
  description: string;
  descriptionFa: string;
  parameters: ScenarioParameter[];
  riskLevel: RiskLevel;
  createdAt: ISODateString;
}

// ------ Scenario Result ------
export interface ScenarioImpact {
  assetClass: string;
  currentValue: Money;
  projectedValue: Money;
  changePercentage: Percentage;
}

export interface ScenarioResult {
  id: ID;
  scenarioId: ID;
  runAt: ISODateString;
  netWorthBefore: Money;
  netWorthAfter: Money;
  netWorthChange: Percentage;
  impacts: ScenarioImpact[];
  recommendation?: string;
  recommendationFa?: string;
}

// ------ Projection ------
export type ProjectionHorizon = 1 | 3 | 5 | 10 | 20;

export interface ProjectionDataPoint {
  year: number;
  date: ISODateString;
  projectedNetWorth: Money;
  projectedPortfolioValue: Money;
  cumulativeContributions: Money;
  inflationAdjustedValue?: Money;
}

export interface WealthProjection {
  id: ID;
  horizon: ProjectionHorizon;
  annualReturnRate: Percentage;
  annualInflationRate: Percentage;
  monthlyContribution: Money;
  initialValue: Money;
  dataPoints: ProjectionDataPoint[];
  createdAt: ISODateString;
}

// ------ Stress Test ------
export interface StressTestResult {
  id: ID;
  name: string;
  nameFa: string;
  testedAt: ISODateString;
  allocationTested: AssetAllocation;
  worstCaseLoss: Percentage;
  worstCaseValue: Money;
  recoveryEstimateMonths?: number;
  passed: boolean;
}

// ------ Portfolio Analysis ------
export interface ConcentrationRisk {
  assetClass: string;
  percentage: Percentage;
  isOverweight: boolean;
  threshold: Percentage;
}

export interface PortfolioAnalysisResult {
  id: ID;
  analyzedAt: ISODateString;
  allocation: AssetAllocation;
  concentrationRisks: ConcentrationRisk[];
  overallRisk: RiskLevel;
  diversificationScore: number; // 0–100
  rebalancingNeeded: boolean;
}

// ------ Debt Analysis ------
export interface DebtRepaymentOption {
  strategy: "avalanche" | "snowball" | "custom";
  totalInterestPaid: Money;
  payoffDate: ISODateString;
  monthlyPayment: Money;
}

export interface DebtAnalysisResult {
  id: ID;
  analyzedAt: ISODateString;
  debtPressureScore: number; // 0–100
  options: DebtRepaymentOption[];
}