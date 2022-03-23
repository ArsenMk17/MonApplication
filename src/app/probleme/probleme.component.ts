import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VerifierCaracteresValidator } from '../shared/longueur-minimum.component';
import { ITypeProbleme } from './probleme';
import { TypeProblemeService } from './probleme.service';

@Component({
  selector: 'app-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})




export class ProblemeComponent implements OnInit {
  problemeForm: FormGroup;
  errorMessage: string;
  typesProbleme: ITypeProbleme[];
  constructor(private fb: FormBuilder, private typeproblemeService: TypeProblemeService) { }
  
  
  
  
  
  
  
  
  

  ngOnInit() {
    this.problemeForm = this.fb.group({
        //nomProbleme: ['',[Validators.minLength(3)]],
        prenom: ['' , [VerifierCaracteresValidator.longueurMinimum(3), Validators.required]],
        nom : ['', [VerifierCaracteresValidator.longueurMinimum(3),Validators.required]],
        noProblem :['']
      });
  
      this.typeproblemeService.obtenirProbleme()
      .subscribe(tp => this.typesProbleme = tp,
      error => this.errorMessage = <any>error);
  
  }
  
  
  
  
  
  
  save(): void {
  }
        



}
