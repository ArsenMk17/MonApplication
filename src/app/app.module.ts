import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProduitComponent } from './produit/produit.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    BienvenueComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
    
      { path:'bienvenue', component:BienvenueComponent},
    {path:'', redirectTo:'bienvenue',pathMatch:'full'},
    {path:'**', redirectTo:'bienvenue', pathMatch:'full'},
  
  
  
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
