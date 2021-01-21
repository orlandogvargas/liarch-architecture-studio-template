import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LauraLorewnceQuoteComponent } from './laura-lorewnce-quote.component';

describe('LauraLorewnceQuoteComponent', () => {
  let component: LauraLorewnceQuoteComponent;
  let fixture: ComponentFixture<LauraLorewnceQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LauraLorewnceQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LauraLorewnceQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
