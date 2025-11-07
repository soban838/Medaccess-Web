import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISSUESComponent } from './issues.component';

describe('ISSUESComponent', () => {
  let component: ISSUESComponent;
  let fixture: ComponentFixture<ISSUESComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ISSUESComponent]
    });
    fixture = TestBed.createComponent(ISSUESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
