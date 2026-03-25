import { defineStore } from 'pinia';

export const useUserCourseStore = defineStore('userCourse', {
  state: () => ({
    userCourse: [
      {
        isComplete: false,
        status: 'processing',
        notes: {

        },
        course: {
          title: 'Фол 2',
          img: '/folcover.jpg',
          titleImg: '/foltitle.png',
          slug: 'fol-2'
        },
      },
      {
        isComplete: false,
        status: 'new',
        notes: {

        },
        course: {
          title: 'Теория зеркал',
          img: '/tzcover.jpg',
          titleImg: '/tztitle.png',
          slug: 'teoria-zerkal'
        },
      },
      {
        isComplete: true,
        status: 'blocked',
        notes: {
          body: 'В частности, базовый вектор развития предопределяет высокую востребованность кластеризации усилий. Идейные соображения высшего порядка, а также синтетическое тестирование является качественно новой ступенью укрепления моральных ценностей.',
        },
        course: {
          title: 'Шаманские законы',
          img: '/shamancover.jpg',
          titleImg: '/shamantitle.png',
          slug: 'shamanskie-zakony'
        },
      },
      {
        isComplete: true,
        status: 'attention',
        notes: {

        },
        course: {
          title: 'Высшие касты',
          img: '/vccover.png',
          titleImg: '/vctitle.png',
          slug: 'vysshie-kasty'
        },
      },

    ],
  }),
  actions: {
    getCourseBySlug(slug) {
      return this.userCourse.find(userCourse => userCourse.course.slug === slug) || null;
    }
  }
});