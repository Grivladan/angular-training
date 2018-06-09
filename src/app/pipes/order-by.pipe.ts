import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<any>, key: string, desc: boolean = false): any {
    console.log(value);
    return value.sort(function(a, b) {
      const x = a[key];
      const y = b[key];
      return ((x > y) ?  1 : -1) * (desc ? -1 : 1);
    });
  }
}
