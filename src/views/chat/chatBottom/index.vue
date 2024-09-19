<template>
  <div class="h-auto min-h-[84px] p-5 flex items-end">
    <div class="min-h-[44px] relative">
      <!--select attachments button-->
      <div
        v-show="toolTipVisible"
        class="pointer-events-none absolute z-20 rounded-md p-2 bg-indigo-500 dark:bg-indigo-400 -top-8 text-white w-max text-sm"
      >
        upload image
        <div class="bg-indigo-500 dark:bg-indigo-400 absolute left-[13px] top-[24px] w-[8px] h-[8px] origin-center rotate-45 z-10"></div>
      </div>
      <icon-button class="group w-7 h-7 md:mr-5 xs:mr-4" title="open select attachments modal" @click.capture.stop="handleUpload">
        <input ref="imageInput" accept="image/*" class="hidden" type="file" @change="handleChooseFile" />
        <paper-clip-icon class="w-[20px] h-[20px] text-gray-400 group-hover:text-indigo-300" />
      </icon-button>
    </div>
    <!--message textarea-->
    <div class="grow md:mr-5 xs:mr-4 self-end">
      <div class="relative">
        <input-text
          v-model="message.content"
          aria-label="saying.."
          auto-resize
          class="max-h-[80px] pr-[50px] resize-none scrollbar-hidden"
          cols="30"
          placeholder="saying.."
          rows="1"
          :value="message.content"
          @input="handleInput"
          @keyup.enter="sendMessage"
        />
      </div>
    </div>

    <div class="min-h-[44px] flex">
      <!--send message button-->
      <icon-button
        class="group w-7 h-7 bg-indigo-300 hover:bg-indigo-400 focus:bg-indigo-400 dark:focus:bg-indigo-300 dark:bg-indigo-400 dark:hover:bg-indigo-400 active:scale-110"
        title="send message"
      >
        <arrow-path-icon v-if="loading" class="w-[17px] h-[17px] text-white animate-spin" />
        <paper-airplane-icon v-else class="w-[17px] h-[17px] text-white" @click="sendMessage" />
      </icon-button>
    </div>
  </div>
  <toast :message="toastMessage" :show="toasting" />
</template>

<script setup lang="ts">
import { PaperAirplaneIcon, PaperClipIcon, ArrowPathIcon } from '@heroicons/vue/24/outline'
import { uuid } from '/@/utils/index'
import { uploadFile } from '/@/api'
import Compressor from 'compressorjs'

defineOptions({
  name: 'ChatBottom',
})

const loading = ref<boolean>(false)
const emit = defineEmits(['send-message'])
const imageInput = ref<any>(null)
const route = useRoute()
const toolTipVisible = ref<boolean>(true)

const message = reactive<any>({
  id: 0,
  content: '',
  type: 'text',
  date: +new Date(),
  state: 'read',
  desc: '',
  sender: {
    role: 'Customer',
    lastSeen: +new Date(),
    avatar: '',
  },
})

const toasting = ref<boolean>(false)
let toastMessage: any = {}
const timer = ref<any>(null)

const showToast = (title: string, messageType: string, message: string) => {
  toasting.value = false
  toasting.value = true
  toastMessage = reactive<any>({
    title,
    message,
    messageType,
  })
  clearTimeout(timer.value)
  timer.value = setTimeout(() => {
    toasting.value = false
  }, 4000)
}

const handleUpload = () => {
  if (loading.value) {
    showToast('INFO', 'error', 'uploading, please wait')
    return
  }
  toolTipVisible.value = false
  imageInput.value.click()
}

const sendMessage = () => {
  if (!message.content) return
  loading.value = true
  message.id = uuid()
  message.date = +new Date()
  emit('send-message', JSON.parse(JSON.stringify(message)))
  resetMessage()
  loading.value = false
}

const compressImage = (file: File): Promise<File> => {
  return new Promise<File>((resolve, reject) => {
    new Compressor(file, {
      quality: 0.6,
      success: (result) => {
        resolve(new File([result], file.name, { type: result.type }))
      },
      error: (error: Error) => reject(error),
    })
  })
}

const handleChooseFile = async () => {
  let imageFile = imageInput.value.files[0]
  if (!imageFile) return

  if (imageFile.size > 10 * 1024 * 1024) {
    showToast('出错了', 'error', '文件大小不可超过10M')
    imageInput.value.value = '' // clear content
    return
  } else if (imageFile.size > 3 * 1024 * 1024) {
    imageFile = await compressImage(imageFile).catch((error) => {
      console.log(error)
      showToast('出错了', 'error', '压缩图片出错了')
    })
  }

  const forms = new FormData()
  forms.append('file', imageFile)
  imageInput.value.value = '' // 清空内容
  loading.value = true

  const { data }: any = await uploadFile(route.params.fooId, forms)

  forms.delete('file')
  loading.value = false

  if (data.detail) showToast('ERROR', 'error', data.detail)
  else {
    const response = data.data
    message.id = uuid()
    message.date = +new Date()
    message.content = response?.file_url
    message.desc = 'image file'
    message.type = 'image'
    emit('send-message', JSON.parse(JSON.stringify(message)))
    resetMessage()
  }
}

const resetMessage = () => {
  message.content = ''
  message.type = 'text'
  message.desc = ''
}

const handleInput = () => {
  // todo handle input
}
</script>
