<script setup>

import { inject } from 'vue'


// props
const props = defineProps({
    highlight: {
        type: Object,
        required: true,
    },
})


// open modal highlights
const showHighlights = inject('showHighlights');
const selectedHighlight = inject('selectedHighlight');


function openHighlights() {
    showHighlights.value = true;
    selectedHighlight.value = props.highlight;
}


</script>

<template>

    <section>
        <div @click='openHighlights' class="flex flex-col gap-[10px] items-center w-fit cursor-pointer">
            <div
                class="relative flex justify-center items-center w-[100px] h-[100px] p-[10px] group hover:scale-105 transition-all duration-500">
                <img class="absolute ambilight top-0 left-0 w-[100px] h-[100px] group-hover:blur-[7px] transition-all duration-500"
                    src="/border.png" alt="">
                <img class="absolute top-0 left-0 w-[100px] h-[100px]" src="/border.png" alt="">
                <div
                    class="absolute flex justify-center items-center w-[94px] h-[94px] rounded-full p-[5px] bg-[#121212]">
                    <img class="w-full h-full rounded-full" src="/stories1.png" alt="">
                </div>
            </div>
            <p сlass="mt-[5px] text-[13px]">{{ highlight.name }}</p>
        </div>
    </section>

</template>