import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-register',
  templateUrl: './data-register.component.html',
  styleUrls: ['./data-register.component.scss']
})
export class DataRegisterComponent implements OnInit {
  
  public user;
  
  constructor() { }

  ngOnInit(): void {
  }

}
