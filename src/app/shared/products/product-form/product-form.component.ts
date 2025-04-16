import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iproduct, ProductStatus } from '../../models/product';
import { UuidService } from '../../services/uuid.service';
import { ProductServices } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
@ViewChild('ProductForm') ProductForm !: NgForm 


  constructor( private _Uuidservice : UuidService,
               private _prodService : ProductServices
  ) { }

  ngOnInit(): void {
  }

  OnProductAdd(){
    if(this.ProductForm.valid){
      let newProdObj:Iproduct = this.ProductForm.value;
      newProdObj.pstatus = ProductStatus.Inprogress
      newProdObj.pId = this._Uuidservice.generateUuid()
      console.log(newProdObj);
      this.ProductForm.reset()
      this._prodService.addNewProduct(newProdObj)
    }
  }
}
