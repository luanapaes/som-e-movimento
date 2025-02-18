import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousselServicosComponent } from './caroussel-servicos.component';

describe('CarousselServicosComponent', () => {
  let component: CarousselServicosComponent;
  let fixture: ComponentFixture<CarousselServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarousselServicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarousselServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
