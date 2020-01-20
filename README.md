Webpack boilerplate for static website
========================================================

- Pug
- Sass


File Structure
--------------------------------------------------------

```
.
+-- public // Deploy this
|   +-- .keep
+-- src
|   +-- images
|   +-- javascripts
|   |   +-- main.js
|   +-- stylesheets
|   |   +-- main.scss
|   +-- index.pug
+-- webpack
|   +-- htmlConfig.js // Add new entry points here
|   +-- javascriptConfig.js
|   +-- stylesheetConfig.js
+-- webpack.config.js
```


Let's get started
--------------------------------------------------------

```bash
# Start compiling
$ npm run watch

# Start web server
$ npm start

# For deployment
$ npm build
```


Update packages
--------------------------------------------------------

https://github.com/tjunnone/npm-check-updates

```
$ npm install -g npm-check-updates

# To check latest versions
$ ncu

# To Upgrade everything to the latest version
$ ncu -u
```
