<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import RaitingStars from "./RatingStars.vue"
import CollectionOffers from "./CollectionOffers.vue";
import { useOffersStore } from '@/stores/offers';
import { useCollectionsStore } from "@/stores/collections";


const route = useRoute();
const router = useRouter();


const collectionsStore = useCollectionsStore();
const collections = ref(collectionsStore.collections);
const offersStore = useOffersStore();
const offer = ref(null);

const shape = ref(null);
const loader = ref(null);


function runAnimation() {
    if (!shape.value || !loader.value) return;

    shape.value.classList.remove('hidden');
    loader.value.classList.remove('hidden');

    setTimeout(() => {
        shape.value.classList.add('hidden');

        const onEnd = () => {
            loader.value.classList.add('hidden');
            shape.value.removeEventListener('transitionend', onEnd);
            shape.value.removeEventListener('animationend', onEnd);
        };

        shape.value.addEventListener('transitionend', onEnd);
        shape.value.addEventListener('animationend', onEnd);
    }, 500);
}

function loadOffer() {
    const slug = route.params.slug;
    offer.value = offersStore.getOffersBySlug(slug);
}

async function loadOfferAsync() {
    loadOffer();
    if (!offer.value && offersStore.fetchOfferBySlug) {
        offer.value = await offersStore.fetchOfferBySlug(route.params.slug);
    }
}

async function loadAndAnimate() {
    await loadOfferAsync();
    runAnimation();
    document.querySelector('#mainContainer').scrollTo(0, 0);
}

onMounted(() => {
    loadAndAnimate();
});

watch(() => route.params.slug, () => {
    loadAndAnimate();
});


const backBtn = () => {
    if (window.history.length > 1) {
        router.back()
    }
    else {
        router.push('/')
    }
}

</script>

<template>

    <div id="offerContent" v-if="offer">

        <section class="flex flex-col lg:mt-[10px]">

            <!-- mobile mask -->
            <div
                class="absolute top-0 left-0 w-full h-[250px] bg-[linear-gradient(180deg,rgba(20,20,20,1)_0%,rgba(20,20,20,0)_100%)] z-[9999] lg:hidden">
            </div>

            <div class="flex justify-center w-full ">
                <div class="max-w-[1200px] w-full">

                    <div class="flex justify-between w-full relative z-[9999] px-[10px] lg:px-[0px] pt-[15px]">
                        <div @click="backBtn()"
                            class="w-[50px] h-[50px] rounded-full bg-[var(--nav-btn-color)] cursor-pointer"></div>
                        <div class="w-[50px] h-[50px] rounded-full bg-[var(--nav-btn-color)] cursor-pointer"></div>
                    </div>



                    <div class="flex flex-col lg:flex-row lg:gap-[50px] lg:mt-[30px]">



                        <!-- mobile image -->
                        <div class="fixed top-0 block lg:hidden">
                            <img class="paralax_img" :src="offer.cover" alt="">
                        </div>

                        <div
                            class="h-[300px] z-[9999] bg-[linear-gradient(0deg,rgba(20,20,20,1)_2%,rgba(20,20,20,0)_60%)] block lg:hidden">
                        </div>


                        <!-- pc image -->
                        <div class="relative min-w-[700px] max-w-[700px] hidden lg:block">
                            <img class="ambilight_img rounded-[10px] aspect-video" :src="offer.cover" alt="">
                            <img class="absolute top-0 rounded-[10px] aspect-video" :src="offer.cover" alt="">
                            <div></div>
                        </div>


                        <!-- offer content -->
                        <div
                            class="flex z-[9999] bg-[#121212] flex-col gap-[10px] items-center w-full px-[10px] pt-[20px] lg:mt-[0px] lg:px-0">
                            <h2 v-if="!offer.title" class="text-[30px] font-bold">{{ offer.name }}</h2>
                            <img v-if="offer.title" :src="offer.title" alt=""
                                class="max-w-[400px] max-h-[100px] px-[20px] lg:px-[0px]">
                            <div class="mt-[20px]">
                                <div class="tags hidden">Астрология . Тарология</div>
                                <div class="about_offer">Семинар <span class="mx-[5px]">| 58 мин. |</span> 1 видео</div>
                            </div>
                            <div class="flex gap-[20px] mt-[20px] items-center">
                                <div class="flex items-center gap-[10px] justify-center">

                                    <div class="w-[100px] h-[20px]">
                                        <RaitingStars :rating="offer.rating" />
                                    </div>

                                    <div class="review_estimation flex items-center justify-center">{{ offer.rating }}
                                    </div>
                                </div>
                                <div class="flex flex-col items-center">
                                    <p class="text-[15px] text-[var(--secondary-text)] font-[400]">Рейтинг в Magisterium
                                    </p>
                                    <p class="review_count">(9 отзывов)</p>
                                </div>
                            </div>

                            <div class="w-full mt-[20px]">
                                <button class="buy_btn flex flex-col w-full">
                                    <span>Получить доступ</span>
                                    <span class="buy_btn_price">Стоимость 15 000 ₽</span>
                                </button>
                            </div>

                            <div class="description mt-[30px]">
                                <p>Система расчета предназначенных нам сценариев жизни. Вторая часть системы “Фол”</p>
                                <a href="" class="description_link text-[#fffefa] relative w-fit">Подробнее о
                                    семинаре</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <!-- offer collections -->
            <div class="w-full bg-[#121212] z-[9999]">

                <span class="line block w-full h-[1px] my-[50px]"></span>

                <div class="flex flex-grow justify-center w-full mt-[50px] ml-[10px] lg:ml-[0px] ">
                    <div class="w-full max-w-[1200px] flex flex-col gap-[20px]">
                        <CollectionOffers v-for="collection in collections" :collection="collection"
                            :key="collection.id" :exclude-id="offer?.id" />
                    </div>
                </div>
            </div>

        </section>

        <div ref="loader" id="loader" class="loader">
            <div>
                <img :src="offer.title" alt="">
                <div ref="shape" id="shape" class="shape"></div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.paralax_img {
    position: relative;
    object-fit: cover;
    height: 400px;
    z-index: -1;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: red;
    }

}

.loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: #121212;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    transition: all 0s ease-in-out;


    &.hidden {
        top: -100%;
        transition: all 1s ease-in-out;
    }

    & div {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 400px;
        height: 150px;
    }

    & img {
        width: 90%;
        position: absolute;
        max-width: 400px;
    }

    & .shape {
        position: absolute;
        left: 0%;
        width: 100%;
        height: 100%;
        background-color: #121212;
        transition: all 0s ease-in-out;

        &.hidden {
            left: 100%;
            transition: all 1s ease-in-out;
        }
    }
}

.ambilight_img {
    filter: blur(20px);
    -webkit-filter: blur(20px);
    will-change: filter;
}

.about_offer {
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    color: var(--secondary-text)
}

.description {
    background-color: #1b1b1b;
    border: 1px solid #313131;
    padding: 10px;
    border-radius: 10px;

    & p {
        font-size: 15px;
    }

    & .description_link {
        display: block;
        color: #fffefa;
        font-size: 15px;
        font-weight: 400;
        margin-top: 10px;
    }

    & .description_link::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #FFFEFA;
        left: 0;
        top: 100%;
        font-size: 15px;
    }
}

.line {
    background: #FFFEFA;
    background: radial-gradient(circle, rgba(255, 254, 250, 1) 0%, rgba(255, 254, 250, 0) 50%, rgba(255, 254, 250, 0) 100%);
}

.review_estimation {
    background-color: #1b1b1b;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #313131;
    height: fit-content;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.1;
}

.review_count {
    font-family: 'Roboto', sans-serif;
}
</style>