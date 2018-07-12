import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCatsViewComponent } from './all-cats-view.component';

describe('AllCatsViewComponent', () => {
  let component: AllCatsViewComponent;
  let fixture: ComponentFixture<AllCatsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCatsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCatsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
