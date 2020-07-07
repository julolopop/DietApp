import { Component, OnInit } from '@angular/core';
import { CampaniaService } from 'src/app/_service/Campania.service';
import { Router } from '@angular/router';
import { user } from 'src/app/_global/global';

@Component({
  selector: 'app-ch',
  templateUrl: './ch.component.html',
  styleUrls: ['./ch.component.scss']
})
export class ChComponent implements OnInit {


  public user;
  public ch = [];

  constructor(private campaniaService: CampaniaService, private route: Router) {
    // this.campaniaService.getCampanas().subscribe(res => {
    //   this.user = res;
    // });
  }

  ngOnInit(): void {
    this.user = user;
    this.ch = [];
    let name = ['Alto en carbohidratos', 'Moderado en carbohidratos', 'Bajo en carbohidratos', 'Muy bajo en carbohidratos'];
    let porcentage = [0.6,0.4,0.2,0];


    for (let i = 0; i < name.length; i++) {
        this.ch.push({ value: porcentage[i], viewValue: name[i] });
      
    }

  }

  gotoNext() {
    this.campaniaService.setCampanas(this.user);
    this.route.navigate(['data/edit']);
  }
}
