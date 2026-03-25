<script setup>
import { ref, inject } from "vue";
import { useUserStore } from "@/stores/user"
import { useRouter } from "vue-router";

const showAuth = inject('showAuth');

function closeAuth() {
    showAuth.value = false
}

const email = ref('')
const password = ref('')
const errorMsg = ref('')
const auth = useUserStore()
const router = useRouter()


const login = async () => {
    try {
        await auth.login(email.value, password.value)
        router.push('/')
        closeAuth()
    } catch (err) {
        console.error('Ошибка в login:', err)
        errorMsg.value = err.message
    }
}

</script>

<template>

    <div class="flex items-center justify-center h-full">
        <div v-click-outside="closeAuth"
            class="bg-[var(--background-card)] w-full max-w-[500px] h-fit p-10 rounded-3xl">
            <input v-model="email" type="email" placeholder="email">
            <input v-model="password" type="password" placeholder="Пароль" class="mt-5">
            <button @click="login" class="mt-7 bg-[var(--primary-color)] w-full">Войти</button>


        </div>
    </div>


</template>