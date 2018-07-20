import { User } from "./user";
import { Intent } from "./intent";

export class Conversation {

    id:Number;
    question: String;
    date : Date;
    user: User;
    classify: Number;
    intent: Intent
    response: Response;

}
