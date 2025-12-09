# あおぱんだ公式サイト

TikTok発のキャラクター「あおぱんだ」の公式サイトです。

## 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **CMS**: microCMS (予定)

## セットアップ

詳細なセットアップ手順は [LOCAL_SETUP.md](LOCAL_SETUP.md) を参照してください。

### クイックスタート

```bash
# 依存関係のインストール（Yarnを使用）
yarn install

# 開発サーバーの起動
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### 初回セットアップ時の注意

エラーが発生する場合は、以下のクリーンアップを実行してください：

```powershell
# PowerShellで実行
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Force yarn.lock -ErrorAction SilentlyContinue
yarn install
```

## プロジェクト構造

```
├── app/                    # Next.js App Router ページ
│   ├── page.tsx           # TOPページ
│   ├── contents/          # コンテンツページ
│   ├── news/              # ニュースページ
│   ├── goods/             # 商品ページ
│   ├── movie/             # 動画ページ
│   ├── business/          # ビジネスページ
│   ├── links/             # リンク集ページ
│   └── character/         # キャラクターページ
├── components/            # Reactコンポーネント
│   ├── ui/                # UIコンポーネント
│   └── layout/            # レイアウトコンポーネント
├── types/                 # TypeScript型定義
└── 要件定義.md            # 要件定義書
```

## 開発ルール

詳細は `04_開発ルール.md` を参照してください。

- 命名規則: kebab-case（ファイル）、PascalCase（コンポーネント）
- 単一責任の原則を徹底
- データ取得と表示の分離

## 実装計画

詳細は `実装計画チェックリスト.md` を参照してください。

## ライセンス

Copyright (c) ainy合同会社. All rights reserved.

