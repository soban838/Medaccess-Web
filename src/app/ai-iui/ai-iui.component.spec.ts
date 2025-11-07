import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIIUIComponent } from './ai-iui.component';

describe('AIIUIComponent', () => {
  let component: AIIUIComponent;
  let fixture: ComponentFixture<AIIUIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AIIUIComponent]
    });
    fixture = TestBed.createComponent(AIIUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
