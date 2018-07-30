import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../node_modules/@angular/material';
import { User } from '../../../models/user';

@Component({
  selector: 'app-dialog-conversations',
  templateUrl: './dialog-conversations.component.html',
  styleUrls: ['./dialog-conversations.component.css']
})
export class DialogConversationsComponent implements OnInit {
  
  @ViewChild('chatList') chatList;

  constructor( public dialogRef: MatDialogRef<DialogConversationsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) { }

  ngOnInit() {
    this.scrollChatListToBottom();
    console.log(this.data);
    
  }

  
  private scrollChatListToBottom() {
    setTimeout(() => {
      this.chatList._elementRef.nativeElement.scrollTop = this.chatList._elementRef.nativeElement.scrollHeight;
    }, 500);
  }

}
