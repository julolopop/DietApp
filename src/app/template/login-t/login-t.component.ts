import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-t',
  templateUrl: './login-t.component.html',
  styleUrls: ['./login-t.component.scss']
})
export class LoginTComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goToData(){
    this.route.navigate(['data']);
  }
}
