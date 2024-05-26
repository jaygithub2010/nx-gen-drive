import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDriveComponent } from './settings-drive.component';

describe('SettingsDriveComponent', () => {
  let component: SettingsDriveComponent;
  let fixture: ComponentFixture<SettingsDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsDriveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingsDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
