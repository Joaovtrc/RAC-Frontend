import { Component, OnInit } from '@angular/core';
import { Intent } from '../../../models/intent';
import { Pattern } from '../../../models/pattern';
import { RacService } from '../../../services/rac-services.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-add-intent',
  templateUrl: './dialog-add-intent.component.html',
  styleUrls: ['./dialog-add-intent.component.css']
})
export class DialogAddIntentComponent implements OnInit {

  newIntent: Intent = new Intent();
  newPattern: Pattern = new Pattern();

  constructor(public dialogRef: MatDialogRef<DialogAddIntentComponent>,
              private services: RacService,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.newIntent.patterns = new Array<Pattern>();
    
  }

  addIntent(){
    this.services.postSingleIntent(this.newIntent).subscribe(res =>{
      if(res.status == 200){
        this.snackBar.open("Pergunta/frase criada com sucesso.", "", { duration: 1500, });
        this.dialogRef.close(true);

      }else{
        this.snackBar.open("Ocorreu um problema, tente novamente.", "", { duration: 1500, });
        
      }
    });
  }

  deletePattern(intent: Intent, pattern: Pattern){
    intent.patterns.splice(intent.patterns.indexOf(pattern),1);
  }


  addPattern(){
    if(this.newPattern.pattern.replace(/\s/g, "") != "" && this.newPattern.pattern != undefined){
      this.newPattern.id = -1;
      this.newIntent.patterns.push(this.newPattern);    
      this.newPattern = new Pattern();
    }
  }


}
