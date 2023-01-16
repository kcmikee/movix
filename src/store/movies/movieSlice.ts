import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  feautured: [] || undefined,
  newArrival: [] || undefined,
  people: [] || undefined
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
    },
    getPeople: (state, action) => {
      return { ...state, people: action.payload.people }
    }
  }
})

export const { getFeatured, getNewArrival, getPeople } = authSlice.actions
export default authSlice.reducer
