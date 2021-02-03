const fs = require('fs');
const path = require('path');
const propToSchema = require('../dist/react-props-to-json-ts.cjs.js');
const source = fs.readFileSync(`${__dirname}/index.tsx`, 'utf8');
// 参数为目标文件地址
const apiInfo = propToSchema(source);
fs.writeFileSync(path.join(__dirname, 'schema.json'), JSON.stringify(apiInfo, null, 2));
