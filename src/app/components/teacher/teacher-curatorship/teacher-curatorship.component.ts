import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
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
    public dialog: MatDialog,
    public snackBar: MatSnackBar) { }

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
      data: {Title: 'Treinar RAC',
             Description: 'Tem certeza que deseja treinar o RAC?',
             AcceptButton: "Treinar",
             CancelButton: "Cancelar"}
    });

    dialogRef.afterClosed().subscribe(closedDialogRes => {
      if(closedDialogRes){
        this.services.trainChatbot().subscribe(res=>{
          if(res.status == 200){
            this.snackBar.open("Treinamento concluído com sucesso.", "", { duration: 1500, });

          }else{
            this.snackBar.open("Houve um problema no treinamento, por favor tente novamente.", "", { duration: 1500, });

          }

          
        });
      }
    });
  
  }

}
