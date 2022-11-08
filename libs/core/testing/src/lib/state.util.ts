import { EntityAdapter, EntityState } from '@ngrx/entity';

/**
 * Util for create configurable ngrx state
 * @param initialState Initial state ngrx feature
 */
export function crateGetState<T>(initialState: T): (data: Partial<T>) => T {
  return (data) => ({ ...initialState, ...data });
}

/**
 * Util for create configurable ngrx state with ngrx entity
 *
 * @param initialState Initial state ngrx feature
 * @param adapter Ngrx entity adapter
 */
export function crateGetEntityState<T, R>(
  initialState: T & EntityState<R>,
  adapter: EntityAdapter<R>
): (data?: Partial<T>, entities?: R[]) => T {
  return (data = {}, entities = []) => adapter.setAll(entities, { ...initialState, ...data });
}

/**
 * Stub for error
 */
export const ERROR_STUB = 'Unknown Error';
