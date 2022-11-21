import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './core/navigator/navigator.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiCallService } from './services/api-call.service';
import { FilterPipeModule } from './pipes/pipe.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FilterPipeModule
  ],
  providers: [ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
