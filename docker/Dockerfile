# ベースイメージとしてNode.jsの軽量版を使用
FROM node:20.9-bullseye-slim

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係をインストール (メモリ使用を最小化する工夫を加える)
# 1. 先にパッケージ関連ファイルのみをコピー
COPY package.json package-lock.json /app/

# 2. 依存関係をインストール
RUN npm ci

# ソースコードをコピー (キャッシュを有効に活用)
COPY ./ /app/

# Next.jsのビルドを実行 (環境変数でメモリ制限を調整)
RUN NODE_OPTIONS="--max-old-space-size=512" npx next build

# 必要なポートを公開 (Next.jsのデフォルトポートは3000)
EXPOSE 3000

# 実行コマンド
CMD ["npx", "next", "start"]
