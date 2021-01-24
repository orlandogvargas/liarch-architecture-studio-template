import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeHelpBuildingComponent } from './we-help-building.component';

describe('WeHelpBuildingComponent', () => {
  let component: WeHelpBuildingComponent;
  let fixture: ComponentFixture<WeHelpBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeHelpBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeHelpBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
