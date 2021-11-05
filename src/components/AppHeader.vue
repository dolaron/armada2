<template>
  <div class="header" :class="{'header--scrolled': scrolled}">
    <div id="title" class="header__title" :class="{'header__title--scrolled': scrolled}">Tomasz Armada</div>
    <HeaderMenu/>
  </div>
</template>

<script>
import useScroll from '@/composables/useScroll';
import HeaderMenu from '@/components/HeaderMenu.vue';

export default {
  name: 'Header',
  setup() {
    const {scrolled, scroll} = useScroll();

    return {
      scrolled,
      scroll
    };
  },
  components: {
    HeaderMenu
  }
}
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  padding-left: 25px;
  justify-content: flex-start;
  
  flex: 1;
  width: 100%;
  z-index: 100;
  background: white;
  transition: box-shadow 0.2s ease;

  @media (min-width: 700px) {
    padding: 0;
    justify-content: center;
  }

  &--scrolled {
    box-shadow: 0 0 10px #eee;
  }

  &__title {
    display: flex;
    justify-content: center;
    font-family: 'Spectral';
    font-size: 27px;
    margin: 18px 0 18px 0;
    transition: transform 0.2s ease, margin 0.2s ease;

    &--scrolled {
      margin: 10px 0 10px 0;
    }
  }

  &__item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1;
  }

  // &__menu {
  //   display: flex;
  //   justify-content: flex-end;
  // }
}
</style>
