import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RacService } from '../../../services/rac-services.service';
import { Conversation } from '../../../models/conversation';
import { Intent } from '../../../models/intent';
import { DialogCuratorshipComponent } from '../../dialogs/dialog-curatorship/dialog-curatorship.component';
import { DialogGenericComponent } from '../../dialogs/dialog-generic/dialog-generic.component';

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
    this.loadCvs()
  }

  loadCvs(){
    this.services.getCvsWithNoAnswer().subscribe(res =>{
      this.cvsWithNoAnswer = res;
        this.loading = false
    });
  }

  curateConversation(conversation: Conversation){
    const dialogAddIntent = this.dialog.open(DialogCuratorshipComponent, {
      data: {conversation}
    });
    
    dialogAddIntent.afterClosed().subscribe(closedDialogRes => {
      if(closedDialogRes){
        this.loadCvs();
      }

    });  

  }


  trainChatbot(){
    const dialogRef = this.dialog.open(DialogGenericComponent, {
      width: '250px',
      data: {Title: 'Treinar chatbot',
             Description: 'Tem certeza que deseja treinar o chatbot? \r\n O sistema se tornará inutilizável até o fim do treinamento.',
             AcceptButton: "Treinar",
             CancelButton: "Cancelar"}
    });

    dialogRef.afterClosed().subscribe(closedDialogRes => {
      if(closedDialogRes){

      }else{

      }
  
    });
  
  }

}
