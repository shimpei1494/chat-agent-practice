## Formatter

### フロントエンド

Biome のフォーマッターを使用。  
ts または tsx ファイルに対して、VScode の「⌘+S」で保存時にフォーマットされるはず。  
※VScode の Biome 拡張機能を使用

### バックエンド

ruff を使用。  
python のファイルに対して、VScode の「⌘+S」で保存時にフォーマットされるはず。  
※VScode の ruff 拡張機能を使用

## Linter

### フロントエンド

Biome の Linter を以下で実行 → エラーに対して修正を行う

```bash
cd frontend
npm run check
```

※事前に npm i でライブラリをインストールしておく必要あり

### バックエンド

```bash
cd backend
ruff check --fix
```

※ --fix オプションはフォーマットも実施するということ  
※ 事前に pip install -r requirements.txt で関連ライブラリをインストールする必要あり
