import { FactoryProvider, Type } from '@angular/core';
import { instance } from 'ts-mockito';

/**
 * Simple function for mock services ts-mockito
 *
 * @param token Angular token (injection token, injection service)
 * @param mockClass Mock class
 */
export function providerOf<T>(
  token:
    | Type<T>
    // eslint-disable-next-line @typescript-eslint/ban-types
    | (Function & {
        prototype: T;
      }),
  mockClass: T
): FactoryProvider {
  return {
    provide: token,
    useFactory: (): T => instance(mockClass),
  };
}
