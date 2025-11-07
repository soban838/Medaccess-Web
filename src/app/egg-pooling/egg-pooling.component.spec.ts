import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EGGPOOLINGComponent } from './egg-pooling.component';

describe('EGGPOOLINGComponent', () => {
  let component: EGGPOOLINGComponent;
  let fixture: ComponentFixture<EGGPOOLINGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EGGPOOLINGComponent]
    });
    fixture = TestBed.createComponent(EGGPOOLINGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
