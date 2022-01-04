import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';
rtl:true,

Vue.use(Vuetify);
export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            dark: {
                background: '#292930',
            },
        },
        dark: false,
    },

});
;
