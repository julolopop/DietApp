import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/_global/global';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})

export class GenderComponent implements OnInit {

  public user;

  constructor(private route:Router) {
    this.user = user;
   }

  ngOnInit(): void {
  }

  gotoInfo(type:string){
    user.sex = type;
    this.route.navigate(['data/general']);
  }
}
