import Vuex from 'vuex';
import Vue from 'vue';
import spineWorkInModule from './modules/spineModule';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules:{
        spineWorkInModule
    }
});