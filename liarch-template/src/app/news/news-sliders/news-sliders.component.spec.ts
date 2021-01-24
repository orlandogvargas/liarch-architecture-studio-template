import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSlidersComponent } from './news-sliders.component';

describe('NewsSlidersComponent', () => {
  let component: NewsSlidersComponent;
  let fixture: ComponentFixture<NewsSlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsSlidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
