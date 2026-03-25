<script setup>


function animate(el) {
    if (window.innerWidth < 2200) {
        el.classList.add('animate');
        setTimeout(() => {
            el.classList.remove('animate');
        }, 200);
    }
    else {
    }
}


</script>

<template>

    <section class="lg:md-[10px] w-full">
        <div class="flex flex-col flex-wrap md:flex-row lg:gap-[20px]">

            <div class="mt-[30px] order-1 w-full lg:max-w-[386px]">
                <h4 class="ml-[10px] tab_title !font-bold !text-[18px]">Кармическая программа</h4>
                <div class="flex justify-between items-center mt-[10px] calculations_tab tab">
                    <div class="relative w-full">
                        <img class="ambilight absolute" src="/public/test.png" alt="">
                        <img class="w-[200px] h-auto" src="/public/test.png" alt="">
                    </div>
                    <div class="relative bg-white w-full h-full flex justify-center items-center">
                        <img class="absolute w-[70px] h-[70px]" src="/public/profile/play_btn.webp" alt="">
                        <img class="absolute hidden" src="" alt="">
                    </div>
                </div>
            </div>

            <div class="mt-[30px] order-2 w-full lg:max-w-[386px]">
                <h4 class="ml-[10px] tab_title !font-bold !text-[18px]">Миссия </h4>
                <div class="flex justify-between items-center mt-[10px] calculations_tab tab">
                    <div class="relative w-full">
                        <img class="ambilight absolute" src="/public/test.png" alt="">
                        <img class="w-[200px] h-auto" src="/public/test.png" alt="">
                    </div>
                    <div class="relative bg-white w-full h-full flex justify-center items-center">
                        <img class="absolute w-[70px] h-[70px]" src="/public/profile/play_btn.webp" alt="">
                        <img class="absolute hidden" src="" alt="">
                    </div>
                </div>
            </div>

            <div @click="animate($event.currentTarget)"
                class="favorite_tab tab order-3 mt-[30px] min-h-[150px] flex flex-col justify-between items-center mb-[30px] lg:mb-0 md:order-4 lg:max-w-[183px] lg:max-h-[150px] lg:self-end">
                <h4 class="tab_title">Избранное</h4>
                <div></div>
            </div>


            <RouterLink to="/profile/question-answer" @click="animate($event.currentTarget)"
                class="tab flex gap-[10px] items-center mt-[10px] !p-[10px] order-5 md:order-6 w-full lg:max-w-[386px] lg:flex-col lg:justify-center">
                <div class="bg_icon"></div>
                <h4 class="tab_title">Задать вопрос Наталье</h4>
            </RouterLink>


            <RouterLink to="/profile/box" @click="animate($event.currentTarget)"
                class="tab flex gap-[10px] items-center mt-[10px] !p-[10px] order-5 md:order-6 w-full lg:max-w-[386px] lg:flex-col lg:justify-center">
                <div class="bg_icon"></div>
                <h4 class="tab_title">Ящик для ваших историй</h4>
            </RouterLink>

            <RouterLink to="/profile/extend-access" @click="animate($event.currentTarget)"
                class="tab small order-7 md:order-11">
                <div class="bg_icon"></div>
                <h4 class="tab_title">Продление доступа</h4>
            </RouterLink>

            <RouterLink to="/profile/edit-profile" @click="animate($event.currentTarget)"
                class="tab small order-8 md:order-3">
                <div class="bg_icon"></div>
                <p class="tab_title">Редактировать профиль</p>
            </RouterLink>

            <RouterLink to="/profile/settings" @click="animate($event.currentTarget)"
                class="tab small order-9 md:order-8">
                <div class="bg_icon"></div>
                <h4 class="tab_title">Настройки приложения</h4>
            </RouterLink>

            <div class="tab small order-10 md:order-9">
                <div class="bg_icon"></div>
                <h4 class="tab_title">Сменить пароль</h4>
            </div>

            <RouterLink to="/support" @click="animate($event.currentTarget)" class="tab small order-11 md:order-10">
                <div class="bg_icon"></div>
                <h4 class="tab_title">Написать в&nbsp;поддержку</h4>
            </RouterLink>


        </div>
    </section>

</template>


<style lang="scss" scoped>
.animate {
    transform: scale(0.9);
    transition: all 0.2s ease-in-out;
}

a {
    color: #fffefa;
}

.ambilight {
    filter: blur(30px);
    -webkit-filter: blur(30px);
    will-change: filter;
    opacity: 0.5;
}

.tab_title {
    font-size: 18px;
    font-weight: bold;
}

.calculations_tab {
    min-height: 152px;
}

.tab {
    padding: 20px;
    background-color: #222;
    border-radius: 20px;
    border: 1px solid #313131;
    box-shadow: 0 2px 8px 2px #3e3e3e6c;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    overflow: hidden;

    &:hover {
        box-shadow: 0 2px 16px 2px #5d5d5d;
    }

    .bg_icon {
        width: 50px;
        aspect-ratio: 1/1;
        border-radius: 100px;
        background-color: #C83B3B;
        transition: all 0.5s ease-in-out;
        z-index: 1;
    }

    .tab_title {
        z-index: 3;
    }

    &:hover .bg_icon {
        transform: scale(10);
    }


    &.small {
        display: flex;
        gap: 10px;
        align-items: center;
        padding: 10px;
        margin-top: 10px;
        width: 100%;
    }
}



.favorite_tab {
    background: #C83B3B;
    background: linear-gradient(45deg, rgba(200, 59, 59, 1) 0%, rgba(216, 97, 105, 1) 100%);
}


@media (min-width: 768px) {

    .tab_title {
        font-size: 16px;
        font-weight: 500;
        margin-top: 10px;
        min-height: 38px;
    }

    .tab {
        margin-top: 0;

        &.small {
            flex-direction: column;
            justify-content: center;
            max-width: 183px;
            max-height: 150px;
            margin-top: 0;
            align-self: end;
            padding: 20px;

            .tab_title {
                text-align: center;
            }
        }
    }


    .favorite_tab {
        background: #222;
        flex-direction: column-reverse;
    }

}
</style>