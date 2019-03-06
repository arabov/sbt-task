import config from '../../config';
import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
import store from './vuex';

const env = process.env.NODE_ENV || 'development'
    , debug = (env !== 'production');

Vue.use(new VueSocketIO({
    debug,
    connection: config[env].backend,
    vuex: {
        store,
        actionPrefix: 'socket_',
        mutationPrefix: 'socket_'
    }
}));
