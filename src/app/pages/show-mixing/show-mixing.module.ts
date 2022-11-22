import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ShowMixingRoutingsModule } from "./show-mixing-routing.module";
import { ShowMixingComponent } from "./show-mixing.component";
import { MixingCardComponent } from './components/mixing-card/mixing-card.component';


@NgModule({
    declarations: [
        ShowMixingComponent,
        MixingCardComponent,
    ],
    imports: [CommonModule,
    ShowMixingRoutingsModule]
})
export class ShowMixingModule{}