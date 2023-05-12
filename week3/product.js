import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.prod.min.js';
// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

// const { createApp } = Vue
const site = 'https://vue3-course-api.hexschool.io/v2/';
const api_path = 'peter-hexschool';


const app = {
  data() {
    return {
      products: [],
      temp: {
        imagesUrl:[],
      },
      
    }
  },
  methods: {
    checkLogin(){
      console.log(`${site}api/user/check`);
      const url = `${site}api/user/check`
      axios.post(url)
        .then(res => {
          console.log(res)
          this.getProducts();
        })
        .catch(err => {
          window.location = './login.html'
        })
    },
    getProducts() {
      console.log(`${site}api/${api_path}/admin/products/all`);
      const url = `${site}api/${api_path}/admin/products/all`
      axios.get(url)
        .then(res => {
          console.log(res);
          this.products = res.data.products
        })
        .catch(err => {
          console.log(res.data.message)
        })
    },

  },
  mounted() {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("hexToken="))
      ?.split("=")[1];
    console.log(cookieValue);
    axios.defaults.headers.common['Authorization'] = cookieValue;
    this.checkLogin();
    
  }
//   methods: {
//     lookDetail(){
      
//     }
//   },
  
}
createApp(app).mount('#app');
