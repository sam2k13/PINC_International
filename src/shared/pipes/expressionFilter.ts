import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'expressionFilter',
    pure: false
})

export class ExpressionFilter implements PipeTransform {
    transform(items: any[], filter: string): any {
      if (!items || !filter) {
          return items;
      }

      // filter items array, items which match and return true will be kept, false will be filtered out
      return items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
    }
}
