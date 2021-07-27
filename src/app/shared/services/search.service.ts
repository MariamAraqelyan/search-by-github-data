import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getSearch(value: string): Observable<any> {
    return this.http.get(
      `https://api.github.com/search/repositories?q=${value}`
    );
  }
}
