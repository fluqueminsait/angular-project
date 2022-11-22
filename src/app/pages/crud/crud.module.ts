import { CommonModule } from "@angular/common";
import {NgModule} from '@angular/core';
import { CrudRoutingModule } from "./crud-routing.module";
import { CrudComponent } from "./crud.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MatButtonModule} from '@angular/material/button'


@NgModule({
    declarations: [ CrudComponent],
    imports: [CommonModule, CrudRoutingModule, ReactiveFormsModule, FormsModule, MatButtonModule]
})
export class CrudModule{}