// ============================================================
// All investable asset classes tracked in Portfolio.
// ============================================================

import type { ID, Money, ISODateString, Percentage, CurrencyCode } from "./primitives";

// ------ Asset Class Taxonomy ------
export type AssetClass =
  | "cash"
  | "gold"
  | "etf"
  | "crypto"
  | "stock"
  | "bond"
  | "real_estate"
  | "insurance"
  | "other";

// ------ Base Asset ------
export interface BaseAsset {
  id: ID;
  name: string;
  nameFa: string;
  assetClass: AssetClass;
  currentValue: Money;
  purchaseValue: Money;
  purchaseDate: ISODateString;
  notes?: string;
}

// ------ Cash ------
export interface CashAsset extends BaseAsset {
  assetClass: "cash";
  currency: CurrencyCode;
  institution?: string; // bank name
}

// ------ Gold ------
export type GoldType = "coin_bahar" | "coin_half" | "coin_quarter" | "coin_gerami" | "bullion" | "pahlavi_coin_quarter" | "jewelry";

export interface GoldAsset extends BaseAsset {
  assetClass: "gold";
  goldType: GoldType;
  weightGrams?: number;
  quantity?: number;
}

// ------ ETF ------
export interface ETFAsset extends BaseAsset {
  assetClass: "etf";
  ticker: string;
  exchange: string;
  shares: number;
  pricePerShare: Money;
  expenseRatio?: Percentage;
}

// ------ Crypto ------
export interface CryptoAsset extends BaseAsset {
  assetClass: "crypto";
  symbol: string; // BTC, ETH, USDT
  quantity: number;
  pricePerUnit: Money;
  walletType?: "cold" | "hot" | "exchange";
}

// ------ Insurance ------
export type InsuranceType = "life" | "term" | "whole" | "investment_linked";

export interface InsuranceAsset extends BaseAsset {
  assetClass: "insurance";
  insuranceType: InsuranceType;
  provider: string;
  coverageAmount: Money;
  monthlyPremium: Money;
  maturityDate?: ISODateString;
  cashValue?: Money;
}

// ------ Union ------
export type Asset =
  | CashAsset
  | GoldAsset
  | ETFAsset
  | CryptoAsset
  | InsuranceAsset
  | BaseAsset;

// ------ Allocation ------
export interface AllocationEntry {
  assetClass: AssetClass;
  value: Money;
  percentage: Percentage;
}

export interface AssetAllocation {
  total: Money;
  entries: AllocationEntry[];
  asOf: ISODateString;
}

// ------ Transaction ------
export type TransactionType = "buy" | "sell" | "transfer_in" | "transfer_out" | "contribution" | "dividend";

export interface AssetTransaction {
  id: ID;
  assetId: ID;
  type: TransactionType;
  amount: Money;
  date: ISODateString;
  notes?: string;
}