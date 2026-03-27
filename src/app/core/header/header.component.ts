import { Component } from '@angular/core';
import { AppInfo } from '../../shared/models/appInfo';

@Component({
  selector: 'web-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public headerConfig: AppInfo = {
    title: 'Web Dev Studio',
    year: 2026
  };
}