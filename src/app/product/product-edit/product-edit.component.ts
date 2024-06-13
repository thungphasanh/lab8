import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent  implements OnInit{
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    this.dataService.setApiUrl('http://localhost:3000/products');
  }
  product:any
  id:any
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.dataService.getItem(this.id).subscribe((data) => {
      this.product = data;
    })
  }
  onSubmit(myForm:any){
    if (myForm.valid) {
      this.dataService.updateItem(myForm.value, this.id).subscribe(() => {
        this.router.navigate(['product']);
      })
    }
  }
}
