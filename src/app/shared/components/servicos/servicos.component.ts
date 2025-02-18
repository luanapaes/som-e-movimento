import { Component, Input } from '@angular/core';
import { HireNowButtonComponent } from '../hire-now-button/hire-now-button.component';
import { Servicos } from '../../interfaces/servicos.interface';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [
    HireNowButtonComponent
  ],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent {
 @Input() title: string = '';
 @Input() description: string = '';
 @Input() image: string = '';
 @Input() text: string = '';
}
