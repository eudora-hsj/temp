import type { Lang } from '../lib/content';

export const LANG_LABELS: Record<Lang, string> = {
  zh: '中文',
  en: 'English',
  ja: '日本語',
};

export const ui = {
  zh: {
    siteName: '台英日石化產業減碳比較研究計劃',
    siteShort: 'CPD',
    nav: { home: '首頁', about: '計劃介紹', members: '成員介紹', outputs: '研究成果' },
    outputs: {
      all: '全部',
      readMore: '閱讀全文',
      backToList: '返回成果列表',
      publishedOn: '發表日期',
      authors: '作者',
      venue: '發表於',
      tags: '關鍵詞',
      empty: '尚無符合條件的成果。',
      count: (n: number) => `共 ${n} 筆`,
    },
    category: { paper: '期刊論文', report: '研究報告', dataset: '資料集', event: '活動記錄' },
    region: { tw: '臺灣', uk: '英國', jp: '日本', cross: '跨國比較' },
    members: { affiliation: '所屬單位', role: '計劃角色' },
    footer: '本站內容以 CC BY 4.0 授權釋出。這是一個展示用的示範網站，資料為虛構。',
  },
  en: {
    siteName: 'Comparative Petrochemical Decarbonization Study',
    siteShort: 'CPD',
    nav: { home: 'Home', about: 'About', members: 'Team', outputs: 'Outputs' },
    outputs: {
      all: 'All',
      readMore: 'Read more',
      backToList: 'Back to outputs',
      publishedOn: 'Published',
      authors: 'Authors',
      venue: 'Venue',
      tags: 'Keywords',
      empty: 'No matching outputs.',
      count: (n: number) => `${n} item${n === 1 ? '' : 's'}`,
    },
    category: { paper: 'Journal article', report: 'Report', dataset: 'Dataset', event: 'Event' },
    region: { tw: 'Taiwan', uk: 'United Kingdom', jp: 'Japan', cross: 'Cross-country' },
    members: { affiliation: 'Affiliation', role: 'Role' },
    footer: 'Content licensed under CC BY 4.0. This is a demonstration site; the data is fictional.',
  },
  ja: {
    siteName: '台英日 石油化学産業 脱炭素比較研究プロジェクト',
    siteShort: 'CPD',
    nav: { home: 'ホーム', about: 'プロジェクト概要', members: 'メンバー', outputs: '研究成果' },
    outputs: {
      all: 'すべて',
      readMore: '全文を読む',
      backToList: '成果一覧へ戻る',
      publishedOn: '公開日',
      authors: '著者',
      venue: '掲載',
      tags: 'キーワード',
      empty: '該当する成果はありません。',
      count: (n: number) => `全 ${n} 件`,
    },
    category: { paper: '学術論文', report: '研究報告', dataset: 'データセット', event: 'イベント記録' },
    region: { tw: '台湾', uk: '英国', jp: '日本', cross: '国際比較' },
    members: { affiliation: '所属', role: '役割' },
    footer: '本サイトの内容は CC BY 4.0 で公開されています。これはデモサイトであり、データは架空のものです。',
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}

const DATE_LOCALE: Record<Lang, string> = { zh: 'zh-TW', en: 'en-GB', ja: 'ja-JP' };

const LIST_SEPARATOR: Record<Lang, string> = { zh: '、', en: ', ', ja: '、' };

export function joinList(items: string[], lang: Lang) {
  return items.join(LIST_SEPARATOR[lang]);
}

export function formatDate(date: Date, lang: Lang) {
  return new Intl.DateTimeFormat(DATE_LOCALE[lang], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
