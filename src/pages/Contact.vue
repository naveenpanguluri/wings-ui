<template>
<div class="contact">

  <headerComponent></headerComponent>
  <div class="container mtb-150">
    <div class="row mb-20">
      <div class="col-md-12 col-lg-12">
        <h1 class="text-center mb-20">Get In Touch</h1>
        <h2 class="fw-100 text-center">We are always happy to make valuable new contacts.</h2>
      </div>
    </div>
    <div class="row mb-20">
      <div class="col-md-6 col-lg-6">
        <div class="form-group" :class="{ 'form-group--error': $v.contact.contactfirstname.$error }">
          <input type="text" class="form-control input-lg inpt-boxs" @input="$v.contact.contactfirstname.$touch" v-model.trim="$v.contact.contactfirstname.$model" placeholder="firstname">
        </div>
        <div class="error" v-if="!$v.contact.contactfirstname.required && $v.contact.contactfirstname.$dirty">Field is required</div>
        <div class="error" v-if="!$v.contact.contactfirstname.minLength">Name must have at least {{$v.contact.contactfirstname.$params.minLength.min}} letters.</div>
      </div>
      <div class="col-md-6 col-lg-6">
        <div class="form-group" :class="{ 'form-group--error': $v.contact.contactlastname.$error }">
          <input type="text" class="form-control input-lg inpt-boxs" @input="$v.contact.contactlastname.$touch" v-model.trim="$v.contact.contactlastname.$model" placeholder="lastname">
        </div>
        <div class="error" v-if="!$v.contact.contactlastname.required && $v.contact.contactlastname.$dirty">Field is required</div>
        <div class="error" v-if="!$v.contact.contactlastname.minLength">Name must have at least {{$v.contact.contactlastname.$params.minLength.min}} letters.</div>
      </div>
    </div>
    <div class="row mb-20">
      <div class="col-md-6 col-lg-6">
        <div class="form-group" :class="{ 'form-group--error': $v.contact.contactemail.$error }">
          <input type="email" class="form-control input-lg inpt-boxs" placeholder="email" @input="$v.contact.contactemail.$touch" v-model.trim="$v.contact.contactemail.$model">
        </div>
        <div class="error" v-if="$v.contact.contactemail.$dirty && $v.contact.contactemail.$invalid && $v.contact.contactemail.required">Invalid Email.</div>
        <div class="error" v-else-if="!$v.contact.contactemail.required && $v.contact.contactemail.$dirty">Field is required</div>
      </div>
      <div class="col-md-6 col-lg-6">
        <div class="form-group" :class="{ 'form-group--error': $v.contact.contactphonenumber.$error }">
          <input type="number" class="form-control input-lg inpt-boxs" placeholder="phonenumber" @input="$v.contact.contactphonenumber.$touch" v-model.number="$v.contact.contactphonenumber.$model">
        </div>
        <div class="error" v-if="!$v.contact.contactphonenumber.required && $v.contact.contactphonenumber.$dirty">Field is required</div>
        <div class="error" v-if="!$v.contact.contactphonenumber.minLength || !$v.contact.contactphonenumber.maxLength">PhoneNumber must have exact {{$v.contact.contactphonenumber.$params.minLength.min}} numbers.</div>
      </div>
    </div>
    <div class="row mb-20">
      <div class="col-md-12 col-lg-12">
        <div class="form-group" :class="{ 'form-group--error': $v.contact.contactmessage.$error }">
          <textarea class="form-control inpt-boxs" rows="3" placeholder="Drop your message here" @input="$v.contact.contactmessage.$touch" v-model.trim="$v.contact.contactmessage.$model"></textarea>
        </div>
        <div class="error" v-if="!$v.contact.contactmessage.required && $v.contact.contactmessage.$dirty">Field is required</div>
      </div>
    </div>
    <div class="row mb-20">
      <div class="col-md-12 col-lg-12 text-right">
        <button type="submit" v-on:click.prevent="contactSubmit" class="btn btn-lg btn-default">Submit</button>
      </div>
    </div>
  </div>
  <footerComponent></footerComponent>

</div>
</template>

<script>
import { required, minLength, maxLength, numeric, email } from 'vuelidate/lib/validators';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  name: 'Contact',
  components: {
    headerComponent: Header, // Header component
    footerComponent: Footer
  },

  data() {
    return {

      contact: {
        contactfirstname: '',
        contactlastname: '',
        contactemail: '',
        contactphonenumber: '',
        contactmessage: ''
      }

    }
  },
  validations: {
    contact: {
      contactfirstname: {
        required,
        minLength: minLength(4)
      },
      contactlastname: {
        required,
        minLength: minLength(4)
      },
      contactemail: {
        required,
        email
      },
      contactphonenumber: {
        numeric,
        required,
        minLength: minLength(10),
        maxLength: maxLength(10)
      },
      contactmessage: {
        required
      }
    }

   },
  methods: {
    contactSubmit: function() {
      this.$v.$touch();
      if(!this.$v.$invalid){
      this.$Progress.start();
      this.$http.post('http://localhost:3001/api/contactUs', {
        contactfirstname: this.contact.contactfirstname,
        contactlastname: this.contact.contactlastname,
        contactemail: this.contact.contactemail,
        contactphonenumber: this.contact.contactphonenumber,
        contactmessage: this.contact.contactmessage
      }).then(function(contactdata) {
        console.log('contactData', contactdata);
        this.$Progress.finish();
      }).catch(function (error) {
      console.log('error',error);
      this.$Progress.fail();
    });
  }else{
    this.$nextTick(() => {
      this.$el.querySelector('.error').scrollIntoView(false);
      this.$el.querySelector('.error').focus();
    });
  }
  },
  },

  computed: {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/default.css';
</style>
