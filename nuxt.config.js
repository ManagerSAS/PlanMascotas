export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Los Olivos Funintegrales',
    title: 'Los Olivos Funintegrales',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        type:'text/javascript',
        innerHTML: `
          function onSubmit(token) {
            document.getElementById("demo-form").submit();
          }
          `,
          src:'https://www.google.com/recaptcha/api.js'
      },
      {
        type:'text/javascript',
        innerHTML: `
        function onClick(e) {
          e.preventDefault();
          grecaptcha.ready(function() {
            grecaptcha.execute('reCAPTCHA_site_key', {action: 'submit'}).then(function(token) {
                // Add your logic to submit to your backend server here.
            });
          });
        }
          `,
          src:'https://www.google.com/recaptcha/api.js?render=6Ld9kLskAAAAALeetsBV8Abna2eBbUWldYf6B81u'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/Styles.scss',
  ],
  loading: '~/components/PreLoading.vue',
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
