import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { Servicos } from '../../interfaces/servicos.interface';
import { ServicosComponent } from '../servicos/servicos.component';

@Component({
  selector: 'app-caroussel-servicos',
  standalone: true,
  imports: [
    CarouselModule,
    ButtonModule,
    TagModule,
    ServicosComponent
  ],
  templateUrl: './caroussel-servicos.component.html'
})
export class CarousselServicosComponent {

  servicosArray: Servicos[] = [
    {
      title: 'Casamentos',
      description: 'Torne seu casamento único com energia e emoção. Nossa banda eleva a celebração com performances cativantes que encantam todos os momentos.',
      image: '../../../../assets/images/casamentos.png',
      textButton: 'Faça Seu Casamento Inesquecível!'
    },
    {
      title: 'Festivais e Shows',
      description: 'Leve energia e qualidade para grandes eventos. Nossa banda domina o palco com performances vibrantes que conectam o público.',
      image: '../../../../assets/images/servicos.png',
      textButton: 'Reserve para Seu Festival'
    },
    {
      title: 'Bailes',
      description: 'Leve vida e animação para seu baile. Nossa banda transforma qualquer evento em uma festa vibrante, com performances que fazem todos dançarem.',
      image: '../../../../assets/images/bailes.png',
      textButton: 'Anime Seu Baile Agora!'
    }
  ]

  responsiveOptions: any[] | undefined;

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1024px', // Para telas grandes
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '768px', // Para tablets
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '480px', // Para celulares
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}
