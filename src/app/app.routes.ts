import { Routes } from '@angular/router';
import { ProjectListComponent } from './features/projects/project-list/project-list.component';
import { ProjectDetailsComponent } from './features/projects/project-details/project-details.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';

export const routes: Routes = [
  // 1. Автоматичний редірект з порожнього шляху на список продуктів
  { path: '', redirectTo: 'products', pathMatch: 'full' },

  // 2. Маршрут для списку продуктів
  { path: 'products', component: ProjectListComponent },

  // 3. Маршрут для детального перегляду продукту (з динамічним ID)
  { path: 'product/:id', component: ProjectDetailsComponent },

  // 4. Wildcard маршрут для будь-якої неіснуючої адреси (має бути останнім!)
  { path: '**', component: NotFoundComponent }
];