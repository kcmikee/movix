import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  feautured: [] || undefined,
  newArrival: [] || undefined
}

const authSlice = createSlice({
  name: 'authslice',
  initialState,
  reducers: {
    getNewArrival: (state, action) => {
      return { ...state, newArrival: action.payload.newArrival }
    },
    getFeatured: (state, action) => {
      return {
        ...state,
        feautured: action.payload.feautured
      }
    }
  }
})

export const { getFeatured, getNewArrival } = authSlice.actions
export default authSlice.reducer
