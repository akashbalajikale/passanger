import { Injectable } from "@angular/core";
import { Iproduct, ProductStatus } from "../models/product";
import { SnackBarService } from "./snackBar.service";

 


@Injectable({
    providedIn : "root"
})
 export class ProductServices{
  productArray :Array<Iproduct> = [
    {
        pname : "Apple 16",
        pdetails : "A product description is a marketing piece that explains a product's features, benefits, and how it can solve a customer's problem. It's a short sales pitch that encourages customers to buy the product",
        pId : "123",
        pstatus : ProductStatus.Inprogress
     },
      {
        pname : "oneplus 12",
        pdetails : "A product description is a marketing piece that explains a product's features, benefits, and how it can solve a customer's problem. It's a short sales pitch that encourages customers to buy the product",
        pId : "124",
        pstatus : ProductStatus.Inprogress
    },
    {
        pname : "samsung 12",
        pdetails : "A product description is a marketing piece that explains a product's features, benefits, and how it can solve a customer's problem. It's a short sales pitch that encourages customers to buy the product",
        pId : "125",
        pstatus : ProductStatus.Inprogress
    }
  ]

    constructor( private _snackBar : SnackBarService){}

    fetchAllProduct(): Array<Iproduct>{
        return this.productArray
    }

    addNewProduct(prod : Iproduct){
      this.productArray.push(prod)
      this._snackBar.OpenSnackBar(`The new product ${prod.pname} is Added SuccessFully`)

    }

    UpdatedStatus(UpdatedStatus: ProductStatus, pId:string){
      let getIndex = this.productArray.findIndex(prod => prod.pId=== pId)
      this.productArray[getIndex].pstatus = UpdatedStatus

      this._snackBar.OpenSnackBar(`The status of ${this.productArray[getIndex].pname} is in ${UpdatedStatus}`)
    }
 }