import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeCanCreateMoreThanYouExpectComponent } from './we-can-create-more-than-you-expect.component';

describe('WeCanCreateMoreThanYouExpectComponent', () => {
  let component: WeCanCreateMoreThanYouExpectComponent;
  let fixture: ComponentFixture<WeCanCreateMoreThanYouExpectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeCanCreateMoreThanYouExpectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeCanCreateMoreThanYouExpectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
