export function capitalize(string) {
  if (typeof string !== 'string') {
    return '';
  }
  const letters = string.split('');
  letters[0] = letters[0].toUpperCase();
  return letters.join('');
}
