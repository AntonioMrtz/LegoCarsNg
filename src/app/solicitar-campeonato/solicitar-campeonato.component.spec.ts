import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarCampeonatoComponent } from './solicitar-campeonato.component';

describe('SolicitarCampeonatoComponent', () => {
  let component: SolicitarCampeonatoComponent;
  let fixture: ComponentFixture<SolicitarCampeonatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarCampeonatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitarCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
