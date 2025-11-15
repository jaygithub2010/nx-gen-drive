import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsTextboxComponent } from './chips-textbox.component';

describe('ChipsTextboxComponent', () => {
  let component: ChipsTextboxComponent;
  let fixture: ComponentFixture<ChipsTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipsTextboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipsTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
