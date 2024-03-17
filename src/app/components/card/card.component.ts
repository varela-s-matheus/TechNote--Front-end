import { Note } from '../../services/note/Note';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmationComponent } from '../modal-confirmation/modal-confirmation.component';
import { FormNoteComponent } from 'src/app/pages/form-note/form-note.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  @Input() note: Note = {
    id: 0,
    title: "",
    content: "",
    author: "",
    style: "",
    type: "",
    status: false
  }

  constructor(public dialog: MatDialog, private form: FormNoteComponent) {}

  ngOnInit(): void {
    if (this.note.status != false) {
      this.checkBox = "isComplete";
    }
  }


  checkMark(): boolean {
    if (this.note.type == "tarefa") {
      return true;
    }else {
      return false;
    }
  }

  // Variável para estilização de task concluída
  checkBox: string = "";
  completeTask() {
    if (this.note.status == false) {
      this.checkBox = "isComplete";
      this.note.status = true;
      this.form.updateNote(this.note);
    } else {
      this.checkBox = "";
      this.note.status = false;
      this.form.updateNote(this.note);
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
