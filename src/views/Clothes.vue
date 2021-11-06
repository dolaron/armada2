<template>
  <!-- <transition-group tag="div" ref="clothes" class="clothes" appear> -->
  <div class="clothes" ref="clothes">
    <ShopItem key="item1" refson="item1" :imgSrc="require('@/assets/croptop.jpg')" :imgFirst="true"/>
    <ShopItem key="item2" refson="item2" :imgSrc="require('@/assets/kurtka-prpl.jpg')" :imgFirst="false"/>
    <ShopItem key="item3" refson="item3" :imgSrc="require('@/assets/bluza-fre1.jpg')" :imgFirst="true"/>
    <ShopItem key="item4" refson="item4" :imgSrc="require('@/assets/bluza-tokyo.jpg')" :imgFirst="false"/>
    <ShopItem key="item5" refson="item5" :imgSrc="require('@/assets/plaszcz-wzor3.jpg')" :imgFirst="true"/>
    <ShopItem key="item6" refson="item6" :imgSrc="require('@/assets/kurtka-beige1.jpg')" :imgFirst="false"/>
  </div>
  <!-- </transition-group> -->
</template>

<script>


import ShopItem from '@/components/ShopItem';

export default {
  name: 'Clothes',
  components: {
    ShopItem
  }
}
</script>

<style lang="scss">
.clothes {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}
</style>