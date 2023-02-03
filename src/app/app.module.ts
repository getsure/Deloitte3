import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './modules/components/products/products.component';
import { ProductComponent } from './modules/components/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { TemplateDrivenComponent } from './template-driven/template-driven.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    ProductComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
