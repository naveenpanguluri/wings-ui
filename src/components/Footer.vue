<template>
  <footer>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <h2 class="fw-100 text-center white-color">{{ footerText }}</h2>
        <ul class="list-unstyled list-inline mtb-36 text-center">
          <li>
            <router-link to="https://www.facebook.com/search/top/?q=wings%20armstoserve" target="_blank" class="anchor"><i class="fa fa-facebook gray-color fb"></i></router-link>
          </li>
          <li>
          <router-link to="/" class="anchor"><i class="fa fa-google-plus gray-color google"></i></router-link>
          </li>
          <li>
            <router-link to="/" class="anchor"><i class="fa fa-twitter gray-color twitter"></i></router-link>
          </li>
        </ul>
        <h6 class="text-center">&copy;{{ copy }}</h6>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      footerText: 'If you have heart to serve, then you will have arms to give.',
      copy: 'copyrights 2018'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/default.css';

</style>
