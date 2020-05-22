<template>
  <div>
      {{ fetchedNews }}
      <!-- computed 상(...mapState({...}) 안에) news 임. -->
  </div>
</template>

<script>
import {  mapGetters } from 'vuex';         // 
// import { mapState, mapGetters } from 'vuex';         // 

export default {
    computed: {

        // 3. mapGetters 이용
        // ...mapGetters({             //  ... 는 스프레드 오퍼레이터(Spread Operator). => 배열, 객체를 풀어서 넣어줌 
        //     fetchedNews: 'fetchedNews',
        // }),

        // 4. mapGetters를 배열형태로 하면 하나의 인자로 쓸수 있다
        ...mapGetters([
            'fetchedNews'
        ]),

        /*
        [ this.$store.state 값 가져오기 방법]

        1. this.$store.state.변수 
        news(){
            return this.$store.state.news;
        }

        2. mapState 이용
         ...mapState({
            news: state => state.news
        })
        */

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