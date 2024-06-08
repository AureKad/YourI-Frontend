import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDialogComponent } from './alertdialog.component';

describe('AlertdialogComponent', () => {
  let component: AlertDialogComponent;
  let fixture: ComponentFixture<AlertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
