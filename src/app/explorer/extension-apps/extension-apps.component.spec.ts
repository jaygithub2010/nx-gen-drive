import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionAppsComponent } from './extension-apps.component';

describe('ExtensionAppsComponent', () => {
  let component: ExtensionAppsComponent;
  let fixture: ComponentFixture<ExtensionAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionAppsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtensionAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
