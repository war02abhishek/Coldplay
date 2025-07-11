/** Converts a Date object to a string in dd-MM-yyyy format */
export function formatDateToDDMMYYYY(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

/** Converts a string in dd-MM-yyyy format to a Date object */
export function parseDDMMYYYYToDate(dateStr: string): Date | null {
  const [day, month, year] = dateStr.split('-').map(Number);

  if (!day || !month || !year) return null;

  const date = new Date(year, month - 1, day);

  // Optional: validate the parsed date matches input (e.g., no 31-Feb)
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
}
