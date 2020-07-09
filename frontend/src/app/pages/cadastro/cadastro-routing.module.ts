import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { CriarEmpresaComponent } from './criar-empresa/criar-empresa.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  { path: '', component: CadastroComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'criarEmpresa', component: CriarEmpresaComponent },
  { path: 'produtos/:idEmpresa', component: ProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CadastroRoutingModule { }
