import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "./useFavoritesStore";

export const reduxGlobalStore = configureStore({
  reducer: {
    favorites: favoritesSlice.reducer
  },
})

export type RootState = ReturnType<typeof reduxGlobalStore.getState>
export type AppDispatch = typeof reduxGlobalStore.dispatch