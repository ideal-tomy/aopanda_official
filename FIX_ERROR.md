# エラー修正手順

## framer-motionのモジュールエラー修正

### エラー内容
`Could not find the module 'framer-motion' in the React Client Manifest`

このエラーは、framer-motionを使用しているコンポーネントがServer Componentとして扱われている場合に発生します。

## 修正内容

### 1. 'use client'ディレクティブの追加

framer-motionを使用しているすべてのコンポーネントに`'use client'`を追加しました：

- ✅ `components/ui/Button.tsx`
- ✅ `components/ui/LinkButton.tsx`
- ✅ `components/ui/IconButton.tsx`
- ✅ `components/ui/Carousel.tsx` (既にあり)
- ✅ `components/layout/Header.tsx` (既にあり)

### 2. next.config.jsの調整

`optimizePackageImports`の設定を一時的に削除しました（Next.js 14での互換性問題のため）

## 修正手順

### 1. キャッシュとnode_modulesを削除

```powershell
# PowerShellで実行
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Force yarn.lock -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
```

### 2. 依存関係を再インストール

```bash
yarn install
```

### 3. 開発サーバーを再起動

```bash
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

## 確認事項

エラーが解消されたか確認：

1. ブラウザでエラーが表示されないか確認
2. 開発サーバーのコンソールでエラーが出ていないか確認
3. ページが正常に表示されるか確認

