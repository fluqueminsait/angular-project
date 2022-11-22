import { CommonModule } from "@angular/common";
import {NgModule} from '@angular/core';
import { CrudRoutingModule } from "./crud-routing.module";
import { CrudComponent } from "./crud.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
    declarations: [ CrudComponent],
    imports: [CommonModule, CrudRoutingModule, ReactiveFormsModule, FormsModule]
})
export class CrudModule{}