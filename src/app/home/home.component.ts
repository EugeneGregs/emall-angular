import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories = [];
  products = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(categories => console.log(categories));
  }

}
