import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Conversation } from '../../../models/conversation';
import { RacService } from '../../../services/rac-services.service';
import { Intent } from '../../../models/intent';

@Component({
  selector: 'app-dialog-curatorship',
  templateUrl: './dialog-curatorship.component.html',
  styleUrls: ['./dialog-curatorship.component.css']
})
export class DialogCuratorshipComponent implements OnInit {
  selectedIntent: Intent;
  loading: boolean = true;
  intents: Array<Intent> = new Array<Intent>();

  constructor(private services: RacService,
    public dialogRef: MatDialogRef<DialogCuratorshipComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.services.getIntents().subscribe(res =>{
      this.intents = res;
      console.log(this.intents);
      this.loading = false
    });

    console.log(this.data);
    
  }


  curateConversation(){
    this.services.curateConversation(this.data.conversation.id,this.selectedIntent.id).subscribe(res =>{
      console.log(res)
      let resp: any = res;
      if(resp.status == 200){
        this.snackBar.open("Pergunta ou frase redirecionada com sucesso.", "", { duration: 1500, });
          this.dialogRef.close(true);
      }else{
        this.snackBar.open("Ocorreu um problema, tente novamente.", "", { duration: 1500, });
      }
    });
  }

}
