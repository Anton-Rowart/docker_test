<script setup>

import { inject, ref, watch, computed, onUnmounted } from 'vue'
import { KinescopePlayer } from '@kinescope/vue-kinescope-player'


const props = defineProps({
    highlight: {
        type: Object,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
})


const highlight = computed(() => props.highlight)
const slides = computed(() => props.highlight?.highlightsItems ?? [])
const index = props.index
const currentIndex = ref(index)

const videoId = computed(() => {
    const item = slides.value?.find(h => h.index === currentIndex.value)
    return item?.videoId ?? null
})



// player
const currentPercent = ref(0)
const kinescope = ref(null)


// create player
const handleReady = () => {

    const player = kinescope.value?.player
    if (!player) return


    // reset player
    player.seekTo(0)


    // get current percent
    player.on('timeupdate', ({ data }) => {
        currentPercent.value = data.percent
    })
}

onUnmounted(() => {
    currentPercent.value = 0
})




// auto next slide
watch(currentPercent, (value) => {
    if (value >= 99) {
        nextSlide()
    }
})

// btn next slide
function nextSlide() {
    currentPercent.value = 0

    const next = slides.value.find(s => s.index === currentIndex.value + 1)

    if (next) {
        currentIndex.value = next.index
    }
    else {
        closeHighlights()
    }

}

// btn prev slide
function prevSlide() {
    currentPercent.value = 0

    if (currentIndex.value > 0) {
        currentIndex.value--
    }
}



// close modal highlights
const showHighlights = inject('showHighlights')
function closeHighlights() {
    if (showHighlights) {
        const player = kinescope.value?.player
        player.seekTo(0)
        player.stop()

        showHighlights.value = false
    }
}

</script>




<template>
    <section>

        <div class="flex gap-[10px] items-center">

            <div class="w-[50px] h-[50px]">
                <div @click="prevSlide" v-if="currentIndex > 1" id="leftBtn"
                    class="w-full h-full rounded-full bg-red-400 cursor-pointer"></div>
            </div>

            <div class="relative w-[380px] [aspect-ratio:9/16] bg-[#000] rounded-[20px]">
                <div class="relative w-full h-full">
                    <KinescopePlayer v-if="videoId" id="videoPlayer" :video-id="videoId"
                        class="absolute top-0 left-0 w-full h-full" auto-play ref="kinescope" @ready="handleReady" />
                </div>

                <div class="w-full absolute top-0 px-4 mt-3">
                    <div class="flex w-full gap-[5px]">
                        <span class="w-full h-[4px] bg-[#fffefa70] rounded-full overflow-hidden" v-for="slide in slides"
                            :key="slide.index">
                            <span v-if="slide.index === currentIndex"
                                :class="`w-[${currentPercent}%] block h-full bg-[#fffefa] rounded-full`"></span>
                            <span v-if="slide.index < currentIndex"
                                :class="`w-full block h-full bg-[#fffefa] rounded-full`"></span>
                        </span>
                    </div>

                    <div v-if="highlight" class="flex items-center gap-[10px] mt-[6px]">
                        <img class="w-[33px] h-auto rounded-full border-[1px] border-[#404040]" src="/stories1.png"
                            alt="">
                        <p class="text-[15px] text-[#fffefa]">{{ highlight.name }}</p>
                    </div>

                    <div>
                        <!-- debugging percent -->
                        <p>{{ currentPercent }}</p>
                    </div>

                </div>

                <div id="loader"></div>
            </div>

            <div class="w-[50px] h-[50px]">
                <div @click="nextSlide" v-if="slides?.find(s => s.index === currentIndex + 1)" id="rightBtn"
                    class="w-full h-full rounded-full bg-red-400 cursor-pointer"></div>
            </div>
        </div>

        <div @click="closeHighlights" class="fixed top-10 right-10 w-10 h-10 bg-red-400 cursor-pointer"></div>
    </section>
</template>

<style>
#videoPlayer>div {
    height: 100%;
}
</style>
