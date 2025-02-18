import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrousselEquipeComponent } from './carroussel-equipe.component';

describe('CarrousselEquipeComponent', () => {
  let component: CarrousselEquipeComponent;
  let fixture: ComponentFixture<CarrousselEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrousselEquipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrousselEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
