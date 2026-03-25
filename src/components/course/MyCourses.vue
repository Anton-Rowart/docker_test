<script setup>
import { ref, computed } from "vue";
import CourseCard from "./CourseCard.vue";
import CourseText from "./CourseText.vue";
import { useUserCourseStore } from "@/stores/userCourse";

const userCourseStore = useUserCourseStore();
const userCourse = computed(() => userCourseStore.userCourse);

const currentSort = ref('date');
const currentView = ref('card');
const isCompleted = ref(false)

</script>

<template>

    <div class="flex flex-col min-h-screen">

        <section class="flex justify-center items-center w-full mt-[50px]">
            <div class="max-w-[1200px] w-full">

                <div>
                    <div class="text-[35px] font-[200]">Мои курсы</div>
                    <div></div>
                </div>

                <div class="mt-[20px] flex justify-between">
                    <div class="flex gap-[20px]">
                        <div :class="['tab', { active: currentSort === 'date' }]" @click="currentSort = 'date'">по
                            дате</div>
                        <div :class="['tab', { active: currentSort === 'name' }]" @click="currentSort = 'name'">по
                            названию</div>
                    </div>

                    <div class="flex">
                        <div :class="['visual_toggle w-[90px] h-[40px]', { active: currentView === 'card' }]"
                            @click="currentView = 'card'">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 105 105"
                                fill="none">
                                <rect width="50" height="50" rx="10" fill="#FFFEFA" />
                                <rect x="55" width="50" height="50" rx="10" fill="#FFFEFA" />
                                <rect y="55" width="50" height="50" rx="10" fill="#FFFEFA" />
                                <rect x="55" y="55" width="50" height="50" rx="10" fill="#FFFEFA" />
                            </svg>
                        </div>
                        <div :class="['visual_toggle w-[90px] h-[40px]', { active: currentView === 'text' }]"
                            @click="currentView = 'text'">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 105 107"
                                fill="none">
                                <rect x="58" y="23" width="47" height="9" rx="4.5" fill="#FFFEFA" />
                                <rect x="86" y="25" width="47" height="9" rx="4.5" transform="rotate(90 86 25)"
                                    fill="#FFFEFA" />
                                <rect width="105" height="15" rx="7.5" fill="#FFFEFA" />
                                <rect y="92" width="105" height="15" rx="7.5" fill="#FFFEFA" />
                                <rect y="69" width="70" height="15" rx="7.5" fill="#FFFEFA" />
                                <rect y="46" width="58" height="15" rx="7.5" fill="#FFFEFA" />
                                <rect y="23" width="42" height="15" rx="7.5" fill="#FFFEFA" />
                            </svg>
                        </div>
                    </div>

                    <div class="flex items-center gap-[10px]">
                        <p class="text-[20px]">Скрыть просмотренные курсы:</p>
                        <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" v-model="isCompleted" class="sr-only peer" />
                            <div
                                class="w-[55px] h-fit p-[16px] bg-gray-300 peer-checked:bg-blue-600 rounded-full transition-colors duration-300 relative">
                                <div
                                    :class="['absolute top-0.5 left-0.5 w-7 h-7 bg-[#141414] rounded-full transition-transform duration-300', { '!bg-white translate-x-[22px]': isCompleted === true }]">
                                </div>
                            </div>
                        </label>
                    </div>

                </div>

                <div v-if="currentView === 'card'"
                    class="grid grid-rows-1 grid-cols-3 max-w-[1200px] w-full gap-[30px] mt-[20px]">
                    <CourseCard v-for="userCourse in userCourse" :userCourse="userCourse" />
                </div>

                <div v-else class="max-w-[1200px] w-full flex justify-center mt-[20px]">
                    <div class="flex flex-col max-w-[700px] w-full gap-[20px] ">
                        <CourseText v-for="userCourse in userCourse" :userCourse="userCourse" />
                    </div>
                </div>

            </div>
        </section>
    </div>

</template>


<style scoped lang="scss">
.tab {
    border: 1px solid #313131;
    font-size: 15px;
    border-radius: 100px;
    padding: 8px 20px;
    cursor: pointer;

    &.active {
        background-color: #333;
    }
}

.switch {
    background-color: #fffefa;
}





.visual_toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 1px solid #313131;
    cursor: pointer;

    &>svg>rect {
        fill: #6c6c6a;
    }

    &.active>svg>rect {
        fill: #fffefa;
    }

    &.active {
        background-color: #333;
    }

    &:first-child {
        border-right: none;
        border-top-left-radius: 100px;
        border-bottom-left-radius: 100px;

        & svg {
            margin-left: 5px;
        }
    }

    &:last-child {
        border-top-right-radius: 100px;
        border-bottom-right-radius: 100px;

        & svg {
            margin-right: 5px;
        }
    }
}
</style>