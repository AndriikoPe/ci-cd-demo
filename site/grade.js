// Переводить бал (0–100) в оцінку за шкалою ECTS.
// Цю ж функцію використовує сторінка (index.html) і перевіряють тести.
export function toEcts(score) {
  if (typeof score !== 'number' || Number.isNaN(score) || score < 0 || score > 100) {
    throw new RangeError('Бал має бути числом від 0 до 100');
  }
  if (score >= 90) return 'A';
  if (score >= 82) return 'B';
  if (score >= 74) return 'C';
  if (score >= 64) return 'D';
  if (score >= 60) return 'E';
  if (score >= 35) return 'FX';
  return 'F';
}
