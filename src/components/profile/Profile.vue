<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from 'vue-router';
import Header from "../Header.vue";
import { useUserStore } from "@/stores/user"


const user = ref(null)
const userStore = useUserStore()

onMounted(async () => {
    try {
        await userStore.fetchUser()
        user.value = userStore.user
    } catch (error) {
        console.error('Ошибка при загрузке пользователя:', error)
    }
})

function logout() {
    userStore.logout()
    router.push('/')
}


const router = useRouter();
const route = useRoute();
const username = 'Rainyshore';
document.title = `${username} | Magisterium`;

const showBackBtn = computed(() => {
    return route.path.startsWith('/profile/') && route.matched.length > 1
});

const backBtn = () => {
    if (window.history.length > 1) {
        router.back()
    }
    else {
        router.push('/profile')
    }
}


</script>

<template>

    <section class="profile">

        <div class="background_img">
            <div class="background_img_mask flex justify-center">
                <div class="user_content max-w-[1200px] w-full">
                    <div class="user_img_border w-[180px] h-[180px] md:w-[150px] md:h-[150px]">
                        <img src="" alt="">
                    </div>

                    <div class="user_info">
                        <h3 class="user_name text-[40px] font-medium md:text-[55px]">Rainyshore</h3>
                        <p class="user_role">Ученик</p>
                        <p class="user_days mt-2 text-[16px] md:mt-[10px]">789 дней в Magisterium</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="hidden gap-[20px] max-w-[1200px] w-full m-auto md:flex">
            <div class="flex ml-[10px] gap-[10px] items-center">
                <svg class="w-[20px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="417" height="335"
                    viewBox="0 0 417 335" fill="none">
                    <g filter="url(#filter0_d_678_8)">
                        <rect x="21" y="17" width="374.146" height="293" rx="58" stroke="#88868C" stroke-width="34" />
                        <rect width="155.355" height="32.997" rx="16.4985"
                            transform="matrix(0.87755 0.479486 -0.328003 0.944677 90.0684 69)" fill="#88868C" />
                        <rect width="155.355" height="32.997" rx="16.4985"
                            transform="matrix(-0.87755 0.479486 0.328003 0.944677 326.867 69)" fill="#88868C" />
                    </g>
                    <defs>
                        <filter id="filter0_d_678_8" x="0" y="0" width="416.146" height="335"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_678_8" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_678_8" result="shape" />
                        </filter>
                    </defs>
                </svg>
                <p class="email">rainyshore@yandex.ru</p>
            </div>
            <div class="flex gap-[10px] items-center">
                <svg class="w-[11px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="230" height="335"
                    viewBox="0 0 230 335" fill="none">
                    <g filter="url(#filter0_d_678_9)">
                        <rect x="21" y="17" width="188" height="293" rx="38" stroke="#88868C" stroke-width="34" />
                        <circle cx="115" cy="264" r="16" fill="#88868C" />
                    </g>
                    <defs>
                        <filter id="filter0_d_678_9" x="0" y="0" width="230" height="335" filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_678_9" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_678_9" result="shape" />
                        </filter>
                    </defs>
                </svg>
                <p class="tel">+7 (951) 312-20-90</p>
            </div>
        </div>

        <div class="flex justify-center">
            <div class="mx-[10px] max-w-[1200px] w-full m-auto">
                <div v-if="showBackBtn" @click="backBtn()"
                    class="cursor-pointer flex gap-[10px] items-center mt-[40px] w-fit">

                    <p class="text-[20px]">Назад</p>
                </div>
                <div class="flex justify-center mt-[20px] w-full"><router-view /></div>
            </div>
        </div>


        <div @click="logout" class="block w-full text-center mt-20 text-red-400">Выйти</div>

        <div class="mt-[50px] flex flex-col items-center text-[18px] lg:hidden">

            <div>
                <p class="tel text-center">+7 (951) 312-20-90</p>
                <p class="mt-[5px] email text-center">rainyshore@yandex.ru</p>
            </div>

            <div class="mt-[50px] text-[#b63b3b]">Выйти</div>

        </div>
    </section>

</template>

<style lang="scss" scoped>
.background_img {
    background-image: url(/profile/profile_background.webp);
    background-size: cover;
    background-position: left;

    .background_img_mask {
        background: #121212;
        background: linear-gradient(190deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.8) 100%);
        padding: 40px 10px 120px 10px;
    }

}




.user_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    .user_img_border {
        background-color: #121212;
        border: 5px solid #3656bd;
        border-radius: 100px;
        box-shadow: 0 0 16px 1px #4c66bd;
    }

    .user_info {
        display: flex;
        flex-direction: column;
        align-items: center;

        .user_role {
            color: #8d8d8d;
        }

        .user_days {
            font-family: "Roboto", "sans-serif";
        }

    }
}


.tel {
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
}

.email {
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
}

.profile {
    margin-bottom: 100px;
}


@media (min-width: 768px) {

    .background_img {

        background-position: center top;

        .background_img_mask {
            padding: 180px 20px 20px 20px;
            background: radial-gradient(ellipse farthest-side at 65% -30%,
                    rgba(18, 18, 18, 0),
                    rgba(20, 18, 28, 0),
                    rgba(18, 18, 18, 1));
        }

    }

    .user_content {
        align-items: center;
        flex-direction: row;
        gap: 30px;

        .user_info {
            align-items: start;

            .user_name {
                line-height: 1;
            }
        }
    }
}
</style>