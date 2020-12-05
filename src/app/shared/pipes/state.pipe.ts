import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(value: number): any {
    if (value === 0) {
      return 'No Disponible';
    }
    else {
      return 'Disponible';
    }
  }

}
