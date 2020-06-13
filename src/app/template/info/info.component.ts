import { Component, OnInit } from '@angular/core';
import { CampaniaService } from 'src/app/_service/Campania.service';
import { user } from 'src/app/_global/global';
import { UserData } from 'src/app/_interface/user-data';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  public user:UserData;
  public correction = 0;
  public carorias = 0;
  public lot = 0;
  public cg = 0;
  public cp = 0;
  public pp = 0;
  public minG = 0;
  public magro = 0;
  constructor(private campaniaService:CampaniaService) { 

  }

  ngOnInit(): void {    
    this.campaniaService.getCampanas().subscribe(res => {
      this.user = res;
      this.init();
    });
  }

  init() {
    let TMBH1 = 88 + (13.4 * this.user.weight) + (4.8 * this.user.height) - (5.7 * this.user.age),
        TMBM1 = 448 + (9.3 * this.user.weight) + (3.1 * this.user.height) - (4.3 * this.user.age),
        TMBH2 = (10 *this.user.weight) + (6.25 * this.user.height) - (5 * this.user.age) + 5,
        TMBM2 = (10 *this.user.weight) + (6.25 * this.user.height) - (5 * this.user.age) - 161,
        FEH = [0,0.1,0.2,0.4,0.5,0.6],
        FEM = [0,0.1,0.2,0.3,0.4,0.5],
        FMH = [1.1,1.2,1.3,1.4,1.5,1.7],
        FMM = [1.1,1.2,1.3,1.4,1.5,1.6];
    
    if ( this.user.sex === 'M' )
      this.user.fat += 7;

    if( this.user.fat <= 8 )
      this.correction = 1.15;
    else if( this.user.fat <= 10 )
      this.correction = 1.10;
    else if( this.user.fat <= 12 )
      this.correction = 1.05;
    else if( this.user.fat <= 14 )
      this.correction = 1;
    else if( this.user.fat <= 16 )
      this.correction = 0.95;
    else if( this.user.fat <= 18 )
      this.correction = 0.9;
    else if( this.user.fat <= 20 )
      this.correction = 0.85;
    else if( this.user.fat <= 25 )
      this.correction = 0.83;
    else 
      this.correction = 0.8;
 
    if ( this.user.fat < 12 )
      this.carorias = Math.min(this.user.sex === 'H'?TMBH1:TMBM1,this.user.sex === 'H'?TMBH2:TMBM2);
    else if ( this.user.fat <= 18 )
      this.carorias = Math.max(this.user.sex === 'H'?TMBH1:TMBM1,this.user.sex === 'H'?TMBH2:TMBM2);
    else{
      let x = this.user.sex === 'H'?TMBH1:TMBM1,
          y = this.user.sex === 'H'?TMBH2:TMBM2;
      this.carorias = (x+y)/2;
    }
      

    if ( this.user.sex === 'H' )
      this.lot = Math.round((this.carorias*this.correction*FMH[this.user.fe]/100)*0.95);
    else
      this.lot = Math.round((this.carorias*this.correction*FMM[this.user.fe]/100)*0.95);
  
    this.slot();
  }

  slot(){
    this.cg = this.user.diet !== 0?1:1.2;
    this.magro = this.user.weight-(this.user.weight*(this.user.fat/100));

    if ( this.user.fe === 0 ){
      if ( this.user.diet === 1 ) {
        this.cp = 1.8;
      } else {
        if ( this.user.fe >= 3 ) {
          this.cp = 2,5;
        } else {
          this.cp = 2;
        }
      }
    } else {
      if ( this.user.age > 60 ) {
        if ( this.user.diet === 0 ) {
          this.cp = 1.5;
        } else {
          this.cp = 1.3;
        }
      } else { 
        if ( this.user.diet === 0 ) {
          this.cp = 1.2;
        } else {
          this.cp = 1;
        }
      }
    }
  
    this.pp = this.cp*0.85*this.user.weight*4/100;

    this.minG = this.cg*0.85*this.user.weight*4/100;
  }
}
