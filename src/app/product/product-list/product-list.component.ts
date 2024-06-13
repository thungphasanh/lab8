import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  constructor(private dataService: DataService, private router: Router) {
    this.dataService.setApiUrl('http://localhost:3000/products');
  }
  ngOnInit(): void {
    this.loadData();
  }
  products:any
  loadData(){
    this.dataService.getItems().subscribe((data: any) => {
      this.products = data.sort((a:any, b:any)=>b.id - a.id);
    });
  }
  deleteItem(id:any){
    if(confirm('Bạn có chắc muốn xóa?')){
      this.dataService.deleteItem(id).subscribe(()=>{
        this.loadData();
      })
    }
  }
}
