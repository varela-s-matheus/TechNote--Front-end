import { Component } from '@angular/core';
import { Note } from 'src/app/services/note/Note';
import { NotesService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent {

  noteList: Note[] = [];

  constructor(private service: NotesService) {  }

  ngOnInit(): void {
    this.service.list().subscribe((noteList) => {
      this.noteList = noteList
    })
  }

  isEmpty(): boolean {
    if(this.noteList.length == 0){
      return true;
    }else {
      return false;
    }
  }
}
