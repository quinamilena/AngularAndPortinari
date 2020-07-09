import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
// Portinari
import { PoDynamicFormField, PoNotificationService } from '@portinari/portinari-ui';

@Component({
  selector: 'app-criar-empresa',
  templateUrl: './criar-empresa.component.html',
  styleUrls: ['./criar-empresa.component.css']
})
export class CriarEmpresaComponent implements OnInit {

  constructor(
      private cadastroService: CadastroService,
      public poNotification: PoNotificationService
  ) { }

  company = {};

  form: Array<PoDynamicFormField> =  [
    {
      property: 'name',
      divider: 'Dados Cadastrais',
      label: 'Nome da Editora',
      required: true,
      minLength: 3,
      maxLength: 70,
      gridColumns: 6,
      gridSmColumns: 12
    },
    { property: 'cnpj', label: 'CNPJ', required: true, mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12 },
    { property: 'email', divider: 'Contatos', gridColumns: 6 },
    { property: 'phone', label: 'Telefone', required: false, mask: '(99) 99999-9999', gridColumns: 6, gridSmColumns: 12 },
    { property: 'image', divider: 'Imagem', label: 'Logotipo', required: false, gridColumns: 12, gridSmColumns: 12 }
  ];

  createCompany() {
    this.cadastroService.createCompany(this.company).subscribe((res: any) => {
      if (res.error) {
        return this.poNotification.error( { duration: 3000, message: 'Não foi possível criar esta editora' } );
      }
      if (!res.error) {
        this.poNotification.success( { duration: 3000, message: 'Editora cadastrada com sucesso' } );
      }
    });
  }

  ngOnInit() {
  }

}
