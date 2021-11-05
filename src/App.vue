<template>
  <div class="app">
    <AppHeader />
    <div id="content" class="content">
      <AppNav />
      <router-view v-slot="{Component}">
        <transition name="route" mode="out-in">
          <component id="component" :is="Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import AppNav from '@/components/AppNav';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppNav
  },
  mounted() {
    this.$router.replace({path: '/about'});
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@300&display=swap');

body {
  position: relative;
  margin: 0;
  padding: 0;
  font-family: 'Spectral';
  overflow-x: hidden;
  // overflow-y: scroll;
}

.app {
  margin: 0;
  padding: 0;
}

.content {
  margin: 0;
  transition: transform 0.2s ease;
  padding: 55px 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active,
.route-leave-active {
  transition: all 0.3s ease;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}


.route-right-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-right-enter-active,
.route-right-leave-active {
  transition: all 0.3s ease;
}

.route-right-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}


.route-left-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-left-enter-active,
.route-left-leave-active {
  transition: all 0.3s ease;
}

.route-left-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}


</style>
