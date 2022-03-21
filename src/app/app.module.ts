import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProblemeComponent } from './probleme/probleme.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProblemeData } from './probleme/probleme-data';
import { ProblemeService } from './probleme/probleme.service';








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
    HttpClientModule,
    HttpClientInMemoryWebApiModule .forRoot(ProblemeData, { delay: 1000 }),
    RouterModule.forRoot([
    
    { path:'accueil', component:AccueilComponent},
    {path:'', redirectTo:'accueil',pathMatch:'full'},
    {path:'**', redirectTo:'accueil', pathMatch:'full'},
  
  
  
  ])
  ],
  providers: [ProblemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
