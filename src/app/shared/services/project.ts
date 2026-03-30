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
   * ЕТАП 2: Пошук проекту за ID
   * Додаємо цей метод для 7-ї лабораторної
   */
  public getById(id: number | string): Observable<Project | undefined> {
    // Шукаємо проект у масиві allItems за ідентифікатором
    const project = this.allItems.find(item => item.id.toString() === id.toString());
    
    // Повертаємо Observable з результатом та затримкою 1с
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