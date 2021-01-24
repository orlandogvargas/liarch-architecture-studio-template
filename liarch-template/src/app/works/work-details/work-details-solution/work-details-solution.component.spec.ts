import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDetailsSolutionComponent } from './work-details-solution.component';

describe('WorkDetailsSolutionComponent', () => {
  let component: WorkDetailsSolutionComponent;
  let fixture: ComponentFixture<WorkDetailsSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkDetailsSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDetailsSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
