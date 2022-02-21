import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenueComponent } from './bienvenue/bienvenue.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
