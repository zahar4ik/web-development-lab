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

  getById(id: string): Project | undefined {
    return this.items.find(item => item.id === id);
  }

  // --- Етап 3: Метод видалення ---
  deleteItem(id: string): void {
    // Перезаписуємо масив, залишаючи всі елементи, крім того, чий ID збігається
    this.items = this.items.filter(item => item.id !== id);
    console.log(`Проект з ID ${id} видалено з бази даних сервісу`);
  }
}