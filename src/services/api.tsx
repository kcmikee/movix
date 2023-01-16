/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { FetchArgs, BaseQueryApi } from "@reduxjs/toolkit/dist/query";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { toast } from 'react-toastify'
import { BaseUrl } from '../../env'
import { userLoggedOut } from '../store/auth/authSlice'
import parseError from '../utils/ParseError'

const baseQuery = fetchBaseQuery({
  baseUrl: BaseUrl,
  prepareHeaders: async (headers, { getState }) => {
    const token = (getState() as any)?.auth?.accessToken
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    return headers
  }
})

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.status === 401) {
      api.dispatch(userLoggedOut())
      localStorage.clear()
    }
    if (result?.error) {
      const { errorMessage, id }: any = parseError(result)
      toast.error(errorMessage, {
        toastId: id
      })
    }
    return result
  },
  tagTypes: [],
  endpoints: (builder) => ({})
})
