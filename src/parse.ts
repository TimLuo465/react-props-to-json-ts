import { CommentDescType, ComponentInfo, Schema } from './types'
import { getProps, getRequired, isEmptyObject, parseComment } from './utils'

export default function parseToSchema(info: ComponentInfo): Schema | null {
  const { description, props, displayName } = info
  const desc = parseComment(description) as CommentDescType

  // Component should has a title tag.
  // Function Component returns an object without any props. This is a react-docgen bug.
  // https://github.com/reactjs/react-docgen/issues/590
  if (!desc.title || !props) {
    return null
  }

  const properties = getProps(props, desc)
  const required = getRequired(properties)

  if (isEmptyObject(properties)) {
    return null
  }

  const { props: _props, exclude, ...restDesc } = desc

  return {
    displayName,
    properties,
    required,
    ...restDesc
  }
}
