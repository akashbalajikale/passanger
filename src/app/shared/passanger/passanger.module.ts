import { NgModule } from "@angular/core";
import { ProductCountComponent } from './product-count/product-count.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";

 

@NgModule({
    declarations :[
    ProductCountComponent,
    ProductCardComponent,
    ProductDashboardComponent
  ],
  imports :[
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports : [
    ProductCountComponent,
    ProductCardComponent,
    ProductDashboardComponent
  ]
    
})
 export class PassangerModule{
    constructor(){}
 }