import { Component } from '@angular/core';

@Component({
  selector: 'app-hire-now-button',
  standalone: true,
  imports: [],
  templateUrl: './hire-now-button.component.html',
  styleUrl: './hire-now-button.component.scss'
})
export class HireNowButtonComponent {

  goToWhatsapp() {
    window.open('phone_number', '_blank');
  }
}
