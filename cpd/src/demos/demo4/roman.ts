import type { Lang } from '../../lib/content';

const NUMERALS: [number, string][] = [
  [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
];

export function roman(n: number): string {
  let rest = n;
  let out = '';
  for (const [value, glyph] of NUMERALS) {
    while (rest >= value) {
      out += glyph;
      rest -= value;
    }
  }
  return out;
}

/** 「卷 I」的卷字隨語系走，數字維持羅馬數字。 */
const VOLUME_WORD: Record<Lang, string> = { zh: '卷', en: 'Volume', ja: '巻' };

export function volume(n: number, lang: Lang) {
  return `${VOLUME_WORD[lang]} ${roman(n)}`;
}
