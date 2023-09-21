import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxComponent } from './nx.component';

describe('NxComponent', () => {
  let component: NxComponent;
  let fixture: ComponentFixture<NxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NxComponent]
    });
    fixture = TestBed.createComponent(NxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
