<template>
  <transition-group tag="div" class="clothes" @beforeEnter="beforeEnter" @move="move" @leave="leave" @enter="enter" appear>
    <Product v-for="(item, index) in items" :key="`el+${index}`" :data-index="index"/>
  </transition-group>
</template>

<script>
import {ref} from 'vue';
import {gsap} from 'gsap';
import Product from '@/components/Product';

export default {
  name: 'Clothes',
  setup() {
    const items = ref([
      {}, {}, {}, {}, {}, {}, {}, {}
    ])

    const beforeEnter = (el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(-30px)';
    };

    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        onComplete: done,
        delay: el.dataset.index * 0.3
      })
    };

    const move = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        position: 'absolute',
        y: 0,
        duration: 1,
        onComplete: done,
        delay: el.dataset.index * 0.3
      })
    };

    return { items, beforeEnter, enter, move };
  },
  components: {
    Product
  }
}
</script>

<style lang="scss">
.clothes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex: 1;
}
</style>