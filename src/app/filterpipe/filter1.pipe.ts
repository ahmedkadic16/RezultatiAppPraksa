import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterTeam'
})
export class FilterTeam implements PipeTransform {
  transform(value:any, input: any): any {
    if (input) {
      return value.filter((val:any) => val.teamName.toLowerCase().indexOf(input.toString().toLowerCase()) >= 0);
    }
    else {
      return value;
    }
  }
}
