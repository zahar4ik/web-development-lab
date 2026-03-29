import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../../shared/components/card/card.component';
import { ProjectStatus, Project } from '../../../shared/models/project';
import { ProjectService } from '../../../shared/services/project'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'web-project-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent implements OnInit {
  // Потік даних, який ми виводимо в HTML через AsyncPipe
  public projects$: Observable<Project[]>;
  
  public searchQuery: string = '';
  public selectedStatus: string = 'All';
  public statusOptions = Object.values(ProjectStatus);

  constructor(private projectService: ProjectService) {
    // Одразу ініціалізуємо потік із сервісу
    this.projects$ = this.projectService.items$;
  }

  ngOnInit(): void {
    // При завантаженні просто показуємо всі проекти через сервіс
    this.filterItems();
  }

  /**
   * Етап 4: Тепер цей метод НЕ фільтрує масив вручну.
   * Він просто передає об'єкт з налаштуваннями у "реактивний мізок" сервісу.
   */
  public filterItems(): void {
    this.projectService.updateFilters({
      query: this.searchQuery,
      status: this.selectedStatus
    });
  }

  public resetFilters(inputElement: HTMLInputElement): void {
    this.searchQuery = '';
    this.selectedStatus = 'All';
    this.filterItems(); // Відправляємо порожній фільтр у сервіс
    if (inputElement) inputElement.focus();
  }

  public handleCardAction(id: string): void {
    // Видаляємо проект через сервіс
    this.projectService.deleteItem(id);
    // Оскільки ми в сервісі підписані на зміни, список оновиться автоматично!
  }
}