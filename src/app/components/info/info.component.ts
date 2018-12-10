import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  private infoTitle: string;
  private addressString: {street: string, city: string, province: string, postcode: string};

  constructor() { }

  ngOnInit() {

    this.infoTitle = 'Section Info'

    this.addressString = {
      street: 'BangnaTrad14',
       city: 'Bangna',
        province: 'Bangkok',
         postcode: '10260'
        };




  }

}
