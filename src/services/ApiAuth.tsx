/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { FetchArgs, BaseQueryApi } from "@reduxjs/toolkit/dist/query";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { toast } from 'react-toastify'
import { AuthBaseUrl } from '../../env'
import { userLoggedOut } from '../store/auth/authSlice'
import parseError from '../utils/ParseError'

const baseQuery = fetchBaseQuery({
  baseUrl: AuthBaseUrl,
  prepareHeaders: async (headers, { getState }) => {
    const token = (getState() as any)?.auth?.accessToken
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    return headers
  }
})

export const authenticationApi = createApi({
  reducerPath: 'authapi',
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.status === 401) {
      api.dispatch(userLoggedOut())
      localStorage.clear()
    }
    if (result?.error) {
      const { errorMessage, id } = parseError(result)
      console.log({ errorMessage, id })
      toast.error(errorMessage, {
        toastId: id
      })
    }
    return result
  },
  tagTypes: ['auth'],
  endpoints: (builder) => ({})
})
