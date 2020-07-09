import { CadastroModule } from './pages/cadastro/cadastro.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastros', loadChildren: './pages/cadastro/cadastro.module#CadastroModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
