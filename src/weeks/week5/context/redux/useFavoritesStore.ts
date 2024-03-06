import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FavoritesState {
  value: string[];
}

const initialState: FavoritesState = {
  value: [],
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<string>) => {
      if (!state.value.includes(action.payload)) {
        state.value = [...state.value, action.payload];
      }
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((city) => city !== action.payload);
    }
  }
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
