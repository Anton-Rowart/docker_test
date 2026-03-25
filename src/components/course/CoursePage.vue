<script setup>
import { ref, computed } from "vue";
import { useRoute } from 'vue-router';
import { useUserCourseStore } from "@/stores/userCourse";

const userCourseStore = useUserCourseStore();
const userCourse = ref(null);


const route = useRoute();
const slug = route.params.slug;

userCourse.value = userCourseStore.getCourseBySlug(slug);

console.log(userCourse)

function backBtn() {
}

</script>

<template>

    <section class="w-full z-[100] h-fit">

        <div v-bind:style="{ backgroundImage: `url(${userCourse.course.img})` }"
            class="w-full flex justify-center h-fit mb-[100px]">
            <div class="mask flex justify-center">
                <div class="max-w-[1200px] w-full mt-[80px]">
                    <div class="flex justify-between w-full relative z-[9999]">
                        <div @click="backBtn()"
                            class="w-[50px] h-[50px] rounded-full bg-[var(--nav-btn-color)] cursor-pointer">
                        </div>
                        <div class="w-[50px] h-[50px] rounded-full bg-[var(--nav-btn-color)] cursor-pointer"></div>
                    </div>


                    <div class="flex items-end mt-[20px] gap-[20px]">

                        <div>

                            <img v-if="userCourse.course.img" :src="userCourse.course.titleImg" class="max-w-[200px]"
                                src="" alt="">
                            <h2 v-else="">{{ userCourse.course.title }}</h2>
                            <p v-if="userCourse.course.description" class="mt-[20px]"> {{ userCourse.course.description
                            }} </p>

                            <div class="mt-[20px]">
                                <button class="rounded-full">Оставить отзыв</button>
                            </div>

                            <p class="text-[#fffefa50] max-w-[500px] text-[14px] mt-[50px]">Все материалы, полученные в
                                MAGISTERIUM, для Вашего личного пользования. Пожалуйста, не делитесь ими
                                с&nbsp;родственниками, друзьями, знакомыми, во&nbsp;избежание кармических последствий
                                для&nbsp;Вас и&nbsp;для них!</p>

                        </div>


                        <div class="relative min-w-[700px] max-w-[700px] hidden lg:block">
                            <img class="ambilight_img rounded-[10px] aspect-video" :src="userCourse.course.img" alt="">
                            <div></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="w-full max-w-[1200px] mx-auto mt-[30px] flex gap-[20px] text-[15px]">
            <div class="module !bg-[#4568dc]">
                Уроки 1-10
            </div>
            <div class="module">
                Уроки
                11-20</div>
            <div class="module">
                Уроки
                21-30</div>
        </div>

    </section>

</template>


<style scoped lang="scss">
.mask {
    width: 100%;
    background: radial-gradient(ellipse farthest-side at 165% -30%, rgba(18, 18, 18, 0), rgba(18, 18, 18, 0.5), rgba(18, 18, 18, 1));
}

.module {
    padding: 12px 24px;
    font-family: 'Roboto';
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #222;
    min-width: 180px;
    min-height: 55px;
    color: #fffefa;
    border: 1px solid #313131;
    box-shadow: rgba(62, 62, 62, 0.5) 0px 2px 8px 2px;

}
</style>