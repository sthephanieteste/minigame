export interface Location {
  id: string
  name: string
  region: string
  description: string
  x: number
  y: number
  icon: string
  type: 'start' | 'chapter' | 'special' | 'future'
  isUnlocked: boolean
  chapterId?: string
  imageUrl?: string
  glowIntensity?: number
}

export interface Chapter {
  id: string
  number: number
  title: string
  description: string
  locations: Location[]
  memories: Memory[]
  isUnlocked: boolean
  unlockedAt?: string
}

export interface Memory {
  id: string
  chapterId: string
  type: 'photo' | 'video' | 'text' | 'message' | 'audio'
  content: string
  caption?: string
  date?: string
  order: number
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlockedAt?: string
  isUnlocked: boolean
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

export interface StoryStats {
  coupleLevel: number
  totalXP: number
  maxXP: number
  daysTogethter: number
  chaptersUnlocked: number
  totalChapters: number
  status: 'em_aventura' | 'descansando' | 'planejando' | 'celebrando'
}

export interface AppSettings {
  musicEnabled: boolean
  soundEffectsEnabled: boolean
  animationsEnabled: boolean
  theme: 'dark' | 'light'
  language: 'pt' | 'en'
}

export type MenuItemType = 'map' | 'album' | 'messages' | 'achievements' | 'settings'

export interface MenuItem {
  id: MenuItemType
  label: string
  icon: string
  path: string
}

export interface CoupleInfo {
  partnerOneName: string
  partnerTwoName: string
  firstMeetDate: string
  avatarOneUrl: string
  avatarTwoUrl: string
  relationshipStatus: string
}
