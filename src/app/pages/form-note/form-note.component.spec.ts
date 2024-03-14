import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNoteComponent } from './form-note.component';

describe('CreateNoteComponent', () => {
  let component: FormNoteComponent;
  let fixture: ComponentFixture<FormNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormNoteComponent]
    });
    fixture = TestBed.createComponent(FormNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
