<template>
  <div>
      {{ datas }}
  </div>
</template>

<script>
import { fetchProdsList } from '../api/index.js';

export default {
    data() {
        return {
            datas: [],
        }
    },
    created() {
        fetchProdsList()
            .then( res => {
                this.datas = res.data.data;
            })
            .catch(err => {
                console.log(err);
            })
    },

}
</script>

<style>

</style>