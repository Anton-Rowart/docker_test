<script setup>
import { ref } from "vue";

let paymentMethod = ref('');



</script>

<template>

    <section class="max-w-[600px] w-full">

        <div>
            <h3 class="text-[24px]">Способ оплаты</h3>
        </div>

        <div>
            <p class="description">Выберите удобный вам способ оплаты по умолчанию
            </p>
        </div>

        <div class="flex flex-col gap-[20px] mt-[30px]">
            <div class="flex justify-between items-center cursor-pointer" @click="paymentMethod = 'ru'">
                <div class="flex gap-[20px] items-center">
                    <div :class="['flag', { checked: paymentMethod === 'ru' }]"><img src="/public/profile/rus.webp"
                            alt=""></div>
                    <p>Оплата российской картой</p>
                </div>

                <div :class="['check flex justify-center items-center', { checked: paymentMethod === 'ru' }]"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">

                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                        <g id="SVGRepo_iconCarrier">
                            <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#fffefa" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </g>

                    </svg></div>
            </div>

            <div class="flex justify-between items-center" @click="paymentMethod = 'eu'">
                <div class="flex gap-[20px] items-center cursor-pointer">
                    <div :class="['flag', { checked: paymentMethod === 'eu' }]"><img src="/public/profile/world.webp"
                            alt=""></div>
                    <p>Оплата иностранной картой</p>
                </div>

                <div :class="['check flex justify-center items-center', { checked: paymentMethod === 'eu' }]"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">

                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                        <g id="SVGRepo_iconCarrier">
                            <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#fffefa" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </g>

                    </svg></div>
            </div>

        </div>

        <RouterLink to="/profile"><button class="mt-[60px] setting_btn">Сохранить и закрыть</button></RouterLink>
    </section>



</template>


<style scoped lang="scss">
.description {
    color: var(--secondary-text);
    font-size: 16px;
    font-weight: 300;
    line-height: 1.2;
    margin-top: 5px;
}

.flag {
    width: 40px;
    height: 40px;
    border-radius: 100px;

    & img {
        width: 100%;
        height: 100%;
    }

    &.checked {
        box-shadow: 0 0 8px 1px var(--primary-color);
    }
}

.check {
    border-radius: 100px;
    width: 28px;
    height: 28px;
    background-color: #fffefa;

    &.checked {
        background-color: var(--primary-color);
    }
}
</style>