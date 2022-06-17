import { Pipe, PipeTransform } from '@angular/core';
import { todo } from '../model/app.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: todo[], searchKey: string) {
    if (!searchKey) return value;
    return value.filter((todo: todo) => todo.title.includes(searchKey.trim()));
  }
}
