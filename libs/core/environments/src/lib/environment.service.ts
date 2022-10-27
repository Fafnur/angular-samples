import { Inject, Injectable, Optional } from '@angular/core';

import { ENVIRONMENTS, Environments, ENVIRONMENTS_DEFAULT } from './environment.interface';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  private readonly environments: Environments;

  constructor(@Optional() @Inject(ENVIRONMENTS) environments: Partial<Environments> | null) {
    this.environments = { ...ENVIRONMENTS_DEFAULT, ...environments };
  }

  getEnvironments(): Environments {
    return this.environments;
  }
}
