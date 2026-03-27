import { Component } from '@angular/core';
import { AppInfo } from '../../shared/models/appInfo';

@Component({
  selector: 'web-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  // Объект согласно интерфейсу
  public footerConfig: AppInfo = {
    title: 'Web Dev Studio',
    year: new Date().getFullYear() // Эта строчка сама поставит 2026 год
  };
}