import { IDomEditor, IEditorConfig, IToolbarConfig, Toolbar } from '@wangeditor/editor'
import { Descendant } from 'slate'

/**
 * 编辑器内容缓存
 */
export interface EditableCache {
  mval: Descendant[]
  json: string
  html: string
}

export interface EditorFormField {
  blurField?: () => void
  changeField?: () => void
}

/**
 * 编辑器配置项
 */
export interface EditableOption {
  /** 编辑器模式 */
  mode?: 'default' | 'simple'
  /** 编辑器初始化的默认内容（json array 或 json string），优先级高于 defaultHtml */
  defaultContent?: Descendant[] | string | null
  /** 编辑器初始化的默认内容（html string），优先级低于 defaultContent */
  defaultHtml?: string | null
  /** 编辑器配置 */
  config?: Partial<IEditorConfig>
  /** v-model 数据同步的防抖时长，默认值：3650，单位：毫秒 */
  delay?: number
  /**
   * 编辑器创建时默认内容的优先级排序，默认值：true。
   * true：v-model > v-model:json > v-model:html > defaultContent > defaultHtml。
   * false: defaultContent > defaultHtml > v-model > v-model:json > v-model:html。
   */
  extendCache?: boolean
}

/**
 * 菜单栏的配置项
 */
export interface ToolbarOption {
  mode?: 'default' | 'simple'
  config?: Partial<IToolbarConfig>
}

export type EditableReload = () => IDomEditor | undefined

export interface EditableHandle {
  instance?: IDomEditor
  reload?: () => void
  /** 清除编辑器内容 */
  clearContent?: () => void
}

export type ToolbarReload = (editable: IDomEditor) => Toolbar | undefined

export interface ToolbarHandle {
  instance?: Toolbar
  reload?: () => void
}

type CssRule = Record<string, string | number>
export type CssRuleMap = Record<string, CssRule>
export type CssRuleList = string | (string | CssRuleMap)[] | CssRuleMap

export const enum DELAY {
  RELOAD = 365,
  UPDATE = 1000,
}
