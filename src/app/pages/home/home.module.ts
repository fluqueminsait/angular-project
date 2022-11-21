import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeTopComponent } from './home-top/home-top.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { HomeBottomComponent } from './home-bottom/home-bottom.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeTopComponent,
    HomeBodyComponent,
    HomeBottomComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }