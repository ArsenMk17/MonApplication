import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITypeProbleme } from './probleme';

@Injectable({
  providedIn: 'root'
})
export class ProblemeService {

    private URLDonnees = 'api/probleme';
  constructor(private http: HttpClient) { }

  obtenirProbleme(): Observable<ITypeProbleme[]>{
    return this.http.get<ITypeProbleme[]>(this.URLDonnees);
  }


}
