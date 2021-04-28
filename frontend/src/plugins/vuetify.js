import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ru from 'vuetify/lib/locale/ru';

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
      locales: { ru },
      current: 'ru',
    },
    theme: {
      themes: {
        light: {
          primary: '#3f51b5',
          secondary: '#b0bec5',
          anchor: '#8c9eff',
          error: '#a00'
        },
      },
    },
});
