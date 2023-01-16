/* eslint-disable no-undef */
import { authenticationApi } from '../../services/ApiAuth'
import { userSignUp, userLoggedIn } from './authSlice'

export const authApi = authenticationApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: '/api/v1/Users',
        method: 'POST',
        body: data
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          localStorage.setItem(
            'auth',
            JSON.stringify({
              user: result.data.userName
            })
          )
          dispatch(
            userSignUp({
              user: result.data.userName
            })
          )
        } catch (err) {
          // do nothing
        }
      }
    }),
    login: builder.mutation({
      query: (data) => ({
        url: '/api/v1/Users',
        method: 'POST',
        body: data
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          // console.log({ result })
          localStorage.setItem(
            'auth',
            JSON.stringify({
              user: result.data.userName
            })
          )
          dispatch(
            userLoggedIn({
              user: result.data.userName
            })
          )
        } catch (err) {
          // do nothing
          console.log({ err }, 'yyy')
        }
      }
    })
  })
})

export const { useSignupMutation, useLoginMutation } = authApi
