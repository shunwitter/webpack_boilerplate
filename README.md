Webpack boilerplate for static website
========================================================

Webpack is a module bundler but we often want to split modules into single files such as .html, .css, .js to make it work in your deployment environment or you want to pass normal HTML/CSS code to your client.
This boilerplate creates traditional static website file structure. Nothing will be bundled except for .js file.

#### Demo
[https://webpackboilerplate.netlify.com/](https://webpackboilerplate.netlify.com/)

#### Tools

- Pug
- Sass
- ES6 Transpile


File Structure
--------------------------------------------------------

```
.
+-- public/ (Deploy this directory)
    +-- .keep
    +-- index.html
        +-- assets/
            +-- images/
            +-- javascripts/
            +-- stylesheets/
        +-- posts/
            1.html
+-- src/
    +-- main.js (Import js and css you want to pick up)
    +-- assets/
        +-- images
        +-- javascripts
        +-- stylesheets
    +-- pages/ (Picked up by HtmlWebpackPlugin)
        +-- index.pug
        +-- posts/
            +-- 1.html
+-- webpack.config.js
```


Let's Get Started
--------------------------------------------------------

```bash
# Start development
$ npm start

# To Emit files into /public
# Use this as a build command (e.g. Netlify) 
$ npm run build
```


Add New HTML Page
--------------------------------------------------------

- Add a `.pug` file in `pages/`.
- Add `'your/path/to/page.html'` as `htmlPlugin`'s argument.
- Restart webpack (npm start).



Add New CSS / JS
--------------------------------------------------------

- Add a `.js` or `.scss/.sass` file in `/src/assets`.
- Import them in /`src/main.js` file.
- Restart webpack (npm start).

`/src/main.js` is an entry point to pick everything up in this project.
You can see the setting in webpack.config.js.



Update Packages
--------------------------------------------------------

https://github.com/tjunnone/npm-check-updates

```
$ npm install -g npm-check-updates

# To check latest versions
$ ncu

# To Upgrade everything to the latest version
$ ncu -u
```
