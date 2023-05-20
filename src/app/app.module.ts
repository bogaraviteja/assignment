import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PageHeadingComponent } from './components/customers/page-heading/page-heading.component';
import { SubNavComponent } from './components/customers/sub-nav/sub-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomersComponent } from './components/customers/customers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { HeadingService } from './heading.service';
import { CardsComponent } from './components/customers/sub-nav/cards/cards.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageHeadingComponent,
    SubNavComponent,
    CustomersComponent,
    OrdersComponent,
    AboutComponent,
    LoginComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [HeadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
