import 'hammerjs';

import { ApplicationConfig, importProvidersFrom, mergeApplicationConfig } from '@angular/core';
import { HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { HammerConfig } from '@angular-samples/core/hammer';

import { appConfig } from './app.config';

const browserConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    importProvidersFrom(HammerModule),
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig,
    },
  ],
};

export const config = mergeApplicationConfig(appConfig, browserConfig);
