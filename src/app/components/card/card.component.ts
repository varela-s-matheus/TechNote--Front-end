import { Note } from '../../services/note/Note';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmationComponent } from '../modal-confirmation/modal-confirmation.component';
import { FormNoteComponent } from 'src/app/pages/form-note/form-note.component';

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

  options(): boolean {
    return this.note.id == 0;
  }

  openDialog(): void {
    const modal = this.dialog.open(ModalConfirmationComponent, {
      width: '250px',
    });
    modal.componentInstance.note = this.note;
  }

}
