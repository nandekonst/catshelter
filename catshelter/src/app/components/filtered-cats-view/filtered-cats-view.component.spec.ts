import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredCatsViewComponent } from './filtered-cats-view.component';

describe('FilteredCatsViewComponent', () => {
  let component: FilteredCatsViewComponent;
  let fixture: ComponentFixture<FilteredCatsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredCatsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredCatsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
