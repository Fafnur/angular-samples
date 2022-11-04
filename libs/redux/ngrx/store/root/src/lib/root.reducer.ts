import { Params } from '@angular/router';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

/**
 * Custom snapshot interface for RouterReducerState
 */
export interface RouterReducerStateExtended<T extends Record<string, unknown> = Record<string, unknown>> {
  url: string;
  params: Params;
  queryParams: Params;
  data?: T;
}

/**
 * Root state. The future state will be added to this state dynamically.
 */
export interface RootState {
  router: RouterReducerState<RouterReducerStateExtended> | null;
}

/**
 * Dictionary root reducers
 */
export const rootReducers: ActionReducerMap<RootState> = {
  router: routerReducer,
};

/**
 * Initial state for root state.
 */
export const rootInitialState: RootState = {
  router: null,
};
