<script setup>
import { ref, computed, watch } from "vue";
import CollectionJSON from "../test/collection.json"

const navBtn = ref(['Коллекции', 'Традиции', 'Ступени', 'Сферы жизни', 'Все курсы'])
const activeBtn = ref('Коллекции')

const filteredCollection = computed(() => {
    return CollectionJSON.filter(item => item.type === activeBtn.value)
});

watch(activeBtn, () => {
    activeCollection.value = ''
});

const activeCollection = ref('')

const tabs = ref(['Ритуал', 'Артефакт', 'Законы', 'Диагностика', 'Чистки', 'Защиты', 'Прокачка личной силы'])
const activeTabs = ref([])


const boardHeight = computed(() => {
    if (activeBtn.value === 'Все курсы') {
        return 'h-[130px]';
    }

    else if ((activeBtn.value === 'Традиции' || activeBtn.value === 'Ступени' || activeBtn.value === 'Сферы жизни') && !activeCollection.value) {
        return 'h-[200px]'
    }

    else if (activeCollection.value) {
        return 'h-[245px]'
    }

    else {
        return 'h-[79px]'
    }
})

</script>

<template>

    <div class="flex flex-col min-h-screen">

        <section class="flex justify-center items-center w-full mt-[50px]">
            <div class="max-w-[1200px] w-full">

                <div>
                    <div class="text-[35px] font-[200]">Библиотека</div>
                    <div></div>
                </div>

                <div
                    :class="`mt-[10px] ${boardHeight} flex flex-col p-[8px] bg-[var(--background-card)] rounded-[15px] border-[1px] border-[#313131] board`">

                    <div class="flex gap-[20px] w-full">
                        <div :class="['btn_nav', { active: activeBtn === btn }]" v-for="btn in navBtn"
                            @click="activeBtn = btn">{{ btn }}</div>
                    </div>

                    <div class="relative h-[100px] mt-5">

                        <Transition name="fade">
                            <div class='absolute tabs flex gap-[20px] w-full' v-if="activeBtn === 'Все курсы'">
                                <div class="tab" v-for="tab in tabs"> {{ tab }}
                                    <span class="ml-2"> +
                                    </span>
                                </div>
                            </div>
                        </Transition>

                        <Transition name="fade">
                            <div class="absolute flex gap-[20px] w-full h-fit"
                                v-if="['Традиции', 'Ступени', 'Сферы жизни'].includes(activeBtn)">
                                <div class="board_card p-[10px]" v-for="item in filteredCollection" :key="item.title"
                                    @click="activeCollection = item.title">
                                    <div class="relative w-[50px] h-[50px]">
                                        <img v-if="activeCollection === item.title" class="ambilight absolute"
                                            src="/icon.png" alt="">
                                        <img class="absolute" src="/icon.png" alt="">
                                    </div>
                                    <p>{{ item.title }}</p>
                                </div>
                            </div>
                        </Transition>

                    </div>

                    <Transition name="fade">
                        <div v-if="activeCollection" @click="activeCollection = ''" class="flex mt-5 cursor-pointer">
                            <div></div>
                            <p>Сбросить фильтры</p>
                        </div>
                    </Transition>
                </div>

            </div>
        </section>
    </div>

</template>

<style scoped lang="scss">
.fade-enter-active {
    transition: opacity 0.3s;
    transition-delay: 0.8s;
}

.fade-enter-from {
    opacity: 0;
}

.fade-enter-to {
    opacity: 1;
}

.ambilight {
    filter: blur(10px);
}

.board {
    transition: height 0.8s ease-in-out;
}

.board_card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    gap: 10px;
    height: 100px;
    width: 100%;
    max-width: 180px;
    background-color: #393939;
    cursor: pointer;
}

.btn_nav {
    padding: 15px 10px;
    width: 100%;
    min-width: 180px;
    background-color: #393939;
    font-size: 20px;
    color: #fffefa;
    font-weight: 600;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    transition: all 0.8s ease-in-out;


    &.active {
        background-color: var(--primary-color);
        min-width: 380px;
    }
}


.tab {
    border-radius: 100px;
    padding: 5px 20px;
    background-color: #393939;
    font-size: 15px;
}
</style>