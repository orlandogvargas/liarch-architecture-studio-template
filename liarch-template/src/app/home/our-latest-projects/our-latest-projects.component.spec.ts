import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurLatestProjectsComponent } from './our-latest-projects.component';

describe('OurLatestProjectsComponent', () => {
  let component: OurLatestProjectsComponent;
  let fixture: ComponentFixture<OurLatestProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurLatestProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurLatestProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
