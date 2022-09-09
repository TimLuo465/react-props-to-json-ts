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
   * The component should has a title props, if not, will get a empty schema
   */
  title?: string
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
   * Other settings in desciption
   */
  [key: string]: any
}

export type CommentDescType = {
  /**
   * Component title
   */
  title: string
  /**
   * Only generate component props object include in the props
   */
  props?: string[]
  /**
   * Exclude the props when generate component props object
   */
  exclude?: string[]
}
