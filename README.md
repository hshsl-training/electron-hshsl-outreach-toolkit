# HSHSL Outreach Toolkit


#### Purpose
Provide an easy-to-install desktop app for HSHSL communications staff to optimize use of UMB outreach channels, including:
- Preview what content will look like on The Elm and Campus Life Weekly
- Digital display slide downloads and info


#### Development details
The app is built with HTML, CSS, and JavaScript using [Electron](http://electron.atom.io). See `package.json` for app requirements and build scripts, and `index.js` for app configuration.

Currently,

- This is a [Jekyll](https://jekyllrb.com) site which compiles static html files to `_site/`. (`_site/` is not available as a directory to browse here in GitHub because it is ignored via `.gitignore`.)
- [Electron](https://electron.atom.io) watches `_site/` to build a local desktop app for development.
- [electron-packager](https://www.npmjs.com/package/electron-packager) builds app binaries for distribution.
- [Vue.js](https://vuejs.org) is used for the preview user interface.


##### Environment:

Jekyll is a [Ruby](https://www.ruby-lang.org/en/) gem.

Everything Electron related is a [Node.js](https://nodejs.org) module.

##### Development set up:

First build the static site with jekyll:
``` bash
> jekyll build --watch
```

Then, in a new terminal tab, start electron:
``` bash
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
