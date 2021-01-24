import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPostDetailsComponent } from './news-post-details.component';

describe('NewsPostDetailsComponent', () => {
  let component: NewsPostDetailsComponent;
  let fixture: ComponentFixture<NewsPostDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsPostDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
