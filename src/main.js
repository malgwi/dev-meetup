// eslint-disable-next-line to ignore the next line.
/* eslint-disable */

import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog.vue'
import EditMeetupDateDialog from './components/Meetup/Edit/EditMeetupDateDialog.vue'
import EditMeetupTimeDialog from './components/Meetup/Edit/EditMeetupTimeDialog.vue'
import RegisterDialog from './components/Meetup/Registraton/RegisterDialog.vue'

Vue.use(Vuetify, {
    theme: {
        primary: '#90CAF9',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    }
})

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog)
Vue.component('app-meetup-register-dialog', RegisterDialog)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
    created() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCviR3tESD9LOaFO6t03wx6jmS38stCKVg',
            authDomain: 'dev-meetup-370d5.firebaseapp.com',
            databaseURL: 'https://dev-meetup-370d5.firebaseio.com',
            projectId: 'dev-meetup-370d5',
            storageBucket: 'gs://dev-meetup-370d5.appspot.com',
        })
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.$store.dispatch('autoSignIn', user)
            }
        })
        this.$store.dispatch('loadMeetups')
    }
})