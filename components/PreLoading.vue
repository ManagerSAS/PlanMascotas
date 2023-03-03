<template>
    <v-overlay style="z-index: 1000" v-if="loading" :value="overlay" opacity="0.8">
        <v-img src="/LogoOlivos.gif"> </v-img>
    </v-overlay>
</template>
<script>
  export default {
    data: () => ({
      loading: true,
      overlay: true,
    }),
    methods: {
      start() {
        this.loading = true
        this.overlay = true
      },
      finish() {
        this.loading = false
        this.overlay = false
      },
      fail(error) {
        console.log(error)
      },
      increase(num) {
        // console.log(num)
      },
    },
  }
  </script>