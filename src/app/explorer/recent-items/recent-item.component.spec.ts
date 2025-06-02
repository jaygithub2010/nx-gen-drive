import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  RecentItemComponent } from './recent-item.component';

describe('LeftPanelComponent', () => {
  let component: RecentItemComponent;
  let fixture: ComponentFixture<RecentItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    declarations: [RecentItemComponent]
});
    fixture = TestBed.createComponent(RecentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
