import throttle from 'lodash/throttle';
import {ref, onMounted, onUnmounted} from 'vue';

export default function useScroll() {
  const scrolled = ref(false);

  const scroll = throttle(() => {
    if (window.scrollY > 0) {
      scrolled.value = true;
    } else {
      scrolled.value = false;
    }
  }, 100);

  onMounted(() => {
    window.addEventListener('scroll', scroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', scroll);
  });

  return {
    scrolled,
    scroll
  };
}
