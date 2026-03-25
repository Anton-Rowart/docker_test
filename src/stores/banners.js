import { defineStore } from "pinia";

export const useBannersStore = defineStore('banners', {
  state: () => ({
    banners: [
      {
        img: '/banner.png',
      },
      {
        img: '/banner2.png',
      },
      {
        img: '/banner3.png',
      },
    ],
  }),
  actions: {
    async fetchBanners() {
      const { data, error } = await supabase
        .from('banners')
        .select('*')

      if (error) {
        console.error('Ошибка загрузки баннеров:', error);
        return;
      }

      this.banners = data;
    }
  }
});
