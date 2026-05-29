# 行動雲端力研習｜Notion 起手式

給公務人員的最初階 Notion 教學成果網站。2026.06.02（二）線上分享，大乃老師（陳乃誠，竹光國中國文教師＋資訊組長）。

- **線上版**：部署後填入 → `https://notion-starter-20260602.vercel.app`
- **分享頁**：`/share/notion-qishi-20260602`
- **完整講義頁**：`/share/notion-qishi-20260602/detail`
- **可複製範本（學員掃 QR）**：<https://chennaicheng.notion.site/1150602notion>

## 簡報結構（31 張）

| 區 | 張數 | 內容 |
|---|---|---|
| 序幕 | 00-02 | 從零開始、今天帶走三件事、四大痛點 |
| 概念 | 03-12 | Notion 是什麼、vs 現有工具、七個核心觀念（Block／Page／Database／View／無中生有／同步區塊／快速鍵）、怎麼開始 |
| 範本 | 13-22 | 三個資料庫（專案／任務／會議紀錄）＋關聯＋三種視圖＋五步驟工作流＋常用快捷 |
| 進階 | 23-29 | 交接手冊範本（八區塊）、快速入門、三個別犯的錯、三個進階動作、資安、帶走重點 |
| 結語 | 30 | 掃碼複製範本 |

## 特色

- 每張獨立版式（13+ 種版式輪換）、大乃綠色 AI 學習宇宙風配圖
- 全螢幕簡報模式（← → Space / ESC）
- 完整講義頁（給想細讀的人）
- localStorage 學員筆記區（⌘+Enter 送出）
- 列印 / PDF 友善
- QR Code 指向可複製的 Notion 範本

## 技術棧

Next.js 16 ‧ React 19 ‧ Tailwind 3.4 ‧ TypeScript

```bash
npm install
npm run dev      # 本地預覽
npm run build    # 驗證 type / 打包
```

## 內容來源

參考 Notion 範本「公務員 Notion 起手式」（專案 / 任務 / 會議紀錄三資料庫 + 交接手冊 + 快速入門），針對研習前問卷四大痛點客製：資料散落、交辦追蹤、跨單位協作、業務交接。
