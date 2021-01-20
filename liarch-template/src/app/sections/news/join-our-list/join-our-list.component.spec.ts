import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinOurListComponent } from './join-our-list.component';

describe('JoinOurListComponent', () => {
  let component: JoinOurListComponent;
  let fixture: ComponentFixture<JoinOurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinOurListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinOurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
