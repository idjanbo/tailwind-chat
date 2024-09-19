import defaults from './defaults'
import { isJson } from '/@/utils/validate'

const getLocalStorage = (key: string) => {
  const value: any = localStorage.getItem(key)
  if (value && isJson(value)) {
    return JSON.parse(value)
  } else {
    return {}
  }
}
export const useSettingsStore = defineStore('settings', () => {
  // local storage
  const storage = getLocalStorage('settings')

  const settings: Ref<ISettings> = ref(storage.settings || defaults.defaultSettings)

  return {
    settings,
  }
})
