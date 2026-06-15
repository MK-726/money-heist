// ============================================================
// Every feature module must implement this interface.
// The router calls mount() when navigating to the feature
// and unmount() when leaving it.
// ============================================================

export interface FeatureModule {
  mount(container: HTMLElement): void;
  unmount(): void;
}
