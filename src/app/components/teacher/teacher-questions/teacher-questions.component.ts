import { Component, OnInit } from '@angular/core';
import { RacService } from '../../../services/rac-services.service';
import { Intent } from '../../../models/intent';
import { Pattern } from '../../../models/pattern';
import { MatDialog } from '../../../../../node_modules/@angular/material';
import { DialogGenericComponent } from '../../dialogs/dialog-generic/dialog-generic.component';

@Component({
  selector: 'app-teacher-questions',
  templateUrl: './teacher-questions.component.html',
  styleUrls: ['./teacher-questions.component.css']
})
export class TeacherQuestionsComponent implements OnInit {
  
  isAdding: Array<boolean> = new Array<boolean>();
  loading: boolean = true;
  intents: Array<Intent>;
  newPattern: Pattern = new Pattern();
  sendingPatterns: boolean = false;
  
  constructor(
    private services: RacService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadPatterns();
  }

  changeEditing(indexIntent){
    for (let i = 0; i < this.isAdding.length; i++) {
      this.isAdding[i] = false;
      
    }
    this.isAdding[indexIntent] = true; 
    this.newPattern = new Pattern();

  }

  addPattern(indexIntent){
    if(this.newPattern.pattern.replace(/\s/g, "") != "" && this.newPattern.pattern != undefined){
      this.newPattern.id = -1;
      this.intents[indexIntent].patterns.push(this.newPattern);    
      this.newPattern = new Pattern();
      this.isAdding[indexIntent] = false;
    }
  }

  savePatterns(indexIntent){
    this.sendingPatterns = true;
    console.log(JSON.stringify(this.intents[indexIntent]));
    this.intents[indexIntent].context_filter = '';
    this.intents[indexIntent].context_set = '';
    
    this.services.postAnswersPatterns(this.intents[indexIntent]).subscribe(res =>{
      this.sendingPatterns = false;
      console.log(res);      
    });
  }

  deletePattern(intent: Intent, pattern: Pattern){

    const dialogRef = this.dialog.open(DialogGenericComponent, {
      width: '250px',
      data: {Title: 'Deletar resposta',
             Description: 'Tem certeza que deseja deletar a resposta?',
             AcceptButton: "Deletar",
             CancelButton: "Cancelar"}
    });

    dialogRef.afterClosed().subscribe(closedDialogRes => {
      if(closedDialogRes){
        if(pattern.id != -1){
          this.services.deletePattern(pattern.id).subscribe(res =>{
            if(res.status == 200){
              this.loadPatterns();
              console.log('deletado!');
            }else{
              console.log('erro!!');
              
            }
          });
        }else{
          intent.patterns.splice(intent.patterns.indexOf(pattern),1);
        }

      }
    });
  }

  loadPatterns(){
    this.loading=true;
    this.services.getIntents().subscribe(res =>{
      this.intents = res;
      console.log(this.intents);
      this.loading = false
    })
  }

}
