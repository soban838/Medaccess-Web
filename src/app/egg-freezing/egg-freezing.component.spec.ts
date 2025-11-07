import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EGGFREEZINGComponent } from './egg-freezing.component';

describe('EGGFREEZINGComponent', () => {
  let component: EGGFREEZINGComponent;
  let fixture: ComponentFixture<EGGFREEZINGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EGGFREEZINGComponent]
    });
    fixture = TestBed.createComponent(EGGFREEZINGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
