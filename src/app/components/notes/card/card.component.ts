import { Note } from './../Note';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() note: Note = {
    id: 0,
    titulo: "",
    conteudo: "",
    autor: "",
    estilo: "white",
    tipo: ""
  }

  checkMark(): boolean {
    if (this.note.tipo == "tarefa") {
      return true;
    }else {
      return false;
    }
  }

}
