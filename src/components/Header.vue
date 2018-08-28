<template>
  <header>
    <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-6 col-lg-6">
              <div class="logo">
                <router-link to="/home" ><img src="../assets/logo.png" class="img-responsive" /> </router-link>
              </div>
            </div>
            <div class="hidden-xs col-sm-8 col-md-6 col-lg-6">
              <ul class="list-unstyled list-inline mtb-36 text-right">
                <li>
                  <router-link to="/home" class="anchor">Home</router-link>
                </li>
                <li>
                  <router-link to="/blogs" class="anchor">Blogs</router-link>
                </li>
                <li>
                  <router-link to="/contact" class="anchor">{{ Contact }}</router-link>
                </li>
                <li>
                  <a href="#"><i class="fa fa-sign-out gray-color" v-on:click.prevent="signOut"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Header',
  data () {
    return {
      Contact: 'Contact Us'
    }
  },
  methods:{
    ...mapActions([
      'setStateVal',
    ]),

    signOut: function(){
      this.setStateVal({
        accessToken: ''
      });
      console.log('signout', this.getStateVal.accessToken);
      this.$router.push('/');
    }
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

@import '../assets/css/default.css';

</style>
