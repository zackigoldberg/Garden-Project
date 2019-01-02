import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';

import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'product', component: ProductComponent},
];

import { DisplayPlantComponent } from './display-plant/display-plant.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductComponent,
    HomeComponent,
    DisplayPlantComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
