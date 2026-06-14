// ============================================================
// Education content structure — topics, articles, glossary.
// ============================================================

import type { ID, ISODateString } from "./primitives";

// ------ Category ------
export type LearnCategory =
  | "macroeconomics"
  | "asset_classes"
  | "personal_finance"
  | "investing_psychology"
  | "knowledge_base";

export type LearnTopic =
  // Macroeconomics
  | "iran_economy"
  | "inflation"
  | "currency_devaluation"
  | "purchasing_power"
  | "geopolitical_risks"
  // Asset Classes
  | "gold"
  | "bitcoin"
  | "crypto"
  | "etfs"
  | "stocks"
  | "bonds"
  | "insurance"
  // Personal Finance
  | "budgeting"
  | "cash_flow"
  | "debt_management"
  | "emergency_funds"
  | "financial_migration"
  // Psychology
  | "behavioral_biases"
  | "risk_tolerance"
  | "decision_making"
  | "long_term_thinking"
  // Reference
  | "glossary"
  | "resources";

// ------ Article ------
export type ContentDifficulty = "beginner" | "intermediate" | "advanced";

export type ContentFormat = "article" | "guide" | "checklist" | "reference" | "case_study";

export interface LearnArticle {
  id: ID;
  title: string;
  titleFa: string;
  summary: string;
  summaryFa: string;
  category: LearnCategory;
  topic: LearnTopic;
  difficulty: ContentDifficulty;
  format: ContentFormat;
  estimatedReadMinutes: number;
  tags: string[];
  relatedTopics: LearnTopic[];
  publishedAt: ISODateString;
  updatedAt: ISODateString;
  isBookmarked?: boolean;
  isRead?: boolean;
}

// ------ Glossary ------
export interface GlossaryTerm {
  id: ID;
  term: string;
  termFa: string;
  definition: string;
  definitionFa: string;
  topic: LearnTopic;
  relatedTerms?: string[];
}

// ------ Learn Progress ------
export interface LearnProgress {
  topicsRead: LearnTopic[];
  articlesRead: ID[];
  bookmarkedArticles: ID[];
  completionByCategory: Record<LearnCategory, number>; // 0–100
}