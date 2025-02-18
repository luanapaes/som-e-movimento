import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMembroComponent } from './card-membro.component';

describe('CardMembroComponent', () => {
  let component: CardMembroComponent;
  let fixture: ComponentFixture<CardMembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMembroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
