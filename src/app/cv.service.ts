import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private cvJson = "/assets/dataJson/cv.json";

  constructor(private httpCv: HttpClient) { }


  private handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getCv(): Observable<any> {
    console.log(this.cvJson)
    return this.httpCv.get(this.cvJson).
      pipe(map(this.extractData), catchError(this.handleError));

  }
}
