<template>
  <transition-group tag="ul" class="nav" @beforeEnter="beforeEnter" @leave="leave" @enter="enter" appear>
    <router-link v-for="(item, index) in navItems[currentRoute]" :to="item.path" :key="item.id" class="nav__item" :data-index="index">
      {{ item.name }}
    </router-link>
  </transition-group>
</template>

<script>
import {reactive, computed} from 'vue';
import {useRoute} from 'vue-router';
import gsap from 'gsap';

export default {
  name: 'Nav',
  setup() {
    const navItems = reactive({
      about: [
        {id: 'about', name: 'About', path: '/about'},
        {id: 'shop', name: 'Shop', path: '/shop'},
        {id: 'contact', name: 'Contact', path: '/contact'}
      ],
      shop: [
        {id: 'clothes', name: 'Clothes', path: '/clothes'},
        {id: 'accessories', name: 'Accessories', path: '/accessories'},
        {id: 'collections', name: 'Collections', path: '/collections'}
      ],
      contact: [
        {id: 'about', name: 'About', path: '/about'},
        {id: 'shop', name: 'Shop', path: '/shop'},
        {id: 'contact', name: 'Contact', path: '/contact'}
      ], 
      collections: [
        {id: 'clothes', name: 'Clothes', path: '/clothes'},
        {id: 'accessories', name: 'Accessories', path: '/accessories'},
        {id: 'collections', name: 'Collections', path: '/collections'}
      ],
      accessories: [
        {id: 'clothes', name: 'Clothes', path: '/clothes'},
        {id: 'accessories', name: 'Accessories', path: '/accessories'},
        {id: 'collections', name: 'Collections', path: '/collections'}
      ],
      clothes: [
        {id: 'clothes', name: 'Clothes', path: '/clothes'},
        {id: 'accessories', name: 'Accessories', path: '/accessories'},
        {id: 'collections', name: 'Collections', path: '/collections'}
      ]
    });

    const currentRoute = computed(() => useRoute().name);

    const beforeEnter = (el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(-30px)';
    };

    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: el.dataset.index * 0.2
      })
    };

    const leave = (el, done) => {
      gsap.to(el, {
        position: 'absolute',
        opacity: 0,
        y: '-10px',
        duration: 0,
        onComplete: done
      })
    }

    return { navItems, currentRoute, beforeEnter, enter , leave};
  }
}
</script>

<style lang="scss">

.nav {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 35px 0;

  &__item {
    position: relative;
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;

    &:not(:last-of-type) {
      margin-right: 25px;
    }

    &:after {
      position: absolute;
      display: 'block';
      content: '';
      background: none repeat scroll 0 0 transparent;
      left: 50%;
      bottom: 0px;
      height: 2px;
      background: #ccc;
      transition: width 0.3s ease, left 0.3s ease;
      width: 0;
    }

    &:hover {
      color: darkgray;

      &:not(.router-link-active):after {
        width: 100%;
        left: 0;
      }
    }

    + .nav__item:before {
      position: absolute;
      top: 4px;
      left: -15px;
      display: block;
      content: '';
      background: #333;
      width: 1px;
      height: 15px;
    }
  }
}

.router-link-active {
  color: darkgray;
  cursor: text;
}



.list-item {
  // position: absolute;
  transition: all 1s ease;
  display: inline-block;
  z-index: 1;
}


.list-enter-to {
  transition: all 1s ease;
  opacity: 1;
}

.list-enter-from {
  position: absolute;
  transition: all 1s ease;
  // transition: opacity 0.1s ease, transform 0.5s ease;
  opacity: 0;
  transform: translateY(-40px);
}

.list-leave-to {
  // position: absolute;
  // display: flex;
  transition: all 1s ease;
  // transition: opacity 0.1s ease, transform 0.5s ease;
  opacity: 0;
  transform: translateY(40px);
}

.list-enter-active {
  transition: all 0.5s ease;
  // position: absolute;
}

.list-leave-active {
  transition: opacity 0.1s ease, transform 0.4s ease;
  position: absolute;
}

.list-move {
  transition: all 0.8s ease;
}

</style>