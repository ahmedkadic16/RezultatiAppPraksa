import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterComp'
})
export class FilterComp implements PipeTransform {
  transform(value:any, input: any): any {
    if (input) {
      return value.filter((val:any) => val.naziv.toLowerCase().indexOf(input.toString().toLowerCase()) >= 0);
    }
    else {
      return value;
    }
  }
}
