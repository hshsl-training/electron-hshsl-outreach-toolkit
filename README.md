# HSHSL Outreach Toolkit

#### Version 0.3.0 - React app
So far the main resources have been:
- create-react-app cli output and [docs](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-assets-outside-of-the-module-system)
- [jsx docs](https://facebook.github.io/react/docs/introducing-jsx.html)
- [language-babel atom package](https://atom.io/packages/language-babel)
- emmet and jsx discussion threads
  - [first addition to atom `keymap` file](https://gist.github.com/mxstbr/361ddb22057f0a01762240be209321f0)
  - [second edition from comment in above thread](https://gist.github.com/mxstbr/361ddb22057f0a01762240be209321f0#gistcomment-1959966)
- [Free Code Camp blog post on React and Electron](https://medium.freecodecamp.com/building-an-electron-application-with-create-react-app-97945861647c#.446im0v5x)
  - [subsequent electron app starter file](https://github.com/electron/electron-quick-start/blob/master/main.js) - which is `reactron.js` here in this repo.
- [React Router docs](https://github.com/ReactTraining/react-router/blob/master/docs/Introduction.md)

#### About
This is a desktop app (for Windows and Mac) that lets communications staff:
- Preview submissions to The Elm and Campus Life Weekly before submitting
- Quickly get campus digital display templates and information


Download for Windows | Download for Mac

---

#### Development docs
The app is built with HTML, CSS, and JavaScript using [Electron](http://electron.atom.io). See `package.json` for app dependencies and build scripts, and `index.js` for app configuration.

##### Current development workflow:
1. This is a [Jekyll](https://jekyllrb.com) site which compiles static html files to `_site/`. (`_site/` is not available in the GitHub repo because of [`.gitignore`](https://github.com/hshsl-training/electron-hshsl-outreach-toolkit/blob/master/.gitignore). You will see it locally once you build the site for the first time.) [Vue.js](https://vuejs.org) is used for the preview user interface.
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
