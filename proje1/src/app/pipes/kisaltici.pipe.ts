import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kisaltici',
  standalone: true
})
export class KisalticiPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    const maxLength = args[0];
    if (value.length <= maxLength) {
      return value;
    }
    // Merhaba12345 6 
    // Mer... 
    return value.slice(0, (maxLength - 3)) + '...';
  }

}
