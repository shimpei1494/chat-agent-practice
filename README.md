# チャットアプリケーション

## プロジェクト概要
このプロジェクトは、React（TypeScript）とFlaskを使用したチャットアプリケーションです。フロントエンドはViteを使用し、バックエンドはFlaskで構築されています。

## 必要条件
- Node.js (バージョン 20.17.0)
- Python (バージョン 3.11)

## セットアップ

### 開発環境の構築
- Docker Desktopのインストール  
	https://www.docker.com/ja-jp/products/docker-desktop/

- Voltaのインストール(Node.js管理)  
	https://volta.sh/  
	インストール後の主なコマンド↓
	```bash
	# バージョン確認
	volta -v
	# バージョン指定してnode.jsインストール
	volta install node@20.17.0
	# 現在利用しているパッケージのリストを表示
	volta list
	```

- pythonのインストール  
	macの場合はhomebrew、windowsの場合は公式サイトからインストール（バージョン3.11）
	https://www.altx.co.jp/careetec/magazine/column/hishinuma-python-network-automation4/

### コードの取得とアプリの起動
1. リポジトリをクローンする：
   ```bash
   git clone https://github.com/shimpei1494/chat-agent-practice.git
   cd chat-agent-practice
   ```

2. Docker Composeでアプリケーションを起動する：
   ```bash
   docker compose up --build
   ```

## アプリケーションの構造
- `frontend/`: Reactフロントエンドのコード
- `backend/`: Flaskバックエンドのコード

## フロントエンドのライブラリ管理
### ライブラリのインストール
1. ローカルでライブラリのインストール
	```bash
	cd frontend
	npm i [ライブラリ名]
	```
	→package.jsonとpackage-lock.jsonが更新される
2. Dockerコンテナ内のnode_modulesにもインストール
	```bash
	docker compose up --build
	```
	→このコマンドの実行に伴い、コンテナ内でのnpm iが実行される

### ローカルとDockerコンテナ内のライブラリの状態を合わせる
1. ローカルのnode_modulesディレクトリを削除
	```bash
	rm -rf frontend/node_modules
	```
	→VScodeのGUIで削除するのでもOK
2. frontendディレクトリでnpm installを実行
	```bash
	cd frontend
	npm install
	```
3. Dockerコンテナを再ビルドして起動
	```bash
	docker compose up --build
	```

## バックエンドのライブラリ管理
### ライブラリのインストール
1. backend/requirements.txtにライブラリとバージョンを記載
2. ローカルでインストール
	```bash
	pip install -r requirements.txt
	```
3. Dockerコンテナを再ビルドして起動
	```bash
	docker compose up --build
	```