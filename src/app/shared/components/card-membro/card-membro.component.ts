import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-membro',
  standalone: true,
  imports: [],
  templateUrl: './card-membro.component.html',
  styleUrl: './card-membro.component.scss'
})
export class CardMembroComponent {
  @Input() nome: string = '';
  @Input() funcao: string = '';
  @Input() image: string = '';
  @Input() description: string = '';

}
