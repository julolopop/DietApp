import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})

export class GenderComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  gotoInfo(type:string){
    this.route.navigate(['data/general']);
  }
}
