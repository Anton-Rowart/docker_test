<script setup>
import { ref, provide } from "vue";

import Search from "../src/components/Search.vue";
import Menu from "../src/components/Menu.vue";
import Footer from "../src/components/Footer.vue";
import Auth from "../src/components/Auth.vue";
import Header from "../src/components/Header.vue";
import Highlights from "../src/components/highlights/Highlights.vue";
import HighlightsTest from "./components/highlights/HighlightsTest.vue";


// show modal search
const showSearch = ref(false);
provide('showSearch', showSearch)


// show modal auth
const showAuth = ref(false);
provide('showAuth', showAuth)


// show modal highlights
const showHighlights = ref(false);
const selectedHighlight = ref(null);
const indexHighlightItem = ref(1);
provide('showHighlights', showHighlights)
provide('selectedHighlight', selectedHighlight)
provide('indexHighlightItem', indexHighlightItem)



</script>

<template>


  <main class="flex flex-col min-h-screen">

    <div id="mainContainer" class="scroll flex-grow">
      <div class="hidden justify-center w-full relative z-[9999] lg:flex">
        <Header />
      </div>
      <router-view />
      <div class="bg-[#141414]">
        <Footer />
      </div>
    </div>


    <section :class="'search', { 'active': showSearch }">
      <Search @hide-search="showSearch = false" />
    </section>


    <!-- Секция highlights с багом при монтировании компонента -->

    <!-- <section v-if="showHighlights === true" :class="'highlights'">
      <Highlights :highlight="selectedHighlight" :index="indexHighlightItem" />
    </section> -->


    <!-- <section :class="['highlight', { 'active': showHighlights }]">
      <HighlightsTest :highlight="selectedHighlight" :index="indexHighlightItem" />
    </section> -->


    <!-- Тестова секция highlights, которая монтируется один раз -->

    <section :class="['highlights', { 'active': showHighlights }]">
      <keep-alive>
        <Highlights v-if="showHighlights" :highlight="selectedHighlight" :index="indexHighlightItem" />
      </keep-alive>
    </section>



  </main>



  <section v-if="showSearch === false" class="menu lg:hidden">
    <Menu />
  </section>

  <section :class="['auth', { 'active': showAuth }]">
    <Auth />
  </section>



</template>

<style scoped lang="scss">
.header {
  overflow-y: hidden;
}


.highlight {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: -100%;
  width: 400px;
  height: 800px;
  background-color: red;
  backdrop-filter: blur(10px);
  z-index: 9999;

  &.active {
    left: 0%;
  }
}



.highlights {
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #12121280;
  backdrop-filter: blur(10px);
  z-index: 9999;

  &.active {
    display: flex;
  }
}

.auth {
  position: fixed;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #12121250;
  backdrop-filter: blur(10px);
}

.auth.active {
  top: 0;
}

.search {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  width: 100%;
  height: 100%;
  transform: translateY(-100%);
  background-color: #121212;
}

.search.active {
  transform: translateY(100%);
}

.menu {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.scroll {
  overflow-y: scroll;
  height: 100vh;
}
</style>
