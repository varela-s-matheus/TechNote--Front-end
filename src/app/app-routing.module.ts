import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './pages/create-note/create-note.component';
import { ListNotesComponent } from './pages/list-notes/list-notes.component';
import { UpdateNoteComponent } from './pages/update-note/update-note.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listNotes',
    pathMatch: 'full'
  },
  {
    path: 'createNote',
    component: CreateNoteComponent
  },
  {
    path: 'listNotes',
    component: ListNotesComponent
  },
  {
    path: 'updateNote/:id',
    component: UpdateNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
