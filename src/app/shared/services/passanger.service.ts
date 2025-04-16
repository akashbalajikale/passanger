import { Injectable } from "@angular/core";
import { Ipassanger } from "../models/passanger";
import { SnackBarService } from "./snackBar.service";

@Injectable({
    providedIn: "root"
})
export class PassangerServices{
    passengersArr: Array<Ipassanger>= [
        {
          id: 1,
          fullname: 'Stephen',
          checkedIn: true,
          checkInDate: 1490742000000,
          children: null,
        },
        {
          id: 2,
          fullname: 'Rose',
          checkedIn: false,
          checkInDate: null,
          children: [
            { name: 'Ted', age: 12 },
            { name: 'Chloe', age: 7 },
          ],
        },
        {
          id: 3,
          fullname: 'James',
          checkedIn: true,
          checkInDate: 1491606000000,
          children: null,
        },
        {
          id: 4,
          fullname: 'Louise',
          checkedIn: true,
          checkInDate: 1488412800000,
          children: [{ name: 'Jessica', age: 1 }],
        },
        {
          id: 5,
          fullname: 'Tina',
          checkedIn: false,
          checkInDate: null,
          children: null,
        },
      ]

    constructor( private _snackBar : SnackBarService){

    }

    fetchAllpassnger(): Array<Ipassanger>{
        return this.passengersArr
    }

    upadatedNameofPass(updatedPass : Ipassanger){
        let getIndex = this.passengersArr.findIndex(pass => pass.id === updatedPass.id) 
        this.passengersArr[getIndex] =updatedPass

        this._snackBar.OpenSnackBar(`The name of product is Updated to ${updatedPass.fullname}`)
    }

    RemovePassnger(id : number){
        let getIndex = this.passengersArr.findIndex(pass => pass.id === id)
        this.passengersArr.splice(getIndex, 1)
        this._snackBar.OpenSnackBar(`passanger ${this.passengersArr[getIndex].fullname} is remove successfully`)
    }
}