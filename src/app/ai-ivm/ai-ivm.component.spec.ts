import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIIvmComponent } from './ai-ivm.component';

describe('AIIvmComponent', () => {
  let component: AIIvmComponent;
  let fixture: ComponentFixture<AIIvmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AIIvmComponent]
    });
    fixture = TestBed.createComponent(AIIvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
