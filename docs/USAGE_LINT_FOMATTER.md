## Formatter

コードのインデントなどを整形するために使用する。

### フロントエンド

Biome のフォーマッターを使用。  
ts または tsx ファイルに対して、VScode の「⌘+S」で保存時にフォーマットされるはず。  
※VScode の Biome 拡張機能を使用

### バックエンド

ruff を使用。  
python のファイルに対して、VScode の「⌘+S」で保存時にフォーマットされるはず。  
※VScode の ruff 拡張機能を使用

## Linter

コードを静的解析し、実行前にエラーチェックやコードの書き方を修正した方がいい部分を教えてくれる。  
Linter のコマンドを実行しなくても、VScode の拡張機能でエラーや警告が出るはずなので、早めに修正すべき点には気づけるはず。  
python コードに型は必須ではないが、できる限り型や docstring を書いていきたい。  
型ヒント書き方参考：https://zenn.dev/mook_jp/articles/35ced19b2ae40f

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
※ 初めは mypy を用いて型チェックも行おうと思ったが、python のコードに全て型をつけるのが大変で断念した。できるだけ型安全にしていきたいので、そのうち導入していきたい。
