import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { NoteListComponent } from './note-list/note-list.component';

const routes: Routes = [
  {path: 'my-notes', component: NoteListComponent},
  {path: 'my-notes/:id/edit', component: EditNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
