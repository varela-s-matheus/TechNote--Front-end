import { Component, Input } from '@angular/core';
import  {  FormBuilder,  FormGroup, Validators  }  from  '@angular/forms';
import { Router } from '@angular/router';
import { Note } from 'src/app/services/note/Note';
import { NotesService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent {

  public formNote!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: NotesService,
    private router: Router
  ) {}

  ngOnInit() {
    if(this.note != null) {
      this.createformNote(this.note);
    } else {
      this.createformNote(new Note);
    }
  }
  @Input() note: Note = {
    id: 0,
    title: "",
    content: "",
    author: "",
    style: "",
    type: ""
  }

  createformNote(note: Note) {
    this.formNote = this.formBuilder.group({
      id: [note.id!],
      title: [note.title, Validators.required],
      content: [note.content, Validators.maxLength(1000)],
      author: [note.author, Validators.required],
      style: [note.style, Validators.required],
      type: [note.type, Validators.required]
    })
  }

  submit() {
    this.service.create(this.formNote.value).subscribe(() => {
      this.router.navigate(['/listNotes'])
    })

  }

}
