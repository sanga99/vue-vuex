<template>
  <div>
      {{ this.$store.state.news }}
  </div>
</template>

<script>
// import { fetchProdsList } from '../api/index.js';

export default {
    // data() {
    //     return {
    //         datas: [],
    //     }
    // },
    created() {

        this.$store.dispatch('FETCH_NEWS');

        // fetchProdsList()
        //     .then( res => {
        //         this.datas = res.data.data;
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    },

}
</script>

<style>

</style>