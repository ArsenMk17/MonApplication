import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VerifierCaracteresValidator } from '../shared/longueur-minimum.component';

@Component({
  selector: 'app-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})




export class ProblemeComponent implements OnInit {
  problemeForm: FormGroup;
  constructor(private fb: FormBuilder){}
  
  
  
  
  
  
  
  
  

  ngOnInit() {
    this.problemeForm = this.fb.group({
        //nomProbleme: ['',[Validators.minLength(3)]],
        prenom: ['' , [VerifierCaracteresValidator.longueurMinimum(3), Validators.required]],
        
      
      });
  
  
  
  }
  
  
  
  
  
  
  save(): void {
  }
}
