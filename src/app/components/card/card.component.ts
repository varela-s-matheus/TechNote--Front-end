import { Note } from '../../services/note/Note';
import { Component, Input } from '@angular/core';

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

  checkMark(): boolean {
    if (this.note.type == "tarefa") {
      return true;
    }else {
      return false;
    }
  }

}
