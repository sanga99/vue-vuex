import Vue from 'vue';
import Vuex from 'vuex';
import { fetchProdsList } from '../api/index.js';

Vue.use(Vuex);

/* 
(보는 순서)
    1. actions : axios로 데이터 가져옴
    2. mutations : actions에서 가져온 데이터를 state로 넘겨주기위한 중간다리 역할
    3. state : mutations에서 state에 데이터를 넣어준다.


*/

export const store = new Vuex.Store({
    state: {
        news: []
    },
    mutations: {
        // actions 에서 호출에온 api 데이터를 state로 옮겨주는 역할. 

        //    SET_NESW(state){      => mutations에서 state에 데이터를 넣어주기 위해 state를 인자로 주고 처리.
        //         state.news = 10;
        //    }
        SET_NEWS(state, news){      // => 두번째 인자는 actions에서 context.commit에서 담아주는 데이터 (를 state.news에 담는다)
            state.news = news;
        }
    },
    actions: {     // { commit } 으로 써주면, 밑에서 바로commit으로 쓸수 있다.(context.commit 아닌)
        FETCH_NEWS({ commit }){              // mutations에서 이에 접근하기 위해 context를 인자로 줘야한다.
            // (!!!) action에서 api호출를 한다!! 

            fetchProdsList()
                .then(({ data }) => {           // (!!!)  ({data}) 로 쓰면, data.data로 접근 하지 않고, 그냥 data로 뽑을 수 있다!! 
                                                //         단, res로 쓰면 안되고, 무조건 data로 써야함!!1
                    console.log(data);
                    // (!!!) 여기서 res를 state에 담으려면, 
                    //       this.state = res.data ( X ) => 안된다!!!
                    //       mutations에서 처리해야한다. 

                    // (!!!) mutatios에서 접근하려면, 또 여기서 context를 인자로 주고, context.commit('SET_MUTATIONS')를 해줘야 함!!.
                    // context.commit('SET_NEWS', data);           // -> context.commite() 으로 SET_NEWS에 res.data를 담아준다
                    commit('SET_NEWS', data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
    // getters,
    // actions,
})