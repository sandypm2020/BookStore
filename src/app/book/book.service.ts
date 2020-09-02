import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Book } from './book.model';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  baseUrl = `http://localhost:3000`;
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    let url = `${this.baseUrl}/api/books`;

    return this.http.get<Book[]>(url).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  saveUserBook(newBook: {}): Observable<any> {
    let url = `${this.baseUrl}/api/books`;
    return this.http.post<Book>(url, newBook).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res);
    return throwError(res.error || 'Server error');
  }
}
