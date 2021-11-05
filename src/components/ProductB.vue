<template>
  <div class="skeleton">
    <div class="skeleton__side" :style="flexOrder">
      <div class="square"></div>
      <div class="line line__title"></div>
    </div>
    <div class="skeleton__side skeleton__side-b">
      <div class="line line__desc"></div>
      <div class="line line__desc2"></div>
      <div class="line line__desc3"></div>
      <div class="line line__desc4"></div>
      <div class="line line__desc5"></div>
    </div>
  </div>
</template>

<script>
import {computed} from 'vue';

export default {
  name: 'ProductB',
    props: {
      second: {
        type: Boolean,
        default: false
      }
  },
  setup(props) {
    const flexOrder = computed(() => {
      return {
        '--order': props.second ? '2' : '0'
      }
    });
    
    return {
      flexOrder
    };
  }
}
</script>

<style lang="scss" scoped>
 @keyframes wave-lines {
    0% {
        background-position: -468px 0;
    }
     100% {
        background-position: 468px 0;
    }
}
 @keyframes wave-squares {
    0% {
        background-position: -468px 0;
    }
     100% {
        background-position: 468px 0;
    }
}

.skeleton {
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
  height: 270px;
  padding:15px;
  //  max-width: 300px;
  //  width: 100%;
  background: #fff;
  margin: 30px 50px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .2), 0 1px 8px 0 rgba(0, 0, 0, .12);
  flex-wrap: wrap;

  &__side {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 25px 50px;

    @media (min-width: 660px) {
      order: var(--order);
    }
  }

  &__side-b {
    order: 1;
    align-items: flex-start !important;
    margin: 25px 50px !important;

    @media (min-width: 660px) {
      margin: 25px 55px 25px 25px !important;
      order: var(--order);
    }
  }

  .square {
    margin: 15px 0;
    width: 130px;
    height: 130px;
    border-radius: 5px;
    background: rgba(130, 130, 130, 0.2);
    background: -webkit-gradient(linear, left top, right top, color-stop(8%, rgba(130, 130, 130, 0.2)), color-stop(18%, rgba(130, 130, 130, 0.3)), color-stop(33%, rgba(130, 130, 130, 0.2)));
    background: linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%);
    background-size: 800px 100px;
    animation: wave-squares 2s infinite ease-out;

    &__square2 {
      width: 140px !important;
    }
  }

  .circle {
    border-radius: 50% !important;
    height: 130px !important;
    width: 130px;
  }

  .line {
    margin: 15px 0;
     margin-bottom:6px;
     border-radius: 2px;
     background: rgba(130, 130, 130, 0.2);
     background: -webkit-gradient(linear, left top, right top, color-stop(8%, rgba(130, 130, 130, 0.2)), color-stop(18%, rgba(130, 130, 130, 0.3)), color-stop(33%, rgba(130, 130, 130, 0.2)));
     background: linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%);
     background-size: 800px 100px;
     animation: wave-lines 2s infinite ease-out;

     &__title {
        width: 100px;
        height: 33px;
     }

     &__desc {
       align-self: flex-start;
       height: 20px;
       width: 150px;

       @media (min-width: 660px) {
         width: 50%;
       }
     }

     &__desc2 {
       height: 10px;
       width: 220px;

       @media (min-width: 660px) {}
     }
      
      &__desc3 {
       height: 13px;
       width: 178px;

       @media (min-width: 660px) {}
     }

      &__desc4 {
       height: 15px;
       width: 160px;

       @media (min-width: 660px) {}
     }

      &__desc5 {
       height: 14px;
       width: 188px;

       @media (min-width: 660px) {}
     }
  }
}
</style>