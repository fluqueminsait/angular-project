import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'src/app/pipes/pipe.module';

@NgModule({
    declarations: [
        ListComponent,
        CharacterCardComponent,
    ],
    imports: [
        CommonModule,
        ListRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        FilterPipeModule
    ]
})
export class ListModule {}
