import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'cheap'
})
export class CheapPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return _.sortBy(value, args);
  }

}
