import { Component, OnInit } from '@angular/core';
import { Intent } from '../../../models/intent';
import { RacService } from '../../../services/rac-services.service';
import { Response } from '../../../models/response';

@Component({
  selector: 'app-teacher-answers',
  templateUrl: './teacher-answers.component.html',
  styleUrls: ['./teacher-answers.component.css']
})
export class TeacherAnswersComponent implements OnInit {
  isAdding: Array<boolean> = new Array<boolean>();
  addAnswerList: Array<Response> = new Array<Response>();
  loading: boolean = true;
  intents: Array<Intent> = new Array<Intent>();
  sendingQuestions: boolean = false;

  constructor(
    private services: RacService
  ) { }

  ngOnInit() {
    this.services.getIntents().subscribe(res =>{
      this.intents = res;
      console.log(this.intents);
      this.loading = false
    })
  }


  addAnswer(indexIntent){
    this.intents[indexIntent].responses.push(this.addAnswerList[indexIntent]);
    this.addAnswerList[indexIntent].response = "";
    this.isAdding[indexIntent] = false;
    console.error("IMPLEMENT")
  }

  editAnswer(indexIntent, indexAnswer){
  }

  deleteAnswer(indexIntent, indexAnswer){
    this.intents[indexIntent].responses.splice(indexAnswer,1);
  }

  saveAnswers(indexIntent){
    this.sendingQuestions = true;
  /* this.services.postAnswers(this.intents[indexIntent]).subscribe(res =>{

    }); */
    console.error("IMPLEMENT", this.intents[indexIntent])
  }

}
