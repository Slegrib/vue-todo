# vue-todo
A todo app built in vue js to demonstrate server side rendering and client side hydration

![Alt Vue js todo app](http://i.imgur.com/CWI3nxW.png)

## Installation
This application was built using `node v6.0.0` `npm v3.10.9` `vue v2.1.10`.

1. Install the dependencies

```
npm install
```

2. Run the application in production mode

```
npm run prod
```

3. Point the browser to:

```
http://localhost:8080/
```

## Development Environment
All commands can also be found in the package.json scripts

1. Open a shell and run:

```
npm run dev:server
```

2. Open another shell and run:

```
npm run hot
```

3. Point the browser to:

```
http://localhost:8080/
```

Now you have hot module replacement for both the server side bundle and client bundle.
**Both of these must be running in order to run the app.**

## About
This todo app was an exercise in order to understand how to create a single page server side rendered vue js application.
It also demonstrates how to properly use vuex, vue-router, and vue transitions. The todos are stored on the server in memory and are also prefetched before the initial page render. The client side then hydrates the data and puts it in a vuex store. Feel free to let me know how it can be improved.
