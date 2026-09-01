import type { Demo, Lang } from './content';

export function url(demo: Demo, lang: Lang, path = '') {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${demo}/${lang}/${clean}` : `/${demo}/${lang}/`;
}

/**
 * 切換語系時停在同一頁：把當前路徑的語系段換掉，其餘保留。
 * 三語共用 slug 是這個做法成立的前提。
 */
export function switchLang(pathname: string, to: Lang) {
  const segments = pathname.replace(/^\/+|\/+$/g, '').split('/');
  if (segments.length < 2) return `/${segments[0] ?? ''}/${to}/`;
  segments[1] = to;
  const joined = segments.join('/');
  return segments.length === 2 ? `/${joined}/` : `/${joined}`;
}
