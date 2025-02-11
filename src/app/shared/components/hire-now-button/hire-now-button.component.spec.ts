import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireNowButtonComponent } from './hire-now-button.component';

describe('HireNowButtonComponent', () => {
  let component: HireNowButtonComponent;
  let fixture: ComponentFixture<HireNowButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HireNowButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HireNowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
