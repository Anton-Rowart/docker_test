import { defineStore } from 'pinia'
import { supabase } from '@/data'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    loading: false,
    error: null,
  }),

  actions: {
    async register(email, password) {
      this.loading = true
      const { data, error } = await supabase.auth.signUp({ email, password })
      this.loading = false

      if (error) throw error
      this.user = data.user
    },

    async login(email, password) {
      this.loading = true
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      this.loading = false

      if (error) throw error
      this.user = data.user
    },

    async fetchUser() {
      const { data, error } = await supabase.auth.getUser()
      if (!error) this.user = data.user
    },

    async logout() {
      await supabase.auth.signOut()
      this.user = null
    }
  }
})
