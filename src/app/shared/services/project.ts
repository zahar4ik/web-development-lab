import { Injectable } from '@angular/core';
import { Project, ProjectStatus } from '../models/project';
import { FilterOptions } from '../models/filter-options';
import { PROJECTS } from '../mock-data';
import { Observable, BehaviorSubject, of, delay, debounceTime, distinctUntilChanged, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private allItems: Project[] = PROJECTS;

  // Потік для даних
  private itemsSubject$ = new BehaviorSubject<Project[]>(this.allItems);
  public items$ = this.itemsSubject$.asObservable();

  // 2. Сабджект для налаштувань фільтрації
  private filterSubject$ = new BehaviorSubject<FilterOptions>({
    query: '',
    status: 'All'
  });

  constructor() {
    // 4. Налаштовуємо реакцію на зміни фільтра
    this.filterSubject$.pipe(
      debounceTime(500), // Чекаємо 0.5с, поки користувач друкує
      distinctUntilChanged((prev, curr) => 
        JSON.stringify(prev) === JSON.stringify(curr)
      ), // Не реагуємо, якщо нічого не змінилося
      map(options => {
        // Логіка фільтрації з ПР №4/5
        return this.allItems.filter(item => {
          const matchesQuery = item.title.toLowerCase().includes(options.query.toLowerCase().trim());
          const matchesStatus = options.status === 'All' || item.status === options.status;
          return matchesQuery && matchesStatus;
        });
      })
    ).subscribe(filteredResult => {
      // Оновлюємо головний потік, який бачить компонент через AsyncPipe
      this.itemsSubject$.next(filteredResult);
    });
  }

  // 3. Оновлений метод filterItems: просто штовхаємо нові значення в потік
  updateFilters(options: FilterOptions): void {
    this.filterSubject$.next(options);
  }

  getAll(): Observable<Project[]> {
    return this.items$.pipe(delay(1000));
  }

  deleteItem(id: string): void {
    this.allItems = this.allItems.filter(item => item.id !== id);
    // Після видалення треба оновити фільтр, щоб список перерахувався
    this.updateFilters(this.filterSubject$.value);
  }
}