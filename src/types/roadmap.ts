// ============================================================
// Goals, home purchase, migration, FI tracking, human capital.
// ============================================================

import type { ID, Money, ISODateString, Percentage, TimeHorizon, HealthStatus } from "./primitives";

// ------ Goal ------
export type GoalType =
  | "emergency_fund"
  | "debt_elimination"
  | "car_purchase"
  | "home_down_payment"
  | "home_purchase"
  | "migration"
  | "financial_independence"
  | "retirement"
  | "education"
  | "travel"
  | "business"
  | "custom";

export type GoalStatus = "not_started" | "in_progress" | "achieved" | "paused" | "cancelled";

export interface Goal {
  id: ID;
  type: GoalType;
  name: string;
  nameFa: string;
  description?: string;
  horizon: TimeHorizon;
  targetAmount: Money;
  currentAmount: Money;
  progressPercentage: Percentage;
  monthlyContribution: Money;
  targetDate: ISODateString;
  estimatedAchievementDate?: ISODateString;
  status: GoalStatus;
  createdAt: ISODateString;
}

// ------ Home Purchase Plan ------
export interface HomePurchasePlan {
  id: ID;
  targetPropertyValue: Money;
  requiredDownPaymentPercentage: Percentage;
  requiredDownPayment: Money;
  currentSavings: Money;
  progressPercentage: Percentage;
  monthlyContribution: Money;
  estimatedPurchaseDate: ISODateString;
  notes?: string;
}

// ------ Financial Migration ------
export type MigrationReadinessLevel = "not_ready" | "early_stage" | "preparing" | "ready" | "in_process";

export interface TargetCountry {
  id: ID;
  name: string;
  nameFa: string;
  flagEmoji: string;
  costOfLiving: "low" | "medium" | "high" | "very_high";
  taxFriendliness: "very_low" | "low" | "medium" | "high";
  immigrationDifficulty: "easy" | "medium" | "hard" | "very_hard";
  minimumCapitalRequired?: Money;
  notes?: string;
}

export interface MigrationPlan {
  id: ID;
  targetCountries: TargetCountry[];
  preferredCountryId?: ID;
  requiredCapital: Money;
  currentCapital: Money;
  readinessScore: number; // 0–100
  readinessLevel: MigrationReadinessLevel;
  estimatedTimeline: ISODateString;
  checklistItems: MigrationChecklistItem[];
}

export interface MigrationChecklistItem {
  id: ID;
  label: string;
  labelFa: string;
  completed: boolean;
  category: "financial" | "legal" | "personal" | "career";
}

// ------ Human Capital ------
export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export interface Skill {
  id: ID;
  name: string;
  nameFa: string;
  level: SkillLevel;
  marketValue: "low" | "medium" | "high" | "very_high";
}

export interface Certification {
  id: ID;
  name: string;
  nameFa: string;
  issuer: string;
  earnedDate: ISODateString;
  expiryDate?: ISODateString;
}

export interface HumanCapitalProfile {
  currentMonthlyIncome: Money;
  targetMonthlyIncome: Money;
  incomeGrowthRate: Percentage; // annual
  skills: Skill[];
  certifications: Certification[];
  careerNotes?: string;
}

// ------ Financial Independence ------
export interface FinancialIndependenceTracker {
  fiNumber: Money;             // 25× annual expenses (4% rule)
  currentNetWorth: Money;
  progressPercentage: Percentage;
  annualExpenses: Money;
  safeWithdrawalRate: Percentage; // default 4
  requiredInvestmentRate: Percentage;
  estimatedFIDate: ISODateString;
  status: HealthStatus;
}