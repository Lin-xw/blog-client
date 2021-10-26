import request from "../../heipers/request";
import auth from "../../api/auth";
import blog from "../../api/blog";

window.request = request
window.auth = auth
window.blog = blog

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
     onClick1:{

     }
  }

}
