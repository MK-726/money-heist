// ============================================================
// Cash flow: income, expenses, savings, debt, emergency fund.
// ============================================================

import type { ID, Money, ISODateString, Percentage, HealthStatus } from "./primitives";

// ------ Income ------
export type IncomeSource =
  | "salary"
  | "freelance"
  | "business"
  | "rental"
  | "dividend"
  | "interest"
  | "other";

export interface IncomeEntry {
  id: ID;
  source: IncomeSource;
  label: string;
  labelFa: string;
  amount: Money;
  date: ISODateString;
  isRecurring: boolean;
}

// ------ Expenses ------
export type ExpenseCategory =
  | "housing"
  | "transportation"
  | "food"
  | "utilities"
  | "health"
  | "education"
  | "entertainment"
  | "subscriptions"
  | "clothing"
  | "personal_care"
  | "debt_payment"
  | "investment"
  | "other";

export interface ExpenseEntry {
  id: ID;
  category: ExpenseCategory;
  label: string;
  labelFa: string;
  amount: Money;
  date: ISODateString;
  isRecurring: boolean;
}

// ------ Savings ------
export interface MonthlySavingsSummary {
  month: ISODateString; // "2025-06"
  totalIncome: Money;
  totalExpenses: Money;
  netSavings: Money;
  savingsRate: Percentage;
  investableAmount: Money;
}

// ------ Debt ------
export type DebtType = "bank_loan" | "credit" | "personal" | "mortgage" | "installment" | "other";

export interface DebtEntry {
  id: ID;
  type: DebtType;
  label: string;
  labelFa: string;
  totalAmount: Money;
  remainingAmount: Money;
  interestRate: Percentage;
  monthlyPayment: Money;
  startDate: ISODateString;
  dueDate: ISODateString;
}

export interface DebtSummary {
  totalDebt: Money;
  totalMonthlyPayments: Money;
  debtToIncomeRatio: Percentage;
  entries: DebtEntry[];
}

// ------ Emergency Fund ------
export interface EmergencyFund {
  currentBalance: Money;
  monthlyExpenses: Money;
  targetMonths: number;         // e.g., 6
  targetAmount: Money;
  coverageMonths: number;       // current balance / monthly expenses
  progressPercentage: Percentage;
  status: HealthStatus;
}

// ------ Monthly Budget Plan ------
export interface MonthlyBudgetPlan {
  month: ISODateString;
  income: IncomeEntry[];
  expenses: ExpenseEntry[];
  summary: MonthlySavingsSummary;
  debtPayments: Money;
  investmentContributions: Money;
}