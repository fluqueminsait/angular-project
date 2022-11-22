import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { FilterPipeModule } from 'src/app/pipes/pipe.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ListComponent,
        CharacterCardComponent
    ],
    imports: [
        CommonModule,
        ListRoutingModule,
        FilterPipeModule,
        FormsModule, 
    ]
})
export class ListModule {}
