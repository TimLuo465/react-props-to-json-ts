import { ComponentInfo, Schema } from './types'
import { getProps, getRequired } from './utils'

export default function parseToSchema(info: ComponentInfo): Schema {
  const { props } = info
  const properties = getProps(props)
  const required = getRequired(properties)

  return {
    type: 'object',
    properties,
    required
  }
}
