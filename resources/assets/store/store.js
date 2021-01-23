
import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import auth from './auth';


Vue.use(Vuex)

function addDays(noOfDays) {
    return (noOfDays * 24 * 60 * 60 * 1000)
}

//=======vuex store start===========
const store = new Vuex.Store({
    state: {
        left_open: true,
        preloader: true,
        site_name: "Belhasa",
        page_title: null,
        user: {
            name: "Ayesha",
            picture: require("img/authors/prf4.jpg"),
            job: "Project Manager"
        },
        customer_option: {
            text_language: '',
            voice_language:'',
            category: '             '
        },
        cal_events: [
            {
                id: 0,
                title: 'Office',
                start: Date.now(),
                end: Date.now() + addDays(1)
            },
            {
                id: 1,
                title: 'Holidays',
                start: Date.now() + addDays(3),
                end: Date.now() + addDays(4)
            }
        ],
        // Add your application keys
        gmap_key: 'AIzaSyBTnQCx3FXEnfWPPWTKAwIxt6wSjAn_8ug',
        openWeather_key: 'c00194f61244d2b33b863bff6d94e663',
        google_analytics_key: null

    },
    mutations: mutations,
    modules: {
        auth
    }
})
//=======vuex store end===========
export default store
