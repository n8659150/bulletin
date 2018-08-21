<template>
  
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      msg: 'Dashboard page'
    }
  },
  created() {
    // 获取当前登录用户状态
    let user = AV.User.current()
    // 如果已经登录则获取用户信息
    if (user) {
      this.user = {
        username: user.get('username'),
        createdAt: user.get('createdAt')
      }
    } else {
      console.log('当前未登录，正在跳转登录页面')
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
