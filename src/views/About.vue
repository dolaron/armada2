<template>
  <div class="about">
    <img class="about__img" src="@/assets/arm.png"> 
    <p class="about__text">This portrait, suspended in the present, speaks about the future in a non-direct way by speaking to its past. Our identities are facades hiding knots of relationships between ideas, people and things. With what is sophisticated and popular, cultish or ordinary, of importance and of no importance at all. We think we can control our facades, our self images. A skillful eye will quickly discern scratches, leaks and blemishes.</p>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss">
  .about {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__img {
      position: absolute;
      top: 0;
      // max-width: calc(100% - 100px);
      // max-width: 100%;
      align-self: center;
      background-image: url(../assets/arm.png);
      background-size: 100% 100%;
      max-width: calc(100% - 100px);
    }

    &__text {
      z-index: 120;
      width: 80%;
      padding: 15px;
      margin: 30% 15% 0 30%;
      background: white;
      box-shadow: 0 0 12px #eee;
      border-radius: 2px;
    }
  }
</style>