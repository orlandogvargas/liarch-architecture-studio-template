import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnAwardWinningArchitectsCompanyComponent } from './an-award-winning-architects-company.component';

describe('AnAwardWinningArchitectsCompanyComponent', () => {
  let component: AnAwardWinningArchitectsCompanyComponent;
  let fixture: ComponentFixture<AnAwardWinningArchitectsCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnAwardWinningArchitectsCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnAwardWinningArchitectsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
