import { Prop, Signature, TsType } from './types'
import doctrine from 'doctrine'
import { parseTsType, parseComment, unwrap } from './utils'
import { format } from 'path'

const getObjectProps = (tsType: TsType) => {
  const { raw, signature } = tsType

  if (!signature?.properties) {
    return {}
  }

  const _prop: any = {}
  const properties: any = {}
  const required: string[] = []
  let isEmpty = true

  signature.properties.forEach(({ key, value }) => {
    const descPattern = new RegExp(`\\/\\*\\*[\\s\\S]+?\\*\\/\\s+(?=${key})`)
    const [description] = raw?.match(descPattern) || []

    if (description) {
      isEmpty = false
      properties[key] = {
        ...parseTsType(value),
        ...parseComment(description)
      }

      if (value.required) {
        required.push(key)
      }
    }
  })

  if (!isEmpty) {
    Object.assign(_prop, {
      type: 'object',
      properties,
      required
    })
  }

  return _prop
}

export default {
  parse(tsType: TsType) {
    const { raw, signature, type } = tsType
    const _prop: any = {}

    if (type === 'object') {
      Object.assign(_prop, getObjectProps(tsType))
    }

    return _prop
  }
}
