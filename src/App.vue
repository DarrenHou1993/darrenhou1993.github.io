<template>
  <div>
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">侯栋樑的个人主页</h2>
    </md-toolbar>
    <!--左侧区域-->
    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">我的信息</h3>
        </div>
      </md-toolbar>
      <md-list>
        <md-list-item>
          <md-icon>person</md-icon>
          <span>个人信息</span>
          <md-list-expand>
            <md-list>
              <md-list-item class="md-inset">个人简介</md-list-item>
              <md-list-item class="md-inset">个人作品</md-list-item>
              <md-list-item class="md-inset">哈哈</md-list-item>
            </md-list>
          </md-list-expand>
        </md-list-item>


        <md-list-item>
          <md-icon>call</md-icon>
          <span>联系我</span>
        </md-list-item>
        <md-list-item>
          <md-icon>information</md-icon>
          <span>关于</span>
        </md-list-item>
      </md-list>
    </md-sidenav>
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
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    open(ref) {
      console.log('Opened: ' + ref);
    },
    close(ref) {
      console.log('Closed: ' + ref);
    }
  },
  created() {
    console.log('app组件完成', this.$store)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
