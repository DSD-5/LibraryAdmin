import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from 'src/app/utils/constants';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string): any {
    if (value === '0') {
      return 'Categoria 1';
    }
    else if (value === '1') {
      return 'Categoria 2';
    }
    else {
      return 'Sin Categoria';
    }
  }

}
