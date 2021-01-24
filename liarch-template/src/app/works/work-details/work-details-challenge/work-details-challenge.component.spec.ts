import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDetailsChallengeComponent } from './work-details-challenge.component';

describe('WorkDetailsChallengeComponent', () => {
  let component: WorkDetailsChallengeComponent;
  let fixture: ComponentFixture<WorkDetailsChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkDetailsChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDetailsChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
