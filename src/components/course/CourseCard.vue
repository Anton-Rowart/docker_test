<script setup>

import { computed } from "vue";


const { userCourse } = defineProps({
    userCourse: {
        type: Object,
        required: true,
    },
})

// notes
const isNotesEmpty = computed(() => {
    return Object.keys(userCourse.notes || {}).length === 0
})

</script>

<template>
    <RouterLink class="text-[#fffefa]" :to="{ name: 'CoursePage', params: { slug: userCourse.course.slug } }">
        <div class="group w-full cursor-pointer">
            <div
                class="w-full h-fit relative border-[1px] border-[#313131] shadow-[0_2px_8px_2px_#3e3e3e80] rounded-[10px] transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_2px_16px_2px_#5d5d5d]">
                <div v-bind:style="{ backgroundImage: `url(${userCourse.course.img})` }"
                    class="mask h-[200px] w-full rounded-[10px] bg-center bg-cover bg-no-repeat overflow-hidden" :class="{
                        'grayscale': userCourse.status === 'blocked'
                    }">

                    <div class="w-full h-full flex flex-col justify-center items-center relative" :class="userCourse.isComplete || userCourse.status === 'atention' || userCourse.status === 'blocked'
                        ? 'bg-[#00000080]'
                        : 'bg-gradient-to-t from-[#000000] via-[#00000050] to-[#00000000]'">

                        <div class="w-full h-fit absolute top-0 flex justify-between">
                            <div class="w-fit flex gap-[5px] ml-[5px] mt-[5px]">

                                <!-- tabs -->
                                <div v-if="userCourse.isComplete || userCourse.status === 'new' || userCourse.status === 'attention'"
                                    class="max-h-[34px]">
                                    <div v-if="userCourse.isComplete"
                                        class="bg-[#0fa124] text-[#fffefa] text-[14px] px-[10px] font-medium py-[6px] rounded-[10px] w-fit h-fit">
                                        Просмотрен
                                    </div>

                                    <div v-if="userCourse.status === 'new'"
                                        class="bg-[#ce0704] text-[#fffefa] text-[14px] px-[10px] font-medium py-[8px] rounded-[10px] w-fit h-fit">
                                        Новый
                                    </div>
                                </div>

                                <div v-if="userCourse.status === 'attention'"
                                    class="bg-[#222] w-[34px] h-[34px] rounded-[10px] flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 768 768"
                                        fill="none">
                                        <path
                                            d="M384 0C596.08 0 768 171.92 768 384C767.997 434.428 758.062 484.361 738.762 530.949C719.462 577.537 691.174 619.867 655.515 655.523C619.855 691.179 577.522 719.462 530.932 738.757C484.342 758.053 434.408 767.983 383.98 767.98C333.552 767.977 283.619 758.042 237.031 738.742C190.443 719.442 148.113 691.154 112.457 655.495C76.801 619.835 48.518 577.502 29.2226 530.912C9.92719 484.322 -0.00262451 434.388 0 383.96C0 171.92 171.96 0 384 0ZM384 687.96C423.922 687.96 463.453 680.097 500.336 664.819C537.219 649.542 570.731 627.149 598.96 598.92C627.189 570.691 649.582 537.179 664.859 500.296C680.137 463.413 688 423.882 688 383.96C688 344.038 680.137 304.507 664.859 267.624C649.582 230.741 627.189 197.229 598.96 169C570.731 140.771 537.219 118.378 500.336 103.101C463.453 87.8232 423.922 79.96 384 79.96V384H80C80.0106 464.619 112.044 541.932 169.054 598.935C226.064 655.937 303.381 687.96 384 687.96Z"
                                            fill="#CA2828" />
                                        <path
                                            d="M384 0C596.08 0 768 171.92 768 384C767.997 434.428 758.062 484.361 738.762 530.949C719.462 577.537 691.174 619.867 655.515 655.523C619.855 691.179 577.522 719.462 530.932 738.757C484.342 758.053 434.408 767.983 383.98 767.98C333.552 767.977 283.619 758.042 237.031 738.742C190.443 719.442 148.113 691.154 112.457 655.495C76.801 619.835 48.518 577.502 29.2226 530.912C9.92719 484.322 -0.00262451 434.388 0 383.96C0 171.92 171.96 0 384 0ZM384 687.96C423.922 687.96 463.453 680.097 500.336 664.819C537.219 649.542 570.731 627.149 598.96 598.92C627.189 570.691 649.582 537.179 664.859 500.296C680.137 463.413 688 423.882 688 383.96C688 344.038 680.137 304.507 664.859 267.624C649.582 230.741 627.189 197.229 598.96 169C570.731 140.771 537.219 118.378 500.336 103.101C463.453 87.8232 423.922 79.96 384 79.96V384H80C80.0106 464.619 112.044 541.932 169.054 598.935C226.064 655.937 303.381 687.96 384 687.96Z"
                                            fill="#CA2828" />
                                    </svg>
                                </div>

                            </div>

                            <!-- info btn -->
                            <div class="group w-[100px] h-[100px] flex justify-end pr-[5px] pt-[5px] lg:w-fit lg:h-fit">
                                <div
                                    class="py-[10px] px-[11px] bg-[#222] border-[1px] border-[#313131] rounded-[10px] flex justify-center items-center transition-all duration-200 group-hover:bg-[#333]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
                                        fill="none">
                                        <circle cx="1.875" cy="7.875" r="1.875" fill="#FFFEFA" />
                                        <circle cx="7.5" cy="7.875" r="1.875" fill="#FFFEFA" />
                                        <circle cx="13.125" cy="7.875" r="1.875" fill="#FFFEFA" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <!-- review btn -->
                        <div v-if="(isNotesEmpty && userCourse.isComplete) && userCourse.status !== 'blocked'"
                            class="bg-[var(--primary-color)] w-fit h-fit p-2 rounded-[10px] text-[14px]">
                            Оставить отзыв
                        </div>

                        <!-- img title -->
                        <div
                            class="absolute bottom-[15px] left-1/2 transform -translate-x-1/2 w-full flex justify-center">
                            <img class="max-w-[45%]" :src="userCourse.course.titleImg" alt="">
                        </div>

                        <!-- progress bar -->
                        <div v-if="!userCourse.isComplete && userCourse.status !== 'new'"
                            class="w-full h-fit absolute bottom-0">
                            <div class="w-full bg-[#fffefa] h-[8px]">
                                <div class="w-[35%] h-full bg-[var(--primary-color)]">
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <!-- access revoked btn -->
                <div v-if="userCourse.status === 'blocked'"
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#ef5353] via-[#c31a1a] to-[#800909] w-full max-w-[60%] text-center h-fit p-2 rounded-full px-[40px] py-[10px] text-[14px]">
                    Возобновить доступ
                </div>

            </div>
            <p class="mt-[10px] text-[16px] text-[#fffefa]">{{ userCourse.course.title }}</p>
        </div>
    </RouterLink>
</template>