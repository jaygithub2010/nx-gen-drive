import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveItemComponent } from './drive-item.component';

describe('DriveItemComponent', () => {
  let component: DriveItemComponent;
  let fixture: ComponentFixture<DriveItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriveItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DriveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
