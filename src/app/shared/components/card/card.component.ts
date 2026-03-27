import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Для пайпов date, currency, и т.д.
import { Project } from '../../models/project';

@Component({
  selector: 'app-card', // Или твой префикс, например 'shop-card'
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  // Настройка { required: true } гарантирует, что компонент не будет создан без данных
  @Input({ required: true }) project!: Project;
}