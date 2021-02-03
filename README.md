# react-props-to-json-ts
React props to json schema used for [form-reder](https://alibaba.github.io/form-render/)

# Install
```
yarn add react-props-to-json-ts --dev
```
or
```
npm install --save-dev react-props-to-json-ts
```

# How to use
```js
const fs = require('fs');
const parseToSchema = require('react-props-to-json-ts');
const source = fs.readFileSync('filename.tsx', 'utf8');
const schema = parseToSchema(source);

console.log(schema);
```
# Example
pls follow the [exmaple](https://github.com/TimLuo465/react-props-to-json-ts/blob/main/example)

# Support types
`union` `number` `boolean` `string` `object` `array`
