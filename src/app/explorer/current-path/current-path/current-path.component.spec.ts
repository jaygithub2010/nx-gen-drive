import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPathComponent } from './current-path.component';

describe('CurrentPathComponent', () => {
  let component: CurrentPathComponent;
  let fixture: ComponentFixture<CurrentPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentPathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
