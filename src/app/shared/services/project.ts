import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { FilterOptions } from '../models/filter-options';
import { PROJECTS } from '../mock-data';
import { Observable, BehaviorSubject, of, delay, debounceTime, distinctUntilChanged, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private allItems: Project[] = PROJECTS;

  // Потік для списку даних
  private itemsSubject$ = new BehaviorSubject<Project[]>(this.allItems);
  public items$ = this.itemsSubject$.asObservable();

  // Сабджект для налаштувань фільтрації
  private filterSubject$ = new BehaviorSubject<FilterOptions>({
    query: '',
    status: 'All'
  });

  constructor() {
    this.filterSubject$.pipe(
      debounceTime(500),
      distinctUntilChanged((prev, curr) => 
        JSON.stringify(prev) === JSON.stringify(curr)
      ),
      map(options => {
        return this.allItems.filter(item => {
          const matchesQuery = item.title.toLowerCase().includes(options.query.toLowerCase().trim());
          const matchesStatus = options.status === 'All' || item.status === options.status;
          return matchesQuery && matchesStatus;
        });
      })
    ).subscribe(filteredResult => {
      this.itemsSubject$.next(filteredResult);
    });
  }

  /**
   * ЕТАП 1 (Лаба 9): Додавання нового проекту
   */
  public addItem(newItem: Project): void {
    // 1. Оновлюємо локальний масив (master list)
    // Використовуємо spread-оператор для імутабельності (хороша практика)
    this.allItems = [...this.allItems, newItem];

    // 2. Оновлюємо потік даних. 
    // Оскільки конструктор автоматично реагує на filterSubject$, 
    // ми просто "штовхаємо" поточні фільтри, щоб новий елемент з'явився у списку.
    this.updateFilters(this.filterSubject$.value);
  }

  /**
   * ЕТАП 2: Пошук проекту за ID
   */
  public getById(id: number | string): Observable<Project | undefined> {
    const project = this.allItems.find(item => item.id.toString() === id.toString());
    
    return of(project).pipe(
      delay(1000)
    );
  }

  updateFilters(options: FilterOptions): void {
    this.filterSubject$.next(options);
  }

  getAll(): Observable<Project[]> {
    return this.items$.pipe(delay(1000));
  }

  deleteItem(id: string): void {
    this.allItems = this.allItems.filter(item => item.id !== id);
    this.updateFilters(this.filterSubject$.value);
  }
}