# minami-hp

パーソナルジム「INOUT」（新富町）の公式サイト（https://inoutgyms.com/ ）。Next.js 16（App Router）＋ Tailwind CSS 3。公開ページのほかに、ブログとその管理画面（`/admin`）がある。

## 構成

- `src/app/(main)/`：公開ページ。TOP（`page.tsx`）、`/method`、`/reserve`、`/blog`
- `src/app/(admin)/admin/`：ブログの管理画面。刷新の対象外。`admin.*` の色（`tailwind.config.ts`）もこちら用
- `src/components/section/`：TOP の各セクション。並び順と見出しは `src/constants/menuItem.ts` と対応している
- `src/constants/`：SEO（`metadata.ts`）、構造化データ（`schema.ts`）、トレーナー情報（`profile.ts`）
- 画像は S3（`minami-hp.s3.ap-northeast-1.amazonaws.com`）にあり、`next/image` で読む。ブログの画像は MinIO／S3（`src/lib/s3.ts`）

## 刷新の進め方

1. ジムの事実（住所・料金・営業時間・資格など）は `doc/facts.md` に合わせる。食い違いを見つけたら、コードより先に `doc/facts.md` の「確認待ち」に書く。
2. 仕様は `doc/spec-template.md` をコピーして `doc/spec-<名前>.md` に書き、0〜3 を埋めてから作り始める。参考サイトがあるときは、見て分かるくらい寄せる。
3. 見た目を変えたら、`shoot` スキル（`scripts/shoot.mjs`）で PC・スマホ・reduced motion を撮って確認してから報告する。
4. 画像は `codex-image` スキル（`scripts/codex-image.mjs`）で作る。プロンプトは先に `doc/image-prompts.md` に書く。動画は人が Gemini のウェブ版で作る。

`doc/` と `.claude/` は git 管理外。仕様・事実・スクリーンショット・生成画像の元ファイルは手元にだけ残る。

## 守ること

- 人物写真とロゴは生成しない。トレーナーと店内の写真は本物であることに意味がある。
- 予約導線（公式LINE、`/reserve` のフォーム、`src/app/api/sendEmail`）と SEO（`metadata.ts`・`schema.ts`・`next-sitemap`）を、刷新のついでに壊さない。
- 管理画面とブログの API は、頼まれない限り触らない。

## ローカルで動かす

- `npm run dev`。TOP はブログ一覧を MinIO から読むので、MinIO が無いと 500 になる。`docker compose -f docker-compose.local.yml up -d minio` で立ち上げる（Docker Desktop が必要）。`/method`・`/reserve` は MinIO なしで表示できる。
- 環境変数は `.env` と `.env.local`。中身を読んだり、外部に送ったりしない。

## 公開

- `main` に push すると GitHub Actions（`.github/workflows/deploy.yml`）が Docker イメージを作り、本番の VPS にデプロイする。刷新の作業はブランチを切り、PR にする。`main` へ直接 push しない。

## 注意

- この環境の `git diff` / `git log` はページャで止まるので、`git --no-pager` を付ける。
- Git Bash では `/method` のような引数が Windows のパスに書き換えられる。スクリプトにページのパスを渡すときは先頭の `/` を省く。
