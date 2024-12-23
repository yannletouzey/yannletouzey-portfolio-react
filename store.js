import { create } from 'zustand'
import dataCarousel from './src/assets/data/dataCarousel'


export const useStore = create((set) => ({
  data: fetch('https://apidata-one.vercel.app/api/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .catch(error => {
    console.error('Error:', error);
  }),
  dataCarousel: dataCarousel,
  scrollY: 0,
  setScrollY: (scrollY) => set({ scrollY }),
  currentValue: 0,
  setCurrentValue: (currentValue) => set({ currentValue }),
}))