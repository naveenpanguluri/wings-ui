<template>
<div class="home">

  <headerComponent></headerComponent>
  <div class="container mtb-150">
    <form>
      <div class="row">
        <div class="col-md-12 col-lg-12">
          <h2 class="fw-100 text-center">Blog Update</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-lg-12">
          <div class="user-img">
            <label for="file-upload" class="custom-file-upload">
             <div v-if="client.userprofileimage && client.userprofileimage.length > 0">
                  <img class="preview" :src="client.userprofileimage">
              </div>
               <img src="../assets/user1.png" v-else class="img-responsive" />
            </label>
            <input id="file-upload" type="file" @change="previewImage" accept="image/*"/>
          </div>
        </div>
      </div>
      <div class="row mt-40 mb-20">
        <div class="col-md-6 col-lg-6">
          <div class="form-group" :class="{ 'form-group--error': $v.client.firstname.$error }">
            <input type="text" class="form-control input-lg inpt-boxs" placeholder="firstname" @input="$v.client.firstname.$touch" v-model.trim="$v.client.firstname.$model">
          </div>
          <div class="error" v-if="!$v.client.firstname.required && $v.client.firstname.$dirty">Field is required</div>
          <div class="error" v-if="!$v.client.firstname.minLength">Name must have at least {{$v.client.firstname.$params.minLength.min}} letters.</div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="form-group" :class="{ 'form-group--error': $v.client.lastname.$error }">
            <input type="text" class="form-control input-lg inpt-boxs" placeholder="lastname" @input="$v.client.lastname.$touch" v-model.trim="$v.client.lastname.$model">
          </div>
          <div class="error" v-if="!$v.client.lastname.required && $v.client.lastname.$dirty">Field is required</div>
          <div class="error" v-if="!$v.client.lastname.minLength">Name must have at least {{$v.client.lastname.$params.minLength.min}} letters.</div>
        </div>
      </div>
      <div class="row mb-20">
        <div class="col-md-6 col-lg-6">
          <div class="form-group" :class="{ 'form-group--error': $v.client.email.$error }">
            <input type="email" class="form-control input-lg inpt-boxs" placeholder="email" @input="$v.client.email.$touch" v-model.trim="$v.client.email.$model">
          </div>
          <div class="error" v-if="$v.client.email.$dirty && $v.client.email.$invalid && $v.client.email.required">Invalid Email.</div>
          <div class="error" v-else-if="!$v.client.email.required && $v.client.email.$dirty">Field is required</div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="form-group" :class="{ 'form-group--error': $v.client.phonenumber.$error }">
            <input type="text" class="form-control input-lg inpt-boxs" placeholder="phonenumber" @input="$v.client.phonenumber.$touch" v-model.number="$v.client.phonenumber.$model">
          </div>
          <div class="error" v-if="!$v.client.phonenumber.required && $v.client.phonenumber.$dirty">Field is required</div>
          <div class="error" v-if="!$v.client.phonenumber.minLength || !$v.client.phonenumber.maxLength">PhoneNumber must have exact {{$v.client.phonenumber.$params.minLength.min}} numbers.</div>
        </div>
      </div>
      <div class="row mb-20">
        <div class="col-md-6 col-lg-6">
          <div class="form-group" :class="{ 'form-group--error': $v.client.dateofbirth.$error }">
            <input type="date" class="form-control input-lg inpt-boxs" placeholder="dob(dd/mm/yyyy)" @input="$v.client.dateofbirth.$touch" v-model.trimnumber="$v.client.dateofbirth.$model">
          </div>
          <div class="error" v-if="!$v.client.dateofbirth.required && $v.client.dateofbirth.$dirty">Field is required</div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="form-group" :class="{ 'form-group--error': $v.client.bloodgroup.$error }">
            <select class="form-control input-lg inpt-boxs" @input="$v.client.bloodgroup.$touch" v-model.trim="$v.client.bloodgroup.$model">
              <option value="" disabled>Select your bloodgroup</option>
            <option v-for="Bloodgroup in clientBloodgroup">{{ Bloodgroup }}</option>
          </select>
          </div>
          <div class="error" v-if="!$v.client.bloodgroup.required && $v.client.bloodgroup.$dirty">Field is required</div>
        </div>
      </div>
      <div class="row mb-20">
        <div class="col-md-6 col-lg-6">
          <div class="form-group" :class="{ 'form-group--error': $v.client.gender.$error }">
            <select class="form-control input-lg inpt-boxs" @input="$v.client.gender.$touch" v-model.trim="$v.client.gender.$model">
              <option value="" disabled>Select your Gender</option>
            <option v-for="Gender in clientGender">{{ Gender }}</option>
          </select>
          </div>
          <div class="error" v-if="!$v.client.gender.required && $v.client.gender.$dirty">Field is required</div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="form-group" :class="{ 'form-group--error': $v.client.status.$error }">
            <select class="form-control input-lg inpt-boxs" @input="$v.client.status.$touch" v-model.trim="$v.client.status.$model">
              <option value="" disabled>Select your marital status</option>
            <option v-for="Status in clientStatus">{{ Status }}</option>
          </select>
          </div>
          <div class="error" v-if="!$v.client.status.required && $v.client.status.$dirty">Field is required</div>
        </div>
      </div>
      <div class="row mb-20">
        <div class="col-md-6 col-lg-6">
          <div class="form-group" :class="{ 'form-group--error': $v.client.qualification.$error }">
            <select class="form-control input-lg inpt-boxs" @input="$v.client.qualification.$touch" v-model.trim="$v.client.qualification.$model">
              <option value="" disabled>Select your qualification</option>
            <option v-for="Qualification in clientQualification">{{ Qualification }}</option>
          </select>
          </div>
          <div class="error" v-if="!$v.client.qualification.required && $v.client.qualification.$dirty">Field is required</div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="form-group" :class="{ 'form-group--error': $v.client.occupation.$error }">
            <select class="form-control input-lg inpt-boxs" @input="$v.client.occupation.$touch" v-model.trim="$v.client.occupation.$model">
              <option value="" disabled>Select your occupation</option>
            <option v-for="Occupation in clientOccupation">{{ Occupation }}</option>
          </select>
          </div>
          <div class="error" v-if="!$v.client.occupation.required && $v.client.occupation.$dirty">Field is required</div>
        </div>
      </div>

      <div class="row mb-20">
        <div class="col-md-6 col-lg-6">
          <div class="form-group" :class="{ 'form-group--error': $v.client.subscription.$error }">
            <select class="form-control input-lg inpt-boxs" @input="$v.client.subscription.$touch" v-model.trim="$v.client.subscription.$model">
              <option value="" disabled>Select your subscription</option>
            <option v-for="Subscription in clientSubscription">{{ Subscription }}</option>
          </select>
          </div>
          <div class="error" v-if="!$v.client.subscription.required && $v.client.subscription.$dirty">Field is required</div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="form-group" :class="{ 'form-group--error': $v.client.referrence.$error }">
            <select class="form-control input-lg inpt-boxs" @input="$v.client.referrence.$touch" v-model.trim="$v.client.referrence.$model">
              <option value="" disabled>Select your reference</option>
            <option v-for="Reference in clientReference">{{ Reference }}</option>
          </select>
          </div>
          <div class="error" v-if="!$v.client.referrence.required && $v.client.referrence.$dirty">Field is required</div>
        </div>
      </div>

      <div class="row mb-20">
        <div class="col-md-12 col-lg-12">
          <div class="form-group" :class="{ 'form-group--error': $v.client.address.$error }">
            <textarea class="form-control inpt-boxs" rows="3" placeholder="permanent address/temporary address" @input="$v.client.address.$touch" v-model.trim="$v.client.address.$model"></textarea>
          </div>
          <div class="error" v-if="!$v.client.address.required && $v.client.address.$dirty">Field is required</div>
        </div>
      </div>

      <div class="row mb-20">
        <div class="col-md-12 col-lg-12">
          <div class="form-group" :class="{ 'form-group--error': $v.client.bankdetails.$error }">
            <textarea class="form-control inpt-boxs" rows="3" placeholder="bank details(account_name, account_number)" @input="$v.client.bankdetails.$touch" v-model.trim="$v.client.bankdetails.$model"></textarea>
          </div>
          <div class="error" v-if="!$v.client.bankdetails.required && $v.client.bankdetails.$dirty">Field is required</div>
        </div>
      </div>

      <div class="row mb-20">
        <div class="col-md-12 col-lg-12">
          <div class="form-group" :class="{ 'form-group--error': $v.client.suggestions.$error }">
            <textarea class="form-control inpt-boxs" rows="3" placeholder="please drop your valuable suggestions" @input="$v.client.suggestions.$touch" v-model.trim="$v.client.suggestions.$model"></textarea>
          </div>
          <div class="error" v-if="!$v.client.suggestions.required && $v.client.suggestions.$dirty">Field is required</div>
        </div>
      </div>

      <div class="row mb-20">
        <div class="col-md-12 col-lg-12 text-right">
          <!-- <button type="submit" v-on:click.prevent="downloadExcel" class="btn btn-lg btn-default">Download Excel</button> -->
          <button type="submit" v-on:click.prevent="cancelEditBlog" class="btn btn-lg btn-default">Cancel</button>
          <button type="submit" v-on:click.prevent="formSubmit" class="btn btn-lg btn-default">Save</button>
        </div>
      </div>

    </form>
  </div>

  <footerComponent></footerComponent>
</div>
</template>

<script>
import XLSX from 'xlsx';
import { required, minLength, maxLength, numeric, email } from 'vuelidate/lib/validators';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  name: 'Home',
  components: {
    headerComponent: Header, // Header component
    footerComponent: Footer
  },
  data() {
    return {
      scroll: '',
      client: {
        userprofileimage: '',  // we will store base64 format of image in this string
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
        dateofbirth: '',
        bloodgroup: '',
        address: '',
        bankdetails: '',
        suggestions: '',
        gender: '',
        status: '',
        qualification: '',
        occupation: '',
        subscription: '',
        referrence: ''
      },

      clientBloodgroup: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
      clientGender: ['male', 'female', 'others'],
      clientStatus: ['single', 'married'],
      clientQualification: ['CA', 'Btech', 'Mtech', 'Phd', 'Degree', 'Biotechnology', 'Bform', 'Mform'],
      clientOccupation: ['Agriculture', 'Student', 'Banking', 'Business'],
      clientSubscription: ['1rs/- per day', '2rs/- per day', '3rs/- per day'],
      clientReference: ['Anil', 'Krishna Kanth', 'Lakshmi Narayana', 'Siva Kumari']
    }
  },

  validations: {
    client: {
      firstname: {
        required,
        minLength: minLength(4)
      },
      lastname: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        email
      },
      phonenumber: {
        numeric,
        required,
        minLength: minLength(10),
        maxLength: maxLength(10)
      },
      dateofbirth: {
        required
      },
      bloodgroup:{
        required
      },
      gender:{
        required
      },
      status:{
        required
      },
      qualification:{
        required
      },
      occupation:{
        required
      },
      subscription:{
        required
      },
      referrence:{
        required
      },
      address:{
        required
      },
      bankdetails:{
        required
      },
      suggestions:{
        required
      }
    }

   },

  mounted(){
    console.log(this.$route.params);
    // this.client = this.$route.params.BlogData;
    this.loadingClientWithID(this.$route.params.id);
  },

  methods: {
    loadingClientWithID: function(id){
      this.$Progress.start();
      this.$http.get('http://localhost:3001/api/clients/' + id, {
      }).then(function(clientdata) {
        console.log('clientDatapppppppp', clientdata);
        this.client = clientdata.body;
        this.client.dateofbirth = clientdata.body.dateofbirth.indexOf('T') > -1 ? clientdata.body.dateofbirth.split('T')[0] : clientdata.body.dateofbirth;
        this.$Progress.finish();
      }).catch(function (error) {
      console.log('error',error);
      this.$Progress.fail();
    });
    },

    formSubmit: function() {
      this.$Progress.start();
      console.log("id", this.client);
      this.$http.put('http://localhost:3001/api/clients/' + this.client._id, {
        userprofileimage: this.client.userprofileimage,
        firstname: this.client.firstname,
        lastname: this.client.lastname,
        email: this.client.email,
        phonenumber: this.client.phonenumber,
        dateofbirth: this.client.dateofbirth,
        bloodgroup: this.client.bloodgroup,
        address: this.client.address,
        bankdetails: this.client.bankdetails,
        suggestions: this.client.suggestions,
        gender: this.client.gender,
        status: this.client.status,
        qualification: this.client.qualification,
        occupation: this.client.occupation,
        subscription: this.client.subscription,
        referrence: this.client.referrence
      }).then(function(clientdata) {
        console.log('clientData', clientdata);
          this.$router.push('/blogs');
          this.$Progress.finish();
      }).catch(function (error) {
      console.log('error',error);
        this.$Progress.fail();
    });
    },

    cancelEditBlog: function(){
      this.$router.push('/blogs');
    },

    downloadExcel: function() {
      this.$Progress.start();
      this.$http.get('http://localhost:3001/api/clients').then(function(exceldata) {
        console.log('excelData', exceldata);

        var output = exceldata.body.map(function(obj) {
          return Object.keys(obj).sort().map(function(key) {
            return obj[key];
          });
        });
        console.log("output", output);

        /* convert state to workbook */
        const ws = XLSX.utils.aoa_to_sheet(output);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
        /* generate file and send to client */
        XLSX.writeFile(wb, "wingsExcelSheet.xlsx");
        this.$Progress.finish();
      }).catch(function (error) {
      console.log('error',error);
        this.$Progress.fail();
    });
    },

    previewImage: function(event) {
        // Reference to the DOM input element
        var input = event.target;
        // Ensure that you have a file before attempting to read it
        if (input.files && input.files[0]) {
            // create a new FileReader to read this image and convert to base64 format
            var reader = new FileReader();
            // Define a callback function to run, when FileReader finishes its job
            reader.onload = (e) => {
                // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                // Read image as base64 and set to imageData
                this.client.userprofileimage = e.target.result;
                console.log('userdp', this.client.userprofileimage);
            }
            // Start the reader job - read file as a data url (base64 format)
            reader.readAsDataURL(input.files[0]);
        }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/default.css';
</style>
E
