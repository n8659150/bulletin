<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    const APP_ID = ''
    const APP_KEY = ''
    AV.init({
      appId: APP_ID,
      appKey: APP_KEY
    })
  }
}
</script>

<style>

</style>
