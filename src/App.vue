<template>
  <router-view>
  </router-view>
</template>
<script>


export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {
  },
  created() {
    console.log('app组件完成', this.$store)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
