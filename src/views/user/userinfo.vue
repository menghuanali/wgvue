<template>
<div>
    <div>Name: {{getName}}</div>
    <img v-bind:src="getIcon" alt="">
 </div>
</template>

<script>
export default {
  name: "userinfo",
  data(){
      return {
        
      }
  },
  computed : {
      getName(){
          return this.$store.getters.name
      },
      getIcon(){
          return this.$store.getters.avatar
      }
  },
  mounted : function(){
      this.$store.dispatch("GetInfo");
  },
}
</script>
