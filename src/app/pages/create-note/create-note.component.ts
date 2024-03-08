import { Component } from '@angular/core';
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

  constructor(private formBuilder: FormBuilder, private service: NotesService, private router: Router) {}

  ngOnInit() {
    this.createformNote(new Note());
  }

  createformNote(note: Note) {
    this.formNote = this.formBuilder.group({
      id: [null],
      title: ['', Validators.required],
      content: ['', Validators.maxLength(1000)],
      author: ['', Validators.required],
      style: ['', Validators.required],
      type: ['', Validators.required]
    })
  }

  submit() {
    this.service.create(this.formNote.value).subscribe(() => {
      this.router.navigate(['/listNotes'])
    })

  }

}
