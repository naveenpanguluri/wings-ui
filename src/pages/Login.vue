<template>
<div class="login">

  <div class="login-center">
    <div class="logo text-center">
      <img src="../assets/logo.png" class="img-responsive">
    </div>
    <h3 class="fw-200 text-center">Member Login</h3>
    <div class="form-group">
      <input type="text" class="form-control inpt-box" placeholder="Email address" v-model="userLogin.userName">
    </div>
    <div class="form-group">
      <input type="password" class="form-control inpt-box" placeholder="Password" v-model="userLogin.userPass">
    </div>
    <div class="clearfix mtb-32">
      <button type="button" class="btn btn-cls pull-right" v-on:click.prevent="SignInUser">Login</button>
      <router-link to="/register" class="anchor"><button type="button" class="btn btn-cls pull-left">Register</button></router-link>
    </div>
    <span class="clr1 pull-right"><a href="#" class="forgot clr2">forgot password?</a></span>

  </div>

</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import {
  required,
  minLength,
  maxLength,
  numeric,
  email
} from 'vuelidate/lib/validators';

export default {
  name: 'Login',
  components: {

  },

  data() {
    return {

      userLogin: {
        userName: '',
        userPass: ''
      }

    }
  },

  validations: {
    userLogin: {
      userName: {
        required,
        email
      },
      userPass: {
        required,
        minLength: minLength(4)
      }

    }
  },
  methods: {
    ...mapActions([
      'setStateVal',
    ]),

    SignInUser: function() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$Progress.start();
        this.$http.post('http://localhost:3001/api/login', {
          userName: this.userLogin.userName,
          userPass: this.userLogin.userPass,

        }).then(function(userLogindata) {
          console.log('userLogindata', userLogindata);
          // console.log('token', userLogindata.body.accessToken);
          this.setStateVal({
            accessToken:userLogindata.body.accessToken
          });
          console.log('login', this.getStateVal.accessToken);
          this.$router.push('/home');
          this.$Progress.finish();
          return false;
        }).catch(function(error) {
          console.log('error', error);
          this.$Progress.fail();
        });
      } else {
        this.$nextTick(() => {
          this.$el.querySelector('.error').scrollIntoView(false);
          this.$el.querySelector('.error').focus();
        });
      }
    },
  },

  computed: {
    ...mapGetters([
      'getStateVal',
    ]),
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/login.css';
</style>
