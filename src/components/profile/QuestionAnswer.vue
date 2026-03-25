<script setup>
import { ref, computed, watch } from "vue";

const text = ref('');
const canSubmit = ref();
const isSubmit = ref(false);

const counterText = computed(() => text.value.length);




watch(text, (newtext) => {
    canSubmit.value = newtext.length > 0
});


</script>



<template>

    <section class="max-w-[600px] w-full">

        <div>
            <h3 class="text-[24px]">Регистрация вопроса к эфиру «Вопрос - ответ»</h3>
        </div>

        <div class="mt-[20px]">
            <p class="description">Еженедельно в сообществе Вконтакте мы проводим прямые эфиры, на которых Наталья
                Тихомирова-Савельева отвечает на вопросы учеников и подписчиков школы MAGISTERIUM.
                <br><br>
                Предварительная регистрация вопросов помогает нам отвечать на эфирах на самые важные и интересные
                вопросы. Если вы хотите чтобы ответ на ваш вопрос был озвучен на ближайшем эфире, пожалуйста, заполните
                эту форму.
            </p>
        </div>


        <div class="mt-[40px]">
            <div class="form_input">
                <label for="firstName">Имя</label>
                <input class="input" list="options" type="text" name="firstName">
                <datalist id="options">
                    <option value="Вариант 1"></option>
                    <option value="Вариант 2"></option>
                    <option value="Вариант 3"></option>
                </datalist>
            </div>

            <div class="form_input mt-[30px]">
                <label for="text">Ваш вопрос</label>
                <textarea class="input" name="text" id="" v-model="text" maxlength="4000"
                    placeholder="Напишите ваш вопрос"></textarea>
                <p class="text-right"><span>{{ counterText }}</span> из 4 000</p>
            </div>

        </div>

        <button @click="isSubmit = true" :disabled="!canSubmit" class="setting_btn mt-[60px]">Зарегистрировать
            вопрос</button>

        <div class="mt-[30px]" v-if="isSubmit">
            <p class="text-[24px]">Спасибо! Ваша регистрация принята.</p>
        </div>

    </section>


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
</style>