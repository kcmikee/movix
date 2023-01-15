/* eslint-disable no-undef */
import { APIkey } from '../../../env'
import { apiSlice } from '../../services/api'
import { getFeatured, getNewArrival } from './movieSlice'

export const movieApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNewArrival: builder.query({
      query: () =>
        `/discover/tv?api_key=${APIkey}&with_networks=213&with_genres=10759`,
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        console.log({
          updateCachedData,
          cacheDataLoaded,
          cacheEntryRemoved,
          arg
        })
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled

          //   localStorage.setItem(
          //     'auth',
          //     JSON.stringify({
          //       accessToken: result.data.auth_user_token,
          //       user: result.data.user
          //     })
          //   )
          dispatch(
            getNewArrival({
              newArrival: result.data.results
            })
          )
        } catch (err) {
          // do nothing
        }
      }
    }),
    feautured: builder.query({
      query: () => `/tv/top_rated?api_key=${APIkey}&with_networks=213`,
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        console.log({
          updateCachedData,
          cacheDataLoaded,
          cacheEntryRemoved,
          arg
        })
      },

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          console.log({ result }, 'jfjfj')
          dispatch(
            getFeatured({
              feautured: result.data.results
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

export const { useFeauturedQuery, useGetNewArrivalQuery } = movieApi
