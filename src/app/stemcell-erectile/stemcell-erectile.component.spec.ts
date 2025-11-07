import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STEMCELLERECTILEComponent } from './stemcell-erectile.component';

describe('STEMCELLERECTILEComponent', () => {
  let component: STEMCELLERECTILEComponent;
  let fixture: ComponentFixture<STEMCELLERECTILEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [STEMCELLERECTILEComponent]
    });
    fixture = TestBed.createComponent(STEMCELLERECTILEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
