import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true // Переконайся, що він standalone
})
export class TruncatePipe implements PipeTransform {

  /**
   * @param value - рядок, який потрібно обрізати
   * @param limit - максимальна кількість символів (за замовчуванням 50)
   */
  transform(value: string | null | undefined, limit: number = 50): string {
    // 1. Перевірка на порожній рядок або null
    if (!value) {
      return '';
    }

    // 2. Якщо довжина не перевищує ліміт — повертаємо оригінал
    if (value.length <= limit) {
      return value;
    }

    // 3. Обрізаємо та додаємо трикрапку
    return value.substring(0, limit) + '...';
  }
}