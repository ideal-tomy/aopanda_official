# クリーンアップスクリプト（PowerShell）

Write-Host "クリーンアップを開始します..." -ForegroundColor Yellow

# node_modulesの削除
if (Test-Path "node_modules") {
    Write-Host "node_modules を削除中..." -ForegroundColor Cyan
    Remove-Item -Recurse -Force node_modules
    Write-Host "✓ node_modules を削除しました" -ForegroundColor Green
} else {
    Write-Host "node_modules は存在しません" -ForegroundColor Gray
}

# .nextの削除
if (Test-Path ".next") {
    Write-Host ".next を削除中..." -ForegroundColor Cyan
    Remove-Item -Recurse -Force .next
    Write-Host "✓ .next を削除しました" -ForegroundColor Green
} else {
    Write-Host ".next は存在しません" -ForegroundColor Gray
}

# yarn.lockの削除
if (Test-Path "yarn.lock") {
    Write-Host "yarn.lock を削除中..." -ForegroundColor Cyan
    Remove-Item -Force yarn.lock
    Write-Host "✓ yarn.lock を削除しました" -ForegroundColor Green
} else {
    Write-Host "yarn.lock は存在しません" -ForegroundColor Gray
}

# package-lock.jsonの削除
if (Test-Path "package-lock.json") {
    Write-Host "package-lock.json を削除中..." -ForegroundColor Cyan
    Remove-Item -Force package-lock.json
    Write-Host "✓ package-lock.json を削除しました" -ForegroundColor Green
} else {
    Write-Host "package-lock.json は存在しません" -ForegroundColor Gray
}

Write-Host "`nクリーンアップが完了しました！" -ForegroundColor Green
Write-Host "次のコマンドを実行してください: yarn install" -ForegroundColor Yellow

