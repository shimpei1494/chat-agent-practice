# コードを修正してマージするまでの手順

1. Issue などからタスクを探す

   - Issue になくてもやっても良い

2. develop ブランチから feature ブランチを作成

   - わからない場合は BRANCH_POLYCY.md を確認

3. 変更点をコミットし、Linter・Formatter を実行

   - 最後に一気に修正点が多くなると大変なので、都度実行して修正すること

4. プルリクスト（PR）を作成

   - リポジトリ：https://github.com/shimpei1494/chat-agent-practice
   - プルリク作成時に Linter が走るので、そこでエラーや警告が出た場合は再度ローカルで確認し、修正&push してエラーがない状態にする（下図がエラーがない状態）
     <img width="925" alt="スクリーンショット 2024-09-16 17 42 37" src="https://github.com/user-attachments/assets/3fdcae3a-287f-475e-8f5f-d8ab0208eb28">
   - プルリク確認依頼を出す
   - プルリクが承認され、マージされたら完了
