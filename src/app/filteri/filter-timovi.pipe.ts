import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterTimovi'
})
export class FilterTimovi implements PipeTransform {
  transform(value:any, input: any): any {
    if (input) {
      return value.filter((val:any) => val.countryid===input);
    }
    else {
      return value;
    }
  }
}
