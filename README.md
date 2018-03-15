# ReactJs_server_rendering
#### A little bit of soft touch on the the server rendering using Reactjs, webpack and ExpressJs going through the execution of this project:

#### Open 2 command prompt
#### make:
```
npm install -g webpack 
```
#### followed by:

```
webpack
```
#### webpack would starts checking on the entry point file in this case 'entry.js' 
#### and then use the defined loader to transpile js 'ES6' file into that which would be understood by the browser.
#### webpack config file is in a watch mode so need to make
---- webpack --watch.

Then on the other command prompt:
just run:
```
node app.js
```
#### or 
```
nodemon app.js
```
#### if you have nodemons installed
(more on this last command... check out the package.json)



