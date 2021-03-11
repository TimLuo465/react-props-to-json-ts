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
const propsToJSON = require('react-props-to-json-ts');
// input file path
const result = propsToJSON('filename.tsx');

console.log(result);
```

# API
### (path, handleError)
|       argument      |       type      | required | description |
| --------------- | ---------------   | ------- | ----- |
| path           |  string  |   true | The path of parsing file
| handleError    | (err: any) => void | false | Callback for handle the error |

# Note

- The tool will skip the prop without `@title` tag.
- The component also need a `@title` tag, otherwise will get `null`.
 - If props is empty, will get a `null` value.

# Example
pls follow the [exmaple](https://github.com/TimLuo465/react-props-to-json-ts/blob/main/example)

# Support types
|       type      |       format      |
| --------------- | ---------------   |
|      `union`    |       select      |
|      `number`   |      input number |
|      `boolean`  |      checkbox     |
|      `string`   |      input        |
|      `object`   |      auto         |
|      `array`    |      auto         |
|   `ReactNode`   |      richtext     |
