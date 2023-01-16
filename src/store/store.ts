import { movieApi } from './movies/movieApi'
import { configureStore } from '@reduxjs/toolkit'
// import { authApi } from './auth/Auth'
// import authSlice from './auth/authSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { authApi } from './auth/authenticationApi'
import authSlice from './auth/authSlice'
import movieSlice from './movies/movieSlice'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
    auth: authSlice,
    movie: movieSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(movieApi.middleware)
})

setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
