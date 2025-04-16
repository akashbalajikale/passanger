import { Component, Input, OnInit } from '@angular/core';
import { Ipassanger } from '../../models/passanger';
import { PassangerServices } from '../../services/passanger.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() passObj !: Ipassanger

  IsinEditMode : Boolean = false
  constructor(private  _passService : PassangerServices ) { }
 
  ngOnInit(): void {
  }
 
  OnUpdateName(upadtedName: string){
    if(this.IsinEditMode){
      let upDatedobj: Ipassanger = { ...this.passObj, fullname:upadtedName }
      this._passService.upadatedNameofPass(upDatedobj)     
    }else{
      this.IsinEditMode = !this.IsinEditMode
    }
  }

  Onremove(){
    let getconfirm = confirm("Are sure you want to remove ")
    if(getconfirm){
      this._passService.RemovePassnger(this.passObj.id)
    }
  }
}
