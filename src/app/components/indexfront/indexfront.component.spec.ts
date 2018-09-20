import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexfrontComponent } from './indexfront.component';

describe('IndexfrontComponent', () => {
  let component: IndexfrontComponent;
  let fixture: ComponentFixture<IndexfrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexfrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
