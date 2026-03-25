<script setup>

import { ref, watch } from 'vue'
import { supabase } from '../data.js'

let searchQuery = ref('');
let search = ref([]);


watch(searchQuery, async (q) => {
    if (!q) {
        search.value = []
        return
    }

    const { data, error } = await supabase
        .from('OfferDetails')
        .select('*')
        .textSearch('title', `${q}:*`, {
            type: 'raw',
        })


    if (!error) search.value = data
})

</script>

<template>

    <div class="search">
        <div class="search_input">
            <input v-model="searchQuery" class="input" type="text" placeholder="Поиск по курсам...">
            <div @click="$emit('hide-search'), searchQuery = ''" class="close_search"></div>
        </div>

        <ul v-if="searchQuery">

            <li v-for="item in search">
                <div class="img"></div>
                <div>
                    <p class="title">{{ item.title }}</p>
                    <p class="action">Действие</p>
                </div>

            </li>
        </ul>


        <div v-else>

            <h3>Недавно на платформе</h3>
            <ul>
                <li>
                    <div class="img"></div>
                    <div>
                        <p class="title">Нумерология</p>
                        <p class="action">Действие</p>
                    </div>

                </li>

                <li>
                    <div class="img"></div>
                    <div>
                        <p class="title">Урок 1</p>
                        <p class="action">Действие</p>
                    </div>

                </li>

                <li>
                    <div class="img"></div>
                    <div>
                        <p class="title">Высшие касты</p>
                        <p class="action">Действие</p>
                    </div>

                </li>

            </ul>
        </div>
    </div>


</template>

<style scoped>
.search_input {
    position: relative;
}


.close_search {
    width: 30px;
    height: 30px;
    background-color: red;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    cursor: pointer;
}

.img {
    background-color: gray;
    width: 50px;
    height: 65px;
    border-radius: 10px;
    min-width: 50px;
}

.search {
    padding: 10px 10px 20px 10px;
    background-color: #121212;
    overflow-y: scroll;
}

.input {
    width: 100%;
    height: 70px;
    padding: 10px;
    color: #fffefa;
    background-color: #333;
    border-radius: 10px;
    font-size: 24px;
}

h3 {
    margin-top: 30px;
    font-weight: 200;
    font-size: 24px;
}

ul {
    margin-top: 15px;
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

li {
    display: flex;
    align-items: center;
    gap: 10px;
}

p {
    font-size: 14px;
}

.action {
    color: rgb(231, 166, 105);
}
</style>