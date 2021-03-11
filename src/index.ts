import { parse, importers } from 'react-docgen'
import parseToSchema from './parse'
import fs from 'fs'

export default (path: string, handleError?: (err: any) => void) => {
  const fileContent = fs.readFileSync(path, 'utf-8')
  let result = null

  try {
    result = parse(fileContent, null, null, {
      importer: importers.makeFsImporter(),
      filename: path,
      babelrc: false
    })
  } catch (e) {
    if (handleError) {
      handleError(e)
    }
    result = null
  }

  if (result) {
    return parseToSchema(result)
  }

  return result
}
