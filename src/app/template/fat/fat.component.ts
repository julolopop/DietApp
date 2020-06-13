import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fat',
  templateUrl: './fat.component.html',
  styleUrls: ['./fat.component.scss']
})
export class FatComponent implements OnInit {

  public imagesUrl;
  
  constructor() { }
 
  ngOnInit() {
    this.imagesUrl = ['assets/icon/men.png', 'assets/icon/women.png', 'assets/icon/women.png', 'assets/icon/men.png', 'assets/icon/men.png'];
  }

}
