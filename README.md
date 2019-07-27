# Chrome Extension TypeScript Starter

[日本 O'Reilly の購入済みページ](https://www.oreilly.co.jp/ebook/bookshelf) の書籍のダウンロードを ISBN ベースではなく、タイトルベースでリネームして行うための拡張機能です。

[カスタムの Chrome アプリと拡張機能を作成して公開する \- Google Chrome Enterprise ヘルプ](https://support.google.com/chrome/a/answer/2714278?hl=ja) の 2 アプリや拡張機能をテストするにしたがって、`dist` フォルダを拡張機能として読み込んでください。

この拡張機能は [chibat/chrome-extension-typescript-starter](https://github.com/chibat/chrome-extension-typescript-starter) をベースに書かれました。

## Prerequisites

* [node + npm](https://nodejs.org/) (Current Version)

## Option

* [Visual Studio Code](https://code.visualstudio.com/)

## Project Structure

* src/typescript: TypeScript source files
* src/assets: static files
* dist: Chrome Extension directory
* dist/js: Generated JavaScript files

## Setup

```
npm install
```

## Import as Visual Studio Code project

...

## Build

```
npm run build
```

## Build in watch mode

### terminal

```
npm run watch
```

### Visual Studio Code

Run watch mode.

type `Ctrl + Shift + B`

## Load extension to chrome

Load `dist` directory

