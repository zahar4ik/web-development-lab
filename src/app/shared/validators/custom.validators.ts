import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Валідатор для перевірки заборонених слів
 * @param forbiddenName Регулярний вираз для пошуку забороненого слова
 */
export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // Перевіряємо, чи значення контролу відповідає регулярному виразу
    const isForbidden = forbiddenName.test(control.value);
    
    // Якщо знайдено заборонене слово — повертаємо об'єкт помилки, інакше null
    return isForbidden ? { forbiddenName: { value: control.value } } : null;
  };
}