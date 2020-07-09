import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
// Service
import { CadastroService } from '../cadastro.service';
// Portinari
import { PoDynamicFormField, PoNotificationService, PoModalComponent, PoModalAction } from '@portinari/portinari-ui';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit  {

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  idEmpresa: string;
  productsCompany: any;
  subscription: Subscription;
  products = {};

  productsUpdate = {
    _id: '',
    available: '',
    name: '',
    code: '',
    idCompany: '',
    nameAuthor: ''
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
      this.updateProduto();
    },
    label: 'Editar'
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private cadastroService: CadastroService,
    public poNotification: PoNotificationService
  ) { }

  form: Array<PoDynamicFormField> =  [
    {
      property: 'name',
      divider: 'Dados Cadastrais',
      label: 'Nome do Produto',
      required: true,
      minLength: 3,
      maxLength: 70,
      gridColumns: 6,
      gridSmColumns: 12
    },
    {
      property: 'code',
      label: 'Código do Produto',
      required: true,
      gridColumns: 6,
      gridSmColumns: 12
    },
    {
      property: 'nameAuthor',
      label: 'Nome do(a) Autor(a)',
      required: false,
      gridColumns: 6,
      gridSmColumns: 12
    },
    {
      property: 'available',
      label: 'Produto Disponível',
      gridColumns: 6,
      gridSmColumns: 12,
      options: ['Sim', 'Não']
    }
  ];

  createProdutos() {
    this.cadastroService.createProducts(this.idEmpresa, this.products).subscribe((res: any) => {
      if (res.error) {
        return this.poNotification.error( { duration: 1000, message: 'Não foi possível criar este produto' } );
      }
      this.poNotification.success( { duration: 1000, message: 'Produto cadastrado com sucesso' } );
    });
  }

  getAllProdutos(idEmpresa: string) {
    this.subscription = this.cadastroService.gelAllProducts(idEmpresa).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.data != '') {
        this.productsCompany = res.data;
      } else {
        this.productsCompany = '';
      }
    });
  }

  deleteProduto(idProduct: string) {
    const confirmDelete = confirm( 'Você deseja excluir este produto?' );
    if (confirmDelete !== true) {
      return this.poNotification.information( { duration: 3000, message: 'Ação de deletar o produto foi cancelada' } );
    }
    this.cadastroService.deleteProducts(idProduct).subscribe((res: any) => {
      if (res.error) {
        return this.poNotification.error( { duration: 3000, message: 'Não foi possível deletar este produto' } );
      }
      if (!res.error) {
        this.poNotification.success( { duration: 3000, message: 'Produto deletado com sucesso' } );
        this.subscription.unsubscribe();
        this.getAllProdutos(this.idEmpresa);
      }
    });
  }

  updateProduto() {
    // tslint:disable-next-line: triple-equals
    if ( this.productsUpdate.name == '' && this.productsUpdate.code == '' ) {
      return this.poNotification.information( { duration: 3000, message: 'Preencha os campos necessários!'} );
    }

    this.cadastroService.updateProducts(this.productsUpdate).subscribe((res: any) => {
      if ( res.error ) {
        return this.poNotification.error( { duration: 3000, message: 'Não foi possível atualizar este produto' } );
      }
      if ( !res.error ) {
        this.poNotification.success( { duration: 3000, message: 'Produto atualizado com sucesso' } );
        this.subscription.unsubscribe();
        this.getAllProdutos(this.idEmpresa);
        this.closeModal();
      }
    });
  }

  openModal(idProduct: string) {
    this.cadastroService.getByIdProducts(idProduct).subscribe((res: any) => {
      if (res.error) {
        return this.poNotification.error( { duration: 3000, message: 'Não foi possível realizar esta ação' } );
      }
      if (!res.error) {
        this.productsUpdate = res.data;
        this.poModal.open();
      }
    });
  }

  closeModal() {
    this.productsUpdate = {
      _id: '',
      available: '',
      name: '',
      code: '',
      idCompany: '',
      nameAuthor: ''
    };
    this.poModal.close();
  }

  ngOnInit() {
    this.idEmpresa = this.activatedRoute.snapshot.paramMap.get('idEmpresa');
    this.getAllProdutos(this.idEmpresa);
  }

}
