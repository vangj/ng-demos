import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRefComponent } from './child-ref.component';

describe('ChildRefComponent', () => {
  let component: ChildRefComponent;
  let fixture: ComponentFixture<ChildRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
