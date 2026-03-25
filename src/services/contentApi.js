import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

export const contentApi = createApi({
    reducerPath: "contentApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (builder) => ({
        getPage: builder.query({
            query: (page) => `data/page${page}.json`,

            transformResponse: (res) => {
                return {
                    items: res?.page?.["content-items"]?.content || [],
                    title: res?.page?.title || ""
                };
            },

            serializeQueryArgs: ({ endpointName }) => endpointName,

            merge: (currentCache, newData) => {
                if (newData.items) {
                    currentCache.items = [...(currentCache.items || []), ...newData.items];
                }
                if (newData.title && !currentCache.title) {
                    currentCache.title = newData.title;
                }
            },

            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
        }),
    }),
});

export const { useGetPageQuery } = contentApi;