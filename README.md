# 初期セットアップ

## Next.js

```
yarn create next-app . --typescript
```

## src フォルダ作成

```
mkdir src
mv styles ./src
mv pages ./src
cd src
mkdir components
mkdir layouts
cd ..
```

## tsconfig.json修正

```
"compilerOptions": {
    "baseUrl": "."     ## 行追加
}
"include": ["next-env.d.ts", "src/**/*.ts", "src/**/*.tsx"],　　#＃ srcフォルダ配下に変更
```

## next.config.js修正
```
module.exports = {
  pageExtensions: ['page.ts', 'page.tsx'],      ## 行追加
}
```

## 必要 module のインストール


```
yarn add -D eslint-plugin-simple-import-sort
yarn add -D prettier
yarn add -D eslint-config-prettier
yarn add -D @typescript-eslint/eslint-plugin
yarn add -D @typescript-eslint/parser
```


## ESlint 設定

設定ファイルの名前変更　.eslintrc.js
ファイルの先頭に`module.exports =`を追加

ESlint チェック対象外の設定
.eslintignore 新規作成

```
**/node_modules/*
**/out/*
**/.next/*
/.eslintrc.js
/next.config.js
/postcss.config.js
/tailwind.config.js
```
.prettierignoreの新規作成
```
**/node_modules/*
**/out/*
**/.next/*
/yarn.lock
/.eslintrc.json
/*config.js
/.vscode
/*.json
/next-env.d.ts
/README.md 
```


## tailwind css のインストール

```
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
yarn add -D eslint-plugin-tailwindcss
yarn add -D @jarrodldavis/eslint-plugin-tailwindcss@latest
yarn add -D prettier-plugin-tailwind
yarn add @headlessui/react
yarn add @heroicons/react
```


## tailwind.config.js, postcss.config.js の生成

```
npx tailwindcss init -p
```


## vs code のワークスペース設定

validate チェック off


## index.tsx の編集

index.tsx を下記のとおりに置き換える。
className でスタイルを当てていく
元々あった Home.module.css は削除しておく

```
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-mono">
      Hello Nextjs
    </div>
  );
};
export default Home;

```


# firebase
```
yarn add firebase
yarn add firebase-admin
yarn add next-firebase-auth
yarn add axios
yarn add swr
```