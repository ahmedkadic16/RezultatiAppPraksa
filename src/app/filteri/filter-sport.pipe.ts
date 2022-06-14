import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterSport'
})
export class FilterSport implements PipeTransform {
  transform(value:any, input: any): any {
    if (input) {
      return value.filter((val:any) => val.name.toLowerCase().indexOf(input.toString().toLowerCase()) >= 0);
    }
    else {
      return value;
    }
  }
}
