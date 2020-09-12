import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CoursesService } from './services/';
import { HeaderComponent, TabNavigationComponent } from './components';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    TabNavigationComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MainRoutingModule
  ],
  providers: [
    CoursesService
  ]
})
export class MainModule { }
