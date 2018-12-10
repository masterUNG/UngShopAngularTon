import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promote',
  templateUrl: './promote.component.html',
  styleUrls: ['./promote.component.css']
})
export class PromoteComponent implements OnInit {

  // Explicit
  private friendStrings: string[];
  private promoteTitle: string;

  constructor() { }

  ngOnInit() {

    this.promoteTitle = 'Section Promote';
    this.friendStrings = ['Doramon', 'Nopita', 'Sunako'];

  }

}
