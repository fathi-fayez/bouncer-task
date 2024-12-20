import { defineStore } from 'pinia'
import gql from 'graphql-tag'
import { useApolloClient } from '@vue/apollo-composable'

interface Product {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  category: {
    name: string
  }
}

interface Category {
  id: number
  name: string
  image: string
}

interface ProductsState {
  products: Product[]
  categories: Category[]
  isLoading: boolean
  error: string | null
  searchQuery: string
}

export const useProductsStore = defineStore('products', {
  state: (): ProductsState => ({
    products: [],
    categories: [],
    isLoading: false,
    error: null,
    searchQuery: '',
  }),
  actions: {
    async fetchProducts() {
      const GET_PRODUCTS = gql`
        query {
          products {
            id
            title
            price
            description
            images
            category {
              name
            }
          }
        }
      `
      this.isLoading = true
      this.error = null
      try {
        const { client } = useApolloClient() // Get Apollo Client instance
        const { data } = await client.query({ query: GET_PRODUCTS }) // Use client.query
        this.products = data.products
      } catch (err: any) {
        this.error = err.message
      } finally {
        this.isLoading = false
      }
    },

    async fetchCategories() {
      const GET_CATEGORIES = gql`
        query {
          categories {
            id
            name
            image
          }
        }
      `
      this.isLoading = true
      this.error = null
      try {
        const { client } = useApolloClient() // Get Apollo Client instance
        const { data } = await client.query({ query: GET_CATEGORIES }) // Use client.query
        this.categories = data.categories
      } catch (err: any) {
        this.error = err.message
      } finally {
        this.isLoading = false
      }
    },
    updateSearchQuery(query: string) {
      this.searchQuery = query
    },
  },
})
