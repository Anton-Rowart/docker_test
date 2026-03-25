import { defineStore } from "pinia";

export const useHighlightsStore = defineStore('highlights', {

    state: () => ({

        highlights: [
            {
                name: 'С чего начать',
                index: 1,
                highlightsItems: [{
                    id: 1,
                    index: 1,
                    videoId: 'bc543079-73f5-4dd7-aebc-e7066142930a'
                },
                {
                    id: 2,
                    index: 2,
                    videoId: 'c6c36c06-0213-42df-bef9-9e196ead9384'
                }]

            },
            {
                name: 'Актуальное',
                index: 2,
                highlightsItems: [{
                    id: 1,
                    index: 1,
                    videoId: 'c6c36c06-0213-42df-bef9-9e196ead9384'
                },
                {
                    id: 2,
                    index: 2,
                    videoId: 'bc543079-73f5-4dd7-aebc-e7066142930a'
                }]

            }
        ]

    })

});