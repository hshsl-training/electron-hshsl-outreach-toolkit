# HSHSL Outreach Toolkit


#### About
This is a desktop app (for Windows and Mac) that lets communications staff:
- Preview submissions to The Elm and Campus Life Weekly before submitting
- Quickly get campus digital display templates and information


Download for Windows
Download for Mac

---

#### Development docs
The app is built with HTML, CSS, and JavaScript using [Electron](http://electron.atom.io). See `package.json` for app dependencies and build scripts, and `index.js` for app configuration.

##### Current development workflow:
1. This is a [Jekyll](https://jekyllrb.com) site which compiles static html files to `_site/`. (`_site/` is not available as a directory to browse here in GitHub because it is ignored via [`.gitignore`](https://github.com/hshsl-training/electron-hshsl-outreach-toolkit/blob/master/.gitignore).)
2. [Vue.js](https://vuejs.org) is used for the preview user interface.
3. [Electron](https://electron.atom.io) watches `_site/` to build a local desktop app for development.
4. [electron-packager](https://www.npmjs.com/package/electron-packager) builds app binaries for distribution.

##### Environment dependencies:
- Jekyll is a [Ruby](https://www.ruby-lang.org/en/) gem.
- Everything Electron related is a [Node.js](https://nodejs.org) module.

##### Development set up:
First clone, then navigate into this directory.

Then build the static site with jekyll:
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
