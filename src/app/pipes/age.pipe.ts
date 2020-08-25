import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform( year: string)  {
    return (  new Date().getFullYear() - parseInt( year ) );
  }

}
