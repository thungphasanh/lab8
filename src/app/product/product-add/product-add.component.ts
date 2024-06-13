import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  constructor(private dataService: DataService, private router: Router) {
    this.dataService.setApiUrl('http://localhost:3000/products');
  }
  onSubmit(myForm: any) {
    if (myForm.valid) {
      this.dataService.addItem(myForm.value).subscribe(() => {
        this.router.navigate(['/product']);
      });
    } else {
      // Hiển thị lỗi khi form chưa valid
      Object.keys(myForm.controls).forEach((field) => {
        const control = myForm.controls[field];
        control.markAsTouched();
      });
    }
  }
}
