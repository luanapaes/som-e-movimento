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
  responsividade = 0;

  equipeArray: Membro[] = [
    {
      nome: "Luis Carneiro",
      funcao: "Diretor & Presidente",
      description: "Músico, educador e líder cultural, Luis Carneiro é o coração por trás da Orquestra e Banda Som & Movimento. Como presidente do Instituto Luiz Carneiro (ILC), ele coordena projetos sociais e culturais voltados para crianças, jovens e famílias em situação de vulnerabilidade. Idealizador do Projeto Vamos Reviver, já representou sua visão musical em conferências globais. Com mais de 20 anos de experiência na música e 12 anos dedicados à produção cultural, Luiz transforma cada apresentação em uma experiência única e inesquecível.",
      image: 'assets/images/equipe/luiscarneiro.png'
    },
    {
      nome: "Hercílio Jr.",
      funcao: "Maestro",
      description: "Agora apresentamos o Maestro Hercílio Jr., nosso trompetista, que traz brilho e potência às nossas músicas. Começou sua jornada musical aos treze (13) anos de idade, inspirado pelos toques das bandas, ingressou na Filarmônica da escola Prof. cândido Duarte, passou pelo surdo, caixa, corneta e então o trompete, desenvolveu habilidade e experiência participando de diversas bandas. Mais tarde ingressou no Centro de Criatividade Musical e tirou o Curso de Formação Técnica em Regência Coral e Instrumental, hoje também atua como Produtor Cultural e Músico Trompetista. Suas habilidades adiciona uma energia vibrante à nossa sonoridade.",
      image: "assets/images/equipe/herciliojr.png"
    },
    {
      nome: "Pedro Bispo",
      funcao: "Maestro & Regente",
      description: "Pedro Bispo, mais conhecido como Maestro Pedrinho, é um músico multifacetado com uma trajetória brilhante. Desde os 15 anos, passou por diversas bandas e grupos recreativos, construindo um repertório vasto e uma sensibilidade musical apurada. Sua carreira ganhou novos rumos ao ingressar na Polícia Militar, onde iniciou como corneteiro antes de migrar para o saxofone. Hoje, assume com maestria a regência da Banda do Colégio Militar do Recife, trazendo sua experiência e paixão para cada performance da Orquestra e Banda Som & Movimento.",
      image: 'assets/images/equipe/pedrobispo.png'
    },
    {
      nome: "Kadú Bear",
      funcao: "Vocal",
      description: "Apresentamos o coração da nossa música, nosso vocalista, Kadú Bear, que traz vida às letras com sua voz poderosa. Cantor de vários estilos musicais passou por diversas bandas de renome como o Forró da Malu, grupo Sol Menores, entre outros, atualmente compõe a Orquestra e Banda Som & Movimento, porém, pretende lançar um álbum e fazer carreira solo.",
      image: 'assets/images/equipe/kadubear.png'
    },
    {
      nome: "Elinaldo Martins",
      funcao: "Trombone",
      description: "Em seguida temos Elinaldo Martins, nosso trombonista, cuja profundidade e riqueza de som elevam nossas composições. Elinaldo começou a tocar aos dezesseis (16) anos na banda o colégio no qual estudou, depois ingressou no Conservatório Pernambucano de Música onde foi influenciado anos depois a prestar concurso para a banda militar, sua trajetória inclui as experiências vivenciadas através das diversas bandas com estilos diferentes, o mesmo identificou-se com a Orquestra e Banda Som & Movimento pelo seu repertório variado que vai do frevo ao samba e outros estilos.",
      image: 'assets/images/equipe/elinaldomartins.png'
    },
    {
      nome: "Luciano Guapo",
      funcao: "Baixo",
      description: "O nosso baixista Luciano Guapo, começou a tocar aos quinze (15) anos de idade e logo se apaixonou pelo baixo ao ouvir Ginger Baker, Eric Clapton, dentre outros. Ele aperfeiçoou suas habilidades musicais frequentando o Conservatório Pernambucano de Música, além das experiências adquiridas com os estilos musicais de cada banda por onde passou, desta forma, enriquece nossa sonoridade com grooves cativantes.",
      image: 'assets/images/equipe/lucianoguapo.png'
    },
    {
      nome: "Eduardo José",
      funcao: "Percussão",
      description: "No surdo temos o talentoso percussionista, conhecido por sua habilidade com o surdo, assim como com outros instrumentos de percussão. Com mais de dez anos de experiência, Eduardo José traz um som vibrante e contagiante que dá vida a ritmos de frevo, samba e outros estilos brasileiros. Ele já se apresentou em diversos eventos culturais, compartilhando palco com grandes nomes da música. Eduardo José também conhecido com ‘Jacaré’ também toca bateria em grade estilo.",
      image: 'assets/images/equipe/eduardojose.png'
    },
    {
      nome: "Edvaldo Silva",
      funcao: "Guitarra",
      description: "Nosso guitarrista pegou sua primeira guitarra aos doze (12) anos de idade e nunca mais olhou para trás. Influenciado pelo famoso guitarrista ‘Jimi Hendrix’, ele aperfeiçoou seu talento nos estudos da guitarra e nas bandas pelas quais passou. Edvaldo Silva é um excelente guitarrista e vocalista, com uma vasta experiência no meio artístico musical.",
      image: 'assets/images/equipe/edvaldosilva.png'
    },
    {
      nome: "Bruno Araújo",
      funcao: "Bateria",
      description: "Na bateria temos Bruninho que anteriormente tocava saxofone alto, daí migrou para percussão, e hoje toca bateria, sua trajetória musical começou aos 11 anos no saxofone, ao ver o baterista Ginger Baker da banda Cream, e outros como João Barone dos Paralamas do Sucesso tomou-os como inspiração influente. Sua trajetória inclui passagem por bandas marciais e musicais como experiências anteriores, ele traz uma energia contagiante para os nossos shows. Bruninho além da bateria também toca surdo, caixa e outros instrumentos de percussão.",
      image: 'assets/images/equipe/bruno.png'
    },
    {
      nome: "Jorge Darllan",
      funcao: "Saxofone",
      description: "Temos também no saxofone alto o mais novo componente da Orquestra e Banda Som & Movimento, é o jovem aprendiz Jorge Darllan, sua jornada musical começou no ILC – Instituto Luis Carneiro onde aprendeu suas primeiras notas musicais no Clarinete, a vontade de aprender foi tamanha que rapidamente se desenvolveu e ingressou no saxofone com o ímpeto de tocar para ganhar seu cachê. Jorge Darllan desenvolveu novas habilidades no sax que, ao tocar nos traz melodias envolventes, enriquecendo nosso reportório.",
      image: 'assets/images/equipe/perfil-jorgedarllan.png'
    },
    {
      nome: "Everton Bispo",
      funcao: "Saxofonista Tenor",
      description: "Assim apresentamos mais um da família do saxofone, é o sax tenor, Everton Bispo que começou sua trajetória musical aos onze (11) anos, foi aluno da Escola da Polícia Milita do Recife, acompanha o maestro Bispo seu pai nas atividades musicais, sua iniciação musical foi no ILC – Instituto Luis Carneiro com o instrumento de clarineta, depois migrou para o tenor, hoje estuda e toca com ambos, seu sonho é fazer parte da Banda da Polícia Militar. Enquanto isso, já experienciou outros grupos musicais, atualmente é o saxofonista tenor da Orquestra e Banda Som & Movimento.",
      image: 'assets/images/equipe/evertonbispo.png'
    }
  ];

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1024px', // Para telas grandes
        numVisible: 3,
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

    this.responsividade = this.responsiveOptions[0].numVisible;
  }
}
