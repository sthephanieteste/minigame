import { supabase } from './supabase'
import { Achievement } from '@/types'

export const achievementsService = {
  async getAllAchievements(): Promise<Achievement[]> {
    try {
      const { data, error } = await supabase
        .from('achievements')
        .select('*')
        .order('rarity', { ascending: false })
      if (error) {
        console.error('Error fetching achievements:', error)
        return []
      }
      return data || []
    } catch (error) {
      console.error('Unexpected error in getAllAchievements:', error)
      return []
    }
  },

  async getUnlockedAchievements(): Promise<Achievement[]> {
    try {
      const { data, error } = await supabase
        .from('achievements')
        .select('*')
        .eq('isUnlocked', true)
        .order('rarity', { ascending: false })
      if (error) {
        console.error('Error fetching unlocked achievements:', error)
        return []
      }
      return data || []
    } catch (error) {
      console.error('Unexpected error in getUnlockedAchievements:', error)
      return []
    }
  },
}
