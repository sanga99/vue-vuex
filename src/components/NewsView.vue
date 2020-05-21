<template>
  <div>
      {{ news }}
      <!-- computed 상(...mapState({...}) 안에) news 임. -->
  </div>
</template>

<script>
import { mapState } from 'vuex';         // 

export default {
    computed: {
        ...mapState({
            news: state => state.news
        })
    },
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