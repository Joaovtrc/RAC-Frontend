import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '../../../../../node_modules/@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '../../../../../node_modules/@angular/material';
import { RacService } from '../../../services/rac-services.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.css']
})
export class DialogAddUserComponent implements OnInit {

  requiredPassword: boolean = false;
  loadingSubmitUser: boolean = false;
  name = new FormControl('', [Validators.required, Validators.maxLength(200)]);
  username = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  password = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  groupForm: FormGroup = new FormGroup({});
  newStudent: User = new User();


  constructor( public dialogRef: MatDialogRef<DialogAddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private services: RacService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.groupForm.addControl('name', this.name)
    this.groupForm.addControl('username', this.username)

    if(this.data.student != undefined){
      var password = new FormControl('');
      this.groupForm.addControl("password",password);
      this.newStudent = this.data.student;
    }else{
      this.groupForm.addControl("password",this.password);
      this.requiredPassword = true;
    }


  }

  addUser(){
    if(this.groupForm.valid){
      this.services.postUser(this.newStudent).subscribe(res => {
        if (res.status ==200){
          this.snackBar.open("Aluno criado com sucesso.", "", { duration: 1500, });
          this.dialogRef.close(true);
        }else{
          this.snackBar.open("Ocorreu um problema, tente novamente.", "", { duration: 1500, });
        }
      });
    }else{
      this.setFormGroupTouched();
    }
     
  }


  getErrorMessage(form: String) {
    if(form === "name"){
      return this.groupForm.get('name').hasError('required') ? 'Digite um nome' :
             this.groupForm.get('name').hasError('maxlength') ? 'Nome ultrapassou o limite de caractéres' :
              '';

    }else if(form === "username"){
      return this.groupForm.get('username').hasError('required') ? 'Digite um usuário' :
             this.groupForm.get('username').hasError('maxlength') ? 'Usuário ultrapassou o limite de caractéres' :
             '';

    }else if(form == "password"){
      return  this.groupForm.get('password').hasError('required') ? 'Digite uma senha' :
              this.groupForm.get('password').hasError('maxlength') ? 'Senha ultrapassou o limite de caractéres' :
              '';
    }         
  }

  private setFormGroupTouched() {
    Object.keys(this.groupForm.controls).forEach(field => {
      const control = this.groupForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  
}
