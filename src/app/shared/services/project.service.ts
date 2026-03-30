import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs'; // 1. Додаємо of та throwError
import { catchError, tap } from 'rxjs/operators'; // 2. Додаємо catchError
import { ToastrService } from 'ngx-toastr';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private http = inject(HttpClient);
  private toastr = inject(ToastrService);

  private itemsSubject$ = new BehaviorSubject<Project[]>([]);
  public items$ = this.itemsSubject$.asObservable();

  constructor() {
    this.loadInitialData();
  }

  /**
   * Читання даних з обробкою помилок
   */
  public loadInitialData(): void {
    this.http.get<Project[]>('projects').pipe(
      catchError(error => {
        this.toastr.error('Не вдалося з\'єднатися з сервером', 'Помилка мережі');
        // Повертаємо порожній масив, щоб додаток не зламався
        return of([]); 
      })
    ).subscribe(data => {
      this.itemsSubject$.next(data);
    });
  }

  /**
   * Створення з обробкою помилок
   */
  public addItem(item: Project): void {
    this.http.post<Project>('projects', item).pipe(
      catchError(error => {
        this.toastr.error('Помилка при збереженні даних', 'Помилка');
        return throwError(() => error);
      })
    ).subscribe(() => {
      this.loadInitialData();
      this.toastr.success('Проект успішно створено!', 'Успіх');
    });
  }

  /**
   * Видалення з обробкою помилок
   */
  public deleteItem(id: string): void {
    this.http.delete(`projects/${id}`).pipe(
      catchError(error => {
        this.toastr.error('Не вдалося видалити проект. Сервер недоступний', 'Помилка');
        return throwError(() => error);
      })
    ).subscribe(() => {
      const currentItems = this.itemsSubject$.value.filter(p => p.id !== id);
      this.itemsSubject$.next(currentItems);
      this.toastr.info('Проект видалено', 'Інфо');
    });
  }
}