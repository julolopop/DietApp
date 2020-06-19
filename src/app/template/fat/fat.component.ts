import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fat',
  templateUrl: './fat.component.html',
  styleUrls: ['./fat.component.scss']
})
export class FatComponent implements OnInit {

  public imagesUrl;
  
  constructor(private route:Router) { }
 
  ngOnInit() {
    this.imagesUrl = ['assets/icon/men.png', 'assets/icon/women.png', 'assets/icon/women.png', 'assets/icon/men.png', 'assets/icon/men.png'];
  }

 
  gotoNext(){
    this.route.navigate(['data/objetive']);
  }
}
