// ============================================================
// The full shape of state held in the app store.
// Kept separate from src/types so the store layer stays
// independent of domain types in the future.
// ============================================================

import type {
  UserProfile,
  UserPreferences,
  DashboardSummary,
  AssetAllocation,
  AssetTransaction,
  Asset,
  MonthlyBudgetPlan,
  DebtSummary,
  EmergencyFund,
  LearnArticle,
  GlossaryTerm,
  LearnProgress,
  Scenario,
  ScenarioResult,
  WealthProjection,
  StressTestResult,
  PortfolioAnalysisResult,
  Goal,
  MigrationPlan,
  HumanCapitalProfile,
  FinancialIndependenceTracker,
} from "../types";

export interface AppState {
  // -- User --
  user: UserProfile;
  preferences: UserPreferences;

  // -- Dashboard --
  dashboard: DashboardSummary;

  // -- Portfolio --
  assets: Asset[];
  allocation: AssetAllocation;
  transactions: AssetTransaction[];
  portfolioAnalysis: PortfolioAnalysisResult | null;

  // -- Budget --
  budgetPlan: MonthlyBudgetPlan;
  debtSummary: DebtSummary;
  emergencyFund: EmergencyFund;

  // -- Learn --
  articles: LearnArticle[];
  glossary: GlossaryTerm[];
  learnProgress: LearnProgress;

  // -- Analyze --
  scenarios: Scenario[];
  scenarioResults: ScenarioResult[];
  projections: WealthProjection[];
  stressTests: StressTestResult[];

  // -- Roadmap --
  goals: Goal[];
  migrationPlan: MigrationPlan;
  humanCapital: HumanCapitalProfile;
  fiTracker: FinancialIndependenceTracker;
}