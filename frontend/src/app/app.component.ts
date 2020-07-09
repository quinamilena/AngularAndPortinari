import { Component } from '@angular/core';

import { PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/' },
    { label: 'Editoras', subItems: [
                {
                    label: 'Cadastrar Editora',
                    link: '/criarEmpresa'
                },
                {
                  label: 'Editoras Cadastradas',
                  link: '/empresa'
                }
              ]
    }
  ];

}
