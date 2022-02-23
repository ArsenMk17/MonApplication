import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenueComponent } from './bienvenue.component';

describe('BienvenueComponent', () => {
  let component: BienvenueComponent;
  let fixture: ComponentFixture<BienvenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BienvenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BienvenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(BienvenueComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Bienvenue works!');
  });


});
