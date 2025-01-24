# ベースイメージとしてNode.jsの軽量版を使用
FROM node:20.9-bullseye-slim

# 作業ディレクトリを設定
WORKDIR /app

# 必要なツールをインストール (curl, unzip)
RUN apt-get update && apt-get install -y curl unzip && rm -rf /var/lib/apt/lists/*

# bunのインストール
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

# 依存関係をインストール (メモリ使用を最小化する工夫を加える)
# 1. 先にパッケージ関連ファイルのみをコピー
COPY package.json /app/
COPY bun.lockb /app/

# 2. 依存関係をインストール
RUN bun install

# ソースコードをコピー (キャッシュを有効に活用)
COPY ./ /app/

# Next.jsのビルドを実行 (環境変数でメモリ制限を調整)
RUN NODE_OPTIONS="--max-old-space-size=512" npx next build

# 必要なポートを公開 (Next.jsのデフォルトポートは3000)
EXPOSE 3000

# 実行コマンド
CMD ["npx", "next", "start"]
