import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComp } from './banner.component';
import { MainComp } from './main.component';
import { FooterComp } from './footer.component';
import { Product } from './product.component';
import { HeaderComp } from './header.component';
import { TopBar } from './topbar.component';

@NgModule({
  declarations: [AppComponent,BannerComp,MainComp,FooterComp,Product,HeaderComp,TopBar],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
