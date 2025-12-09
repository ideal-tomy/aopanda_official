# GitHubリポジトリへのpush手順

## リポジトリ情報

- URL: https://github.com/ideal-tomy/aopanda_official.git

## Push手順

### 1. Gitの初期化（初回のみ）

```bash
git init
```

### 2. リモートリポジトリの追加

```bash
git remote add origin https://github.com/ideal-tomy/aopanda_official.git
```

既にリモートが設定されている場合は、以下で確認・更新：

```bash
# 現在のリモートを確認
git remote -v

# 既存のリモートを削除して再追加（必要な場合）
git remote remove origin
git remote add origin https://github.com/ideal-tomy/aopanda_official.git
```

### 3. すべてのファイルをステージング

```bash
git add .
```

### 4. コミット

```bash
git commit -m "Initial commit: あおぱんだ公式サイトの実装"
```

### 5. メインブランチを設定（必要に応じて）

```bash
git branch -M main
```

### 6. プッシュ

```bash
git push -u origin main
```

## 注意事項

- `node_modules/` と `.next/` は自動的に除外されます（.gitignoreで設定済み）
- `public/images/sumple01.png` はリポジトリに含まれます
- 環境変数ファイル（`.env*`）は含まれません

## 今後の更新手順

```bash
# 変更を確認
git status

# 変更を追加
git add .

# コミット
git commit -m "変更内容の説明"

# プッシュ
git push
```

