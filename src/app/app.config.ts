import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// 1. Додаємо імпорт withComponentInputBinding
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // 2. Додаємо утиліту в provideRouter
    provideRouter(routes, withComponentInputBinding())
  ]
};