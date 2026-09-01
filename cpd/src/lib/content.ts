import { getCollection, getEntry } from 'astro:content';

export const LANGS = ['zh', 'en', 'ja'] as const;
export type Lang = (typeof LANGS)[number];

export const DEMOS = ['demo1', 'demo2', 'demo3', 'demo4'] as const;
export type Demo = (typeof DEMOS)[number];

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}

/** glob loader 以「相對 base 的無副檔名路徑」為 id，故語系是 id 的第一段。 */
function inLang(id: string, lang: Lang) {
  return id.startsWith(`${lang}/`);
}

export function slugOf(id: string) {
  return id.split('/').slice(1).join('/');
}

export async function getHomeBlocks(lang: Lang) {
  const blocks = await getCollection('home', ({ id }) => inLang(id, lang));
  return blocks.sort((a, b) => a.data.order - b.data.order);
}

export async function getPage(lang: Lang, name: 'about' | 'members' | 'outputs') {
  const entry = await getEntry('pages', `${lang}/${name}`);
  if (!entry) throw new Error(`缺少頁面內容：${lang}/${name}`);
  return entry;
}

export async function getMembers(lang: Lang) {
  const entry = await getEntry('members', lang);
  if (!entry) throw new Error(`缺少成員資料：${lang}`);
  return entry.data.members;
}

export async function getOutputs(lang: Lang) {
  const items = await getCollection('outputs', ({ id }) => inLang(id, lang));
  return items.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getOutput(lang: Lang, slug: string) {
  const entry = await getEntry('outputs', `${lang}/${slug}`);
  if (!entry) throw new Error(`缺少成果文章：${lang}/${slug}`);
  return entry;
}

/** 三語共用同一組 slug，取任一語系的清單即可列舉全部文章。 */
export async function getAllOutputSlugs() {
  const items = await getCollection('outputs', ({ id }) => inLang(id, 'zh'));
  return items.map((item) => slugOf(item.id));
}

export type HomeBlock = Awaited<ReturnType<typeof getHomeBlocks>>[number];
export type OutputEntry = Awaited<ReturnType<typeof getOutputs>>[number];
export type Member = Awaited<ReturnType<typeof getMembers>>[number];
