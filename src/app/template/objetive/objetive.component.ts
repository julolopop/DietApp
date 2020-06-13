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

  constructor(private campaniaService:CampaniaService,private route:Router) {
    this.campaniaService.getCampanas().subscribe(res => {
      this.user = res;
    });
   }

  ngOnInit(): void {
    for ( let i = 40; i < 130; i++ ) {
      this.weight.push({ value: i, viewValue: i })
    }

    for ( let i = 140; i < 240; i++ ) {
      this.height.push({ value: i, viewValue: i })
    }

    for ( let i = 15; i < 100; i++ ) {
      this.age.push({ value: i, viewValue: i })
    }

    this.ch.push({ value: 40, viewValue: '40%' })
    this.ch.push({ value: 60, viewValue: '60%' })
    this.ch.push({ value: 80, viewValue: '80%' })
    

    for ( let i = 1; i < 15; i++ ) {
      this.meals.push({ value: i, viewValue: i })
    }

    for ( let i = 15; i < 100; i++ ) {
      this.fat.push({ value: i, viewValue: i+'%' })
    }

    this.fm.push({value:0,viewValue:'Sedentario'});
    this.fm.push({value:1,viewValue:'Sedentario Activo'});
    this.fm.push({value:2,viewValue:'Sedentario Activo II'});
    this.fm.push({value:3,viewValue:'Ligeramente Activo'});
    this.fm.push({value:4,viewValue:'Moderadamente activo'});
    this.fm.push({value:5,viewValue:'Muy Activo'});


    this.diet.push({ value: 0, viewValue: 'Pérdida de grasa' });
    this.diet.push({ value: 1, viewValue: 'Mantenimiento' });
    this.diet.push({ value: 2, viewValue: 'Aumento de masa muscular' });
    
    this.magnitud.push({ value: 1, viewValue: 'Ligero' });
    this.magnitud.push({ value: 1, viewValue: 'Moderado' });
    this.magnitud.push({ value: 1, viewValue: 'Alto' });
    this.magnitud.push({ value: 1, viewValue: 'Agresivo' });
  }

}
