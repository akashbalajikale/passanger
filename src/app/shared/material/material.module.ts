import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
 

const matModules =[
        MatCardModule,
        MatDividerModule,
        MatButtonModule,
        MatSnackBarModule
]
@NgModule({
    declarations :[],
    imports :[
        ...matModules
    ],
    exports : [
       ...matModules
    ]
})
 export class MaterialModule{
    constructor(){}
 }