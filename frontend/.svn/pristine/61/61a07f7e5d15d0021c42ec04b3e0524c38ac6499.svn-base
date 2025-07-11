import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordStrengthValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value || '';
  const hasUppercase = /[A-Z]/.test(value);
  const hasLowercase = /[a-z]/.test(value);
  const hasNumeric = /[0-9]/.test(value);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
  const hasMinLength = value.length >= 8;

  const isValid =
    hasUppercase && hasLowercase && hasNumeric && hasSpecial && hasMinLength;

  return !isValid
    ? {
        passwordStrength: {
          hasUppercase,
          hasLowercase,
          hasNumeric,
          hasSpecial,
          hasMinLength,
        },
      }
    : null;
}

export function passwordMatchValidator(
  group: AbstractControl
): ValidationErrors | null {
  const newPassword = group.get('newPassword')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;

  return newPassword && confirmPassword && newPassword !== confirmPassword
    ? { passwordsMismatch: true }
    : null;
}
