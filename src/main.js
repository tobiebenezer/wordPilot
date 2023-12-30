import './assets/main.less'
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret,faBars,faChevronDown,faBell , faExclamationCircle} from '@fortawesome/free-solid-svg-icons'


library.add([faUserSecret,faBars,faChevronDown,faBell, faExclamationCircle]);

createApp(App)
.component('font-awesome-icon',FontAwesomeIcon)
.mount('#app')