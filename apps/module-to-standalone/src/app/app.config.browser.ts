import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';

import { appConfig } from './app.config';

const browserConfig: ApplicationConfig = {
  providers: [],
};

export const config = mergeApplicationConfig(appConfig, browserConfig);
