# memory

A simple, interactive react application (as a PWA) to play the game of memory/memento.

## Setup

Setup firebase

```
    npm install -g firebase-tools
    firebase init --hosting
```

## Build

Run,

```
    npm run build
```

to bundle the source code with webpack.

## Deploy

To tell firebase to upload the app to the cloud, run:

```
    firebase deploy
```

You can run the app by calling the url provided in the terminal output.

## Notes

This app was created by running

```
    npx create-react-app my-app --template cra-template-pwa
```

This will use the tool 'workbox' to run the app as an PWA (https://create-react-app.dev/docs/making-a-progressive-web-app/).
