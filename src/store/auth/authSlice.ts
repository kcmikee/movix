import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accessToken: undefined,
  user: undefined
}

const authSlice = createSlice({
  name: 'authslice',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      return { ...state, accessToken: action.payload.accessToken }
    },
    userSignUp: (state, action) => {
      state.accessToken = action.payload.initialize_token
      state.user = action.payload.user
      return {
        ...state,
        accessToken: action.payload.accessToken,
        user: action.payload.user
      }
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined
      state.user = undefined
    }
  }
})

export const { userLoggedIn, userLoggedOut, userSignUp } = authSlice.actions
export default authSlice.reducer
