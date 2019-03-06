import Vue from 'vue';
import './plugins/vuesocketio';
import router from './plugins/vuerouter';
import store from './plugins/vuex';
import Index from './Index.vue';

import './styles/quasar.styl';
import '@quasar/extras/material-icons/material-icons.css';
import {
  Quasar,
  QLayout,
  QPageContainer,
  QHeader,
  QDrawer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QCard,
  QCardSection,
  QSeparator,
  QInput,
  QChatMessage,
  QFooter,
  Notify
} from 'quasar';

Vue.config.productionTip = false;

Vue.use(Quasar, {
  config: {
    notify: { color: 'negative', icon: 'report_problem', position: 'top' }
  },
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QCard,
    QCardSection,
    QSeparator,
    QInput,
    QChatMessage,
    QFooter
  },
  directives: {

  },
  plugins: {
    Notify
  }
});

new Vue({
    render: h => h(Index),
    router,
    store
}).$mount('#index');
