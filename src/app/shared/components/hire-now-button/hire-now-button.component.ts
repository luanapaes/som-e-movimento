import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hire-now-button',
  standalone: true,
  imports: [],
  templateUrl: './hire-now-button.component.html',
  styleUrl: './hire-now-button.component.scss'
})
export class HireNowButtonComponent {
  @Input() textButton: string = '';
  @Input() altStyle: string = ''; //recebe o nome da classe para alterar o estilo do botão

  goToWhatsapp() {
    window.open('phone_number', '_blank');
  }
}
