import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { PROJECTS } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private items: Project[] = PROJECTS;

  constructor() { }

  getAll(): Project[] {
    return [...this.items];
  }

  deleteItem(id: string): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  // --- Етап 6: Логіка фільтрації тепер тут ---
  getFilteredItems(query: string, status: string): Project[] {
    const lowerQuery = query.toLowerCase().trim();

    return this.items.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(lowerQuery);
      const matchesStatus = status === 'All' || project.status === status;
      
      return matchesSearch && matchesStatus;
    });
  }
}