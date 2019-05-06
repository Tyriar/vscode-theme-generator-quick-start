# vscode-theme-generator-quick-start

**Clone and run for a quick way to get started with [vscode-theme-generator](https://github.com/Tyriar/vscode-theme-generator).**

## How to build the theme

You need [NodeJS](https://nodejs.org/en/) installed to run the generator.

```js
npm install
```

Make your changes to the colors in index.ts and hit F5 to build the theme and launch the a new VS Code window with your theme available in the command palette (`ctrl`/`cmd+shift+p` > "Color Theme").

## Live theme editing

VS Code v1.30 and newer support live theme editing. Run

```js
npm start
```

to launch a VS Code window with your theme available. If you make changes to index.ts and save, [Gulp](https://gulpjs.com/) will automatically re-compile the theme and you will see your changes reflected in VS Code in seconds.

## Publishing

When you're ready to publish your theme just fill out the `"name"`, `"displayName", `"publisher"` and `"description"` values in the package.json and [publish it like any other extension](https://code.visualstudio.com/docs/extensions/publish-extension).
