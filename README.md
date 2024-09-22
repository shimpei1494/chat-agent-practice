# チャットアプリケーション

## プロジェクト概要

このプロジェクトは、React（TypeScript）と Flask を使用したチャットアプリケーションです。フロントエンドは Vite を使用し、バックエンドは Flask で構築されています。

## 必要条件

- Node.js (バージョン 20.17.0)
- Python (バージョン 3.11)
- git

## セットアップ

### 開発環境の構築

- Docker Desktop のインストール  
  https://www.docker.com/ja-jp/products/docker-desktop/

- Volta のインストール(Node.js 管理)  
  https://volta.sh/  
  インストール後の主なコマンド ↓

  ```bash
  # バージョン確認
  volta -v
  # バージョン指定してnode.jsインストール
  volta install node@20.17.0
  # 現在利用しているパッケージのリストを表示
  volta list
  ```

- python のインストール  
  mac の場合は homebrew、windows の場合は公式サイトからインストール（バージョン 3.11）
  https://www.altx.co.jp/careetec/magazine/column/hishinuma-python-network-automation4/

- git のインストール
  ネット記事など参考に
  https://kinsta.com/jp/knowledgebase/install-git/

### コードの取得とアプリの起動

1. リポジトリをクローンする：

   ```bash
   git clone https://github.com/shimpei1494/chat-agent-practice.git
   cd chat-agent-practice
   ```

2. Docker Compose でアプリケーションを起動する：
   ```bash
   docker compose up --build
   ```

## アプリケーションの構造

- `frontend/`: React フロントエンドのコード
- `backend/`: Flask バックエンドのコード

## フロントエンドのライブラリ管理

### ライブラリのインストール

1. ローカルでライブラリのインストール
   ```bash
   cd frontend
   npm i [ライブラリ名]
   ```
   →package.json と package-lock.json が更新される
2. Docker コンテナ内の node_modules にもインストール
   ```bash
   docker compose up --build
   ```
   → このコマンドの実行に伴い、コンテナ内での npm ci が実行される  
   ↓ もしかして volume 内の node_modules が更新されなくてライブラリがアプリに反映されないかも、以下コマンドで volume ごと削除してから docker compose up すれば問題ない気がする（今後改善したい）
   ```bash
      docker compose down --volumes
   ```

### ローカルと Docker コンテナ内のライブラリの状態を合わせる

1. ローカルの node_modules ディレクトリを削除
   ```bash
   rm -rf frontend/node_modules
   ```
   →VScode の GUI で削除するのでも OK
2. frontend ディレクトリで npm install を実行
   ```bash
   cd frontend
   npm install
   ```
3. Docker コンテナを再ビルドして起動
   ```bash
   docker compose up --build
   ```

## バックエンドのライブラリ管理

### ライブラリのインストール

1. backend/requirements.txt にライブラリとバージョンを記載
2. ローカルでインストール
   ```bash
   pip install -r requirements.txt
   ```
3. Docker コンテナを再ビルドして起動
   ```bash
   docker compose up --build
   ```
