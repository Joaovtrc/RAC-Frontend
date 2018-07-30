import { Component, OnInit } from '@angular/core';
import { RacService } from '../../../services/rac-services.service';
import { User } from '../../../models/user';
import { MatDialog } from '../../../../../node_modules/@angular/material';
import { DialogConversationsComponent } from '../../dialogs/dialog-conversations/dialog-conversations.component';
import { DialogAddUserComponent } from '../../dialogs/dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-teacher-students',
  templateUrl: './teacher-students.component.html',
  styleUrls: ['./teacher-students.component.css']
})
export class TeacherStudentsComponent implements OnInit {

  loading = true;
  students : Array<User> = new Array<User>()
  constructor(private services: RacService,
              public dialog: MatDialog) {  }

  ngOnInit() {
    this.services.getUsers().subscribe(res =>{
      this.students = res;
      console.log(this.students);
      this.loading = false
    })
  }

  openDialogStudent(student: User): void {
    this.dialog.open(DialogConversationsComponent, {
      width: '70vw',
      height: '70vh',
      data: student
    });
  }
  
  openDialogAddStudent(): void {
    this.dialog.open(DialogAddUserComponent, {
      width: '80vw',
      data: {}
    });


  }

}
