import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowMixingComponent } from './show-mixing.component';

const routes: Routes = [
    {path: '', component: ShowMixingComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShowMixingRoutingsModule {}