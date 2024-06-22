import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationWhyComponent } from './donation-why.component';

describe('DonationWhyComponent', () => {
  let component: DonationWhyComponent;
  let fixture: ComponentFixture<DonationWhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonationWhyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonationWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
