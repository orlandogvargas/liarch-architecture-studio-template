import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirarionsAndExperiencesComponent } from './inspirarions-and-experiences.component';

describe('InspirarionsAndExperiencesComponent', () => {
  let component: InspirarionsAndExperiencesComponent;
  let fixture: ComponentFixture<InspirarionsAndExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspirarionsAndExperiencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspirarionsAndExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
