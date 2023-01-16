/* eslint-disable no-undef */
import { APIkey } from '../../../env'
import { apiSlice } from '../../services/api'
import { getFeatured, getNewArrival, getPeople } from './movieSlice'

export const movieApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNewArrival: builder.query({
      query: () =>
        `/discover/tv?api_key=${APIkey}&with_networks=213&with_genres=10759`,
      // async onCacheEntryAdded(
      //   arg,
      //   { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      // ) {
      //   // console.log({
      //   //   updateCachedData,
      //   //   cacheDataLoaded,
      //   //   cacheEntryRemoved,
      //   //   arg
      //   // })
      // },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
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
      // async onCacheEntryAdded(
      //   arg,
      //   { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      // ) {
      //   // console.log({
      //   //   updateCachedData,
      //   //   cacheDataLoaded,
      //   //   cacheEntryRemoved,
      //   //   arg
      //   // })
      // },

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          // console.log({ result }, 'jfjfj')
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
    }),
    getPeople: builder.query({
      query: () => `/person/popular?api_key=${APIkey}`,
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        // console.log({
        //   updateCachedData,
        //   cacheDataLoaded,
        //   cacheEntryRemoved,
        //   arg
        // })
      },

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled

          dispatch(
            getPeople({
              people: result.data.results
            })
          )
        } catch (err) {
          // do nothing
          console.log({ err }, 'yyy')
        }
      }
    })
    // getVideos: builder.query({
    //   query: () =>
    //     `/movie/${mediaId}/videos?api_key=${APIkey}`
    // })
  })
})

export const { useFeauturedQuery, useGetNewArrivalQuery, useGetPeopleQuery } =
  movieApi
