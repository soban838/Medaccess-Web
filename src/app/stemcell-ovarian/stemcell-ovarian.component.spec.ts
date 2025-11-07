import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STEMCELLOVARIANComponent } from './stemcell-ovarian.component';

describe('STEMCELLOVARIANComponent', () => {
  let component: STEMCELLOVARIANComponent;
  let fixture: ComponentFixture<STEMCELLOVARIANComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [STEMCELLOVARIANComponent]
    });
    fixture = TestBed.createComponent(STEMCELLOVARIANComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
