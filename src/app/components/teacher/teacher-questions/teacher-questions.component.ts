import { Component, OnInit } from '@angular/core';
import { RacService } from '../../../services/rac-services.service';
import { Intent } from '../../../models/intent';

@Component({
  selector: 'app-teacher-questions',
  templateUrl: './teacher-questions.component.html',
  styleUrls: ['./teacher-questions.component.css']
})
export class TeacherQuestionsComponent implements OnInit {

  loading: boolean = true;
  intents: Array<Intent>;

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


  addResponse(){
    console.error("IMPLEMENT")
  }

  saveResponses(){
    console.error("IMPLEMENT")
  }

}
