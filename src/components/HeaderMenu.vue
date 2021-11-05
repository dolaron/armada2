<template>
  <div class="menu__wrapper">
    <div v-show="isVisible" class="menu__wrapper--open"></div>
    <div v-click-away="hideMenu" class="menu" :class="{'menu--scrolled': scrolled}">
      <button @click="showMenu" class="menu__header" style="transform: translate(0,0);"
              :class="{'menu__header--open': isVisible}">Menu</button>
      <div class="menu__lang">PL</div>
      <ul class="menu__items" :class="{'menu__items--visible': isVisible}">
        <li v-for="title in Object.keys(menuItems)" :key="title" class="menu__group">
           <template v-for="(item, index) in menuItems[title]" :key="item.id">
            <div v-if="index === 0" class="menu__group__title">{{ item.group }}</div>
            <router-link :to="item.path" @click="hideMenu" class="menu__item">{{ item.name }}</router-link>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import useScroll from '@/composables/useScroll';
import {ref, computed, watch} from 'vue';
import {useRoute} from 'vue-router';

export default {
  name: 'HeaderMenu',
  setup() {
    const {scrolled, scroll} = useScroll();

    const isVisible = ref(false);

    watch(isVisible, (value) => {
      const app = document.getElementById('content');
      const appTitle = document.getElementById('title');
      if (value) {
        app.style.transform = 'translate(-244px, 0)';
        appTitle.style.transform = 'translate(-244px, 0)';
      } else {
        app.style.transform = 'translate(0, 0)';
        appTitle.style.transform = 'translate(0, 0)';
      }
    });

    const showMenu = () => {
      isVisible.value = !isVisible.value;
    }

    const hideMenu = () => {
      isVisible.value = false;
    };

    const menuItems = ref({
      me: [
        {id: 'about', name: 'about', group: 'ME', path: '/about'},
        {id: 'contact', name: 'contact', group: 'ME', path: '/contact'}
      ],
      shop: [
        {id: 'clothes', name: 'clothes', group: 'SHOP', path: '/clothes'},
        {id: 'accessories', name: 'accessories', group: 'SHOP', path: '/accessories'},
        {id: 'collections', name: 'collections', group: 'SHOP', path: '/collections'}
      ]
    });

    const currentRoute = computed(() => useRoute().name);

    return {
      scrolled,
      scroll,

      isVisible,
      showMenu,
      hideMenu,
      menuItems,
      currentRoute
    }
  }
}
</script>

<style lang="scss">

:root {
  --menu-color: #808080;
  --lines-color: #eee;
  --menu-lines-weight: 2px;
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.menu {
  position: relative;
  display: flex;
  flex: 0.7;
  justify-content: center;
  font-family: '';
  margin-top: 4px;
  transition: margin 0.2s ease;

  @media (min-width: 700px) {
    justify-content: space-between;
  }

  &--scrolled {
    margin-top: -4px;
  }
  
  &__wrapper {
    position: absolute;
    width: 150px;
    transition: width 0.5s ease;

    @media (min-width: 700px) {
      width: 200px;
    }
    top: 23px;
    right: 0;

    &--open {
      position: fixed;
      content: '';
      display: block;
      top: 0;
      right: 212px;
      bottom: 0;
      left: 0;
      opacity: 1;
      background: rgba(255,255,255,0.5);
      z-index: 150;
      // transform: rotate(0deg);
    }
  }

  &__lang {
    // display: flex;
    display: none;
    flex: 0.3;
    align-items: center;
    justify-content: center;
    margin-right: 65px;
    z-index: 160;

    @media (min-width: 700px) {
      display: flex;
    }
  }

  &__header {
    position: relative;
    font-family: 'Spectral';
    padding: 0;
    margin-right: 4px;
    font-size: 18px;
    background: white;
    border: 0;
    transition: color 0.4s ease, letter-spacing 0.4s ease;
    height: auto;
    cursor: pointer;
    z-index: 160;

    &:after,
    &:before {
      position: absolute;
      display: block;
      content: '';
    }

    &:after {
      // background: none repeat scroll 0 0 transparent;
      left: 50%;
      bottom: -1px;
      height: var(--menu-lines-weight);
      background: #ccc;
      transition: width 0.3s ease, height 0.3s ease, left 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
      width: 0;
    }

    &:hover {
      color: var(--menu-color);
      // letter-spacing: 1px;

      &:after {
        width: 100%;
        left: 0;
      }
    }

    &--open {
      color: var(--menu-color);
      transition: height 0.3s ease 0s !important;

      &:after {
        width: 187px !important;
        left: 0;
        box-shadow: 0 1px 2px 0px #eee;
        background: #eee;
      }
    }
  }

  &__group {
    position: relative;
    list-style: none;
    padding-left: 8px;
    color: #ccc;
    z-index: 170;

    &:last-of-type {
      padding-bottom: 50px;
    }
  }

  &__items {
    position: absolute;
    top: -26px;
    left: -5px;
    display: flex;
    flex-direction: column;
    margin: 0 0 0 -12px;
    padding: 63px 0 50px 10px;
    width: 220px;
    height: 100vh;
    border-radius: 3px;
    transition: transform 0.2s ease;
    transform: translateX(244px);
    overflow-y: scroll;
    z-index: 150;
    background: white;

    &:after,
    &:before {
      position: absolute;
      display: block;
      content: '';
    }

    &:after {
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: white;
      z-index: 130;
      transform: translate(-244px, 0);
    }

    &:before {
      background: none repeat scroll 0 0 transparent;
      top: -14px;
      left: 4px;
      background: var(--lines-color);
      width: var(--menu-lines-weight);
      height: 0;
    }

    &--visible {
      transform: translateX(0);
      
      &:before {
        // animation-duration: 0.2s;
        // animation-name: show;
        top: 0;
        // height: calc(95vh - 20px);
        transition: height 0.5s ease 0.1s, width 0.5s ease 0.1s;
        height: 100%;
        box-shadow: -2px 0 3px 0px #eee;
      }
    }
  }
  
  &__item {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 5px;
    list-style: none;
    color: #333;
    text-decoration: none;
    font-size: 18px;
    text-align: left;
    border: 2px solid transparent;
    transition: border-color 0.2s ease, color 0.2s ease;

     &:after:not(:last-of-type) {
      position: absolute;
      display: block;
      bottom: 0;
      left: 0;
      height: 1px;
      background: #ccc;
      width: 100%;
      content: '';
    }
  }
}
</style>