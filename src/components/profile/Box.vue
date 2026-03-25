<script setup>
import { ref, computed, watch } from "vue";

const text = ref('');
const canSubmit = ref();
const check = ref(false);
const isSubmit = ref(false);



const counterText = computed(() => text.value.length);

watch([text, check], ([newtext, newCheck]) => {
    canSubmit.value = newtext.length > 0 && newCheck === true;
});



</script>

<template>

    <section v-if="!isSubmit" class="max-w-[600px] w-full">

        <div>
            <h3 class="text-[24px]">История ваших трансформаций</h3>
        </div>

        <div class="mt-[20px]">
            <p class="description">Это место, в котором вы можете рассказать нам историю вашей духовной трансформации.
                Мы будем рады, если вы поделитесь с нами своим опытом обучения и результатами, которых вам удалось
                добиться.
                <br><br>
                Расскажите о том, что привело вас в MAGISTERIUM, какие уроки вы прошли и что изменилось в вашей жизни за
                время обучения в школе.
            </p>

            <p class="description italic mt-[20px] text-[var(--secondary-text)]">
                Если вы не против, чтобы Наталья могла использовать вашу историю в социальных сетях школы, перед
                отправкой не забудьте поставить галочку «Соглашаюсь с тем, что моя история может быть опубликована».
            </p>
        </div>

        <div>
            <h4 class="text-[18px] mt-[40px]">Курсы, которые вы проходили в нашей школе</h4>
            <div></div>
        </div>

        <div class="form_input mt-[30px]">
            <label for="text">Расскажите свою историю трансформации
            </label>
            <textarea class="input" name="text" id="" v-model="text" maxlength="4000"
                placeholder="Рассказать историю"></textarea>
            <p class="text-right"><span>{{ counterText }}</span> из 4 000</p>
        </div>

        <div @click="check = !check" class="flex gap-[10px] mt-[20px] cursor-pointer w-fit">
            <div :class="['check flex justify-center items-center', { checked: check === true }]"><svg
                    xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">

                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                    <g id="SVGRepo_iconCarrier">
                        <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#fffefa" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </g>

                </svg></div>
            <p class="text-[14px]">Я соглашаюсь с тем, что моя история может быть опубликована</p>
        </div>

        <button @click="isSubmit = true" :disabled="!canSubmit" class="setting_btn mt-[60px]">Отправить историю</button>

    </section>

    <div class="mt-[30px]" v-if="isSubmit">
        <p class="text-[24px]">Спасибо! Ваша история принята.</p>
        <RouterLink class="flex justify-center mt-[20px]" to="/profile">
            <button class="setting_btn !w-fit">Вернуться в профиль</button>
        </RouterLink>
    </div>

</template>

<style scoped lang="scss">
.form_input {
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
        font-size: 14px;
        font-weight: 400;
    }

    p {
        font-family: 'Roboto', 'sans-serif';
        font-size: 14px;
        font-weight: 400;
        color: var(--secondary-text);
    }
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

.check {
    border-radius: 5px;
    width: 20px;
    height: 20px;
    background-color: #fffefa;

    &.checked {
        background-color: var(--primary-color);
    }
}
</style>