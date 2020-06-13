import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/_global/global';

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
    user.sex = type;
    this.route.navigate(['data/general']);
  }
}
