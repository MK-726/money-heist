// ============================================================
// Entry point — Money Heist
// ============================================================

import "../assets/css/variables.css";
import "../assets/css/tokens.css";
import "../assets/css/app.css";

import { App } from "./core/App";

import {
  dashboardModule,
  learnModule,
  analyzeModule,
  portfolioModule,
  budgetModule,
  roadmapModule,
} from "./features/placeholders";

const app = new App("#app");

app
  .register("dashboard", dashboardModule)
  .register("learn", learnModule)
  .register("analyze", analyzeModule)
  .register("portfolio", portfolioModule)
  .register("budget", budgetModule)
  .register("roadmap", roadmapModule)
  .start();
