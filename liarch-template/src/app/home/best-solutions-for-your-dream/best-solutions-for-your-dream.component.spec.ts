import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSolutionsForYourDreamComponent } from './best-solutions-for-your-dream.component';

describe('BestSolutionsForYourDreamComponent', () => {
  let component: BestSolutionsForYourDreamComponent;
  let fixture: ComponentFixture<BestSolutionsForYourDreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSolutionsForYourDreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSolutionsForYourDreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
