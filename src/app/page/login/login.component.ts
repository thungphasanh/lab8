import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) { }
  onLogin(formData: any) {
    this.authService.login(formData.email, formData.password);
    // this.authService.signUp(formData.email, formData.password);
  }
  ngOnInit(): void {
    console.log('login:' + this.authService.isLoggedIn());
  }
  // kiemtra():void {
  //   const db = new database();
  //   const users =db.doc(courseApi);
  //   const username = document.querySelector('input[name = "username"]').value;
  //   const password = document.querySelector('input[name = "password"]').value;
  //   kq:any = 0;
  //   po = -1;
  //   for(let i = 0; i<users.length;i++){
  //     if(users[i]['username'] == username && users[i]['password'] == password){
  //       console.log(users);
  //       kq=1;
  //       po=users[i]['user1'];
  //     }
  //   }
  //   if (kq==1 && po == 0) {
  //     window.location = "../admin/admin.html";
  //   }
  //   if(kq==1 && po==1){
  //     window.location = "../Home/index.html";
  //   }
  //   if(kq == 0 && po == -1){
  //     alert("Tài khoản hoặc mật không chính xác");
  //   }
  // }
}
