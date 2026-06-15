// ============================================================
// Singleton app store.
// Import `appStore` anywhere to read or update global state.
// ============================================================

import { Store } from "./Store";
import type { AppState } from "./AppState";

import {
  mockAppState,
  mockDashboardSummary,
  mockCashAssets,
  mockGoldAssets,
  mockETFAssets,
  mockCryptoAssets,
  mockInsuranceAssets,
  mockAssetAllocation,
  mockTransactions,
  mockPortfolioAnalysis,
  mockMonthlyBudgetPlan,
  mockDebtSummary,
  mockEmergencyFund,
  mockLearnArticles,
  mockGlossaryTerms,
  mockLearnProgress,
  mockScenarios,
  mockScenarioResults,
  mockWealthProjection5Y,
  mockStressTests,
  mockGoals,
  mockMigrationPlan,
  mockHumanCapital,
  mockFITracker,
} from "../data/mock";

const initialState: AppState = {
  // User
  user:        mockAppState.user,
  preferences: mockAppState.preferences,

  // Dashboard
  dashboard: mockDashboardSummary,

  // Portfolio
  assets: [
    ...mockCashAssets,
    ...mockGoldAssets,
    ...mockETFAssets,
    ...mockCryptoAssets,
    ...mockInsuranceAssets,
  ],
  allocation:        mockAssetAllocation,
  transactions:      mockTransactions,
  portfolioAnalysis: mockPortfolioAnalysis,

  // Budget
  budgetPlan:    mockMonthlyBudgetPlan,
  debtSummary:   mockDebtSummary,
  emergencyFund: mockEmergencyFund,

  // Learn
  articles:      mockLearnArticles,
  glossary:      mockGlossaryTerms,
  learnProgress: mockLearnProgress,

  // Analyze
  scenarios:       mockScenarios,
  scenarioResults: mockScenarioResults,
  projections:     [mockWealthProjection5Y],
  stressTests:     mockStressTests,

  // Roadmap
  goals:         mockGoals,
  migrationPlan: mockMigrationPlan,
  humanCapital:  mockHumanCapital,
  fiTracker:     mockFITracker,
};

export const appStore = new Store<AppState>(initialState);