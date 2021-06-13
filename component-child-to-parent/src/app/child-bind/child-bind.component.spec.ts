import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBindComponent } from './child-bind.component';

describe('ChildBindComponent', () => {
  let component: ChildBindComponent;
  let fixture: ComponentFixture<ChildBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildBindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
