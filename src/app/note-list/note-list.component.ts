import { Component, OnInit } from '@angular/core';
import { NoteService, Note } from '../note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})

export class NoteListComponent implements OnInit {

  notes: Note[] = [];

  loading: boolean = false;

  constructor(private userService: NoteService) { }

  ngOnInit(): void {
    this.loading = true;
    this.userService.getNotes().subscribe(d => {
      this.notes = d;
      this.loading = false;
    });
  }

}
