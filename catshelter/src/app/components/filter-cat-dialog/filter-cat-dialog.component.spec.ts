import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCatDialogComponent } from './filter-cat-dialog.component';

describe('FilterCatDialogComponent', () => {
  let component: FilterCatDialogComponent;
  let fixture: ComponentFixture<FilterCatDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCatDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
