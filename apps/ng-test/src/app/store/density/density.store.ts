import { signalStore, withState, withMethods, withHooks, patchState } from '@ngrx/signals';

export type DensityMode = 'default' | 'comfortable' | 'compact' | 'super-compact';

interface DensityState {
  mode: DensityMode;
}

const DENSITY_STORAGE_KEY = 'density-mode';

export const DensityStore = signalStore(
  { providedIn: 'root' },
  withState<DensityState>({
    mode: 'default'
  }),
  withMethods((store) => ({
    setMode(mode: DensityMode): void {
      patchState(store, { mode });
      localStorage.setItem(DENSITY_STORAGE_KEY, mode);
    },
    loadFromStorage(): void {
      const savedMode = localStorage.getItem(DENSITY_STORAGE_KEY) as DensityMode | null;
      if (savedMode) {
        patchState(store, { mode: savedMode });
      }
    }
  })),
  withHooks({
    onInit(store) {
      store.loadFromStorage();
    }
  })
);

