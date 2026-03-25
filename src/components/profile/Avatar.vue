<script setup>
import { ref } from "vue";



const hover = ref(false);
let avatar = ref('');


function avatarChange(event) {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = () => {
            avatar.value = reader.result
        }
        reader.readAsDataURL(file)
    }
}







</script>

<template>

    <section>

        <div>
            <p class="label">Аватар</p>
        </div>

        <div class="mt-[10px]">
            <p class="label sub_title">Мой аватар</p>
            <div class="flex gap-[30px] mt-[10px]">
                <div class="relative">
                    <div :class="['mask', { mask_hover: hover }]">+</div>
                    <input @mouseenter="hover = true" @mouseleave="hover = false" class="img img_input"
                        @change="avatarChange" accept="image/*" type="file">
                </div>

                <img class="img" v-if="avatar" :src="avatar" alt="">
            </div>
        </div>

        <div class="mt-[30px]">
            <p class="label sub_title">Аватар Magisterium</p>
            <ul>
                <li>
                    <img src="" alt="">
                </li>
            </ul>
        </div>


    </section>

</template>


<style scoped lang="scss">
.label {
    font-size: 14px;
    font-weight: 400;
}

.sub_title {
    color: var(--secondary-text)
}

.img {
    width: 70px;
    height: 70px;
    border-radius: 100px;
}

.mask {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 100px;
    font-size: 50px;
    font-weight: 100;
    border: 1px solid #383838;
    color: #383838;
    transition: all 0.3s ease-in-out;
    z-index: 1;

}

.mask.mask_hover {
    color: var(--primary-color);
    border-color: var(--primary-color);
}

.img_input {
    position: relative;
    background-color: transparent;
    opacity: 0;
    z-index: 100;
    cursor: pointer;
}
</style>