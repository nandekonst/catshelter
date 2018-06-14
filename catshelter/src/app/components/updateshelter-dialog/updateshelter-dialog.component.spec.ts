import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateshelterDialogComponent } from './updateshelter-dialog.component';

describe('UpdateshelterDialogComponent', () => {
  let component: UpdateshelterDialogComponent;
  let fixture: ComponentFixture<UpdateshelterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateshelterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateshelterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
