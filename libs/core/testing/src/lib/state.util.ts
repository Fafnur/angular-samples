import { EntityAdapter, EntityState } from '@ngrx/entity/src/models';

export function crateGetState<T>(initialState: T): (data: Partial<T>) => T {
  return (data) => ({ ...initialState, ...data });
}

export function crateGetEntityState<T, R>(
  initialState: T & EntityState<R>,
  adapter: EntityAdapter<R>
): (data?: Partial<T>, entities?: R[]) => T {
  return (data = {}, entities = []) => adapter.setAll(entities, { ...initialState, ...data });
}

export const ERROR_STUB = 'Unknown Error';
