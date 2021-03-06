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
import { trainingComponent } from './template/trainig/training.component';
import { ChComponent } from './template/ch/ch.component';
import { EditComponent } from './template/edit/edit.component';
import { MenuComponent } from './template/menu/menu.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ToastrModule } from 'ngx-toastr';
import { DialogComponent } from './component/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { ItemComponent } from './component/item/item.component';
import { MenuListComponent } from './template/menu-list/menu-list.component';

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
    FoodComponent,
    trainingComponent,
    ChComponent,
    EditComponent,
    MenuComponent,
    DialogComponent,
    ItemComponent,
    MenuListComponent
  ],
  imports: [
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: false,
    }),
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
    MatExpansionModule,
    MatDialogModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
