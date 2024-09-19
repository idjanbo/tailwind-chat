import defaults from './defaults'
import { isJson } from '/@/utils/validate'

const getLocalStorage = (key: any) => {
  const value: any = localStorage.getItem(key)
  if (value && isJson(value)) {
    return JSON.parse(value)
  } else {
    return []
  }
}

const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const useConversationsStore = defineStore('conversations', () => {
  const defaultConversations: Ref<IConversations> = ref(defaults.conversations)
  let conversations: any = {}

  const getConversationById = (id: number | string) => {
    conversations = getLocalStorage(id)
    return conversations
  }

  /**
   * @description: 缓存消息
   * @param {IMessage} message 一定要是IMessage/Object类型
   * @param {any} fooId
   */

  const cacheMessage = (message: IMessage, fooId: any) => {
    conversations = getLocalStorage(fooId) || []
    // console.log('添加消息前数量', conversations.length)

    // if exist return false
    if (conversations && conversations.length > 0) {
      const found = conversations.find((item: string) => {
        const msg = JSON.parse(item)
        if (msg.id === message.id && msg.cache) {
          // console.log(`存在相同消息 ${msg.id} 已忽略`)
          return true
        }
      })
      if (found) return false
    }
    conversations.push(JSON.stringify(message))

    // console.log('最终数量', conversations.length)
    if (conversations) setLocalStorage(fooId, conversations)
    return message.id
  }

  return {
    conversations,
    getConversationById,
    defaultConversations,
    cacheMessage,
  }
})
