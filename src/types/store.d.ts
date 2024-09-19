declare interface IContact {
  role: string
  lastSeen: string | Date
  avatar: string
}
declare interface IMessage {
  id: number
  type?: string
  content?: string | IRecording
  date: string
  desc: string
  sender: IContact
  state: string
}

declare type IConversations = IMessage[]

declare interface ISettings {
  lastSeen: boolean
  darkMode: boolean
  borderedTheme: boolean
}
