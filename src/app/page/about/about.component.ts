import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private dataService: DataService, private router: Router) {
    this.dataService.setApiUrl('http://localhost:3000/products/?id_cate=1');
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
}
