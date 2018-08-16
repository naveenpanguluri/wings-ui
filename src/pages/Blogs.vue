<template>
<div class="home">

  <headerComponent></headerComponent>
  <div class="container mtb-150">
    <div class="row mb-20">
      <div class="col-md-12 col-lg-12">
        <div class="form-group">
          <input type="text" class="form-control input-lg search-field" v-model="searchBlogs" placeholder="Search blogs">
          <i class="fa fa-search search-icon"></i>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div v-for="blog in filteredBlogs" class="blogs mb-10 pos_r">
          <div class="row">
            <div class="col-md-2 col-lg-2">

              <div class="user-img">
                <div v-if="blog.userprofileimage != ''">
                     <img class="preview" :src="blog.userprofileimage">
                 </div>
                <img src="../assets/user1.png" v-else class="img-responsive" />
                <img src="../assets/user1.png" class="img-responsive" />
              </div>

            </div>
            <div class="col-md-5 col-lg-5">
              <h3 class="f-name">{{ blog.firstname }}&nbsp;<span class="fw-200">{{ blog.lastname }}</span></h3>
              <p class="fw-200">{{ blog.email }}</p>
              <p class="fw-200">{{ blog.phonenumber }}</p>
              <p class="fw-200">{{ blog.dateofbirth.slice(0,10) }}&nbsp;&nbsp;&nbsp;{{ blog.gender }} &nbsp;&nbsp;&nbsp;{{ blog.bloodgroup }}</p>
              <p class="fw-200">{{ blog.address }}</p>
              <p class="fw-200">Reffered by: {{ blog.referrence }}</p>
            </div>
            <div class="col-md-5 col-lg-5">
              <p class="fw-200">{{ blog.status }}</p>
              <p class="fw-200">{{ blog.occupation }}</p>
              <p class="fw-200">{{ blog.qualification }}</p>
              <p class="fw-200">{{blog.subscription }}</p>
              <p class="fw-200">{{ blog.suggestions }}</p>
              <p class="fw-200">{{ blog.bankdetails }}</p>
            </div>
            <span class="anchor del_client text-center"
              v-confirm="{
              loader: true,
              ok: dialog => deletingClientWithID(dialog, blog._id),
              okText: 'Yes',
              cancelText: 'No',
              message: 'Do you want to delete the ' + blog.firstname + '\'s blog?',
              backdropClose: true,
              }"><i class="fa fa-trash white-color"></i>
            </span>
            <router-link :to="{ path: '/editblog/' + blog._id}" class="anchor edit_client text-center"><i class="fa fa-edit white-color"></i></router-link>
          </div>

        </div>
      </div>
    </div>

  </div>
  <footerComponent></footerComponent>

</div>
</template>

<script>
import XLSX from 'xlsx';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  name: 'Blogs',
  components: {
    headerComponent: Header, // Header component
    footerComponent: Footer
  },

  data() {
    return {
      blogsArr: [],
      searchBlogs: '',
    }
  },
methods: {
  deletingClientWithID: function(dialog,id){
      dialog.close();
      this.$http.delete('http://localhost:3001/api/clients/' + id, {
      }).then(function(clientdata) {
        console.log('clientdelete', clientdata);
        this.loadBlogs();
      }).catch(function (error) {
      console.log('error',error);
    });
  },

  loadBlogs: function(){
    this.$Progress.start();
    this.$http.get('http://localhost:3001/api/clients').then(function(blogs) {
      console.log('blogsData', blogs);
      this.blogsArr = blogs.body;
      this.$Progress.finish();
    }).catch(function (error) {
    console.log('error',error);
    this.$Progress.fail();
  });
  }
},

  mounted() {
  this.loadBlogs();
  },

  computed: {
    filteredBlogs: function() {
      this.$Progress.start();
      return this.blogsArr.filter((blog) => {
        return blog.firstname.match(this.searchBlogs) || blog.lastname.match(this.searchBlogs);
        this.$Progress.finish();
      });
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/default.css';
</style>
