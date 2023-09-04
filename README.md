# Microfrontends test
Testing microfrontends using Webpack Module Federation: https://webpack.js.org/concepts/module-federation/

Tutorial from https://blog.bitsrc.io/build-microfrontend-in-react-in-3-easy-steps-74790fd0c9fb

## Microhost (React)
Needs to run on port 8080

## Microclient (React)
Needs to run on port 8081

## Microclient (Vue + Vite)
Instead of webpack uses vite-plugin-federation compatible with Webpack
https://github.com/originjs/vite-plugin-federation

npm run build && npm run preview (for the module federation to expose the remote entry file)

