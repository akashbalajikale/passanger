import { NgModule } from "@angular/core";
import { ProdDashboardComponent } from './prod-dashboard/prod-dashboard.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material/material.module";
import { FormsModule } from "@angular/forms";

 
const prodModule =[
  ProdDashboardComponent,
  ProductFormComponent,
  ProductCardComponent
]

@NgModule({
    declarations :[
   ...prodModule
  ],
  imports : [
    CommonModule,
     MaterialModule,
     FormsModule
  ],
  exports :[
   ...prodModule
  ]
})
 export class ProductModule{
    constructor(){}


 }