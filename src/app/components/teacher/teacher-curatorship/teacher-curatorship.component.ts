import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RacService } from '../../../services/rac-services.service';
import { Conversation } from '../../../models/conversation';
import { Intent } from '../../../models/intent';

@Component({
  selector: 'app-teacher-curatorship',
  templateUrl: './teacher-curatorship.component.html',
  styleUrls: ['./teacher-curatorship.component.css']
})
export class TeacherCuratorshipComponent implements OnInit {

  loading: boolean = true;
  cvsWithNoAnswer: Array<Conversation> = new Array<Conversation>();
  intents: Array<Intent> = new Array<Intent>();

  constructor(private services: RacService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.services.getCvsWithNoAnswer().subscribe(res =>{
      this.cvsWithNoAnswer = res;
      console.log(this.cvsWithNoAnswer);
      this.services.getIntents().subscribe(res =>{
        this.intents = res;
        console.log(this.intents);
        this.loading = false
      })
      
    })
  }

}
