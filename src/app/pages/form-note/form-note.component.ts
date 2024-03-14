import { Component, Injectable, Input, OnInit } from '@angular/core';
import  {  FormBuilder,  FormGroup, Validators  }  from  '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/services/note/Note';
import { NotesService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-form-note',
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class FormNoteComponent implements OnInit{

  public formNote!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id != null) {
      this.service.findById(parseInt(id)).subscribe((note) => {
        this.createFormNote(note);
      });
    } else {
      this.createFormNote(new Note);
    }
  }

  createFormNote(note: Note) {
    this.formNote = this.formBuilder.group({
      id: [note.id!],
      title: [note.title],
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

  deleteCard(id: number) {
    if(id != 0) {
      this.service.delete(id).subscribe(() => {
        window.location.reload();
      });
    }
  }



}
