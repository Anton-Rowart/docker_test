<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue"

let currentView = ref('requests');
const options = [
    'Вход и регистрация',
    'Продление доступа к курсу',
    'Библиотека',
    'Покупка или оплата',
    'Просмотр уроков',
    'Конспекты и отзывы',
    'Мой профиль',
    'Продление',
    'Предложить идею',
    'Другое'
]

const selected = ref('Вход и регистрация')
const isOpen = ref(false)

function toggleDropdown() {
    isOpen.value = !isOpen.value
}

function selectOption(option) {
    selected.value = option
    isOpen.value = false
}

const dropdownRef = ref(null)

function handleClickOutside(event) {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})

</script>

<template>

    <div class="flex flex-col min-h-screen">

        <div class="flex justify-center w-full relative">
            <Header />
        </div>

        <div class="flex flex-grow justify-center w-full mt-[120px] mb-[200px]">

            <div class="max-w-[600px] w-full">

                <div v-if="currentView === 'requests'" class="w-full">

                    <div class="flex justify-between items-center">
                        <div class="text-[35px] font-[200]">Мои заявки</div>
                        <button @click="currentView = 'newRequests'" class="setting_btn !w-fit !h-fit">Создать новую
                            заявку</button>
                    </div>

                    <div class="mt-[30px]">
                        <ul>
                            <li class="support_card">
                                <p>Создана: <span>04.12.2024 14:49</span></p>
                                <p>Тема: <span>Другое</span></p>
                                <p>Номер: <span>80610853</span></p>
                                <p>Статус: <span>Закрытая</span></p>
                                <button class="card_btn">Открыть чат</button>
                            </li>
                        </ul>
                    </div>

                </div>


                <div v-if="currentView === 'newRequests'" class="w-full">
                    <div class="flex items-center gap-[10px]">
                        <div @click="currentView = 'requests'"
                            class="back w-[50px] h-[50px] rounded-full cursor-pointer">
                        </div>
                        <h3 class="text-[35px] font-[200]">Новая заявка</h3>
                    </div>

                    <div class="w-full">

                        <div ref="dropdownRef" class="dropdown_wrapper w-full relative mt-[20px]">
                            <label for="">Тема</label>
                            <div @click="toggleDropdown" class="dropdown_input cursor-pointer mt-[5px]">
                                <h4>{{ selected }}</h4>
                                <div></div>
                            </div>
                            <ul v-if="isOpen" class="dropdown_list flex flex-col gap-[10px]">
                                <li @click="selectOption(option)" v-for="option in options">{{ option }}</li>
                            </ul>
                        </div>

                        <div class="mt-[20px] w-full">
                            <h4>Ваш вопрос</h4>
                            <p class="mt-[5px] text-[var(--secondary-text)]">Пожалуйста, сформулируйте ваш вопрос как
                                можно
                                более подробно.
                                Укажите раздел платформы, на котором возникла проблема. По возможности добавьте
                                скриншот.
                                Так мы сможем помочь вам быстрее.</p>
                            <textarea class="w-full mt-[20px]" name="" id=""></textarea>
                        </div>

                        <div class="mt-[30px]">
                            <p class="text-[var(--secondary-text)]">Можете добавить до трех изображений (не обязательно)
                            </p>
                            <div class="mt-[10px]">
                                <input type="image">
                            </div>
                        </div>

                        <button class="setting_btn mt-[60px]">Отправить заявку</button>


                    </div>
                </div>
            </div>
        </div>

        <div>
            <Footer />
        </div>
    </div>

</template>

<style scoped lang="scss">
.back {
    background-color: #333;
}

textarea {
    background-color: #222;
    color: #fffefa;
    padding: 10px;
    min-height: 200px;
    max-height: 300px;
    border-radius: 10px;
    border: 1px solid #383838;

}

.dropdown_input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    width: 100%;
    background-color: #222;
    border: 1px solid #313131;
    border-radius: 10px;
    padding: 10px;
}

.dropdown_list {
    position: absolute;
    background-color: #191919;
    padding: 10px;
    width: 100%;

    & li {
        cursor: default;
    }
}

.support_card {
    font-family: 'Roboto', 'sans-serif';
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px;
    border-radius: 10px;
    background-color: #222;
    border: 1px solid #313131;
    width: 100%;
    font-size: 18px;
    color: var(--secondary-text);

    & .card_btn {
        background-color: transparent;
        border-radius: 10px;
        border: 1px solid #fffefa;
        margin-top: 10px;
        color: #fffefa;
    }

    & p>span {
        color: #fffefa;
        margin-left: 5px;
    }

}
</style>