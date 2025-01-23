# ベースイメージとしてNode.jsの軽量版を使用
FROM node:20.9-bullseye-slim

# 作業ディレクトリを設定
WORKDIR /app

# 必要なツールをインストール (curl, unzip)
RUN apt-get update && apt-get install -y curl unzip && rm -rf /var/lib/apt/lists/*

# bunのインストール
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

# ソースコードをコピー
COPY ./ /app/

# 依存関係をインストール
RUN bun install --force

# Next.jsのビルド
RUN npx next build

# 必要なポートを公開 (Next.jsのデフォルトポートは3000)
EXPOSE 3000

# 実行コマンド
CMD ["npx", "next", "start"]
