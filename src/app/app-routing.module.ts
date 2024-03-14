import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormNoteComponent } from './pages/form-note/form-note.component';
import { ListNotesComponent } from './pages/list-notes/list-notes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listNotes',
    pathMatch: 'full'
  },
  {
    path: 'createNote',
    component: FormNoteComponent
  },
  {
    path: 'listNotes',
    component: ListNotesComponent
  },
  {
    path: 'updateNote/:id',
    component: FormNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
