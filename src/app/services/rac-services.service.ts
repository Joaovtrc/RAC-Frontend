import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Strings } from '../util/Strings';
import { User } from '../models/user';
import { Intent } from '../models/intent';
import { Conversation } from '../models/conversation';

@Injectable()
export class RacService {

  constructor(private http: HttpClient) { }

  // Implement GET from backend
  public getIntents(): Observable<Intent[]>{
    return this.http.get<Intent[]>(Strings.mainURL.concat(Strings.getIntents))
  }

  //Intent

 

  // Answers/Patterns
  public postSingleIntent(intent){
    return this.http.post(Strings.mainURL.concat(Strings.postSingleIntent), intent, { observe: 'response' });
  }

  getIntentByName(tagName): Observable<Intent>{
    return this.http.get<Intent>(Strings.mainURL.concat(Strings.getIntentByName)+tagName)

  }
  
  public postAnswersPatterns(answers){
    return this.http.post(Strings.mainURL.concat(Strings.postIntents), answers, { observe: 'response' });
  }

  public deleteAnswer(answerId){
    return this.http.delete(Strings.mainURL.concat(Strings.deleteAnswer + answerId),{ observe: 'response' })
  }

  public deletePattern(patternId){
    return this.http.delete(Strings.mainURL.concat(Strings.deleteAnswer + patternId),{ observe: 'response' })
  }

  //Users

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(Strings.mainURL.concat(Strings.getUsers));
  }

  public getSingleUser(userID): Observable<User>{
    return this.http.get<User>(Strings.mainURL.concat(Strings.getSingleUser+userID));
  }

  public postUser(user){
    return this.http.post(Strings.mainURL.concat(Strings.postUser), user, { observe: 'response' });
  }


  //ChatBot
  public chatBotResponse(question: any): Observable<HttpResponse<Conversation>>{
    return this.http.post<Conversation>(Strings.mainURL.concat(Strings.chatBotResponse),question,{ observe: 'response' });
  }

  public trainChatbot(): any {
    return this.http.post(Strings.mainURL.concat(Strings.trainChatbot),{ observe: 'response' });
  }

  //Conversations/Curatorship
  public getCvsWithNoAnswer(): Observable<Conversation[]>{
    return this.http.get<Conversation[]>(Strings.mainURL.concat(Strings.conversationWithNoAnswer));

  }

  public getCvsWithLowClassify(): Observable<Conversation[]>{
    return this.http.get<Conversation[]>(Strings.mainURL.concat(Strings.getAllCvsWithLowClassify));

  }

  public curateConversation(idCv, idIntent){
    return this.http.post(Strings.mainURL.concat(Strings.curateConversation+idCv+"/"+idIntent),{ observe: 'response' });

  }

  public curateConversationWCorrectAnswer(idCv){
    return this.http.post(Strings.mainURL.concat(Strings.curateConversationWCorrectAnswer+idCv),{ observe: 'response' });

  }
  public curateConversationWLowClass(idCv, idIntent){
    return this.http.post(Strings.mainURL.concat(Strings.curateConversationWLowClass+idCv+"/"+idIntent),{ observe: 'response' });

  }
  
}
