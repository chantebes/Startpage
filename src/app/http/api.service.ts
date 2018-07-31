import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getRedditTitle(): Observable<any> {
    return this.http.get('https://www.reddit.com/r/javascript.json');
  }
}
