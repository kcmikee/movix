/* eslint-disable no-undef */
import { apiSlice } from '../../services/api'
import { userSignUp, userLoggedIn } from './authSlice'

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    finalize: builder.mutation({
      query: (data) => ({
        url: 'auth/finalize',
        method: 'POST',
        body: data
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled

          localStorage.setItem(
            'auth',
            JSON.stringify({
              accessToken: result.data.auth_user_token,
              user: result.data.user
            })
          )

          dispatch(
            userSignUp({
              accessToken: result.data.auth_user_token,
              user: result.data.user
            })
          )
        } catch (err) {
          // do nothing
        }
      }
    }),
    initialize: builder.mutation({
      query: (data) => ({
        url: 'auth/initialize',
        method: 'POST',
        body: data
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          // console.log({ result });
          // localStorage.setItem(
          //   "auth",
          //   JSON.stringify({
          //     accessToken: result.data.initialize_token,
          //   })
          // );
          dispatch(
            userLoggedIn({
              accessToken: result.data.data.initialize_token,
              user: undefined
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

export const { useInitializeMutation, useFinalizeMutation } = authApi
