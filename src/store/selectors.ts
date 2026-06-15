// ============================================================
// Selectors — pure functions (AppState) => derived value.
// Use with store.select(selector, listener) for reactive updates,
// or store.getState() |> selector for one-off reads.
// ============================================================

import type { AppState } from "./AppState";
import type { AssetClass } from "../types";

// -- Dashboard --
export const selectDashboard = (s: AppState) => s.dashboard;
export const selectNetWorth = (s: AppState) => s.dashboard.netWorth;
export const selectAlerts = (s: AppState) => s.dashboard.alerts;
export const selectMarketData = (s: AppState) => s.dashboard.marketData;
export const selectOverallHealth = (s: AppState) =>
  s.dashboard.overallHealthStatus;

// -- Portfolio --
export const selectAssets = (s: AppState) => s.assets;
export const selectAllocation = (s: AppState) => s.allocation;
export const selectTransactions = (s: AppState) => s.transactions;
export const selectPortfolioAnalysis = (s: AppState) => s.portfolioAnalysis;

export const selectAssetsByClass = (assetClass: AssetClass) => (s: AppState) =>
  s.assets.filter((a) => a.assetClass === assetClass);

export const selectTotalPortfolioValue = (s: AppState) => s.allocation.total;

// -- Budget --
export const selectBudgetPlan = (s: AppState) => s.budgetPlan;
export const selectDebtSummary = (s: AppState) => s.debtSummary;
export const selectEmergencyFund = (s: AppState) => s.emergencyFund;
export const selectMonthlySummary = (s: AppState) => s.budgetPlan.summary;
export const selectSavingsRate = (s: AppState) =>
  s.budgetPlan.summary.savingsRate;

// -- Learn --
export const selectArticles = (s: AppState) => s.articles;
export const selectGlossary = (s: AppState) => s.glossary;
export const selectLearnProgress = (s: AppState) => s.learnProgress;
export const selectBookmarkedArticles = (s: AppState) =>
  s.articles.filter((a) => a.isBookmarked === true);
export const selectUnreadArticles = (s: AppState) =>
  s.articles.filter((a) => a.isRead !== true);

// -- Analyze --
export const selectScenarios = (s: AppState) => s.scenarios;
export const selectScenarioResults = (s: AppState) => s.scenarioResults;
export const selectProjections = (s: AppState) => s.projections;
export const selectStressTests = (s: AppState) => s.stressTests;
export const selectLatestScenarioResult = (s: AppState) =>
  s.scenarioResults.at(-1) ?? null;

// -- Roadmap --
export const selectGoals = (s: AppState) => s.goals;
export const selectMigrationPlan = (s: AppState) => s.migrationPlan;
export const selectHumanCapital = (s: AppState) => s.humanCapital;
export const selectFITracker = (s: AppState) => s.fiTracker;
export const selectActiveGoals = (s: AppState) =>
  s.goals.filter((g) => g.status === "in_progress");
export const selectGoalById = (id: string) => (s: AppState) =>
  s.goals.find((g) => g.id === id);

// -- User --
export const selectUser = (s: AppState) => s.user;
export const selectPreferences = (s: AppState) => s.preferences;
export const selectLocale = (s: AppState) => s.preferences.locale;
export const selectCurrency = (s: AppState) => s.preferences.defaultCurrency;
