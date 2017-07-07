<template>
  <div>
    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">侯栋樑的个人主页</h2>
    </md-toolbar>
    <router-view>
    </router-view>
  </div>
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
