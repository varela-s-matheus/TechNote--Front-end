import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Note } from 'src/app/services/note/Note';
import { NotesService } from 'src/app/services/note/note.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.scss']
})
export class DeleteNoteComponent {

  @Input() note: Note = {
    id: 0,
    title: "",
    content: "",
    author: "",
    style: "",
    type: ""
  }

  constructor(private dialogRef: MatDialogRef<DeleteNoteComponent>, private service: NotesService, private router: Router ) {}

  deleteCard() {
    if(this.note.id != 0) {
      this.service.delete(this.note.id).subscribe(() => {
        window.location.reload();
      });
    }
  }
}
