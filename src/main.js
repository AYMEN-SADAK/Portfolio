import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faUserGraduate} from "@fortawesome/free-solid-svg-icons/faUserGraduate";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons/faBriefcase";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import {faTasks} from "@fortawesome/free-solid-svg-icons/faTasks";
import {faExpandAlt} from "@fortawesome/free-solid-svg-icons/faExpandAlt";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import {faBirthdayCake} from "@fortawesome/free-solid-svg-icons/faBirthdayCake";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faAt} from "@fortawesome/free-solid-svg-icons/faAt";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";



Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

library.add(faLinkedin)
library.add(faUserGraduate)
library.add(faBriefcase)
library.add(faInfoCircle)
library.add(faTasks)
library.add(faExpandAlt)
library.add(faBars)
library.add(faPlusCircle)
library.add(faBirthdayCake)
library.add(faHome)
library.add(faAt)
library.add(faGithub)
library.add(fab)



new Vue({
  render: h => h(App),
}).$mount('#app')
