import { Routes } from '@angular/router'; // Імпорт типу Routes
// Імпорти всіх твоїх компонентів:
import { ProjectListComponent } from './features/projects/project-list/project-list.component';
import { ProductFormComponent } from './features/product-form/product-form.component';
import { ProjectDetailsComponent } from './features/projects/project-details/project-details.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProjectListComponent },
  
  // Маршрут для форми (має бути вище за :id)
  { path: 'product/new', component: ProductFormComponent }, 
  
  { path: 'product/:id', component: ProjectDetailsComponent },
  { path: '**', component: NotFoundComponent }
];