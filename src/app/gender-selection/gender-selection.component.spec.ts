import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GENDERSELECTIONComponent } from './gender-selection.component';

describe('GENDERSELECTIONComponent', () => {
  let component: GENDERSELECTIONComponent;
  let fixture: ComponentFixture<GENDERSELECTIONComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GENDERSELECTIONComponent]
    });
    fixture = TestBed.createComponent(GENDERSELECTIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
