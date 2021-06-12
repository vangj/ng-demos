import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLifecycleComponent } from './child-lifecycle.component';

describe('ChildLifecycleComponent', () => {
  let component: ChildLifecycleComponent;
  let fixture: ComponentFixture<ChildLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildLifecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
