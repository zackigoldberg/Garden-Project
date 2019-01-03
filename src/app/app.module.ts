import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { DisplayPlantComponent } from './display-plant/display-plant.component';
import { HomeComponent } from './home/home.component';

import { from } from 'rxjs';
import { AuthService } from './services/auth.service';
import { DatabaseService } from './services/productservice.service';
import { LoginComponent } from './login/login.component';
const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'product', component: ProductComponent},
  { path: 'login', component: LoginComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductComponent,
    DisplayPlantComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [AuthService,DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
