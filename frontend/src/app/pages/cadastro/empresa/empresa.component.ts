import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
// Service
import { CadastroService } from '../cadastro.service';
// Portinari
import { PoDynamicFormField, PoNotificationService, PoModalComponent, PoModalAction } from '@portinari/portinari-ui';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})

export class EmpresaComponent implements OnInit {

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  editoras: any;
  subscription: Subscription;
  companyUpdate = {
    _id: '',
    name: '',
    cnpj: '',
    email: '',
    phone: '',
    image: ''
  };

  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Fechar',
    danger: true
  };

  confirm: PoModalAction = {
    action: () => {
      this.editarEmpresa();
    },
    label: 'Editar'
  };

  constructor(
    private router: Router,
    private cadastroService: CadastroService,
    public poNotification: PoNotificationService
  ) { }

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
    {
      property: 'cnpj',
      label: 'CNPJ',
      required: true,
      mask: '99.999.999/9999-99',
      gridColumns: 6,
      gridSmColumns: 12
    },
    {
      property: 'email',
      divider: 'Contatos',
      required: false,
      gridColumns: 6,
      gridSmColumns: 12
    },
    {
      property: 'phone',
      label: 'Telefone',
      required: false,
      mask: '(99) 99999-9999',
      gridColumns: 6,
      gridSmColumns: 12
    },
    {
      property: 'image',
      divider: 'Imagem',
      label: 'Logotipo',
      required: false,
      gridColumns: 12,
      gridSmColumns: 12
    }
  ];

  getAllEmpresa() {
    this.subscription = this.cadastroService.getAllCompany().subscribe((res: any) => {
      if (res.data) {
        this.editoras = res.data;
      } else {
        this.editoras = '';
      }
    });
  }

  formatPhoneNumber(phone) {
    return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`;
  }

  produtos(idCompany: string) {
    this.router.navigate( [`produtos/${idCompany}`] );
  }

  editarEmpresa() {
    // tslint:disable-next-line: triple-equals
    if (this.companyUpdate.name == '' && this.companyUpdate.cnpj == '') {
      return this.poNotification.information( { duration: 3000, message: 'Preencha os campos necessários!' } );
    }
    this.cadastroService.updateCompany(this.companyUpdate).subscribe((res: any) => {
      if (res.error) {
       return this.poNotification.error( { duration: 3000, message: 'Não foi possível atualizar esta editora' } );
      }
      if (!res.error) {
        this.poNotification.success( { duration: 3000, message: 'Editora atualizada com sucesso' } );
        this.subscription.unsubscribe();
        this.getAllEmpresa();
        this.closeModal();
      }
    });
  }

  deletarEmpresa(idCompany: string) {
    const excluirCompany = confirm('Você deixar excluir esta Editora ?');

    if (excluirCompany !== true) {
      return this.poNotification.information( { duration: 2000, message: 'Não foi possível concluír a ação de excluir a editora' } );
    }
    this.cadastroService.deleteCompany(idCompany).subscribe((res: any) => {
      if (res.error) {
        return this.poNotification.error( { duration: 2000, message: 'Não foi possível excluir esta editora' } );
      }
      this.subscription.unsubscribe();
      this.poNotification.success( { duration: 2000, message: 'Editora excluída com sucesso' } );
      this.getAllEmpresa();
    });
  }

  openModal(idCompany: string) {
    this.cadastroService.getByIdCompany(idCompany).subscribe((res: any) => {
      if (res.error) {
        return this.poNotification.error( { duration: 3000, message: 'Não foi possível realizar esta ação' } );
      }
      if (!res.error) {
        this.companyUpdate = res.data;
        this.poModal.open();
      }
    });
  }

  closeModal() {
    this.companyUpdate = {
      _id: '',
      name: '',
      cnpj: '',
      email: '',
      phone: '',
      image: ''
    };
    this.poModal.close();
  }

  ngOnInit() {
    this.getAllEmpresa();
  }

}
