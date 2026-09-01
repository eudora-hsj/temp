import Demo1Layout from './demos/demo1/Layout.astro';
import Demo1Home from './demos/demo1/Home.astro';
import Demo1About from './demos/demo1/About.astro';
import Demo1Members from './demos/demo1/Members.astro';
import Demo1OutputsIndex from './demos/demo1/OutputsIndex.astro';
import Demo1OutputsDetail from './demos/demo1/OutputsDetail.astro';
import Demo2Layout from './demos/demo2/Layout.astro';
import Demo2Home from './demos/demo2/Home.astro';
import Demo2About from './demos/demo2/About.astro';
import Demo2Members from './demos/demo2/Members.astro';
import Demo2OutputsIndex from './demos/demo2/OutputsIndex.astro';
import Demo2OutputsDetail from './demos/demo2/OutputsDetail.astro';
import Demo3Layout from './demos/demo3/Layout.astro';
import Demo3Home from './demos/demo3/Home.astro';
import Demo3About from './demos/demo3/About.astro';
import Demo3Members from './demos/demo3/Members.astro';
import Demo3OutputsIndex from './demos/demo3/OutputsIndex.astro';
import Demo3OutputsDetail from './demos/demo3/OutputsDetail.astro';
import Demo4Layout from './demos/demo4/Layout.astro';
import Demo4Home from './demos/demo4/Home.astro';
import Demo4About from './demos/demo4/About.astro';
import Demo4Members from './demos/demo4/Members.astro';
import Demo4OutputsIndex from './demos/demo4/OutputsIndex.astro';
import Demo4OutputsDetail from './demos/demo4/OutputsDetail.astro';
import type { Demo } from './lib/content';

/**
 * 每套 demo 必須提供同一組元件；新增 demo2／demo3 時在此註冊即可。
 * 匯入此檔會連帶載入各套的 CSS，因此只有 [demo]/[lang]/ 底下的路由才可 import。
 */
export const registry = {
  demo1: {
    Layout: Demo1Layout,
    Home: Demo1Home,
    About: Demo1About,
    Members: Demo1Members,
    OutputsIndex: Demo1OutputsIndex,
    OutputsDetail: Demo1OutputsDetail,
  },
  demo2: {
    Layout: Demo2Layout,
    Home: Demo2Home,
    About: Demo2About,
    Members: Demo2Members,
    OutputsIndex: Demo2OutputsIndex,
    OutputsDetail: Demo2OutputsDetail,
  },
  demo3: {
    Layout: Demo3Layout,
    Home: Demo3Home,
    About: Demo3About,
    Members: Demo3Members,
    OutputsIndex: Demo3OutputsIndex,
    OutputsDetail: Demo3OutputsDetail,
  },
  demo4: {
    Layout: Demo4Layout,
    Home: Demo4Home,
    About: Demo4About,
    Members: Demo4Members,
    OutputsIndex: Demo4OutputsIndex,
    OutputsDetail: Demo4OutputsDetail,
  },
} satisfies Record<Demo, unknown>;
