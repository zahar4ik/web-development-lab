import { Routes } from '@angular/router';
import { ProjectListComponent } from './features/projects/project-list/project-list.component';

export const routes: Routes = [
  // 1. Якщо людина зайшла на головну, перекидаємо на /projects
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  // 2. Описуємо, що на /projects треба малювати список
  { path: 'projects', component: ProjectListComponent }
];