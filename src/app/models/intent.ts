import { Pattern } from "./pattern";
import { Response } from "./response";

export class Intent {
    
    id:Number;
    patterns:Array<Pattern>;
    responses:Array<Response>;
    tag: string;
    context_set: string;
    context_filter: string;
}
