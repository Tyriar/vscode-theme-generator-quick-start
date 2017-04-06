# vscode-theme-generator-quick-start

**Clone and run for a quick way to get started with [vscode-theme-generator](https://github.com/Tyriar/vscode-theme-generator).**

## How to build the theme

You need [NodeJS](https://nodejs.org/en/) installed to run the generator.

```js
npm install
```

Make your changes to the colors in index.ts and hit F5 to build the theme and launch the a new VS Code window with your theme available in the command palette (`ctrl`/`cmd+shift+p` > "Color Theme").

## Publishing

The official guidance from the team is to [avoid publishing until the theme format is finalized](http://code.visualstudio.com/updates/v1_11#_preview-workbench-theming). The reason for this is because the format might change so much that the theme breaks.
