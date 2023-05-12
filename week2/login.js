import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.prod.min.js';
// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const site = 'https://vue3-course-api.hexschool.io/v2/';

const app = createApp({
  data(){
    return {
      user: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      // console.log(this.user);
      const url = `${site}admin/signin`
      axios.post(url, this.user)
        .then((res) => {
          console.log(res)
          const { expired, token } = res.data
          console.log(expired, token);
          document.cookie =
          `hexToken=${token}; expires=${new Date(expired)};`;
          window.location = './product.html';
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  mounted() {
    console.log('mounted')
  }
})

app.mount('#app')
