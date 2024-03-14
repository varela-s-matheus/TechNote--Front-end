import { ActivatedRoute, Router } from '@angular/router';
import { Note } from './../../services/note/Note';
import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/note/note.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  formNote!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: NotesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(parseInt(id!)).subscribe((note) => {
      this.formNote = this.formBuilder.group({
        id: [note.id],
        title: [note.title, Validators.required],
        content: [note.content, Validators.maxLength(1000)],
        author: [note.author, Validators.required],
        style: [note.style, Validators.required],
        type: [note.type, Validators.required]
      })
    })
  }
}
