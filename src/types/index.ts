export type SignatureProp = {
  key: string
  value: TsType & {
    required: boolean
  }
}

export type Signature = {
  properties: SignatureProp[]
  type: string
}

export type TsType = {
  name: string
  raw?: string
  elements?: TsType[]
  signature?: Signature
  value?: string
  type?: string
}

export type Prop = {
  required: boolean
  title: string
  tsType: TsType
  description?: string
  defaultValue?: {
    value: string
    computed: boolean
  }
}

export type Props = {
  [key: string]: Prop
}

export type ComponentInfo = {
  description: string
  displayName: string
  methods: any[]
  props: Props
}

export type Schema = {
  /**
   * The component displayName
   */
  displayName: string
  /**
   * The component props
   */
  properties: Props
  required: string[]
  cols?: number
  /**
   * If set true, will skip to generate schema
   */
  ignore?: boolean
  /**
   * Other settings in desciption
   */
  [key: string]: any
}
