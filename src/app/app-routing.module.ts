import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './components/notes/create-note/create-note.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listNote',
    pathMatch: 'full'
  },
  {
    path: 'createNote',
    component: CreateNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
