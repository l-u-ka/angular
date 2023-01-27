import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators'
import { Note, NoteService } from '../note.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private noteService: NoteService, private router: Router) { }

  public id:string = '';
  public note: Note = {
    id: '',
    title: '',
    content: '',
    isImportant: false,
    createDate: new Date(0)
  };

  public editingNote?: Note; 


  editForm = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    important: new FormControl(false, Validators.required)
  });


  
  cancelEditStudent(){
    this.note = {} as Note;
    this.router.navigate(['my-notes']);
  } 

  
  editNote(){
    this.note.title = this.editForm.value.title!;
    this.note.content = this.editForm.value.content!;
    this.note.isImportant = this.editForm.value.important!;

    this.noteService.editNote(this.note).subscribe(d => {
      this.router.navigate(['my-notes']);
    })
  }

  loadNote(id:string) {
    this.noteService.getNote(id).subscribe((d: Note) => {
      this.note = d;
    });
  }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.loadNote(this.id);
    console.log(this.note)
  }

}
