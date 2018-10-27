import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { RacService } from '../../../services/rac-services.service';
import { Conversation } from '../../../models/conversation';
import { Intent } from '../../../models/intent';
import { DialogCuratorshipComponent } from '../../dialogs/dialog-curatorship/dialog-curatorship.component';
import { DialogGenericComponent } from '../../dialogs/dialog-generic/dialog-generic.component';
import { DialogAddIntentComponent } from '../../dialogs/dialog-add-intent/dialog-add-intent.component';

@Component({
  selector: 'app-teacher-curatorship',
  templateUrl: './teacher-curatorship.component.html',
  styleUrls: ['./teacher-curatorship.component.css']
})
export class TeacherCuratorshipComponent implements OnInit {

  loading: boolean = true;
  loadingTraining: boolean = false;
  cvsWithNoAnswer: Array<Conversation> = new Array<Conversation>();
  cvsWithLowClass: Array<Conversation> = new Array<Conversation>();

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
      this.services.getCvsWithLowClassify().subscribe(resLowClass =>{
        this.cvsWithLowClass = resLowClass;
        console.log(this.cvsWithLowClass)
        this.loading = false

      });
    });
  }

  curateConversation(conversation: Conversation, existingIntent: boolean){
    if(existingIntent){
      const dialogCuration = this.dialog.open(DialogCuratorshipComponent, {
        data: {'conversation': conversation,
        'lowClass': false}
      });
      
      dialogCuration.afterClosed().subscribe(closedDialogRes => {
        if(closedDialogRes){
          this.loadCvs();
        }

      }); 

    }else{
      const dialogAddIntent = this.dialog.open(DialogAddIntentComponent, {
        width: '80vw',
        data: {}
      });
      
      dialogAddIntent.afterClosed().subscribe(data => {
        if(data.closedDialogRes){
          this.services.getIntentByName(data.intent.tag).subscribe(res =>{
            let intent = res;
            this.services.curateConversation(conversation.id,intent.id).subscribe(res =>{
              console.log(res)
              let resp: any = res;
              if(resp.status == 200){
                this.snackBar.open("Pergunta ou frase redirecionada com sucesso.", "", { duration: 1500, });
                this.loadCvs();
              }else{
                this.snackBar.open("Ocorreu um problema, tente novamente.", "", { duration: 1500, });
              }
            });
          });
        }
  
      });
    }
  }

  curateConversationWLowClass(conversation: Conversation, correctAnswer:boolean, existingIntent: boolean){
    if(correctAnswer){
      this.services.curateConversationWCorrectAnswer(conversation.id).subscribe(res =>{
        console.log(res)
        this.snackBar.open("Pergunta ou frase direcionada com sucesso.", "", { duration: 1500, });
        this.loadCvs()
      });
    }else{

      if(existingIntent){
        const dialogCuration = this.dialog.open(DialogCuratorshipComponent, {
          data: {'conversation': conversation,
                  'lowClass': true}
        });
        
        dialogCuration.afterClosed().subscribe(closedDialogRes => {
          if(closedDialogRes){
            this.loadCvs();
          }
  
        }); 
  
      }else{
        const dialogAddIntent = this.dialog.open(DialogAddIntentComponent, {
          width: '80vw',
          data: {}
        });
        
        dialogAddIntent.afterClosed().subscribe(data => {
          if(data.closedDialogRes){
            this.services.getIntentByName(data.intent.tag).subscribe(res =>{
              let intent = res;
              this.services.curateConversationWLowClass(conversation.id,intent.id).subscribe(res =>{
                console.log(res)
                let resp: any = res;
                if(resp.status == 200){
                  this.snackBar.open("Pergunta ou frase redirecionada com sucesso.", "", { duration: 1500, });
                  this.loadCvs();
                }else{
                  this.snackBar.open("Ocorreu um problema, tente novamente.", "", { duration: 1500, });
                }
              });
            });
          }
    
        });
      }
    }
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
        this.loadingTraining = true;
        this.snackBar.open("Treinamento do RAC em andamento.", "");

        this.services.trainChatbot().subscribe(res=>{
          this.snackBar.dismiss();
          if(res.status == 200){
            this.snackBar.open("Treinamento concluído com sucesso.", "", { duration: 1500, });
            this.loadingTraining = false;
          }else{
            this.snackBar.open("Houve um problema no treinamento, por favor tente novamente.", "", { duration: 1500, });
            this.loadingTraining = false;
          }

          
        });
      }
    });
  }

}