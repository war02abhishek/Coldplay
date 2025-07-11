import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const dateRangeValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const fromDate = control.value.fromDate;
  const toDate = control.value.toDate;

  if (fromDate && toDate) {
    if (toDate < fromDate) {
      return { DateRangeInvalid: true };
    }
    const totalMonthDiff = getMonthDifference(
      new Date(fromDate),
      new Date(toDate)
    );
    if (totalMonthDiff > 1) {
      return { DateRangeInvalid: true };
    }
  }
  return null;
};

export const getMonthDifference = (fromDate: Date, toDate: Date) => {
  const yearDiff = toDate.getFullYear() - fromDate.getFullYear();
  const monthDiff = toDate.getMonth() - fromDate.getMonth();
  return yearDiff * 12 + monthDiff;
};
