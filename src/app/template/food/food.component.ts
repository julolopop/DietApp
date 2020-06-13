import { Component, OnInit, ElementRef } from '@angular/core';
import { CampaniaService } from 'src/app/_service/Campania.service';
import { Router } from '@angular/router';
import { user } from 'src/app/_global/global';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  user;
  checked = [false, false, false, false, false];
 
  constructor(private campaniaService:CampaniaService,private route:Router) {
    
   }


  ngOnInit(): void {
    this.user = user;

    this.campaniaService.getCampanas().subscribe(res => {
      this.user = res;
    });
  }

  check(pos) {
    this.checked[pos] = !this.checked[pos];
    this.user.food = this.checked;
    this.campaniaService.setCampanas(this.user);
  }


}
