// ============================================================
// Generic reactive store.
// Usage:
//   const store = new Store({ count: 0 });
//   store.subscribe(state => console.log(state.count));
//   store.setState({ count: 1 });
// ============================================================

export type Listener<T> = (state: T) => void;
export type Selector<T, R> = (state: T) => R;

export class Store<T extends object> {
  private state: T;
  private listeners: Set<Listener<T>> = new Set();

  constructor(initialState: T) {
    this.state = initialState;
  }

  getState(): Readonly<T> {
    return this.state;
  }

  setState(partial: Partial<T>): void {
    this.state = { ...this.state, ...partial };
    this.notify();
  }

  // Fine-grained update via updater function — useful for nested state
  update(updater: (state: T) => T): void {
    this.state = updater(this.state);
    this.notify();
  }

  subscribe(listener: Listener<T>): () => void {
    this.listeners.add(listener);
    // Return unsubscribe function
    return () => this.listeners.delete(listener);
  }

  // Subscribe to a derived slice — only fires when the selected value changes
  select<R>(selector: Selector<T, R>, listener: (value: R) => void): () => void {
    let previous = selector(this.state);

    return this.subscribe(state => {
      const next = selector(state);
      if (next !== previous) {
        previous = next;
        listener(next);
      }
    });
  }

  private notify(): void {
    this.listeners.forEach(listener => listener(this.state));
  }
}