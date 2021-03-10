import { ComponentInfo, Schema } from './types'
import { getProps, getRequired, isEmptyObject, parseComment } from './utils'

export default function parseToSchema(info: ComponentInfo): Schema | null {
  const { description, props, displayName } = info
  const desc = parseComment(description)

  // Component should has a title tag
  if (!desc.title) {
    return null
  }

  const properties = getProps(props)
  const required = getRequired(properties)

  if (isEmptyObject(properties)) {
    return null
  }

  return {
    displayName,
    properties,
    required,
    ...desc
  }
}
