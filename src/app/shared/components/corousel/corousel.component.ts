import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Image } from '../../interfaces/image.interface';

@Component({
  selector: 'app-corousel',
  standalone: true,
  imports: [
    CarouselModule, ButtonModule, TagModule
  ],
  templateUrl: './corousel.component.html',
  styleUrl: './corousel.component.scss'
})
export class CorouselComponent implements OnInit {

  responsiveOptions: any[] | undefined;
  
  images: Image[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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

    this.images = [
      {name: "sem-1"},
      {name: "sem-2"},
      { name: "sem-4"}
    ]
  }


  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'unknown';
    }
  }

}
