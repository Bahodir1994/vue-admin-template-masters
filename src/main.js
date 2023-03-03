import Vue from 'vue';
import App from './App';
import router from './router';

import store from './config/store'

import 'vuetify/dist/vuetify.min.css';
import faFontAwesome from 'font-awesome/css/font-awesome.css';

import Vuetify from 'vuetify';

import 'material-design-icons-iconfont/dist/material-design-icons.css';
import './styles/global.css';

import axios from 'axios'
import VueAxios from 'vue-axios'
import Keycloak from "keycloak-js";
Vue.use(VueAxios, axios);
import VueChartkick from 'vue-chartkick';
import Chart from 'chart.js';
import fullCalendar from 'vue-fullcalendar';
import { setupComponents } from './config/setup-components';

import { setupAndGetI18n } from './config/setup-i18n';
const i18n = setupAndGetI18n(Vue);
import swatches from 'vue-swatches';
import "vue-swatches/dist/vue-swatches.min.css"

Vue.use(VueChartkick, { adapter: Chart });
Vue.component('full-calendar', fullCalendar);
Vue.component('swatches', swatches);
Vue.component('faFontAwesome', faFontAwesome);
setupComponents(Vue);
Vue.use(Vuetify);
Vue.config.productionTip = false

let initOptions = {
  url: 'http://localhost:8080',
  realm: 'spring-project-v1-realm',
  clientId: 'sbpv1-client',
  onLoad: 'login-required'
}

const keycloak = Keycloak(initOptions);
keycloak.init({ onLoad: initOptions.onLoad, checkLoginIframe: false }).then((auth) => {
  if (!auth) {
    window.location.reload();
  }
  else {
    console.log("Authenticated");
    const app = new Vue({
      el: '#app',
      router,
      i18n,
      store,
      components: { App },
      template: '<App/>',
      data: {
        myapp: keycloak,
        themeColor: '#1D2939',
        userEmail: 'admin@yopmail.com',
        userPassword: '123456'
      },

      methods: {
        setLanguage(language) {
          const vm = this;

          localStorage.setItem('language', language);

          document.documentElement.lang = language;

          vm.$i18n.locale = language;

          vm.$vuetify.lang.current = language;
        }
      },

      created() {
        const vm = this;

        vm.setLanguage('en');},
    })
  }
  let payload = {
    idToken: keycloak.idToken,
    accessToken: keycloak.token
  }
  if ((keycloak.token && keycloak.idToken) != '' && (keycloak.idToken != '')) {
    store.commit("login", payload);
    console.log("--> log: User has logged in: " + keycloak.subject);
    console.log("--> log: TokenParsed: "+ JSON.stringify(keycloak.tokenParsed));
    console.log("--> log: User name: " + keycloak.tokenParsed.preferred_username);
    console.log("--> log: accessToken: " + payload.accessToken);
    console.log("--> log: idToken: " + payload.idToken);
    payload = {
      name: keycloak.tokenParsed.preferred_username
    };
    store.commit("setName", payload);
  } else {
    let payloadRefreshedTokens = {
      idToken: "",
      accessToken: ""
    }
    store.commit("login", payloadRefreshedTokens);
    store.commit("logout");
  }
  setInterval(() => {
    console.log("--> log: interval ");
    console.log("--> log: isAuthenticated ", store.state.user.isAuthenticated);
    keycloak.updateToken(5).then((refreshed) => {
      console.log("--> log: isAuthenticated ", store.state.user.isAuthenticated);
      if (store.state.user.isAuthenticated != false ) {
        if (refreshed) {
          console.log('Token refreshed' + refreshed);
        }
        else {
          console.log('Token not refreshed, valid for ' + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
        }
      }else{
        var logoutOptions = {redirectUri: "http://127.0.0.1:8081"};
        console.log("--> log: logoutOptions  ", logoutOptions);

        keycloak.logout(logoutOptions).then((success) => {
          console.log("--> log: logout success ", success);
        }).catch((error) => {
          console.log("--> log: logout error ", error);
        });
      }

    }).catch(() => {
      console.log('Failed to refresh token');
    })
  }, 1500)

}).catch(error => {
  console.log("Authenticated Failed");
});
