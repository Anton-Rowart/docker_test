<script setup>
import { computed } from "vue";
import OfferCard from "./OfferCard.vue"
import { useOffersStore } from '@/stores/offers'

const offersStore = useOffersStore()
const offers = offersStore.offers

const { collection, excludeId } = defineProps({
    collection: {
        type: Object,
        required: true
    },
    excludeId: {
        type: Number,
        default: null
    }
});

const filteredOffers = computed(() => {
    return offers
        .filter(o => o.collection_id.includes(collection.id) && o.id !== excludeId)
        .sort((a, b) => a.name.localeCompare(b.name));
});




</script>

<template>

    <div>
        <div class="flex justify-between items-center">
            <div class="flex gap-3 items-center">
                <h2 class="text-[clamp(20px,3vw,26px)] font-[500] lg:font-[300]"> {{ collection.name }} </h2>
                <div v-if="collection.highlights" class="highlights">Подробнее</div>
            </div>
            <div v-if="filteredOffers.length > 5"
                class="bg-[#2a2b27] rounded-full hidden items-center text-[14px] border-[1px] border-[#404040] h-fit px-3 py-1 cursor-pointer lg:flex">
                Посмотреть все
            </div>
        </div>
        <div class="flex justify-center w-full mt-[10px] lg:mt-[20px]">
            <div
                class="grid grid-flow-col auto-cols-[180px] overflow-x-auto scrollbar-hide max-w-[1200px] w-full gap-[25px] lg:auto-cols-[220px]">
                <OfferCard v-for="offer in filteredOffers" :offer="offer" />
            </div>
        </div>
    </div>

</template>


<style scoped lang="scss">
.highlights {
    background: linear-gradient(86deg, rgba(255, 92, 79, 1) 0%, rgba(212, 70, 176, 1) 32%, rgba(176, 68, 206, 1) 75%, rgba(72, 100, 248, 1) 100%);
    padding: 0px 8px;
    font-size: 12px;
    height: fit-content;
    cursor: pointer;
}
</style>