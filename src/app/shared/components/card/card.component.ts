import { Component, Input, Output, EventEmitter } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project, ProjectStatus } from '../../models/project';
import { TruncatePipe } from '../../pipes/truncate.pipe'; 
import { StatusColorPipe } from '../../pipes/status-color.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'web-card',
  standalone: true,
  imports: [CommonModule, RouterLink, TruncatePipe, StatusColorPipe, HighlightDirective], 
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