import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { PROJECTS } from '../../../shared/mock-data';
import { CardComponent } from '../../../shared/components/card/card.component';
import { Project, ProjectStatus } from '../../../shared/models/project'; 

@Component({
  selector: 'web-project-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent], 
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent implements OnInit {
  private allProjects: Project[] = PROJECTS;
  public filteredProjects: Project[] = [];
  
  public searchQuery: string = '';
  public selectedStatus: string = 'All'; 
  public statusOptions = Object.values(ProjectStatus);

  ngOnInit(): void {
    this.filteredProjects = [...this.allProjects];
  }

  public filterItems(): void {
    const query = this.searchQuery.toLowerCase().trim();

    this.filteredProjects = this.allProjects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(query);
      const matchesStatus = this.selectedStatus === 'All' || project.status === this.selectedStatus;
      return matchesSearch && matchesStatus;
    });
  }

  public resetFilters(inputElement: HTMLInputElement): void {
    this.searchQuery = '';
    this.selectedStatus = 'All';

    this.filterItems();

    inputElement.focus();
  }
  
  public handleCardAction(id: string): void {
    console.log(`Користувач натиснув кнопку на товарі з ID: ${id}`);
  }
}