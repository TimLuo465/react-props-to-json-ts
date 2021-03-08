const fs = require('fs');
const path = require('path');
const propToSchema = require('../dist/react-props-to-json-ts.cjs.js');

// 参数为目标文件地址
const apiInfo = propToSchema(`${__dirname}/index.tsx`);
fs.writeFileSync(path.join(__dirname, 'schema.json'), JSON.stringify(apiInfo, null, 2));
