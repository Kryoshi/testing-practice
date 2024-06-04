export const caesarCipher = (string, shift = 1) => {
  if (typeof string !== 'string') return '';
  const characters = string.split('');

  return characters.reduce((ciphered, character) => {
    let shiftedCharacter = character;

    for (let i = 0; i < Math.abs(shift); ++i) {
      if (LETTERS[shiftedCharacter]) {
        shiftedCharacter =
          shift >= 0
            ? LETTERS[shiftedCharacter].next
            : LETTERS[shiftedCharacter].previous;
      } else break;
    }

    ciphered += shiftedCharacter;
    return ciphered;
  }, '');
};

const LETTERS = {
  a: { next: 'b', previous: 'z' },
  b: { next: 'c', previous: 'a' },
  c: { next: 'd', previous: 'b' },
  d: { next: 'e', previous: 'c' },
  e: { next: 'f', previous: 'd' },
  f: { next: 'g', previous: 'e' },
  g: { next: 'h', previous: 'f' },
  h: { next: 'i', previous: 'g' },
  i: { next: 'j', previous: 'h' },
  j: { next: 'k', previous: 'i' },
  k: { next: 'l', previous: 'j' },
  l: { next: 'm', previous: 'k' },
  m: { next: 'n', previous: 'l' },
  n: { next: 'o', previous: 'm' },
  o: { next: 'p', previous: 'n' },
  p: { next: 'q', previous: 'o' },
  q: { next: 'r', previous: 'p' },
  r: { next: 's', previous: 'q' },
  s: { next: 't', previous: 'r' },
  t: { next: 'u', previous: 's' },
  u: { next: 'v', previous: 't' },
  v: { next: 'w', previous: 'u' },
  w: { next: 'x', previous: 'v' },
  x: { next: 'y', previous: 'w' },
  y: { next: 'z', previous: 'x' },
  z: { next: 'a', previous: 'y' },
  A: { next: 'B', previous: 'Z' },
  B: { next: 'C', previous: 'A' },
  C: { next: 'D', previous: 'B' },
  D: { next: 'E', previous: 'C' },
  E: { next: 'F', previous: 'D' },
  F: { next: 'G', previous: 'E' },
  G: { next: 'H', previous: 'F' },
  H: { next: 'I', previous: 'G' },
  I: { next: 'J', previous: 'H' },
  J: { next: 'K', previous: 'I' },
  K: { next: 'L', previous: 'J' },
  L: { next: 'M', previous: 'K' },
  M: { next: 'N', previous: 'L' },
  N: { next: 'O', previous: 'M' },
  O: { next: 'P', previous: 'N' },
  P: { next: 'Q', previous: 'O' },
  Q: { next: 'R', previous: 'P' },
  R: { next: 'S', previous: 'Q' },
  S: { next: 'T', previous: 'R' },
  T: { next: 'U', previous: 'S' },
  U: { next: 'V', previous: 'T' },
  V: { next: 'W', previous: 'U' },
  W: { next: 'X', previous: 'V' },
  X: { next: 'Y', previous: 'W' },
  Y: { next: 'Z', previous: 'X' },
  Z: { next: 'A', previous: 'Y' },
};
