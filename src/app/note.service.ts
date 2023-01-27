import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private url = 'http://localhost:3000/notes';

  public getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url);
  }

  public editNote(note: Note) {
    return this.http.put<Note>(`${this.url}/${note.id}`, note);
  }

  public getNote(id: string) {
    return this.http.get<Note>(this.url);
    
    /*
    return this.http.get<Note>(this.url, {
      params: new HttpParams().set('id_like', id)
    }); */
  }

  constructor(private http: HttpClient) { }
}


export interface Note {
  id: string;
  title: string;
  content: string;
  isImportant: boolean;
  createDate: Date;
}