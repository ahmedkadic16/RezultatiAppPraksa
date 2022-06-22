import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterEvents'
})
export class FilterEvents implements PipeTransform {
  transform(value:any, input: any): any {
    if (input) {
      return value.filter((val:any) => val.competitionId===input);
    }
    else {
      return value;
    }
  }
}
