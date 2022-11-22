import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MyCharactersRoutingModule } from "./my-Characters-routing.module";
import { MyCharactersComponent } from "./my-characters.component";
import { FilterPipeModule } from 'src/app/pipes/pipe.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        MyCharactersComponent,
    ],
    imports: [CommonModule,
        MyCharactersRoutingModule,
        FilterPipeModule,
        FormsModule]
})
export class MyCharactersModule {} 