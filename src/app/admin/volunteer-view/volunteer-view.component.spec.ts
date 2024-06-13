import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerViewComponent } from './volunteer-view.component';

describe('VolunteerViewComponent', () => {
  let component: VolunteerViewComponent;
  let fixture: ComponentFixture<VolunteerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VolunteerViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolunteerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
