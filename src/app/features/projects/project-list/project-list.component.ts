import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'; 
import { CardComponent } from '../../../shared/components/card/card.component';
import { ProjectStatus, Project } from '../../../shared/models/project';
import { ProjectService } from '../../../shared/services/project'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'web-project-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, RouterLink],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent implements OnInit {
  // 1. Інжектуємо сервіс через inject (більш сучасний підхід)
  private projectService = inject(ProjectService);

  // 2. Оголошуємо ВСІ змінні, які потребує HTML-шаблон
  public projects$: Observable<Project[]> = this.projectService.items$;
  public searchQuery: string = '';
  public selectedStatus: string = 'All';
  public statusOptions = Object.values(ProjectStatus);

  // 3. Реалізуємо ngOnInit (вимагається через implements OnInit)
  ngOnInit(): void {
    this.filterItems();
  }

  // 4. Метод для фільтрації
  public filterItems(): void {
    this.projectService.updateFilters({
      query: this.searchQuery,
      status: this.selectedStatus
    });
  }

  // 5. Метод для скидання фільтрів
  public resetFilters(inputElement: HTMLInputElement): void {
    this.searchQuery = '';
    this.selectedStatus = 'All';
    this.filterItems();
    if (inputElement) inputElement.focus();
  }

  // 6. Метод для видалення (або іншої дії з карткою)
  public handleCardAction(id: string): void {
    this.projectService.deleteItem(id);
  }
}