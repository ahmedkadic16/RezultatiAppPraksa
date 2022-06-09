import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimEditComponent } from './tim-edit.component';

describe('TimEditComponent', () => {
  let component: TimEditComponent;
  let fixture: ComponentFixture<TimEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
