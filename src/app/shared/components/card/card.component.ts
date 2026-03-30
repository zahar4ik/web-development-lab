import { Component, Input, Output, EventEmitter } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project, ProjectStatus } from '../../models/project';

// Переконайтеся, що файл реально лежить у папці shared/pipes/
// Якщо не знаходить, спробуйте переписати шлях за допомогою автодоповнення VS Code
import { TruncatePipe } from '../../pipes/truncate.pipe'; 

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