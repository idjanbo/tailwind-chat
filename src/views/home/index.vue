<template>
  <keep-alive>
    <div class="dark:bg-gray-900 h-full flex xs:flex-col overflow-hidden sm:w-full max-w-[600px] mx-auto shadow-xl">
      <chat :information="information" :messages="messages" @send-message="sendMessage" />
      <div class="fixed hidden"><audio ref="audioRef" autoplay="true" :src="audioUrl"></audio></div>
    </div>
  </keep-alive>
</template>

<script setup lang="ts">
import { useConversationsStore } from '/@/store/modules/conversations'
import audioUrl from '/@/assets/coin-flip-shimmer.mp3'
import router from '/@/router'
import { checkDeposit } from '/@/api'
import { formatSeconds } from '/@/utils/index'

defineOptions({
  name: 'Home',
})

const store = useConversationsStore()
const route = useRoute()
const audioRef = ref<HTMLAudioElement>()

const fooId = ref<string | any>(route.params.fooId)

const url = `${import.meta.env.VITE_WS_URL}/ws/cashier/${fooId.value}`

let socket: any = null
const timer = ref<any>(null)
const checker = ref<any>(null)
const messages = ref<any>([])
const information = ref<string>('connecting..')

onMounted(() => {
  const conversations = store.getConversationById(fooId.value)
  // console.log('cached conversations num', conversations.length)

  if (conversations && conversations.length > 0) {
    conversations.forEach((item: any) => {
      messages.value.push(JSON.parse(item))
    })
    audioRef.value?.play() //play
  }
  WsMessage()
})

const WsMessage = () => {
  socket = new WebSocket(url)
  socket.onopen = () => {
    systemMessage('🔗finish connecting to server, please read more')
    //检查订单
    clearInterval(checker.value)
    checker.value = setInterval(async () => await check(), 3500)
  }
  socket.onmessage = (event: any) => {
    // console.log(event.data)
    const data = JSON.parse(event.data)
    const ok = store.cacheMessage(data, fooId.value)
    if (!ok) return
    messages.value.push(data)
    audioRef.value?.play() //play
  }

  socket.onerror = (error: any) => {
    console.log(error)
    messages.value = store.defaultConversations
  }

  socket.onclose = (event: any) => {
    switch (event.code) {
      case 1000:
        systemMessage('not allowed request, please close this page')
        break
      case 1001:
      case 1003:
        systemMessage('network error, please refresh and try again')
        break
      case 1002:
        systemMessage('server error, please refresh and try again')
        clearTimeout(timer.value)
        timer.value = setTimeout(() => {
          router.push(`/validate/${fooId.value}`)
        }, 3000)
        break
      default:
        systemMessage('nework error, please refresh and try again')
        break
    }
  }
}

const sendMessage = (message: any) => {
  messages.value.push(message)
  store.cacheMessage(message, fooId.value)
  if (socket && message.type === 'text') socket.send(JSON.stringify(message))
}

const systemMessage = (message: any) => {
  const msg = reactive<any>({
    content: message,
    type: 'text',
    date: +new Date(),
    state: 'read',
    desc: '',
    sender: {
      role: 'Support',
      lastSeen: +new Date(),
      avatar: '',
      name: '',
    },
    cache: true, //是否缓存
  })
  messages.value.push(msg)
}

const check = async () => {
  const { data } = await checkDeposit({ deposit_id: fooId.value })
  if (data.detail) {
    systemMessage(data.detail)
  } else {
    const response = data.data
    //format seconds to mm:ss 个位数前面补0
    information.value = `倒计时 ${formatSeconds(response.countdown)}`
    if (response.status > 0) {
      reset()
      systemMessage('恭喜订单已完成, 欢迎下次使用')
      return
    }
    if (response.status !== 0 || response.countdown <= 0) {
      router.push('/403')
    }
  }
}

const reset = () => {
  clearTimeout(timer.value)
  clearInterval(checker.value)
  socket.close()
}

onBeforeRouteLeave(() => {
  reset()
})
</script>
