import { Injectable } from '@angular/core';
import { Note } from './Note';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private readonly NOTE_API = 'http://localhost:8080/notes';

  constructor(private http: HttpClient) { }

  list(): Observable<Note[]> {
    return this.http.get<Note[]>(this.NOTE_API);
  }

  delete(id: number): Observable<Note> {
    return this.http
      .delete<Note>(`${this.NOTE_API}/${id}`);
  }
}
