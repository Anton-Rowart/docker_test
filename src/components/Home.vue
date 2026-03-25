<script setup>
import Banner from "./Banner.vue";
import HighlightsCard from "./highlights/HighlightsCard.vue";
import CollectionOffers from "./offer/CollectionOffers.vue";
import { useCollectionsStore } from '@/stores/collections'
import { useHighlightsStore } from "@/stores/highlights";


const highlightsStore = useHighlightsStore()
const highlights = highlightsStore.highlights


const collectionsStore = useCollectionsStore()
const collections = collectionsStore.collections



</script>

<template>
    <div class="flex flex-col min-h-screen">

        <div class="flex flex-grow justify-center w-full mt-[50px]">
            <div class="w-full max-w-[1300px] flex justify-center items-center">
                <Banner />
            </div>
        </div>

        <div class="flex flex-grow justify-center w-full mt-[100px] pl-[10px] lg:pl-[0px]">
            <div class="w-full max-w-[1200px] flex flex-col gap-[60px]">
                <CollectionOffers v-for="collection in collections" :collection="collection" />
            </div>
        </div>

        <div class="flex flex-grow justify-center w-full mt-[100px] pl-[10px] lg:pl-[0px]">
            <div class="w-full max-w-[1200px] flex gap-[20px]">
                <HighlightsCard v-for="highlight in highlights" :highlight="highlight" />
            </div>
        </div>


    </div>

</template>