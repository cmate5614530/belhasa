<template>
    <div class="container-fluid img_backgrond">
        <div class="row">
            <div class="col-lg-4 offset-lg-4 col-sm-6 offset-sm-3">
                <div class="row">
                     <div class="col-sm-12">
                         <div class="text-center">
                             <img src="~img/symbol.png" class="logo-img">
                         </div>
                     </div>
                 </div>
                <div class="login-content">
                    <vue-form :state="formstate" @submit.prevent="onSubmit">
                        <h3 class="login-title">Login</h3>
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                    <validate tag="div">
                                        <input v-model="model.studentId" name="studentId" id="studentId" type="text" required placeholder="Student ID" class="form-control" />
                                        <field-messages name="studentId" show="$invalid && $submitted" class="text-danger">
                                            <div slot="required">User is a required field</div>
                                        </field-messages>
                                    </validate>
                                </div>
                            </div>

                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                    <validate tag="div">
                                        <input v-model="model.supervisorId" name="supervisorId" id="supervisorId" type="text" required placeholder="Admin / Supervisor ID" class="form-control" />
                                        <field-messages name="supervisorId" show="$invalid && $submitted" class="text-danger">
                                            <div slot="required">Admin/Supervisor is a required field</div>
                                        </field-messages>
                                    </validate>
                                </div>
                            </div> 
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                    <validate tag="div">
                                        <input v-model="model.password" name="password" id="password" type="password" required placeholder="Admin / Supervisor Passcord" class="form-control" minlength="4" maxlength="10" />
                                        <field-messages name="password" show="$invalid && $submitted" class="text-danger">
                                            <div slot="required">Password is required</div>
                                            <div slot="minlength">Admin / Supervisor Password should be atleast 4 characters long</div>
                                            <div slot="maxlength">Admin / Supervisor Password should be atmost 10 characters long</div>
                                        </field-messages>
                                    </validate>
                                </div>
                            </div>
                        </div>
                      <div class="bottom-section">
                        <div class="left-item">
                          <p class="change_link">Don't have an account?
                            <router-link  tag="a"  to="/register" data-ui-sref="login" class="to_register ng-scope">
                              Sign Up
                            </router-link>
                          </p>
                        </div>
                        <div class="right-item text-right">
                          <div class="form-group submit-login" style="display: flex">
                            <input type="submit" value="Sign In" class="btn btn-light signin-btn" />&nbsp;&nbsp;&nbsp;
                            <router-link tag="a" to="/admin" class="btn btn-primary btn-block ">Sign In with Admin</router-link>
                          </div>
                        </div>
                      </div>
                        <h1></h1>
                    </vue-form>
                </div>
                <div class="login-content-f-line">
                    <div><br>
                        <img src="~img/symbol.png" class="logo-img-footer">
                        <span>Belhasa Driving Center</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import Vue from 'vue'
import VueForm from "vue-form";
import options from "src/validations/validations.js";
import User_ApiService from "common/user_api.service";
import miniToastr from "mini-toastr";
miniToastr.init();
User_ApiService.init();
Vue.use(VueForm, options);
export default {
    name: "login",
    data() {
        return {
            formstate: {},
            model: {
                studentId: "",
                supervisorId: "",
                password: ""
            }
        }
    },
    methods: {
        onSubmit() {
          console.log('check user')
            if (this.formstate.$invalid) {
                return;
            } else {
              console.log('check usersd')
              let path=this.$route.path;
              console.log('path...',path)

              User_ApiService.post('getSupervisorId', {'supervisor_id': this.model.supervisorId}).then(
                  result=>{
                    let data=result.data;
                    if(data.success === true){
                      console.log('-->>>>',data.id);
                      this.$store.commit('supervisoridBylogin',data.id);
                    }
                    else {

                      console.log(data);
                    }
                  },
                  error=>{
                  }
              )



                User_ApiService.post('login', this.model).then(
                    result=>{
                        let data=result.data;
                        if(data.success === true){
                            console.log(data);
                            this.$store.dispatch('login', data.data);
                            this.$store.commit('changeUser',data.data);
                            this.$router.push("/choose-option");
                        }
                        else {
                            miniToastr.error(data.message)
                            console.log(data);
                        }
                    },
                    error=>{
                    }
                )
            }
        }
    },
    created() {
        miniToastr.setIcon('error', 'i', {
            'class': 'fa fa-times'
        });
    },
    mounted: function() {
        console.log('------locale-------',this.$i18n.locale);
    },
    destroyed: function() {
    },
}
</script>
<style scoped>
    .bottom-section{
      min-height: 84px;
    }
    .left-item{
      float: left;
    }
    .right-item{
      float: right;
    }
    .signin-btn{
      background: #bad1e0;
    }
    .login-content h1 {
      font: normal 25px Helvetica, Arial, sans-serif;
      letter-spacing: -0.05em;
      line-height: 20px;
      margin: 10px 0 30px;
    }
    .login-content h1:before,
    .login-content h1:after {
      content: "";
      height: 1px;
      position: absolute;
      top: 10px;
      width: 20%;
    }
    .login-content h1:after {
      background: linear-gradient(45deg, #73879c, transparent);
      right: 0;
      margin-top: 120px;
    }
    .login-content h1:before {
      background: linear-gradient(-45deg, #73879c, transparent);
      left: 0;
      margin-top: 120px;
    }
    .login-content {
        margin-top: 7%;
        margin-bottom: 7%;
    }
    .img_backgrond{
        background-image: url("~img/pages/Login-03-01.png");
        background-size:cover;
        background-repeat:no-repeat;
        width: 100%;
        padding: 75px 15px;
        min-height: 980px;
    }
    .submit-login input{
        color: #73879C;
    }
    .change_link{
        text-align: center;
        color: #73879C;
        margin-top: 27px;
        font-size: 15px;
    }
    label{
        font-size: 14px !important;
    }
    ::-webkit-input-placeholder {
        font-size:14px;
    }

    .login-title{
        text-align: center;
        font-family: sans-serif;
        color: #73879C;
    }
    .login-content-f-line{
        border-top: 1px solid #D8D8D8;
        margin-top: -50px;
        padding-top: 10px;
        text-align: center;
        font: normal 25px Helvetica, Arial, sans-serif;
        letter-spacing: -0.05em;
        line-height: 20px;

    }
    .logo-img-footer{
        width: 75px;
        margin-top: -6px;
    }
    .login-title{
        margin-top: 43px;
    }
    .form-control:invalid {
        background-image: none !important;
    }
    .form-control{
      border: 1px solid darkgray;
      border-radius: 3px;
      padding: 9px;
    }

</style>
