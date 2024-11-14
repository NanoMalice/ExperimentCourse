import type { PluginTarget, UIPlugin, UIPluginOptions } from '@ExperimentCourse11/core'
import type {
  PublicProviderOptions,
  TokenStorage,
} from '@ExperimentCourse11/companion-client'

interface BoxOptions extends UIPluginOptions, PublicProviderOptions {
  target?: PluginTarget
  title?: string
  storage?: TokenStorage
}

declare class Box extends UIPlugin<BoxOptions> {}

export default Box
