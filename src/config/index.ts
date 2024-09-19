import { netConfig } from '/@/config/net.config'

const config: { [key: string]: any } = {
  ...netConfig,
}

export default config

export const { contentType, debounce, messageName, statusName, successCode, timeout } = config
