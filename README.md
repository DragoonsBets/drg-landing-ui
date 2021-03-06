[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/zeit/next.js/tree/master/examples/with-styled-components)

# DRG-LANDING-UI

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/segmentio/create-next-app) with [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) or [npx](https://github.com/zkat/npx#readme) to bootstrap the example:

```bash
npx create-next-app --example with-styled-components with-styled-components-app
# or
yarn create next-app --example with-styled-components with-styled-components-app
```
# To Run
npm run dev

```

### Try it on CodeSandbox

[Open this example on CodeSandbox](https://codesandbox.io/s/github/zeit/next.js/tree/canary/examples/with-styled-components)

## The idea behind the example

This example features how you use a different styling solution than [styled-jsx](https://github.com/zeit/styled-jsx) that also supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. In this case we are using [styled-components](https://github.com/styled-components/styled-components).

For this purpose we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`, and also adding the `babel-plugin-styled-components`. (which is required for server side rendering)

## Enable CORS

To enable CORS you have to edit charts/drg-landing/values.yaml the nginx annotation section.
This adds the rules directly to Kubernetes.
Also, you must enable the CORS rule in nginx.conf that serves the dockerfile.
And finally you must add the CORS rule in Django..