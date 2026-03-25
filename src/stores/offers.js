import { defineStore } from 'pinia';

export const useOffersStore = defineStore('offers', {
  state: () => ({
    offers: [
      {
        name: 'Фол 2',
        img: '/fol.png',
        title: '/foltitle.png',
        slug: 'fol-2',
        cover: '/folcover.jpg',
        rating: 4.4,
        collection_id: ['1', '2'],
        id: 1,
        label: '',
      },
      {
        name: 'Высшие касты',
        img: '/vc.png',
        title: '/vctitle.png',
        slug: 'vysshie-kasty',
        cover: '/vccover.png',
        rating: 3.0,
        collection_id: '1',
        id: 2,
        label: '',
      },
      {
        name: 'Шаманские законы',
        img: '/shaman.png',
        title: '/shamantitle.png',
        slug: 'shamanskie-zakony',
        cover: '/shamancover.jpg',
        rating: 3.4,
        collection_id: ['1', '2'],
        id: 3,
        label: '',
      },
      {
        name: 'Теория зеркал',
        img: '/tz.jpg',
        title: '/tztitle.png',
        slug: 'teoriya-zerkal',
        cover: '/tzcover.jpg',
        rating: 1.3,
        collection_id: '1',
        id: 4,
        label: '',
      },
      {
        name: 'Диагностика порчи',
        img: '/porchy.png',
        title: '',
        slug: 'diagnostika-porchi',
        cover: '/porchycover.jpg',
        rating: 5.0,
        collection_id: '1',
        id: 5,
        label: 'new',
      },
      {
        name: 'Тест',
        img: '/porchy.png',
        title: '',
        slug: 'test',
        cover: '/porchycover.jpg',
        rating: 4.0,
        collection_id: '1',
        id: 6,
        label: '',
      },
    ],
  }),
  actions: {
    getOffersBySlug(slug) {
      return this.offers.find(offer => offer.slug === slug) || null;
    }
  }
});
