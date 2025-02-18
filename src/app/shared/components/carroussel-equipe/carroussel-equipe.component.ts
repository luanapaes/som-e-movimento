import { Component } from '@angular/core';
import { Membro } from '../../interfaces/membro.interface';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CardMembroComponent } from "../card-membro/card-membro.component";

@Component({
  selector: 'app-carroussel-equipe',
  standalone: true,
  imports: [
    CarouselModule,
    ButtonModule,
    TagModule,
    CardMembroComponent
],
  templateUrl: './carroussel-equipe.component.html',
  styleUrl: './carroussel-equipe.component.scss'
})
export class CarrousselEquipeComponent {
  responsiveOptions: any[] | undefined;

  equipeArray: Membro[] = [
    {
      nome: "Luis Carneiro",
      funcao: "Diretor & Presidente",
      description: "Músico, educador e líder cultural, Luis Carneiro é o coração por trás da Orquestra e Banda Som & Movimento. Como presidente do Instituto Luiz Carneiro (ILC), ele coordena projetos sociais e culturais voltados para crianças, jovens e famílias em situação de vulnerabilidade. Idealizador do Projeto Vamos Reviver, já representou sua visão musical em conferências globais. Com mais de 20 anos de experiência na música e 12 anos dedicados à produção cultural, Luiz transforma cada apresentação em uma experiência única e inesquecível.",
      image: 'assets/images/equipe/luiscarneiro.png'
    },
    {
      nome: "Pedro Bispo",
      funcao: "Maestro & Regente",
      description: "Pedro Bispo, mais conhecido como Maestro Pedrinho, é um músico multifacetado com uma trajetória brilhante. Desde os 15 anos, passou por diversas bandas e grupos recreativos, construindo um repertório vasto e uma sensibilidade musical apurada. Sua carreira ganhou novos rumos ao ingressar na Polícia Militar, onde iniciou como corneteiro antes de migrar para o saxofone. Hoje, assume com maestria a regência da Banda do Colégio Militar do Recife, trazendo sua experiência e paixão para cada performance da Orquestra e Banda Som & Movimento.",
      image: 'assets/images/equipe/pedrobispo.png'
    },
    {
      nome: "Elinaldo Martins",
      funcao: "Tombone",
      description: "Com um som profundo e marcante, Elinaldo Martins dá vida às melodias da Orquestra e Banda Som & Movimento. Sua jornada musical começou aos 16 anos na banda do colégio e o levou ao Conservatório Pernambucano de Música, onde refinou sua técnica. Inspirado a seguir carreira profissional, prestou concurso para uma banda militar e, ao longo dos anos, integrou diversos grupos de diferentes estilos. Hoje, sua versatilidade e musicalidade elevam o repertório da banda, indo além do frevo e samba para explorar novas sonoridades.",
      image: 'assets/images/equipe/elinaldomartins.png'
    },
    {
      nome: "Eduardo José",
      funcao: "Percussão",
      description: "Eduardo José é um percussionista talentoso, reconhecido por sua maestria com o surdo e outros instrumentos de percussão. Com mais de uma década de experiência, ele imprime uma pulsação vibrante a ritmos como frevo e samba, elevando cada apresentação a um novo nível. Sua trajetória inclui performances em grandes eventos culturais e colaborações com renomados artistas da cena musical brasileira. Além da percussão, Eduardo também tem grande habilidade com a bateria, tornando-o um músico versátil e essencial para a sonoridade da banda.",
      image: 'assets/images/equipe/eduardojose.png'
    },
    {
      nome: "Bruno Araújo",
      funcao: "Bateria",
      description: "Bruno Araújo começou sua trajetória musical no saxofone, mas foi ao se inspirar em ícones como Ginger Baker (Cream) e João Barone (Paralamas do Sucesso) que encontrou sua verdadeira paixão pela bateria. Com experiência em bandas marciais e musicais, ele traz uma energia contagiante e uma pegada única para cada show. Além da bateria, Bruno domina diversos instrumentos de percussão, como surdo e caixa, garantindo performances intensas e cheias de ritmo.",
      image: 'assets/images/equipe/bruno.png'
    },
    {
      nome: "Jorge Darllan",
      funcao: "Saxofone",
      description: "Jorge Darllan é o mais jovem integrante da banda, mas sua dedicação e talento o destacam como uma promessa da música. Sua jornada começou no Instituto Luiz Carneiro (ILC), onde aprendeu suas primeiras notas no clarinete. Com uma paixão crescente pela música, rapidamente migrou para o saxofone alto, explorando novas possibilidades sonoras. Sua habilidade e sensibilidade musical trazem melodias envolventes, enriquecendo o repertório da banda e encantando o público a cada apresentação.",
      image: 'assets/images/equipe/perfil-jorgedarllan.png'
    },
  ];

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
