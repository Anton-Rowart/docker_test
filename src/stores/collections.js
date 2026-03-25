import { defineStore } from 'pinia';

export const useCollectionsStore = defineStore('collections', {
  state: () => ({
    collections: [
      {
        name: 'Это тестовая коллекция',
        id: '1',
        highlights: '1234',
      },
      {
        name: 'Это тоже',
        id: '2',
        highlights: '',
      },
    ],
  }),
    actions: {
    async fetchCollections() {
      const { data, error } = await supabase
        .from('collections')
        .select('*, offers(*)');

      if (error) {
        console.error('Ошибка загрузки коллекций:', error);
        return;
      }

      this.collections = data;
    }
  }
});
