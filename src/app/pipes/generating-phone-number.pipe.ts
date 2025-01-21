import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generatingPhoneNumber'
})
export class GeneratingPhoneNumberPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    // Удаляем все лишние символы, оставляя только цифры
    const cleaned = value.replace(/\D+/g, '');

    // Проверяем, чтобы длина номера соответствовала ожидаемой
    if (cleaned.length !== 12 || !cleaned.startsWith('375')) {
      return value; // Возвращаем исходный номер, если он некорректный
    }

    // Форматируем номер
    return cleaned.replace(
      /^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/,
      '+$1 ($2) $3-$4-$5'
    );
  }
}
