<template>
  <div class="skeleton">
    <div class="square"></div>
  
    <div class="line line__desc"></div>
  </div>
</template>

<script>

export default {
  name: 'ProductC',
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
  flex-direction: column;
  justify-content: space-around;
  width: 250px;
  height: 270px;
  padding:15px;
  //  max-width: 300px;
  //  width: 100%;
  background: #fff;
  margin: 25px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .2), 0 1px 8px 0 rgba(0, 0, 0, .12);

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
        height: 30px;
     }

     &__desc {
       height: 15px;
       width: 140px;
     }

     &__desc2 {
       height: 13px;
       width: 150px;
     }
  }
}
</style>