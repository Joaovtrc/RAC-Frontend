import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RacService } from '../../../services/rac-services.service';
import { User } from '../../../models/user';
import { MatSnackBar } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-teacher-chat',
  templateUrl: './teacher-chat.component.html',
  styleUrls: ['./teacher-chat.component.css']
})
export class TeacherChatComponent implements OnInit {
  
  @ViewChild('chatList') chatList;
  newQuestion: String = '';
  user: User;
  loading = true;
  constructor(private services: RacService,
    public snackBar: MatSnackBar,) { }

  ngOnInit() {
    this.services.getSingleUser(1).subscribe(res =>{
      this.user = res;
      console.log(this.user);
      this.loading = false;
      this.scrollChatListToBottom();
    });
  }


  sendQuestionRAC(){
    if(this.newQuestion != ''){
      let question = {};
      question['question'] = this.newQuestion.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g,"").replace(/\s{2,}/g," ");
      ;
      question['idUser'] = 1;  
      this.newQuestion = ''; 
      this.services.chatBotResponse(question).subscribe(res =>{
        if(res.status == 200){
          this.user.conversations.push(res.body)
          this.scrollChatListToBottom();
        }else{
          this.snackBar.open('Ocorreu um erro, tente novamente mais tarde.', '', {
            duration: 1500,
          });
        }
      });
    }
  }


  private scrollChatListToBottom() {
    setTimeout(() => {
      this.chatList._elementRef.nativeElement.scrollTop = this.chatList._elementRef.nativeElement.scrollHeight;
    }, 1);
  }

}
