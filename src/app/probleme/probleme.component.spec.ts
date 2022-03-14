import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { VerifierCaracteresValidator } from '../shared/longueur-minimum.component';

import { ProblemeComponent } from './probleme.component';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ ProblemeComponent ]
    })
    .compileComponents();
  });

  
  
  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  
  it('champ nom du probleme doit comporter au moins 3 caracteres', () => {
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('a'.repeat(3));
    expect(zone.valid).toBeTruthy();
  });
  it("#1 | Zone PRÉNOM invalide avec 2 caractèress", () =>{
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue("a".repeat(2));
    let errors = zone.errors || {};
    expect(errors['minlength']).toBeFalsy();
    
  
  });

    it("#2 | Zone PRÉNOM valide avec 3 caractèress", () =>{
      let zone = component.problemeForm.controls['prenom'];
      zone.setValue("a".repeat(3));
      let errors = zone.errors || {};
      expect(errors['minlength']).toBeFalsy();
      
    
      });

      it("#3 | Zone PRÉNOM valide avec 200 caractèress", () =>{
        let zone = component.problemeForm.controls['prenom'];
        zone.setValue("a".repeat(200));
        let errors = zone.errors || {};
        expect(errors['minlength']).toBeFalsy();
        });
  
  it('#4 Zone PRÉNOM invalide avec aucune valeur', () => {
    let zone = component.problemeForm.controls['prenom'];
    let errors = zone.errors;
    expect(errors['required']).toBeTruthy();
  });

  
  it('#5 Zone PRÉNOM valide avec 10 espaces', () => {
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue(' '.repeat(10));
    let errors = zone.errors || {};
    
    expect(zone.valid).toBeFalsy();
  });

   
  it('#6 Zone PRÉNOM valide avec 2 espaces et 1 caractère', () => {
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue(' '.repeat(2) + 'a'.repeat(1));
    let errors = zone.errors || {};
    expect(zone.valid).toBeFalsy();
  });
  it('#7 | Une chaîne avec 10 espaces est invalide', () => {
    let control = { value: ' '.repeat(10) }
    let validatorFn =  VerifierCaracteresValidator.longueurMinimum(10);
    let result= validatorFn(control as AbstractControl);
    expect(result['nbreCaracteresInsuffisant']).toBe(true);
  }); 
  
  it('#8 | Une phrase avec des mots est valide', () => {
    let control = { value: 'a' }
    let validatorFn =  VerifierCaracteresValidator.longueurMinimum(3);
    let result= validatorFn(control as AbstractControl);
    expect(control.value).toBeTruthy;
  }); 
  
  it('#9 | Une phrase avec 3 espaces, des mots et ensuite 3 espaces est valide', () => {
    let control = { value: '   je le veux   '}
    let validatorFn =  VerifierCaracteresValidator.longueurMinimum(3);
    let result= validatorFn(control as AbstractControl);
    expect(control.value).toBeTruthy;
  }); 
  
  it('#10 |Une phrase avec 1 espaces et 2 caracteres est invalide', () => {
    let control = { value: 'x'}
    let validatorFn =  VerifierCaracteresValidator.longueurMinimum(3);
    let result= validatorFn(control as AbstractControl);
    expect(result['nbreCaracteresInsuffisant']).toBeTruthy;
  }); 
  
  it('#11 |Une phrase avec 2 espaces et 1 caracteres est invalide', () => {
    let control = { value: '  x'}
    let validatorFn =  VerifierCaracteresValidator.longueurMinimum(3);
    let result= validatorFn(control as AbstractControl);
    expect(result['nbreCaracteresInsuffisant']).toBe(true);
  }); 
  
  it('#12 |Une phrase avec 3 espaces et 3 caracteres est valide', () => {
    let control = { value: '   xxx'}
    let validatorFn =  VerifierCaracteresValidator.longueurMinimum(3);
    let result= validatorFn(control as AbstractControl);
    expect(control.value).toBeTruthy;
  }); 
  it('#13 |Une phrase avec 5 espaces et 5 caracteres est valide', () => {
    let control = { value: '     xxx    '}
    let validatorFn =  VerifierCaracteresValidator.longueurMinimum(3);
    let result= validatorFn(control as AbstractControl);
    expect(control.value).toBeTruthy;
  }); 
  it('#14 |Une chaine nulle est invalide', () => {
    let control = { }
    let validatorFn =  VerifierCaracteresValidator.longueurMinimum(3);
    let result= validatorFn(control as AbstractControl);
    expect(result['nbreCaracteresInsuffisant']).toBe(true);
  }); 
  
  /*it('#8 | Une phrase avec des mots est valide', () => {
    let control = { value: ''.repeat(0) }
    let validatorFn =  VerifierCaracteresValidator.plage();
    let result= validatorFn(control as AbstractControl);
    expect(result['plageInvalide']).toBe(true);
  }); */
      });
