import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/_interface/user-data';
import { user } from 'src/app/_global/global';
import { CampaniaService } from 'src/app/_service/Campania.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-objetive',
  templateUrl: './objetive.component.html',
  styleUrls: ['./objetive.component.scss']
})
export class ObjetiveComponent implements OnInit {

  public user : UserData = user;
  public weight: any[] = [];
  public height: any[] = [];
  public age: any[] = [];
  public ch: any[] = [];
  public meals: any[] = [];
  public fat: any[] = [];
  public fm: any[] = [];
  public fe: any[] = [];
  public diet: any[] = [];
  public magnitud: any[] = [];
  public view = false;

  constructor(private campaniaService:CampaniaService,private route:Router) {
    // this.campaniaService.getCampanas().subscribe(res => {
    //   this.user = res;
    // });
   }

  ngOnInit(): void {
    this.diet.push({ value: 0, viewValue: 'Pérdida de grasa' });
    this.diet.push({ value: 1, viewValue: 'Mantenimiento' });
    this.diet.push({ value: 2, viewValue: 'Aumento de masa muscular' });
    
  }

  selectObjetive(item) {
    this.view = false;
    this.magnitud = [];

    if ( item.value === 0 ) {
      this.view = true;
      this.magnitud.push({ value: 3, viewValue: 'Déficit ligero' });
      this.magnitud.push({ value: 4, viewValue: 'Déficit moderado' });
      this.magnitud.push({ value: 5, viewValue: 'Déficit alto' });
      this.magnitud.push({ value: 6, viewValue: 'Restricción agresiva o Minicut' });
    
    } else if ( item.value === 2 ) {
      this.view = true;
      this.magnitud.push({ value: 2, viewValue: 'Superávit ligero' });
      this.magnitud.push({ value: 3, viewValue: 'Superávit moderado' });
      this.magnitud.push({ value: 4, viewValue: 'Superávit alto' });
      this.magnitud.push({ value: 5, viewValue: 'Refeed o Realimentación' });
    }
  }

  gotoNext(){
    if ( !user.magnitud )
      user.magnitud = 0 ;
    
    this.campaniaService.setCampanas(this.user);
    this.route.navigate(['data/food']);
  }
}
