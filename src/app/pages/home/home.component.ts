import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { CorouselComponent } from '../../shared/components/corousel/corousel.component';
import { HireNowButtonComponent } from '../../shared/components/hire-now-button/hire-now-button.component';
import { CarousselServicosComponent } from "../../shared/components/caroussel-servicos/caroussel-servicos.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    CorouselComponent,
    HireNowButtonComponent,
    CarousselServicosComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
