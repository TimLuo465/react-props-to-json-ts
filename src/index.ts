import { parse, importers } from 'react-docgen'
import parseToSchema from './parse'
import fs from 'fs'

export default (path: string) => {
  const fileContent = fs.readFileSync(path, 'utf-8')
  const result = parse(fileContent, null, null, {
    importer: importers.makeFsImporter(),
    filename: path,
    babelrc: false
  })

  return parseToSchema(result)
}
