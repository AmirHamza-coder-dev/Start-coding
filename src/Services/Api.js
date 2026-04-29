import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (build) => ({
  
    getProducts: build.query({
      query: ({ category, limit, skip }) =>
        `/products${category ? `/category/${category}` : ""}?limit=${limit}&skip=${skip}`,
    }),

    getCategoryList: build.query({
      query: () => "/products/category-list",
    }),

    
    getProductDetails: build.query({
      query: (id) => `/products/${id}`,
    }),

    
    searchProducts: build.query({
      query: (term) => `/products/search?q=${term}`,
    }),

    
    login: build.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }), 
});

export const {
  useGetProductsQuery,
  useGetCategoryListQuery,
  useGetProductDetailsQuery,
  useSearchProductsQuery, 
  useLoginMutation,
} = apiService;