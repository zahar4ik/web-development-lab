import { Pipe, PipeTransform } from '@angular/core';
import { ProjectStatus } from '../models/project'; 

@Pipe({
  name: 'statusColor',
  standalone: true
})
export class StatusColorPipe implements PipeTransform {

  transform(status: ProjectStatus): string {
    switch (status) {
      case ProjectStatus.Active:
        return '#2196F3'; // Синій (В процесі)
      case ProjectStatus.Completed:
        return '#4CAF50'; // Зелений (Завершено)
      case ProjectStatus.Archived:
        return '#F44336'; // Червоний (В архіві)
      default:
        return '#9E9E9E'; // Сірий за замовчуванням
    }
  }
}