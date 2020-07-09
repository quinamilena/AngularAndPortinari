import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Portinari
import { PoInfoModule } from '@portinari/portinari-ui';
import { PoAvatarModule } from '@portinari/portinari-ui';
import { PoWidgetModule } from '@portinari/portinari-ui';
import { PoDynamicModule } from '@portinari/portinari-ui';
import { PoButtonModule } from '@portinari/portinari-ui';
import { PoNotificationModule } from '@portinari/portinari-ui';
import { PoTabsModule } from '@portinari/portinari-ui';
import { PoListViewModule } from '@portinari/portinari-ui';
import { PoBreadcrumbModule } from '@portinari/portinari-ui';
import { PoModalModule } from '@portinari/portinari-ui';
import { PoFieldModule } from '@portinari/portinari-ui';
import { PoPopupModule } from '@portinari/portinari-ui';
// Module
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';
import { EmpresaComponent } from '../cadastro/empresa/empresa.component';
import { ProdutosComponent } from '../cadastro/produtos/produtos.component';
import { CriarEmpresaComponent } from './criar-empresa/criar-empresa.component';


@NgModule({
  declarations: [CadastroComponent, EmpresaComponent, ProdutosComponent, CriarEmpresaComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    FormsModule,
    PoInfoModule,
    PoAvatarModule,
    PoWidgetModule,
    PoDynamicModule,
    PoButtonModule,
    PoNotificationModule,
    PoTabsModule,
    PoListViewModule,
    PoBreadcrumbModule,
    PoModalModule,
    PoFieldModule,
    PoPopupModule
  ]
})
export class CadastroModule { }
