import Vue from 'vue';
import Vuex from 'vuex';
import { Notify } from 'quasar';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        chat: {},
        history: {}
    },
    getters: {
        chat: (state) => state.chat,
        history: (state) => (id) => state.history[id]
    },
    mutations: {
        update_login(state, login) {
            state.login = login;
        },
        update_chat(state, chat) {
            state.chat = chat;
        },

        socket_history(state, data) {
            state.history = { ...state.history, [data.history_id]: data.messages };
        },

        socket_update_history(state, data) {
            if (state.history[data.history_id]) {
                state.history[data.history_id].push(data.message);
            }
        }
    },
    actions: {
        socket_error_message({ commit, state }, message) {
            Notify.create(message)
        }
    }


});
