import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coin'
})
export class CoinPipe implements PipeTransform {

  transform(value: string): any {
    if (value === '0') {
      return 'S/.';
    }
    else if (value === '1') {
      return '$/.';
    }
    else {
      return 'Sin Moneda';
    }
  }

}
