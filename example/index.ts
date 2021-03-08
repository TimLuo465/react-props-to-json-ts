const fs = require('fs');
const path = require('path');
const propsToJSON = require('../dist/react-props-to-json-ts.cjs.js');
const result = propsToJSON(`${__dirname}/index.tsx`);

fs.writeFileSync(path.join(__dirname, 'schema.json'), JSON.stringify(result, null, 2));
