# Lapsell — Landing Page

**Drawings for the process of making.**

音楽・絵画など、創作の模索（プロセス）そのものを世界に1つだけのグッズとして販売できるプラットフォーム、Lapsell のランディングページ。

公開URL: <https://www.lapsell.art/>

---

## 構成

純粋な HTML / CSS / JavaScript で書かれた、ビルド不要の静的サイト。

```
.
├── index.html         全セクションを含む単一HTML
├── css/style.css      全スタイル（建築設計図モチーフ）
├── js/script.js       in-view アニメ・スペシメン横スクロール
├── images/            写真・素材
├── CNAME              www.lapsell.art
├── .nojekyll
└── .github/workflows/deploy.yml   GitHub Pages デプロイ
```

依存関係なし。Node も npm も不要。

## ローカル開発

```bash
python -m http.server 8000
# → http://localhost:8000/
```

または VS Code の Live Server / `npx serve` 等でも可。
ファイルを編集して保存し、ブラウザでリロードするだけ。

## デザインコンセプト

印刷前のトンボや建築設計図をモチーフとした、線主体・モノクロベースのデザイン。
LP 全体が「Lapsell の図面」というメタファーで構成されている。

- 紙ベースの背景に 5mm 相当の方眼グリッド
- 各セクションに DRAWN / DATE / DWG NO. のタイトルブロック
- ページ四隅にトンボ（registration marks）
- アクセントは校正赤（#C43E1C）のみ、極めて限定的に使用

## デプロイ

`main` ブランチへの push で GitHub Actions が走り、リポジトリ・ルートをそのまま GitHub Pages に公開する。

## コンテンツ編集

`lapsell_lp.md` がコンテンツの一次資料。コピーや構成を変更するときは、まずこのファイルを更新してから `index.html` に反映する。

## ライセンス

© 2026 Lapsell. All rights reserved.
