import { Prop, Props, TsType } from './types'
import doctrine, { Tag, type } from 'doctrine'
import signature from './signature'

const primitiveTypes = ['string', 'number', 'boolean']
const suffixUIPropNamePattern = /(:[\w]+) (\S[\s\S]*)/

export const isEmptyObject = (obj: any): boolean => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object
}

/**
 * unwrap a raw value, eg:
 * - ''a'' => "a"
 * - '{a: 1}' => {a: 1}
 * - '["a", "b"]' => ["a", "b"]
 */
export const unwrap = (raw = '') => {
  try {
    return eval(`(${raw})`)
  } catch (e) {
    return raw
  }
}

const getUnionEnum = (elements: TsType[]) => {
  return elements.reduce((unionEnum, ele) => {
    const { elements, name, value } = ele

    if (name === 'literal') {
      unionEnum.push(unwrap(value))
    }

    if (name === 'union' && elements) {
      unionEnum.push(...getUnionEnum(elements))
    }
    return unionEnum
  }, [] as string[])
}

// handle property name "ui:xxx"
const parseTag = (tag: Tag): Tag => {
  const { title, description } = tag

  // { title: "ui", description: ":hidden false" }
  if (title === 'ui' && suffixUIPropNamePattern.test(String(description))) {
    const [, suffix, _description] = description?.match(suffixUIPropNamePattern)!

    // { title: "ui:hidden", description: "false" }
    return {
      ...tag,
      title: `${title}${suffix}`,
      description: _description
    }
  }

  return tag
}

export const parseComment = (description: string) => {
  const { tags } = doctrine.parse(description.trim(), { unwrap: true })

  return tags.reduce((props, tag) => {
    const { title, description } = parseTag(tag)

    if (description) {
      props[title] = unwrap(description)
    }

    return props
  }, {} as any)
}

export const getRequired = (props: Props) => {
  return Object.keys(props).filter(key => props[key].required)
}

export const parseTsType = (tsType: TsType) => {
  const { name, elements } = tsType
  const _prop: any = {}

  if (name === 'union') {
    _prop.type = 'string'
    _prop.enum = getUnionEnum(elements!)
  } else if (primitiveTypes.includes(name)) {
    _prop.type = name
  } else if (name === 'signature') {
    Object.assign(_prop, signature.parse(tsType))
  } else if (name === 'Array' && elements) {
    _prop.type = 'array'
    _prop.items = parseTsType(elements[0])
  } else if (name === 'ReactNode') {
    _prop.type = 'string'
    _prop.format = 'richtext'
  }

  return _prop
}

export const getProp = (prop: Prop) => {
  let _prop: any = {}
  const { description, tsType } = prop
  const { name } = tsType

  if (!description) {
    return null
  }

  _prop = parseTsType(tsType)

  if (Reflect.has(prop, 'defaultValue')) {
    _prop.default = unwrap(prop.defaultValue!.value)
  }

  Object.assign(_prop, parseComment(description!))

  return _prop
}

export const getProps = (props: Props) => {
  return Object.keys(props).reduce((_props, key) => {
    const prop = getProp(props[key])

    // prop should has "type"，"title"
    if (prop && prop.type && prop.title) {
      _props[key] = prop
    }
    return _props
  }, {} as Props)
}
