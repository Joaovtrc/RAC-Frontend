import { Injectable } from '@angular/core';

@Injectable()

export class Strings {

    public static get mainURL(): string { return 'http://localhost:5000/'; }
    public static get tokenName(): string { return 'currentTeacher'; }

    //Intents
    public static get getIntents(): string {return 'api/Intents'};
    public static get postIntents(): string {return 'api/insertIntent'};
    public static get postSingleIntent(): string {return 'api/insertSingleIntent'};


    //Answers/Patterns
    public static get answers(): string {return 'api/Answers'};
    public static get deleteAnswer(): string {return 'api/deleteAnswer/'};// /id
    public static get deletePattern(): string {return 'api/deletePattern/'};// /id


    //Users
    public static get postUser(): string {return 'api/insertUser'};
    public static get getUsers(): string {return 'api/Users'};
    public static get getSingleUser(): string {return 'api/getSingleUser/'};// /id

    //Chatbot
    public static get chatBotResponse(): string {return 'api/ChatBot/Response'};

}
