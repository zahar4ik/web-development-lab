import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../shared/mock-data'; 
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, CardComponent], 
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  public projects = PROJECTS;
}