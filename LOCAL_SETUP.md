# ローカル環境セットアップ手順

## 前提条件

- Node.js 18以上がインストールされていること
- Yarn または npm がインストールされていること

## セットアップ手順

### 1. パッケージマネージャーの確認

このプロジェクトは`yarn.lock`が存在するため、**Yarnを使用することを推奨**します。

```bash
# Yarnがインストールされているか確認
yarn --version

# インストールされていない場合（npm経由でインストール）
npm install -g yarn
```

### 2. キャッシュとnode_modulesの完全削除

```powershell
# PowerShellで実行
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Force yarn.lock -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
```

### 3. 依存関係のインストール（Yarnを使用）

```bash
yarn install
```

**注意**: npmとyarnを混在させると問題が発生します。yarn.lockがある場合はyarnを使用してください。

### 4. 開発サーバーの起動

```bash
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

### 5. ビルドの確認（本番用ビルド）

```bash
yarn build
yarn start
```

## トラブルシューティング

### framer-motionのモジュールエラーが出る場合

**エラー内容**: `Could not find the module 'framer-motion' in the React Client Manifest`

**原因**: framer-motionを使用しているコンポーネントに`'use client'`ディレクティブがない

**解決方法**:
1. **完全にクリーンアップ**
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Recurse -Force .next
Remove-Item -Force yarn.lock
yarn install
```

2. **コンポーネントの確認**
すべてのframer-motionを使用しているコンポーネントに`'use client'`が付いているか確認してください。

3. **開発サーバーの再起動**
```bash
yarn dev
```

### その他のエラー

**Node.jsのバージョン確認**
```bash
node --version  # v18以上推奨
```

**Next.jsのバージョン確認**
```bash
yarn list next
```

### TypeScriptエラーが出る場合

```bash
yarn typecheck
```

### Lintエラーが出る場合

```bash
yarn lint
```

## 開発時のコマンド一覧

```bash
# 開発サーバー起動
yarn dev

# 型チェック
yarn typecheck

# Lint実行
yarn lint

# コードフォーマット
yarn format

# ビルド
yarn build

# 本番サーバー起動
yarn start
```

