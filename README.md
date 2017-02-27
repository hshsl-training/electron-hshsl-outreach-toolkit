# HSHSL Outreach Toolkit


#### Purpose
Provide an easy-to-install desktop app for HSHSL communications staff to optimize use of UMB outreach channels, including:
- Preview what your content will look like on to The Elm and Campus Life Weekly
- Digital display slide downloads and info


#### About the desktop app
The app is built with HTML, CSS, and JavaScript using [Electron](http://electron.atom.io). See `package.json` for app requirements and build scripts, and `index.js` for app configuration.

Currently,

- This is a [Jekyll](https://jekyllrb.com) site which compiles static html files to `_site/`.
- [Electron](https://electron.atom.io) is used for local development of the desktop app.
- [electron-packager](https://www.npmjs.com/package/electron-packager) is used to build the app binaries for distribution.
- [Vue.js](https://vuejs.org) is used for the preview UI.


##### Environment:

1. Jekyll is a Ruby gem.
2. Everything Electron related is a Node.js module.

##### Development set up:

``` bash
> jekyll build --watch

# open new tab

> npm start
```

##### Build binaries:

```bash
# build for all platforms
> electron-packager . --all

# build Windows
> electron-packager . --platform=win32

# build Mac
> electron-packager . --platform=darwin

# build Win and Mac
> electron-packager . --platform='win32,darwin'

# build with overwrite
> electron-packager . --platform=win32 --overwrite

```
