export function reverseString(string) {
  if (typeof string !== 'string') return '';
  const characters = string.split('');
  return characters.reduceRight((string, character) => string + character, '');
}
