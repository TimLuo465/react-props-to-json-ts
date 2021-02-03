import docgen from 'react-docgen'
import fs from 'fs'
import parseToSchema from './parse'

/**
 * Takes jsx/tsx source code and returns an form-render json schema
 */
export default (source: string) => {
  const info = docgen.parse(
    source,
    docgen.resolver.findExportedComponentDefinition,
    docgen.defaultHandlers,
    {
      parserOptions: {
        // support jsx, tsx
        plugins: ['jsx', 'classProperties', 'typescript']
      }
    }
  )

  return parseToSchema(info)
}
