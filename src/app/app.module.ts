import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProblemeComponent } from './probleme/probleme.component';








@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
   ProblemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    
    { path:'accueil', component:AccueilComponent},
    {path:'', redirectTo:'accueil',pathMatch:'full'},
    {path:'**', redirectTo:'accueil', pathMatch:'full'},
  
  
  
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
