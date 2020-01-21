<template>
  <div class="pace  pace-inactive" v-show="show">
    <div
      class="pace-progress"
      data-progress-text="100%"
      data-progress="99"
      :style="{ transform: translate3d }"
    >
      <div class="pace-progress-inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      progress: 0
    }
  },
  computed: {
    translate3d() {
      return `translate3d(${this.progress}%, 0px, 0px)`
    }
  },
  mounted() {
    let timer
    this.$router.beforeEach((to, from, next) => {
      this.progress = 0
      this.show = true
      timer = setInterval(() => {
        this.progress++
      }, 100)
      next()
    })
    this.$router.afterEach((to, from) => {
      this.progress = 100
      clearInterval(timer)
      this.show = false
    })
  }
}
</script>

<style scoped>
.pace .pace-progress {
  background: #3eaf7c;
  position: fixed;
  z-index: 2000;
  top: 0;
  right: 100%;
  width: 100%;
  height: 2px;
}
</style>
