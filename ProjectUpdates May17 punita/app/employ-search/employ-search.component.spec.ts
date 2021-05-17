import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploySearchComponent } from './employ-search.component';

describe('EmploySearchComponent', () => {
  let component: EmploySearchComponent;
  let fixture: ComponentFixture<EmploySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploySearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
