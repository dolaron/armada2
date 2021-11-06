<template>
  <div class="shop-item__section" :style="imageFirst">
      <img class="shop-item__section__img" :src="imgSrc" :ref="refson" />
      <div class="shop-item__section__text"> Dojebana kurteczka która nie ssie pałki tak jak inne rzeczy </div>
    </div>
</template>

<script>
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ShopItem',
  props: {
    imgFirst: {
      type: Boolean,
      default: true
    },
    imgSrc: {
      type: String,
      default: ''
    },
    refson: {
      type: String,
      default: ''
    }
  },
  computed: {
    imageFirst() {
      return {
        '--img-order': this.imgFirst ? '0' : '2'
      };
    }
  },
  mounted() {

    this.myTween = gsap.from(this.$refs[this.refson], {
      scrollTrigger: {
        trigger: this.$refs[this.refson],
        start: "10% 10%",
        scrub: true,
        markers: true,
        toggleActions: "play play play play"
      },
      x: 400,
      rotation: 360,
      duration: 3
    });
  }

  // setup(props) {
  //   const imageFirst = computed(() => {
  //     return {
  //       '--img-order': props.imgFirst ? '0' : '2'
  //     };
  //   });

  //   return {
  //     imageFirst,
  //     props
  //   }
  // }
};
</script>

<style lang="scss">
.shop-item {
  &__section {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    height: 100vh;
    justify-content: space-evenly;

    &__text {
      display: flex;
      justify-content: center;
      align-items: center;
      order: 1;

      @media (min-width: 660px) {
        order: 1;
      }
    }

    &__img {
      order: 0;
      height: 100%;
      // min-width: 100%;
      max-width: 100%;
      object-fit: cover;
      vertical-align: bottom;

      @media (min-width: 660px) {
        order: var(--img-order);
      }
    }
  }
}
</style>