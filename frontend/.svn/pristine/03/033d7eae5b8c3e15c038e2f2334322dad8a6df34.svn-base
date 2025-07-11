import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
  standalone: false,
})
export class CustomTitleCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    return value
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
