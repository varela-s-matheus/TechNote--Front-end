import { DeleteNoteComponent } from 'src/app/pages/delete-note/delete-note.component';
import { Note } from '../../services/note/Note';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() note: Note = {
    id: 0,
    title: "",
    content: "",
    author: "",
    style: "",
    type: ""
  }

  constructor(public dialog: MatDialog) {}

  checkMark(): boolean {
    if (this.note.type == "tarefa") {
      return true;
    }else {
      return false;
    }
  }

  size: string = "size-p";

  sizeCard() {
    if(this.note.content.length >= 220) {
      this.size = "size-g"
    }
  }


  openDialog(): void {
    const modal = this.dialog.open(DeleteNoteComponent, {
      width: '250px',
    });
    modal.componentInstance.note = this.note;
  }

}
