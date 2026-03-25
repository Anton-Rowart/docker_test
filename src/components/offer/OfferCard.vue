<script setup>

const { offer } = defineProps({
    offer: {
        type: Object,
        required: true,
    },
});


</script>


<template>
    <RouterLink :to="{ name: 'OfferPage', params: { slug: offer.slug } }">

        <section class=" offer_card w-[180px] h-fit cursor-pointer relative lg:w-[220px]">
            <div
                class="img overflow-hidden rounded-[10px] bg-[#313131] border-[1px] border-[#313131] w-full h-fit relative shadow-[0px_2px_8px_2px_#3e3e3e6c] transition-all duration-300 ease-in-out">
                <img class="w-full h-auto" :src="offer.img" alt="">
                <div v-if="offer.label"
                    class="absolute top-2 left-2 bg-[#d60300] text-[#fffefa] rounded-[100px] px-1 z-[9999]">{{
                        offer.label
                    }}
                </div>
            </div>
            <div>
                <h3 class="mt-[10px] text-[16px] text-[#fffefa]">{{ offer.name }}</h3>
                <p class="action text-[14px] text-[var(--primary-color)]">Покупка</p>
            </div>
        </section>
    </RouterLink>

</template>

<style scoped lang="scss">
.offer_card::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.offer_card:hover {

    & .img {
        transform: scale(1.035);
        box-shadow: 0px 2px 12px 2px #5d5d5d;
    }
}

img {
    transform: scale(1.05);
}
</style>