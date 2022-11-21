import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(list: any[], filter: string = '', key: any): any[] {
    const toLowerCaseFilter: string = filter.toLowerCase().trim();
    const filteredList: any[] = list.filter((element:any)=> element[key].toLowerCase().includes(toLowerCaseFilter));
    return filteredList;
  }

}
