import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './pages/create-note/create-note.component';
import { ListNotesComponent } from './pages/list-notes/list-notes.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
