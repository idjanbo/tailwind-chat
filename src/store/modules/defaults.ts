export const defaultSettings = {
  lastSeen: false,
  darkMode: true,
  borderedTheme: false,
}

export const conversations: IConversations = [
  {
    id: 0,
    content: 'Hello, how can I help you today?',
    type: 'text',
    date: '2:00 pm',
    state: 'read',
    desc: '',
    sender: {
      role: 'Support',
      lastSeen: new Date(),
      avatar: '',
    },
  },
  {
    id: 1,
    content: 'https://www.w3schools.com/html/mov_bbb.mp4',
    type: 'video',
    desc: 'Video description',
    date: '2:00 pm',
    state: 'read',
    sender: {
      role: 'Support',
      lastSeen: new Date(),
      avatar: '',
    },
  },
]

export default {
  defaultSettings,
  conversations,
} as const
