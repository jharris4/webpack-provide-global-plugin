Provides installed packages as globals for webpack
========================================

Helper plugin that uses the webpack ProvidePlugin with the help of the (imports-loader)[https://github.com/webpack-contrib/imports-loader]
and the (exports-loader)[https://github.com/webpack-contrib/exports-loader].

Installation
------------
You must be running webpack on node 0.12.x or higher

Install the plugin with npm:
```shell
$ npm install --save-dev webpack-provide-global-plugin
```

Example
-------
Setting up fetch and Promise globals:

```javascript
plugins: [
    new WebpackProvideGlobalPlugin({
        "es6-promise": "Promise",
        "whatwg-fetch": "fetch"
    })
]
```

This is is identical to writing:

```javascript
plugins: [
    new webpack.ProvidePlugin({
        "Promise": "imports-loader?this=>global!exports-loader?global.Promise!es6-promise",
        "fetch": "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
    })
]
```