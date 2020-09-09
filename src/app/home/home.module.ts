import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HeaderComponent, HomePage, HomeSliderComponent } from './index';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
    ],
  declarations: [
      HeaderComponent,
      HomePage,
      HomeSliderComponent
  ]
})
export class HomePageModule {}
