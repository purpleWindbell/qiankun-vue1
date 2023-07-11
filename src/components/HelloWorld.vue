<!--
 * @Description: 
 * @StartVersion: 2.0
 * @LastVersion: 2.0
 * @Autor: gaoyue
 * @Date: 2023-06-30 14:35:45
 * @LastEditTime: 2023-07-11 14:44:05
-->
<template>
  <div class="hello">
    <h1 class="test">vue1</h1>
    <el-link type="primary">主要链接</el-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   mounted() {
    console.log('window==========',window.a, window.b)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

h3 {
  margin: 40px 0 0;
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
