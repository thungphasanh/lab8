import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bai2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bai2.component.html',
  styleUrl: './bai2.component.css'
})
export class Bai2Component {
  title = 'lab1';
  image = 'assets/hinh1.jpg';
  student = {
    hoTen: 'Phạm Thành Vinh',
    ngaySinh: '1995-03-13',
    gioiTinh: 0,
    diem: 8.5,
    hinh: 'assets/hinh1.jpg'
  }
  clickMe():void{
    this.title = "hello vinh"
  }
}
