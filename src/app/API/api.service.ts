import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Question } from './question'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class APIService {

  // Base url
  baseurl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

// --Question Requests--
// POST
  // CheckAnswer(id, answer): Observable<Question> {
  //   return this.http.post<Question>(this.baseurl + '/question/' + id + '/checkAnswer?answer=' + answer) 
  // }

// POST
  AddQuestion(data) {
    return this.http.post<Question>(this.baseurl + '/question/add', JSON.stringify(data), this.httpOptions);
  }

// GET

// GET

// GET
  GetQuestion(id): Observable<Question> {
    return this.http.get<Question>(this.baseurl + '/question/get/' + id)
  }

// GET
  GetAll(): Observable<Question> {
    return this.http.get<Question>(this.baseurl + '/question/getAll')
  }

// --User Requests--
// POST

// POST

}

//   // POST
//   CreateBug(data): Observable<Bug> {
//     return this.http.post<Bug>(this.baseurl + '/bugtracking/', JSON.stringify(data), this.httpOptions)
//     .pipe(
//       retry(1),
//       catchError(this.errorHandl)
//     )
//   }  

//   // GET
//   GetIssue(id): Observable<Bug> {
//     return this.http.get<Bug>(this.baseurl + '/bugtracking/' + id)
//     .pipe(
//       retry(1),
//       catchError(this.errorHandl)
//     )
//   }

//   // GET
//   GetIssues(): Observable<Bug> {
//     return this.http.get<Bug>(this.baseurl + '/bugtracking/')
//     .pipe(
//       retry(1),
//       catchError(this.errorHandl)
//     )
//   }

//   // PUT
//   UpdateBug(id, data): Observable<Bug> {
//     return this.http.put<Bug>(this.baseurl + '/bugtracking/' + id, JSON.stringify(data), this.httpOptions)
//     .pipe(
//       retry(1),
//       catchError(this.errorHandl)
//     )
//   }

//   // DELETE
//   DeleteBug(id){
//     return this.http.delete<Bug>(this.baseurl + '/bugtracking/' + id, this.httpOptions)
//     .pipe(
//       retry(1),
//       catchError(this.errorHandl)
//     )
//   }

//   // Error handling
//   errorHandl(error) {
//      let errorMessage = '';
//      if(error.error instanceof ErrorEvent) {
//        // Get client-side error
//        errorMessage = error.error.message;
//      } else {
//        // Get server-side error
//        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//      }
//      console.log(errorMessage);
//      return throwError(errorMessage);
//   }

// }