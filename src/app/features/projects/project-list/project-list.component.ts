import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../../shared/components/card/card.component';
import { ProjectStatus, Project } from '../../../shared/models/project';
import { ProjectService } from '../../../shared/services/project'; 

@Component({
  selector: 'web-project-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent implements OnInit {
  public filteredProjects: Project[] = [];
  
  public searchQuery: string = '';
  public selectedStatus: string = 'All';
  public statusOptions = Object.values(ProjectStatus);

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.filterItems();
  }

  public filterItems(): void {
    this.filteredProjects = this.projectService.getFilteredItems(
      this.searchQuery, 
      this.selectedStatus
    );
  }

  public resetFilters(input: HTMLInputElement): void {
    this.searchQuery = '';
    this.selectedStatus = 'All';
    this.filterItems();
    input.focus();
  }

  public handleCardAction(id: string): void {
    this.projectService.deleteItem(id);
    
    this.filterItems();

    console.log(`Проект ${id} видалено. Список оновлено через сервіс.`);
  }
}