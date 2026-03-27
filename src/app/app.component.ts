import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ProjectListComponent } from './features/projects/project-list/project-list.component';

@Component({
  selector: 'web-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ProjectListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-app';
}