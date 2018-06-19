import { Component, OnInit } from '@angular/core';
import { Intent } from '../../../models/intent';
import { RacService } from '../../../services/rac-services.service';

@Component({
  selector: 'app-teacher-answers',
  templateUrl: './teacher-answers.component.html',
  styleUrls: ['./teacher-answers.component.css']
})
export class TeacherAnswersComponent implements OnInit {

  loading: boolean = true;
  intents: Array<Intent>;

  constructor(
    private services: RacService
  ) { }

  ngOnInit() {
    this.services.getIntents().subscribe(res =>{
      this.intents = res.intents;
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
