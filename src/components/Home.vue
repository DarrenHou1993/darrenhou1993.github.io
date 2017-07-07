<template>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    }
  },
  methods: {
  },
  created() {
    console.log('home组件完成', this.$store)
  },
  watch: {
    selected: function (val, newVal) {
      console.log(val, newVal)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
