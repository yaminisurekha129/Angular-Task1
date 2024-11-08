import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { MyFormComponent } from './my-form/my-form.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    ProductsComponent,
    MyFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 

  ],
  providers: [
   
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }