import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfactionEmployeesProjectsComponent } from './satisfaction-employees-projects.component';

describe('SatisfactionEmployeesProjectsComponent', () => {
  let component: SatisfactionEmployeesProjectsComponent;
  let fixture: ComponentFixture<SatisfactionEmployeesProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatisfactionEmployeesProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisfactionEmployeesProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
