import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroRoutingModule } from './pages/cadastro/cadastro-routing.module';
import { CadastroModule } from './pages/cadastro/cadastro.module';
// Portinari
import { PoModule } from '@portinari/portinari-ui';
import { PoSlideModule } from '@portinari/portinari-ui';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    CadastroRoutingModule,
    CadastroModule,
    PoSlideModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
