import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable()
export class RacService {

  constructor(private http: HttpClient) { }

  //TODO: Implement GET from backend
  public getIntents(): Observable<any>{
    return this.http.get("./assets/intents.json")
  }
}
