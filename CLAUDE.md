# CLAUDE.md

このファイルは Claude Code がこのリポジトリで作業する際のガイダンスです。

## プロジェクト概要

Lapsell のランディングページ。「音楽・絵画など、創作の模索（プロセス）そのものを世界に1つだけのグッズとして販売できるプラットフォーム」を訴求するための1ページサイト。

GitHub Pages で `https://www.lapsell.art/` に配信。

## 技術スタック

ビルド不要の **純粋な静的サイト**。

- HTML5（`index.html`、単一ページ）
- CSS3（`css/style.css`、CSS カスタムプロパティで色管理）
- Vanilla JavaScript（`js/script.js`、`IntersectionObserver` のみ使用）
- フォント: Google Fonts（JetBrains Mono / Inter / Noto Sans JP）

依存関係・ビルド・トランスパイラ・パッケージマネージャは **無し**。

## ファイル構成

```
.
├── index.html               全セクション（カバー・与件・概念・仕組み・工程・標本・受益者・仕様・承認）
├── css/style.css            全スタイル
├── js/script.js             in-view アニメ・スペシメン横スクロール
├── images/
│   ├── scenarios/1.png … 9.png   利用シーン写真（モノクロ表示）
│   └── *.png                その他の素材
├── CNAME                    www.lapsell.art
├── .nojekyll                Jekyll 処理を抑止
├── .github/workflows/deploy.yml  Actions で GitHub Pages にデプロイ
├── lapsell_lp.md            コンテンツ仕様書（編集はまずこちら）
└── README.md
```

## 開発フロー

ローカル HTTP サーバを起動してブラウザで確認：

```bash
# Python が入っていればこれでOK
python -m http.server 8000
# → http://localhost:8000/
```

VS Code の Live Server 拡張、`npx http-server`、`npx serve` 等でも可。

ファイルを直接編集 → 保存 → ブラウザでリロード、で完結する。ビルドは不要。

## デプロイ

`main` への push で `.github/workflows/deploy.yml` が走り、リポジトリのルートをそのまま GitHub Pages に公開する。`CNAME` と `.nojekyll` は必ずルートに置いておくこと。

## ビジュアルデザイン規約（重要）

このサイトは **印刷前のトンボ・建築設計図** をモチーフとした、線主体・モノクロベースのデザイン。次の原則を守ること：

- **モチーフ**: 図面・与件書・仕様書・スペシメンプレート。LP 全体が「Lapsell の図面」というメタファー。
- **色**: 紙ベース（`--paper #f5f1e6`）＋インク（`--ink #0e0e0e`）。アクセント `--accent #c43e1c` は校正赤として CTA・1〜2 箇所のみ。
- **タイポ**: 等幅は JetBrains Mono、本文は Noto Sans JP / Inter（共に Light/Regular）。見出しは細字大型。
- **線**: CAD 製図機の硬い直線。`--hairline 0.5px` / `--line 1px` / `--line-bold 1.5px` を使い分ける。
- **背景**: 5mm 相当の方眼グリッドが常時敷かれている。
- **要素**: トンボ（ページ四隅）、寸法線（両端矢印＋数値）、タイトルブロック（DRAWN/DATE/DWG NO 等）、引き出し線、丸数字、印刷管理マーク（K100 等）。
- **モーション**: 線が引かれるアニメ（`stroke-dashoffset`）と注釈のフェードインのみ。派手な視差は禁止。`prefers-reduced-motion` を尊重。
- **絶対にやらないこと**: ダーク背景、ゴールドアクセント、Cormorant Garamond セリフ、Tailwind/shadcn など旧 LP の系譜に戻ること。

色トークンは `css/style.css` の `:root` に集約されているので、グローバル変更はここで行う。

## コンテンツ編集ワークフロー

**重要**: コンテンツ（コピー・構成）を変更するときは：

1. **先に `lapsell_lp.md` を更新する** — このファイルがコンテンツの一次資料
2. その後、`index.html` に反映する

これにより、コンテンツの変更が文書化され、仕様書とコードが乖離しない。

## セクション構成

| No. | ID | タイトル | 役割 |
|----|----|----|----|
| 00 | `cover` | COVER | 図面表紙、タグライン、CTA への誘導 |
| 01 | `brief` | THE BRIEF | 課題（AI生成・配信収益・見えないプロセス） |
| 02 | `concept` | CONCEPT | 「制作過程を、世界に1つだけのグッズに。」 |
| 03 | `mechanism` | MECHANISM | クリエイター×Lapsell×ファンの取引模式図（インラインSVG） |
| 04 | `process` | PROCESS | 録画→完成→販売→二次流通 の4工程 |
| 05 | `specimens` | SPECIMENS | 利用シーン9種を標本台紙風に横スクロール |
| 06 | `beneficiaries` | BENEFICIARIES | クリエイター/ファンそれぞれのベネフィット（二面図） |
| 07 | `specs` | SPECIFICATIONS | 収益試算・調査データ（仕様書風テーブル） |
| 08 | `signoff` | SIGN-OFF | ミッション + CTA + 承認欄 |

## 注意事項

- 旧 React/Vite/Tailwind/shadcn のコードは完全削除済み。`npm run dev` などのコマンドは存在しない。
- `images/` 配下の写真はモノクロ前提。CSS 側で `filter: grayscale(1) contrast(1.05)` を当てている。
