import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
  theme: {
    themes: {
      light: {
        primary: '#e55844',
        secondary: '#717171',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#6a9d67',
        warning: '#FFC107'
      },
    },
  },
});
