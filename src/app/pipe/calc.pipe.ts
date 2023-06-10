import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calc'
})
export class CalcPipe implements PipeTransform {

  transform(value: number): number {
    return value * 1.21;
  }

}

/* las pipas con para fomatear algun dato */
