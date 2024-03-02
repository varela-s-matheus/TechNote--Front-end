import { Note } from '../../services/note/Note';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent {

  note: Note = {
  title: "",
  content: "",
  author: "",
  style: "",
  type: ""
  }

}