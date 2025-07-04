import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductModule } from './shared/products/products.module';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { PassangerModule } from './shared/passanger/passanger.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ProductModule,
    PassangerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
