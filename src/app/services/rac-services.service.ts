import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Strings } from '../util/Strings';

@Injectable()
export class RacService {

  constructor(private http: HttpClient) { }

  //TODO: Implement GET from backend
  public getIntents(): Observable<any>{
    return this.http.get(Strings.mainURL.concat(Strings.getIntents))
  }

  //TODO: Implement POST from backend
  public postAnswers(answers){
    return this.http.post(Strings.mainURL.concat(Strings.answers), answers, { observe: 'response' });
  }


}
