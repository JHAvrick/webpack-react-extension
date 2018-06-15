# Chrome Extension + React

This template uses Wepback, Babel, and React to build the necessary components of a basic Chrome extension.

### Project Setup

Run `npm install` to get dependencies.

In the `build` directory you'll find a `manifest.json` which should be edited to fit your extension's requirements. Information about basic extension setup and the manifest can be found [here](https://developer.chrome.com/extensions/getstarted). 

### Template Structure

##### Directories

`config` - This directory contains the various webpack configs necessary to build the extension's components. The following webpack configs are included by default:

  * `background` - The background script
  * `content_script` - The content script. If more content scripts are necessary this can be duplicated and modified
  * `popup` - The extensions popup display (when it is left-clicked)
  * `options` - The options page

`build` - Each webpack config outputs to this directory. It also holds the `manifest.json` and popup/options HTML pages.

`src` - The source directory contains sub-directories for each config listed above.

### Build

For development purposes use `npm run dev`, for production `npm run build`.
