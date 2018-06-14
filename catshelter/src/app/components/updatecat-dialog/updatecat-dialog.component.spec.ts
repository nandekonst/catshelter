import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecatDialogComponent } from './updatecat-dialog.component';

describe('UpdatecatDialogComponent', () => {
  let component: UpdatecatDialogComponent;
  let fixture: ComponentFixture<UpdatecatDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecatDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
