import { create } from 'zustand'
import data from './src/assets/data/dataCarousel'

export const useStore = create((set) => ({
  data: data,
  scrollY: 0,
  setScrollY: (scrollY) => set({ scrollY }),
  currentValue: 0,
  setCurrentValue: (currentValue) => set({ currentValue }),
}))