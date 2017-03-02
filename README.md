# HSHSL Outreach Toolkit

#### About
This is a desktop app (for Windows and Mac) that lets communications staff:
- Preview submissions to The Elm and Campus Life Weekly before submitting
- Quickly get campus digital display templates and information


Download for Windows | Download for Mac

---

#### Development docs
The app is built with HTML, CSS, and JavaScript using [Electron](http://electron.atom.io). See `package.json` for app dependencies and build scripts, and `index.js` for app configuration.

##### Current development workflow:
1. This is a [Jekyll](https://jekyllrb.com) site which compiles static html files to `_site/`. (`_site/` is not available as a directory to browse here in GitHub because it is ignored via [`.gitignore`](https://github.com/hshsl-training/electron-hshsl-outreach-toolkit/blob/master/.gitignore).)
  a. [Vue.js](https://vuejs.org) is used for the preview user interface.
2. [Electron](https://electron.atom.io) watches `_site/` to build a local desktop app for development.
3. [electron-packager](https://www.npmjs.com/package/electron-packager) builds app binaries for distribution.

##### Environment dependencies:
- Jekyll is a [Ruby](https://www.ruby-lang.org/en/) gem.
- Everything Electron related is a [Node.js](https://nodejs.org) module.

##### Development set up:
First clone, then navigate into, this directory.

Next, install the js dependencies:
```bash
> npm install
```

Then build the static site with jekyll:
``` bash
> jekyll build --watch
```

Then, in a new terminal tab, start electron:
``` bash
> npm start
```

##### Build binaries:
Using [`electron-packager`](https://www.npmjs.com/package/electron-packager#from-the-command-line) to package this web app into OS-specific bundles (`.exe` and `.app`) takes the following form:

```bash
> electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> [optional flags...]
```

**Note:** Building for Windows from non-Windows platforms [requires Wine](https://www.npmjs.com/package/electron-packager#building-windows-apps-from-non-windows-platforms).🍷

When ready to build binary app bundles for distribution:
```bash
# build for all platforms
> electron-packager . --all

# build for Windows
> electron-packager . --platform=win32

# build for Mac
> electron-packager . --platform=darwin

# build for Win and Mac
> electron-packager . --platform='win32,darwin'

# build with overwrite
> electron-packager . --platform=win32 --overwrite

```
