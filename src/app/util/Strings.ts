import { Injectable } from '@angular/core';

@Injectable()

export class Strings {

    public static get mainURL(): string { return 'http://localhost:5000/'; }
    public static get tokenName(): string { return 'currentTeacher'; }

    //Intents
    public static get getIntents(): string {return 'api/Intents'};
    public static get postIntents(): string {return 'api/insertIntent'};

    //Answers
    public static get answers(): string {return 'api/Answers'};
    public static get deleteAnswer(): string {return 'api/deleteAnswer/'};// /id


    //Users
    public static get getUsers(): string {return 'api/Users'};
    public static get getSingleUser(): string {return 'api/getSingleUser/'};// /id

    //Chatbot
    public static get chatBotResponse(): string {return 'api/ChatBot/Response'};

}
