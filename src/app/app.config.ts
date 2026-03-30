import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes'; // <-- ПЕРЕВІР, ЩО ІМПОРТ САМЕ З ЦЬОГО ФАЙЛУ

export const appConfig: ApplicationConfig = {
  providers: [
    // Передаємо наші routes і вмикаємо binding
    provideRouter(routes, withComponentInputBinding())
  ]
};