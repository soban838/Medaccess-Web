import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfertilityTestingComponent } from './infertility-testing.component';

describe('InfertilityTestingComponent', () => {
  let component: InfertilityTestingComponent;
  let fixture: ComponentFixture<InfertilityTestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfertilityTestingComponent]
    });
    fixture = TestBed.createComponent(InfertilityTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
