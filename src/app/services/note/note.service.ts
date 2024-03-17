import { Note } from 'src/app/services/note/Note';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private readonly NOTE_API = 'http://localhost:8080/notes';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Note[]> {
    return this.http.get<Note[]>(this.NOTE_API);
  }

  findById(id: number): Observable<Note> {
    return this.http.get<Note>(`${this.NOTE_API}/${id}`);
  }

  delete(id: number): Observable<Note> {
    return this.http
      .delete<Note>(`${this.NOTE_API}/${id}`);
  }

  create(note: Note): Observable<Note> {
    return this.http.post<Note>(this.NOTE_API, note);
  }

  update(note: Note) {
    return this.http.put<Note>(`${this.NOTE_API}/${note.id}`, note);
  }
}
