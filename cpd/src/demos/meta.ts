import type { Demo } from '../lib/content';

/** 純資料，不得 import 任何 .astro 元件——索引頁靠這點避免載入各套 demo 的 CSS。 */
export const DEMO_META: Record<Demo, { label: string; note: string }> = {
  demo1: {
    label: 'Poster Modernist',
    note: '奶油底、鈷藍點綴；嚴格 12 欄格線、左側 sticky 標籤欄、零圓角。',
  },
  demo2: {
    label: 'Cinematic Editorial',
    note: '冷黑底、骨白字、酸黃強調；巨型全大寫標題加 1px 描邊層、碎形雜訊材質。',
  },
  demo3: {
    label: 'Organic / Natural',
    note: '米紙底、苔綠與陶土；有機圓角、色團暈染、紙張顆粒、卡片會微微傾斜。',
  },
  demo4: {
    label: 'Academia / Classical',
    note: '深桃花心木底、黃銅與酒紅；全襯線、卷次羅馬數字、首字放大、角飾與火漆封緘。',
  },
};

export const PLANNED_DEMOS: { id: string; label: string; note: string }[] = [];
