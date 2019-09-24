# Proof of concept

Rendering hybrid component tree of built-in elements (react) and custom components (vue) using Gatsby server-side rendering. Doesn't use any 3rd party library for react/vue interop.

Pages are automatically generated based on the [`data/pages.json`](./data/pages.json) file using [`gatsby/node.js`](./gatsby-node.js). You can update it to try out different pages

Available built-in elements:

- Button
- Heading
- Image
- Section
- Text

Available custom components:

- Counter
- WeirdTable
- Foobar

### Usage

```
yarn install

yarn build
yarn serve
```
