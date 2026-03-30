import { Component, Input, Output, EventEmitter } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Додаємо імпорт для навігації
import { Project, ProjectStatus } from '../../models/project';

@Component({
  selector: 'web-card',
  standalone: true,
  imports: [CommonModule, RouterLink], // Додаємо RouterLink сюди
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input({ required: true }) project!: Project;
  @Output() addToCart = new EventEmitter<string>();

  protected readonly ProjectStatus = ProjectStatus;

  onBtnClick(): void {
    this.addToCart.emit(this.project.id);
  }
}