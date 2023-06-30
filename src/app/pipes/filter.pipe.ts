import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], sel : string): any[] {
    if(sel.length == 0)
      return value;
    else {
      let newTab = [];
      for (const serv of value) {
        if(serv['statut'] == sel)
          newTab.push(serv);
      }
      return newTab;
    }
  }

}
