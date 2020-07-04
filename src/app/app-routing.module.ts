import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { DataRegisterComponent } from './page/data-register/data-register.component';
import { GenderComponent } from './template/gender/gender.component';
import { GeneralComponent } from './template/general/general.component';
import { InfoComponent } from './template/info/info.component';
import { FatComponent } from './template/fat/fat.component';
import { ObjetiveComponent } from './template/objetive/objetive.component';
import { FoodComponent } from './template/food/food.component';
import { trainingComponent } from './template/trainig/training.component';
import { ChComponent } from './template/ch/ch.component';
import { EditComponent } from './template/edit/edit.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'data', component: DataRegisterComponent ,children:[
    { path: 'gender', component: GenderComponent },
    { path: 'fat', component: FatComponent },
    { path: 'general', component: GeneralComponent },
    { path: 'objetive', component: ObjetiveComponent },
    { path: 'food', component: FoodComponent },
    { path: 'trainig', component: trainingComponent },
    { path: 'ch', component: ChComponent },
    { path: 'edit', component: EditComponent },
    { path: '', redirectTo :'gender' , pathMatch: 'full' },
  ]},
  { path: 'info', component: InfoComponent },
  { path: '', redirectTo :'login' , pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
