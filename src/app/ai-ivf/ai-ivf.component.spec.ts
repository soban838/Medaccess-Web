import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIIVFComponent } from './ai-ivf.component';

describe('AIIVFComponent', () => {
  let component: AIIVFComponent;
  let fixture: ComponentFixture<AIIVFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AIIVFComponent]
    });
    fixture = TestBed.createComponent(AIIVFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
