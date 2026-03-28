import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../../shared/mock-data';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'web-project-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent {
  public projects = PROJECTS;

  handleCardAction(id: string): void {
    console.log(`Користувач натиснув кнопку на товарі з ID: ${id}`);
    alert(`Товар з ID ${id} додано до кошика!`);
  }
}