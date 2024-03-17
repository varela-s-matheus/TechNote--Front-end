import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormNoteComponent } from './pages/form-note/form-note.component';
import { ListNotesComponent } from './pages/list-notes/list-notes.component';
import { AboutProjectComponent } from './pages/about-project/about-project.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
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
  },
  {
    path: 'about',
    component: AboutProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
