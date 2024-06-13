import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
}
