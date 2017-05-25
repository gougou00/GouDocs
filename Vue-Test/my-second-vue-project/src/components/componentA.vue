<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ msgfromfather }}</h2>
    <button v-on:click="onClickMe">open mouse~</button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        msg: 'hello from component a'
      }
    },
    props: ['msgfromfather'],
    events: {
      'onAddnew': function (items) {
        console.log(items)
      }
    },
    methods: {
      onClickMe: function () {
        // console.log(this.msgfromfather)
        // this.$emit('child-tell-me', this.msg)
        this.$dispatch('child-tell-me', this.msg)
      }
    }
  }
</script>


<style scoped>
  h1 {
    color: #42b983;
  }
</style>
