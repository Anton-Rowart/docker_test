<script setup>

import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useBannersStore } from '@/stores/banners'

const bannersStore = useBannersStore()
const slides = computed(() => bannersStore.banners)

const currentSlide = ref(0)
const interval = ref(null)




const goToSlide = (index) => {
    stopAutoSlide()
    currentSlide.value = index
}

const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}

const nextSlide = () => {
    stopAutoSlide()
    currentSlide.value = (currentSlide.value + 1) % slides.value.length;
}




const stopAutoSlide = () => {
    clearInterval(interval.value)
    interval.value = null
}




onMounted(() => {
    interval.value = setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % slides.value.length
    }, 8000)
})

onUnmounted(() => {
    clearInterval(interval.value)
})

const isActive = (i) => i === currentSlide.value



</script>


<template>

    <section class="w-full flex flex-col items-center max-w-[1300px] h-[430px] px-[10px] lg:px-[0]">
        <div class="w-full relative h-[400px] cursor-pointer">
            <div @click="prevSlide"
                class="w-10 h-10 rounded-full bg-red-400 absolute left-0 top-[50%] transform -translate-y-[50%] hidden lg:block">
            </div>

            <div class="banner_wrapper absolute w-full max-w-[1200px] left-[50%] transform -translate-x-[50%]">
                <div class="relative h-[400px] rounded-[20px]" v-for="(slide, i) in slides" :key="i"
                    v-show="i === currentSlide">
                    <img class="ambilight inset-0 absolute rounded-[20px]" :src="slide.img" alt="">
                    <div class="absolute inset-0 w-full h-full rounded-[20px] overflow-hidden">
                        <img class="hero_img rounded-[20px] w-full h-full object-cover" :src="slide.img" alt="">
                    </div>
                </div>
            </div>

            <div @click="nextSlide"
                class="w-10 h-10 rounded-full bg-red-400 absolute right-0 top-[50%] transform -translate-y-[50%] hidden lg:block">
            </div>
        </div>

        <div class="flex gap-2 mt-5">
            <span v-for="(slide, i) in slides" :key="i" @click="goToSlide(i)"
                :class="isActive(i) ? 'w-8 bg-white' : 'w-3 bg-[#3c3c3c]'"
                class="block h-3 rounded-full transition-all duration-300 cursor-pointer"></span>
        </div>
    </section>

</template>


<style scoped lang="scss">
.ambilight {
    filter: blur(20px);
    transition: all 0.8s ease-in-out;
}

.hero_img {
    transition: all 0.8s ease-in-out;
}

.banner_wrapper:hover .ambilight {
    filter: blur(40px);
}

.banner_wrapper:hover .hero_img {
    transform: scale(1.04);
}
</style>
