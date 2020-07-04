import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/_interface/user-data';
import { user } from 'src/app/_global/global';
import { CampaniaService } from 'src/app/_service/Campania.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public user: UserData;
  public correction = 0;
  public carorias = 0;
  public totalPorciones = 0;
  public cg = 0;
  public cp = 0;
  public pp = 0;
  public grasa = 0;
  public grasaM = 0;
  public magro = 0;
  public carbo = 0;
  public porcionesComida;
  public porcionesComidaMod;

  constructor(private campaniaService: CampaniaService) {

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
      TMBH2 = (10 * this.user.weight) + (6.25 * this.user.height) - (5 * this.user.age) + 5,
      TMBM2 = (10 * this.user.weight) + (6.25 * this.user.height) - (5 * this.user.age) - 161,
      FEH = [0, 0.1, 0.2, 0.4, 0.5, 0.6],
      FEM = [0, 0.1, 0.2, 0.3, 0.4, 0.5],
      FMH = [1.1, 1.2, 1.3, 1.4, 1.5, 1.7],
      FMM = [1.1, 1.2, 1.3, 1.4, 1.5, 1.6];

    if (this.user.sex === 'M')
      this.user.fat += 7;

    if (this.user.fat <= 8)
      this.correction = 1.15;
    else if (this.user.fat <= 10)
      this.correction = 1.10;
    else if (this.user.fat <= 12)
      this.correction = 1.05;
    else if (this.user.fat <= 14)
      this.correction = 1;
    else if (this.user.fat <= 16)
      this.correction = 0.95;
    else if (this.user.fat <= 18)
      this.correction = 0.9;
    else if (this.user.fat <= 20)
      this.correction = 0.85;
    else if (this.user.fat <= 25)
      this.correction = 0.83;
    else
      this.correction = 0.8;

    if (this.user.fat < 12)
      this.carorias = Math.min(this.user.sex === 'H' ? TMBH1 : TMBM1, this.user.sex === 'H' ? TMBH2 : TMBM2);
    else if (this.user.fat <= 18)
      this.carorias = Math.max(this.user.sex === 'H' ? TMBH1 : TMBM1, this.user.sex === 'H' ? TMBH2 : TMBM2);
    else {
      let x = this.user.sex === 'H' ? TMBH1 : TMBM1,
        y = this.user.sex === 'H' ? TMBH2 : TMBM2;
      this.carorias = (x + y) / 2;
    }


    if (this.user.sex === 'H')
      this.totalPorciones = Math.round((this.carorias * this.correction * FMH[this.user.fe] / 100) * 0.95);
    else
      this.totalPorciones = Math.round((this.carorias * this.correction * FMM[this.user.fe] / 100) * 0.95);

    if (this.user.diet === 0)
      this.totalPorciones -= this.user.magnitud
    else if (this.user.diet === 2)
      this.totalPorciones += this.user.magnitud

    this.stotalPorciones();
  }

  stotalPorciones() {
    this.cg = this.user.diet !== 0 ? 1 : 1.2;
    this.magro = this.user.weight - (this.user.weight * (this.user.fat / 100));

    if (this.user.fe !== 0) {
      if (this.user.diet === 1) {
        this.cp = 1.8;
      } else {
        if (this.user.fe >= 3) {
          this.cp = 2, 5;
        } else {
          this.cp = 2;
        }
      }
    } else {
      if (this.user.age > 60) {
        if (this.user.diet === 0) {
          this.cp = 1.5;
        } else {
          this.cp = 1.3;
        }
      } else {
        if (this.user.diet === 0) {
          this.cp = 1.2;
        } else {
          this.cp = 1;
        }
      }
    }

    this.pp = (this.cp * this.user.weight * 4) / 100;
    this.pp = Math.round(this.pp);
    this.carbo = this.user.ch * (this.totalPorciones - this.pp);
    this.carbo = Math.round(this.carbo);
    this.grasa = this.totalPorciones - this.pp - this.carbo;
    this.grasa = Math.round(this.grasa);
    this.grasaM = (this.cg * 0.8 * this.user.weight * 4) / 100;
    this.grasaM = Math.round(this.grasa);

    if (this.grasa < this.grasaM) {
      this.grasa = this.grasaM < 3 ? 3 : this.grasaM;
      this.carbo = this.totalPorciones - this.pp - this.grasa;
    }



    this.porciones();
  }

  porciones() {
    let cont = 0,
      index = 0;

    this.porcionesComida = [];

    let name = ['Desayuno', 'Media Mañana', 'Almuerzo', 'Merienda', 'Cena']
    let type = [1, 0, 1, 0, 1]

    for (let i = 0; i < this.user.food.length; i++) {
      const element = this.user.food[i];
        this.porcionesComida.push({ active:element, training: i - 1 === this.user.training ? 'entrenamiento' : '', type: type[i], nameView: name[i], porcionesP: 0, porcionesC: 0, porcionesG: 0, porcionesPG: 0 });
    }

    // let snack = this.porcionesComida.filter(item => item.type === 0);
    let snack = this.porcionesComida.filter(item => item.type === 0 && item.active);
    let porcionesSnack = this.totalPorciones < 21 ? 1 : this.totalPorciones < 30 ? 2 : 3;
    let por = this.user.ch === 0.6 ? 0.85 : this.user.ch === 0.4 ? 0.6 : this.user.ch;
    let pocionesPR =0,
    pocionesCR =0,
    pocionesGR =0;
    if (snack.length === 2) {
      for (let i = 0; i < snack.length; i++) {
        const element = snack[i];
        let snackPor = porcionesSnack === 1 ? 2 : porcionesSnack === 2 ? 3 : 3;
        if (element.training !== '') {
          element.porcionesP = 1;
          element.porcionesC = Math.round(snackPor * por);
          element.porcionesG = snackPor - element.porcionesP - element.porcionesC;

        } else {
          element.porcionesC = Math.round(snackPor * por);
          element.porcionesG = snackPor - element.porcionesP - element.porcionesC;
        }


        pocionesPR -= element.porcionesP;
        pocionesCR -= element.porcionesC;
        pocionesGR -= element.porcionesG;
      }
    } else {
      let snackPor = porcionesSnack === 1 ? 3 : porcionesSnack === 2 ? 4 : 5;
      if (snack[0].training !== '') {
        snack[0].porcionesP = 1;
        snack[0].porcionesC = Math.round(snackPor * por);
        snack[0].porcionesG = snackPor - snack[0].porcionesP - snack[0].porcionesC;

      } else {
        snack[0].porcionesC = Math.round(snackPor * por);
        snack[0].porcionesG = snackPor - snack[0].porcionesP - snack[0].porcionesC;
      }

      
      pocionesPR -= snack[0].porcionesP;
      pocionesCR -= snack[0].porcionesC;
      pocionesGR -= snack[0].porcionesG;
    }

    index = this.user.training - 1;
    cont = 0;
    do {
      if ( this.porcionesComida[index].active ){
        if (this.porcionesComida[index].type !== 0) {
          this.porcionesComida[index].porcionesG++;
          cont++;
        } 
      }
        index++;
        if (index >= this.porcionesComida.length)
          index = 0;
     

    } while (cont < (this.grasa - pocionesGR));

    index = this.user.training - 1;
    cont = 0;
    do {
      
      if ( this.porcionesComida[index].active ){
        if (this.porcionesComida[index].type !== 0) {
          this.porcionesComida[index].porcionesP++;
          cont++;
        }
      }
        index++;
        if (index >= this.porcionesComida.length)
          index = 0;
    } while (cont < (this.pp - pocionesPR));

    index = this.user.training - 1;
    cont = 0;
    do {
      
      if ( this.porcionesComida[index].active ){
        if (this.porcionesComida[index].type !== 0) {
          this.porcionesComida[index].porcionesC++;
          cont++;
        }
      }
        index--
        if (index < 0)
          index = this.porcionesComida.length - 1;
    } while (cont <= (this.carbo - pocionesCR));

    this.porcionesComidaMod = JSON.parse(JSON.stringify(this.porcionesComida));
  }

  change(item, type, number){
    item[type] += number;
  }

}
