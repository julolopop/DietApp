import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { DataRegisterComponent } from './page/data-register/data-register.component';
import { GenderComponent } from './template/gender/gender.component';
import { GeneralComponent } from './template/general/general.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'data', component: DataRegisterComponent ,children:[
    { path: 'gender', component: GenderComponent },
    { path: 'general', component: GeneralComponent },
    { path: '', redirectTo :'gender' , pathMatch: 'full' },
  ]},
  { path: '', redirectTo :'login' , pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
