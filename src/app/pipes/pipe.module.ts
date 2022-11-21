import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipePipe } from './filter-pipe.pipe';

const pipes = [FilterPipePipe]

@NgModule({
    declarations: [...pipes],
    imports: [CommonModule],
    exports: [...pipes]
})

export class FilterPipeModule {}