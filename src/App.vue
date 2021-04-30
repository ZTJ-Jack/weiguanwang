<template>
  <div id="app">
    <div class="fixed_b" id="animat" @click="turnTo()">
      <img src="./assets/images/home.png" alt="">
    </div>
    <router-view />
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  mounted(){
   
  },
  methods:{
    turnTo(){
      console.log(window.location)
      console.log(window.location.hash)
      if(window.location.hash != '#/'){
        this.$router.push('/')
      }
    }
  }
};
</script>

<style>
  .fixed_b{
    width: 36px;
    height: 36px;
    background: rgba(0, 0, 0, .6);
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 50%;
    z-index: 999999;
  }
  .fixed_b img{
    width: 24px;
    height: 24px;
    display: block;
    margin: 6px auto ;
  }
</style>
