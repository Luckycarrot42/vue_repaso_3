<template>
  <div>
    <h1 v-text="title"></h1>
  </div>
</template>

<script>
export default {
  props: {
    cliente: {
      type: String,
      default: 'Gakupo'
    }
  },
  computed:{
    title(){
      return `Nuestro cliente ${this.cliente.charAt(0).toUpperCase() + this.cliente.slice(1)} cree que somos penca`
    }
  }

}
</script>

<style>

</style>