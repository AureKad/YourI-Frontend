import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionCardsComponent } from './vision-cards.component';

describe('VisionCardsComponent', () => {
  let component: VisionCardsComponent;
  let fixture: ComponentFixture<VisionCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisionCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
