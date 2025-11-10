# Lapsell

音楽制作プロセスを販売するプラットフォームのランディングページです。

## 概要

このプロジェクトは、音楽制作者が制作過程を「世界に1つだけのグッズ」として販売できるプラットフォームのランディングページです。AI音楽が溢れる時代において、制作者の想いや制作過程の価値を伝えることを目的としています。

## 技術スタック

- **フレームワーク**: React 19 + TypeScript
- **ビルドツール**: Vite 7
- **スタイリング**: Tailwind CSS 4
- **UIコンポーネント**: shadcn/ui
- **アニメーション**: Motion (Framer Motion)
- **フォント**: Google Fonts (Cormorant Garamond, Inter)

## セクション構成

1. **HeroSection** - メインビジュアルとキャッチコピー
2. **ProblemSection** - 音楽制作者が直面する課題
3. **SolutionSection** - プラットフォームのソリューション
4. **ProcessSection** - 利用プロセス
5. **FanBenefitsSection** - ファンへのメリット
6. **RevenueSection** - 収益化の仕組み
7. **CTASection** - 行動喚起

## セットアップ

### 必要な環境

- Node.js 18以上
- npm または yarn

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

開発サーバーは `http://localhost:5173` で起動します。

### ビルド

```bash
npm run build
```

ビルド成果物は `dist` ディレクトリに出力されます。

### シングルファイルビルド

```bash
npm run build:single
```

すべてのアセットを1つのHTMLファイルにバンドルします。

### プレビュー

```bash
npm run preview
```

ビルドした成果物をプレビューします。

### リント

```bash
npm run lint
```

ESLintでコードをチェックします。

## プロジェクト構造

```
src/
├── components/          # コンポーネント
│   ├── HeroSection.tsx
│   ├── ProblemSection.tsx
│   ├── SolutionSection.tsx
│   ├── ProcessSection.tsx
│   ├── FanBenefitsSection.tsx
│   ├── RevenueSection.tsx
│   ├── CTASection.tsx
│   ├── figma/           # Figma関連コンポーネント
│   └── ui/              # shadcn/uiコンポーネント
├── styles/              # スタイルファイル
├── guidelines/          # ガイドライン
├── App.tsx              # メインアプリケーション
└── main.tsx             # エントリーポイント
```

## 主な機能

- **レスポンシブデザイン**: モバイルからデスクトップまで対応
- **スムーズなアニメーション**: Motionを使用したスクロール連動アニメーション
- **Figmaアセット統合**: Figmaからエクスポートしたアセットを簡単に使用可能
- **ダークテーマ**: 音楽制作スタジオをイメージしたダークカラースキーム

## カスタマイズ

### カラースキーム

メインカラーは `#d4a574`（ゴールド）、背景色は `#0a0a0f`（ダーク）です。これらの色は各コンポーネントで使用されています。

### フォント

- **見出し**: Cormorant Garamond（セリフ）
- **本文**: Inter（サンセリフ）

## ライセンス

このプロジェクトはプライベートプロジェクトです。


