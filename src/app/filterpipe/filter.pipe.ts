import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterDrzava'
})
export class FilterDrzava implements PipeTransform {
  transform(value:any, input: any): any {
    if (input) {
      return value.filter((val:any) => val.countryName.toLowerCase().indexOf(input.toString().toLowerCase()) >= 0);
    }
    else {
      return value;
    }
  }
}
