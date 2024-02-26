import { Note } from './../Note';
import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent {
  colorControl = new FormControl('primary' as ThemePalette);

  note: Note = {
    titulo: "",
    conteudo: "",
    autor: "",
    estilo: "",
    tipo: ""
  }

}
