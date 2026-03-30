import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; // 1. Імпортуємо Router для навігації
import { ProjectStatus } from '../../shared/models/project'; 
import { ProjectService } from '../../shared/services/project'; // 2. Імпортуємо сервіс
import { forbiddenNameValidator } from '../../shared/validators/custom.validators';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  private fb = inject(FormBuilder);
  private projectService = inject(ProjectService); // 3. Інжектуємо сервіс проектів
  private router = inject(Router); // 4. Інжектуємо роутер

  public form: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/admin/i)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    price: [0, [Validators.required, Validators.min(0)]],
    status: [ProjectStatus.Active, [Validators.required]],
    imageUrl: ['', [Validators.required, Validators.pattern('https?://.+')]],
    releaseDate: [new Date().toISOString().substring(0, 10), [Validators.required]]
  });

  public statusOptions = Object.values(ProjectStatus);

  /**
   * ЕТАП 6: Збереження та Навігація
   */
  onSubmit(): void {
    if (this.form.valid) {
      // 1. Отримуємо всі дані з форми
      const rawValue = this.form.getRawValue();

      // 2. Формуємо новий об'єкт проекту з унікальним ID
      const newProject = {
        ...rawValue,
        id: Date.now().toString(), // Генеруємо унікальний ID на основі часу
        tags: [], // Можна додати дефолтні значення, якщо вони обов'язкові в моделі
        quantity: 1 // Наприклад, початкова кількість
      };

      // 3. Викликаємо метод сервісу для додавання
      this.projectService.addItem(newProject);

      console.log('Проект успішно додано:', newProject);

      // 4. Програмно перенаправляємо користувача назад до списку
      this.router.navigate(['/products']);
      
    } else {
      // Якщо форма невалідна, підсвічуємо помилки
      this.form.markAllAsTouched();
    }
  }
}