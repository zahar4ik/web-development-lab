import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// ДОДАЙТЕ ЦЕЙ РЯДОК:
import { RouterLink } from '@angular/router'; 

import { Observable } from 'rxjs';
import { Project } from '../../../shared/models/project';
import { ProjectService } from '../../../shared/services/project';

@Component({
  selector: 'web-project-details',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit {
  // Ім'я 'id' має збігатися з :id у файлі app.routes.ts
  @Input() id!: string; 
  
  public project$: Observable<Project | undefined> | undefined;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    if (this.id) {
      // Викликаємо метод з Етапу 2
      this.project$ = this.projectService.getById(this.id);
    }
  }
}