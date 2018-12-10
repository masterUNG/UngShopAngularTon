import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  // Explicit
  private categoryTitle: string;
  private shopMember: string;

  constructor() { }

  ngOnInit() {

    this.categoryTitle = 'Section Category';

  } // ngOnInit Function

  addMember(memberString: string){

    console.log('addMember Work');
    this.shopMember = memberString;
    alert('You Add ==> ' + this.shopMember);
    
  } // addMembed



} // Main Class
