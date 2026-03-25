<script setup>
import Avatar from "./Avatar.vue";
import { ref } from "vue";

const userSex = ref('')


</script>

<template>

    <section class="max-w-[600px] w-full">

        <div>
            <h3 class="text-[24px]">Редактировать профиль</h3>
        </div>

        <div>
            <p class="description">Заполните ваши личные данные. Их не увидят другие пользователи платформы MAGISTERIUM
            </p>
        </div>

        <div class="mt-[30px]">

            <div class="form_input">
                <label for="firstName">Имя</label>
                <input class="input" type="text" name="firstName">
            </div>

            <div class="form_input mt-[30px]">
                <label for="secondName">Фамилия</label>
                <input class="input" type="text" name="secondName">
            </div>

            <div class="mt-[30px]">
                <p for="">Ваш пол</p>
                <div class="flex gap-[30px] items-center mt-[20px]">
                    <div @click="userSex = 'male'" class="flex items-center gap-[10px] cursor-pointer">
                        <div :class="['check flex justify-center items-center', { checked: userSex === 'male' }]"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"
                                fill="none">

                                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                <g id="SVGRepo_iconCarrier">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#fffefa" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </g>

                            </svg></div>
                        <p :class="['checkbox_text', { checked: userSex === 'male' }]">Мужской</p>
                    </div>

                    <div @click="userSex = 'female'" class="flex items-center gap-[10px] cursor-pointer">
                        <div :class="['check flex justify-center items-center', { checked: userSex === 'female' }]"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"
                                fill="none">

                                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                <g id="SVGRepo_iconCarrier">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#fffefa" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </g>

                            </svg></div>
                        <p :class="['checkbox_text', { checked: userSex === 'female' }]">Женский</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-[100px]">
            <p class="description">Укажите никнейм и выберите аватар. Они будут видны другим пользователям платформы в
                отзывах или
                комментариях к урокам</p>
        </div>


        <div class="form_input mt-[30px]">
            <label for="nackname">Никнейм</label>
            <input class="input" type="text" name="nickname">
        </div>

        <div class="mt-[50px]">
            <Avatar />
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

.form_input {
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
        font-size: 14px;
        font-weight: 400;
    }
}

.checkbox_text {
    color: var(--secondary-text);
    font-size: 18px;

    &.checked {
        color: var(--text-color);
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