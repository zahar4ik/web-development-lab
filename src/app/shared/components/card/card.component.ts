import { Component, Input, Output, EventEmitter } from '@angular/core'; 
import { CommonModule } from '@angular/common';
// Добавляем импорт ProjectStatus (предположительно из того же файла)
import { Project, ProjectStatus } from '../../models/project';

@Component({
  selector: 'web-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input({ required: true }) project!: Project;
  @Output() addToCart = new EventEmitter<string>();

  // Делаем Enum доступным в шаблоне HTML
  protected readonly ProjectStatus = ProjectStatus;

  onBtnClick(): void {
    this.addToCart.emit(this.project.id);
  }
}