import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'foodFilter',
    pure: false
})

export class FoodFilter implements PipeTransform {
    transform(items: any[], filter: string): any {
      if (!items || !filter) {
          return items;
      }

      // filter items array, items which match and return true will be kept, false will be filtered out
      return items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()) || item.definition.toLowerCase().includes(filter.toLowerCase()));
    }
}
