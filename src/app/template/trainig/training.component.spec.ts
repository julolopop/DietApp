import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { trainingComponent } from './training.component';

describe('trainingComponent', () => {
  let component: trainingComponent;
  let fixture: ComponentFixture<trainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ trainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(trainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
