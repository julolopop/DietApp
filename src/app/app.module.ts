import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { LoginTComponent } from './template/login-t/login-t.component';
import { DataRegisterComponent } from './page/data-register/data-register.component';
import { GenderComponent } from './template/gender/gender.component';
import { GeneralComponent } from './template/general/general.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { InfoComponent } from './template/info/info.component';
import { FatComponent } from './template/fat/fat.component';
import { SliderModule } from 'angular-image-slider';
import { ObjetiveComponent } from './template/objetive/objetive.component';
import { FoodComponent } from './template/food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginTComponent,
    DataRegisterComponent,
    GenderComponent,
    GeneralComponent,
    InfoComponent,
    FatComponent,
    ObjetiveComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    SliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
