import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'web-not-found',
  standalone: true,
  imports: [RouterLink], // Обов'язково додаємо RouterLink
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {}