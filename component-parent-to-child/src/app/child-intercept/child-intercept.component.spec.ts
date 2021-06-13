import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInterceptComponent } from './child-intercept.component';

describe('ChildInterceptComponent', () => {
  let component: ChildInterceptComponent;
  let fixture: ComponentFixture<ChildInterceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildInterceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildInterceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
