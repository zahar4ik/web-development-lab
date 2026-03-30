import { Component, Input, Output, EventEmitter } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Додаємо імпорт для навігації
import { Project, ProjectStatus } from '../../models/project';
import { TruncatePipe } from '../pipes/truncate.pipe';

@Component({
  selector: 'web-card',
  standalone: true,
  imports: [CommonModule, RouterLink, TruncatePipe],
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