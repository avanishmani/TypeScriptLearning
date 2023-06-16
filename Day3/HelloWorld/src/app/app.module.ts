import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';



@NgModule({
  /* Declaration is list of all the  the component that you can use in your application*/
  declarations: [
    AppComponent
  ],
  /*imports is all the modules you are using in your application*/
  imports: [
    BrowserModule
  ],
  /*Providers is a list of services that are injected to your application */
  providers: [], 
  /* bootstrap is a list of main component of your application*/
  bootstrap: [AppComponent]
})
export class AppModule { }
