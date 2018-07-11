import { Component, OnInit } from '@angular/core';
import { Intent } from '../../../models/intent';
import { RacService } from '../../../services/rac-services.service';
import { Response } from '../../../models/response';
import { MatDialog } from '@angular/material';
import { DialogGenericComponent } from '../../dialogs/dialog-generic/dialog-generic.component';

@Component({
  selector: 'app-teacher-answers',
  templateUrl: './teacher-answers.component.html',
  styleUrls: ['./teacher-answers.component.css']
})
export class TeacherAnswersComponent implements OnInit {
  isAdding: Array<boolean> = new Array<boolean>();
  newResponse: Response = new Response();

  addAnswerList: Array<Response> = new Array<Response>();
  loading: boolean = true;
  intents: Array<Intent> = new Array<Intent>();
  sendingQuestions: boolean = false;

  constructor(
    private services: RacService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.services.getIntents().subscribe(res =>{
      this.intents = res;
      console.log(this.intents);
      this.loading = false
    })
  }


  addAnswer(indexIntent){
    this.newResponse.id = -1;
    this.intents[indexIntent].responses.push(this.newResponse);    
    this.newResponse = new Response();
    this.isAdding[indexIntent] = false;
    console.error("IMPLEMENT")
  }

  editAnswer(indexIntent, indexAnswer){
  }

  deleteAnswer(intent: Intent, answer: Response){

    const dialogRef = this.dialog.open(DialogGenericComponent, {
      width: '250px',
      data: {Title: 'Deletar resposta',
             Description: 'Tem certeza que deseja deletar a resposta?',
             AcceptButton: "Deletar",
             CancelButton: "Cancelar"}
    });

    dialogRef.afterClosed().subscribe(closedDialogRes => {
      if(closedDialogRes){
        if(answer.id != -1){
          this.services.deleteAnswer(answer.id).subscribe(res =>{
            if(res.status == 200){
              this.loadAnswers();
              console.log('deletado!');
            }else{
              console.log('erro!!');
              
            }
          });
        }else{
          intent.responses.splice(intent.responses.indexOf(answer),1);
        }

      }
    });



  }

  saveAnswers(indexIntent){
    this.sendingQuestions = true;
    console.log(JSON.stringify(this.intents[indexIntent]));
    this.intents[indexIntent].context_filter = '';
    this.intents[indexIntent].context_set = '';
    
    this.services.postAnswers(this.intents[indexIntent]).subscribe(res =>{
      this.sendingQuestions = false;
      console.log(res);      
    });
  }


  loadAnswers(){
    this.loading=true;
    this.services.getIntents().subscribe(res =>{
      this.intents = res;
      console.log(this.intents);
      this.loading = false
    })
  }
}
