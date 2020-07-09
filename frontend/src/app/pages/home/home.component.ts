import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  sampleItems: Array<any> = [
    {
      title: 'Cadastre-se',
      description: 'Lorem ipsum rhoncus curae lorem sollicitudin, rutrum nullam suspendisse neque!',
      link: '/criarEmpresa',
      imagem: 'https://blog.ipog.edu.br/wp-content/uploads/2018/05/Livro-de-contabilidade.jpg'
    },
    {
      title: 'Empresa já Cadastradas',
      description: 'Meditating won’t solve your problems — but it will help you face them honestly',
      link: '/empresa',
      imagem: 'https://www.estudarfora.org.br/app/uploads/2013/10/20131029_livros_115791277.jpg'
    }
  ];

  ngOnInit() {
  }

  navegacao(rota: string) {
    this.router.navigate( [`${rota}`] );
  }

}
