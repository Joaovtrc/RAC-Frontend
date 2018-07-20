import { Conversation } from "./conversation";

export class User {
    id: Number;
    name : String;
    username : String;
    password : String;
    conversations : Array<Conversation>;
}
