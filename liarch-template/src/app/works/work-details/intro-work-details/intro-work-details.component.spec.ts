import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroWorkDetailsComponent } from './intro-work-details.component';

describe('IntroWorkDetailsComponent', () => {
  let component: IntroWorkDetailsComponent;
  let fixture: ComponentFixture<IntroWorkDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroWorkDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroWorkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
