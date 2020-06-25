import { Component, OnInit } from '@angular/core';
import { CampaniaService } from 'src/app/_service/Campania.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UserData } from 'src/app/_interface/user-data';
import { user } from 'src/app/_global/global';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class trainingComponent implements OnInit {

  public user : UserData = user;
  public training;
  public checked;
  
  constructor(private campaniaService:CampaniaService,private route:Router) {
    // this.campaniaService.getCampanas().subscribe(res => {
    //   this.user = res;
    // });
  }
  
  ngOnInit(): void {
    this.training = [];
    this.checked = [];
    let name = ['Ayunas','despues Desayuno','despues Media Mañana','despues Almuerzo','despues Merienda','despues Cena']    
    
    this.training.push({value:0,text:name[0]});
    this.campaniaService.getCampanas().subscribe(res => {
      this.user = res;
      for (let i = 0; i < res.food.length; i++) {
        const element = res.food[i];

        if ( element ){
          this.training.push({value:i+1,text:name[i+1]});
          this.checked.push(false);
        }
        
      }
    });

  }

  check(pos) {
    this.checked[pos] = !this.checked[pos];
    user.training = pos;
  }


  gotoNext(){
    this.campaniaService.setCampanas(user);
    this.route.navigate(['data/ch']);
  }
}
