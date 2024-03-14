import { Component, Injectable, Input } from '@angular/core';
import { Note } from 'src/app/services/note/Note';
import { NotesService } from 'src/app/services/note/note.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormNoteComponent } from 'src/app/pages/form-note/form-note.component';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.scss']
})
export class ModalConfirmationComponent {

  @Input() note = {
    id: 0,
    title: "",
    content: "",
    author: "",
    style: "",
    type: ""
  }

  constructor(private dialogRef: MatDialogRef<ModalConfirmationComponent>, private form: FormNoteComponent) {}

  confirm(option: string) {
    if(this.note.id != 0 && option == 'delete') {
      this.form.deleteCard(this.note.id)
    }
  }
}
