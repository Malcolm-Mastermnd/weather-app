import { create } from 'zustand'

interface HometownState {
  hometown?: string
  setHometown: (newHometown?: string) => void
}

export const useHometownStore = create<HometownState>()((set) => ({
  hometown: undefined,
  setHometown: (newHometown) => set({ hometown: newHometown }),
}))