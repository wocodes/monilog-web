<template>
  <div>
    <Loading :active.sync="isLoading" :is-full-page="true" :width=50 :height=50></Loading>

    <!-- ////////////////////////////////////////////////////////////////////////////-->
    <div class="app-content content">
      <div class="content-wrapper">
        <div class="content-header row">
        </div>
        <div class="content-body">
          <section class="flexbox-container">
            <div class="col-12 d-flex align-items-center justify-content-center">
              <div class="col-md-4 col-10 box-shadow-2 p-0">

                <div v-if="login_state" class="card border-grey border-lighten-3 px-1 py-1 m-0">
                  <div class="card-header border-0">
                    <div class="card-title text-center">
                      <img src="app-assets/images/logo/logo_rect.png" alt="branding logo" width="100px">
                    </div>
                    <h6 class="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                      <span>Login Easily Using</span>
                    </h6>
                  </div>
                  <div class="card-content">
                    <div class="text-center">
                      <a href="#" class="btn btn-social-icon mr-1 mb-1 btn-outline-facebook">
                        <span class="la la-facebook"></span>
                      </a>
                      <a href="#" class="btn btn-social-icon mr-1 mb-1 btn-outline-twitter">
                        <span class="la la-twitter"></span>
                      </a>
                      <a href="#" class="btn btn-social-icon mr-1 mb-1 btn-outline-linkedin">
                        <span class="la la-linkedin font-medium-4"></span>
                      </a>
                      <a href="#" class="btn btn-social-icon mr-1 mb-1 btn-outline-github">
                        <span class="la la-github font-medium-4"></span>
                      </a>
                    </div>
                    <p class="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1">
                      <span>OR Using Account Details</span>
                    </p>
                    <div class="card-body">
                      <form class="form-horizontal" @submit.prevent="doLogin()" novalidate>
                        <fieldset class="form-group position-relative has-icon-left">
                          <input type="text" class="form-control" id="login-user-name" placeholder="Your Email" v-model="user.email"
                                 required>
                          <div class="form-control-position">
                            <i class="ft-user"></i>
                          </div>
                        </fieldset>
                        <fieldset class="form-group position-relative has-icon-left">
                          <input type="password" class="form-control" id="login-user-password" placeholder="Enter Password" v-model="user.password"
                                 required>
                          <div class="form-control-position">
                            <i class="la la-key"></i>
                          </div>
                        </fieldset>
                        <div class="form-group row">
                          <div class="col-md-6 col-12 text-center text-sm-left">
                            <fieldset>
                              <input type="checkbox" id="login-remember-me" class="chk-remember">
                              <label for="remember-me"> Remember Me</label>
                            </fieldset>
                          </div>
                          <div class="col-md-6 col-12 float-sm-left text-center text-sm-right"><a href="recover-password.html" class="card-link">Forgot Password?</a></div>
                        </div>
                        <button type="submit" class="btn btn-outline-info btn-block"><i class="ft-unlock"></i> Login</button>
                      </form>
                    </div>
                    <p class="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1">
                      <span>New to Monilog ?</span>
                    </p>
                    <div class="card-body">
                      <button @click="login_state=false" class="btn btn-outline-danger btn-block"><i class="ft-user"></i> Register</button>
                    </div>
                  </div>
                </div>

                <div v-else class="card border-grey border-lighten-3 px-1 py-1 m-0">
                  <div class="card-header border-0 pb-0">
                    <div class="card-title text-center">
                      <img src="app-assets/images/logo/logo_rect.png" width="100px" alt="branding logo">
                    </div>
                    <h6 class="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                      <span>Register Easily Using</span>
                    </h6>
                  </div>
                  <div class="card-content">
                    <div class="text-center">
                      <a href="#" class="btn btn-social-icon mr-1 mb-1 btn-outline-facebook">
                        <span class="la la-facebook"></span>
                      </a>
                      <a href="#" class="btn btn-social-icon mr-1 mb-1 btn-outline-twitter">
                        <span class="la la-twitter"></span>
                      </a>
                      <a href="#" class="btn btn-social-icon mr-1 mb-1 btn-outline-linkedin">
                        <span class="la la-linkedin font-medium-4"></span>
                      </a>
                      <a href="#" class="btn btn-social-icon mr-1 mb-1 btn-outline-github">
                        <span class="la la-github font-medium-4"></span>
                      </a>
                    </div>
                    <p class="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1">
                      <span>OR Using Email</span>
                    </p>
                    <div class="card-body">
                      <form class="form-horizontal" @submit.prevent="doRegister()" novalidate>
                        <fieldset class="form-group position-relative has-icon-left">
                          <input type="text" class="form-control" id="user-name" placeholder="User Name" required v-model="user.name">
                          <div class="form-control-position">
                            <i class="ft-user"></i>
                          </div>
                        </fieldset>
                        <fieldset class="form-group position-relative has-icon-left">
                          <input type="email" class="form-control" id="user-email" placeholder="Your Email Address"
                                 v-model="user.email" required>
                          <div class="form-control-position">
                            <i class="ft-mail"></i>
                          </div>
                        </fieldset>
                        <fieldset class="form-group position-relative has-icon-left">
                          <input type="password" class="form-control" id="user-password" placeholder="Enter Password"
                                 v-model="user.password" required>
                          <div class="form-control-position">
                            <i class="la la-key"></i>
                          </div>
                        </fieldset>
                        <div class="form-group row">
                          <div class="col-md-6 col-12 text-center text-sm-left">
                            <fieldset>
                              <input type="checkbox" id="remember-me" class="chk-remember">
                              <label for="remember-me"> Remember Me</label>
                            </fieldset>
                          </div>
                          <div class="col-md-6 col-12 float-sm-left text-center text-sm-right"><a href="recover-password.html" class="card-link">Forgot Password?</a></div>
                        </div>
                        <button type="submit" class="btn btn-outline-info btn-block"><i class="ft-user"></i> Register</button>
                      </form>
                    </div>
                    <div class="card-body">
                      <button @click="login_state=true" class="btn btn-outline-danger btn-block"><i class="ft-unlock"></i> Login</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <!-- ////////////////////////////////////////////////////////////////////////////-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import http from "../http-common";
import Loading from 'vue-loading-overlay';

// Import stylesheet
// import 'vue-loading-overlay/dist/vue-loading.css';

import helpers from "../../helpers";

export default {
  name: 'Home',
  components: {Loading},
  data() {
    return {
      isLoading: false,
      user: {
        name: '',
        email: '',
        password: ''
      },
      login_state: true
    }
  },

  methods: {
    doLogin() {
      this.isLoading = true;

      let data = {
        email: this.user.email,
        password: this.user.password
      }

      http.post(process.env.VUE_APP_API_BASE_URL + '/auth/login', data)
      .then(resp => {
        helpers.toast(resp.data.message);
        helpers.saveToken(resp.data.access_token);

        this.user = resp.data.account;

        // save user detail to storage
        let user = JSON.stringify(resp.data.account);
        helpers.saveToStorage('user', user);

        this.isLoading = false;

        setTimeout(() => this.redirectToDashboard(), 2500);
      })
      .catch(err => {
        console.log(err);
        let msg = err.response.status + ": " + err.response.data.error + ". Try again";
        helpers.toast(msg, "error");

        this.isLoading = false;
      })
    },

    redirectToDashboard() {
      this.$router.replace({name: 'Dashboard'});
    },

    // Register User
    doRegister() {
      this.isLoading = true;

      let data = {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password
      }

      http.post(process.env.VUE_APP_API_BASE_URL + '/auth/register', data)
          .then(resp => {
            helpers.toast(resp.data.message);
            this.isLoading = false;

            setTimeout(() => this.login_state=true, 2500);
          })
          .catch(err => {
            let msg = err.response.status + ": " + err.response.data.error + ". Try again";
            helpers.toast(msg, "error");

            this.isLoading = false;
          })
    },
  }
}

// let styles = [
//   "app-assets/css/core/menu/menu-types/vertical-content-menu.css",
//   "app-assets/css/core/colors/palette-gradient.css",
//   "app-assets/css/pages/login-register.css",
//   "app-assets/vendors/css/forms/icheck/icheck.css",
//   "app-assets/vendors/css/forms/icheck/custom.css",
// ];
//
// helpers.loadCSS(styles);
//
//
// let scripts = [
//   "app-assets/vendors/js/ui/headroom.min.js",
//   "app-assets/vendors/js/forms/icheck/icheck.min.js",
//   "app-assets/vendors/js/forms/validation/jqBootstrapValidation.js",
//   "app-assets/js/scripts/forms/form-login-register.js"
// ];
//
//
// helpers.loadScripts(scripts);

</script>
