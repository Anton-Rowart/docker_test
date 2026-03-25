<script setup>
import { RouterLink } from 'vue-router'

let links = [
    { name: 'Главная', to: '/' },
    { name: 'Библиотека', to: '/library' },
    { name: 'Мои курсы', to: '/my-courses' },
    // { name: 'Войти', to: '/login' },
    { name: 'Профиль', to: '/profile' },

]

</script>

<template>
    <section class="menu_container">
        <div class="menu">
            <ul>
                <li v-for="link in links" :key="link.to">
                    <RouterLink :to="link.to">{{ link.name }}</RouterLink>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.menu_container {
    padding: 0px 20px 20px 20px;
}

.menu {
    background-color: #222;
    width: auto;
    height: 65px;
    border-radius: 20px;
}

ul {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 15px;
}

li>a {
    color: #fffefa;
    font-size: 11px;
}
</style>