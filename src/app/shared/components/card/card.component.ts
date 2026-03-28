import { Component, Input, Output, EventEmitter } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project';

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

  onBtnClick(): void {
    this.addToCart.emit(this.project.id);
  }
}