import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../../shared/components/card/card.component';
import { Project, ProjectStatus } from '../../../shared/models/project';

import { ProjectService } from '../../../shared/services/project'; 

@Component({
  selector: 'web-project-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent implements OnInit {
  public allProjects: Project[] = []; 
  public filteredProjects: Project[] = [];
  
  public searchQuery: string = '';
  public selectedStatus: string = 'All';
  public statusOptions = Object.values(ProjectStatus);

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.allProjects = this.projectService.getAll();
    this.filterItems(); 
  }

  public filterItems(): void {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredProjects = this.allProjects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(query);
      const matchesStatus = this.selectedStatus === 'All' || project.status === this.selectedStatus;
      return matchesSearch && matchesStatus;
    });
  }

  public resetFilters(input: HTMLInputElement): void {
    this.searchQuery = '';
    this.selectedStatus = 'All';
    this.filterItems();
    input.focus();
  }

  public handleCardAction(id: string): void {
    this.projectService.deleteItem(id);

    this.loadData();

    console.log(`Проект з ID: ${id} видалено. Список оновлено вручну.`);
  }
}