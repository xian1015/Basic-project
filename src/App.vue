<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    mounted () {
      // 将sessionStorage 数据 赋值到vuex里
      sessionStorage.getItem('yazhuo') && this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(sessionStorage.getItem('yazhuo'))))

      // 在刷新之前 将vuex里的数据保存到sessionStorage中
      window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('yazhuo', JSON.stringify(this.$store.state))
      })
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: $aa;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  @import url('./assets/css/reset.css');
</style>
