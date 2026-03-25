<script setup>

import { computed } from "vue";


const { userCourse } = defineProps({
    userCourse: {
        type: Object,
        required: true,
    }
})

function getStatusInfo(status) {
    const map = {
        blocked: { text: 'Возобновить доступ', color: '#ff4d4f' },
        new: { text: 'Новый', color: 'var(--primary-color)' },
    };
    return map.hasOwnProperty(status) ? map[status] : null;
}

const isNotesEmpty = computed(() => {
    return Object.keys(userCourse.notes || {}).length === 0
})



</script>

<template>

    <div class="w-full cursor-pointer flex justify-between">
        <div class="mt-[10px] text-[18px] flex gap-[10px]">
            <p class=" text-[#fffefa]">{{ userCourse.course.title }}</p>
            <p v-if="getStatusInfo(userCourse.status)" :style="{ color: getStatusInfo(userCourse.status).color }">
                ({{ getStatusInfo(userCourse.status).text }})
            </p>
            <p v-else-if="userCourse.isComplete" class="text-[#fffefa60]">(Просмотрен)</p>
        </div>

        <div class="flex gap-[10px]">
            <div v-if="userCourse.status === 'attention'"
                class="bg-[#222] w-[34px] h-[34px] rounded-[10px] flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 768 768" fill="none">
                    <path
                        d="M384 0C596.08 0 768 171.92 768 384C767.997 434.428 758.062 484.361 738.762 530.949C719.462 577.537 691.174 619.867 655.515 655.523C619.855 691.179 577.522 719.462 530.932 738.757C484.342 758.053 434.408 767.983 383.98 767.98C333.552 767.977 283.619 758.042 237.031 738.742C190.443 719.442 148.113 691.154 112.457 655.495C76.801 619.835 48.518 577.502 29.2226 530.912C9.92719 484.322 -0.00262451 434.388 0 383.96C0 171.92 171.96 0 384 0ZM384 687.96C423.922 687.96 463.453 680.097 500.336 664.819C537.219 649.542 570.731 627.149 598.96 598.92C627.189 570.691 649.582 537.179 664.859 500.296C680.137 463.413 688 423.882 688 383.96C688 344.038 680.137 304.507 664.859 267.624C649.582 230.741 627.189 197.229 598.96 169C570.731 140.771 537.219 118.378 500.336 103.101C463.453 87.8232 423.922 79.96 384 79.96V384H80C80.0106 464.619 112.044 541.932 169.054 598.935C226.064 655.937 303.381 687.96 384 687.96Z"
                        fill="#CA2828" />
                    <path
                        d="M384 0C596.08 0 768 171.92 768 384C767.997 434.428 758.062 484.361 738.762 530.949C719.462 577.537 691.174 619.867 655.515 655.523C619.855 691.179 577.522 719.462 530.932 738.757C484.342 758.053 434.408 767.983 383.98 767.98C333.552 767.977 283.619 758.042 237.031 738.742C190.443 719.442 148.113 691.154 112.457 655.495C76.801 619.835 48.518 577.502 29.2226 530.912C9.92719 484.322 -0.00262451 434.388 0 383.96C0 171.92 171.96 0 384 0ZM384 687.96C423.922 687.96 463.453 680.097 500.336 664.819C537.219 649.542 570.731 627.149 598.96 598.92C627.189 570.691 649.582 537.179 664.859 500.296C680.137 463.413 688 423.882 688 383.96C688 344.038 680.137 304.507 664.859 267.624C649.582 230.741 627.189 197.229 598.96 169C570.731 140.771 537.219 118.378 500.336 103.101C463.453 87.8232 423.922 79.96 384 79.96V384H80C80.0106 464.619 112.044 541.932 169.054 598.935C226.064 655.937 303.381 687.96 384 687.96Z"
                        fill="#CA2828" />
                </svg>
            </div>

            <!-- info btn -->
            <div class="group w-[100px] h-[100px] flex justify-end relative lg:w-fit lg:h-fit">
                <div v-if="isNotesEmpty && userCourse.isComplete"
                    class="w-[11px] h-[11px] bg-[var(--primary-color)] rounded-full absolute top-0 right-0"></div>
                <div
                    class="p-[10px] bg-[#222] rounded-[10px] flex justify-center items-center transition-all duration-200 group-hover:bg-[#333]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <circle cx="1.875" cy="7.875" r="1.875" fill="#FFFEFA" />
                        <circle cx="7.5" cy="7.875" r="1.875" fill="#FFFEFA" />
                        <circle cx="13.125" cy="7.875" r="1.875" fill="#FFFEFA" />
                    </svg>
                </div>
            </div>
        </div>
    </div>

</template>
