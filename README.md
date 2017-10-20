# Angular QuickStart - Webpack And Koa@2

If you would like to take a look at the angular oficial quickstart readme page, you can find it[Here.](https://github.com/angular/quickstart/blob/master/README.md)


This repository focus on using Koa 2.x.x as a web framework along with webpack as a module bundler/loader. The objective is to
have a more up-to-date quickstart solution based on angular 4.4.5 (as of 10/20/17). Please find the basic instructions below.

## Prerequisites

Basic requirements as listed in the oficial Readme page are needed to work with this application. However, specific versions
might be required to work with the latest version of the  repo.

* Node 7.6.x or higher (Koa)

 
As stated by the angular team, [nvm](https://github.com/creationix/nvm) is the recommended for managing multiple node
versions.

## Installation


```bash
npm install
```

Start the app with the following command

```bash
node http-server-cluster.js
```

Open the following url on your browser: `localhost:3000`. If you would like to change the port and more,
please check `config.js` in the project root directory.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm build` - runs webpack pointing to the current `webpack.common.js` config file. The output of the bundles,
is currently pointing to `./build`.
