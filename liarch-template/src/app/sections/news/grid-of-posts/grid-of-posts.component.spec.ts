import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOfPostsComponent } from './grid-of-posts.component';

describe('GridOfPostsComponent', () => {
  let component: GridOfPostsComponent;
  let fixture: ComponentFixture<GridOfPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridOfPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridOfPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
