import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationGoalComponent } from './donation-goal.component';

describe('DonationGoalComponent', () => {
  let component: DonationGoalComponent;
  let fixture: ComponentFixture<DonationGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonationGoalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonationGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
