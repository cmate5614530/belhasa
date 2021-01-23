<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-7">
                <div class="card">
                    <div class="card-header card-header-primary" style="height: 70px;">
                    </div><br>
                    <div class="card-body">
                        <form>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group bmd-form-group">
                                                <label class="bmd-label-floating">Category Name</label>
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <vue-form :state="formstate">
                                                <validate tag="div">
                                                    <input v-model = "model.categoryName" name="categoryName" type="text"   class="form-control"  required>
                                                    <field-messages name="categoryName" show="$invalid && $submitted" class="text-danger">
                                                        <div slot="required">Category Name is a required field</div>
                                                    </field-messages>
                                                </validate>
                                            </vue-form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="edit-category">
                            <button v-if="buttonDisable" class="btn-success btn" @click="CreateCategory()">Submit</button>
                            <button v-if="!buttonDisable" class="btn-success btn btn-disable">Submit</button>
                            <button class="btn-danger btn" @click="Cancel()">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueForm from "vue-form";
    import options from "../../../validations/validations";
    import miniToastr from "mini-toastr";
    import Admin_ApiService from "../../../common/admin_api.service";
    import Buttons from "../buttons";
    import VueCropper from "vue-cropperjs";
    Admin_ApiService.init();
    var unsub;
    miniToastr.init();
    Vue.use(VueForm, options);

    export default {
        name: "edit-category",
        components: {

        },
        props: [
            'category_id'
        ],

        data() {
            return {
                buttonDisable:true,
                formstate: {},
                model:{
                    categoryName:'',
                }
            }
        },
        methods: {
            CreateCategory() {
              if (this.formstate.$invalid) {
                return;
              }else {
                console.log('click')
                this.buttonDisable = false

                console.log(this.model.categoryName);

                Admin_ApiService.post('CreateCategory', this.model).then(
                    result=>{
                      let data=result.data;
                      if(data.success === true){
                        miniToastr.success(data.message)
                        this.model.categoryName = ''
                        this.buttonDisable = true
                      }
                      else {
                        this.buttonDisable = true
                        miniToastr.error(data.message)
                        console.log(data);
                      }
                    },
                    error=>{
                      this.buttonDisable = true
                    }
                )
              }

            },
            Cancel(){
                window.location.href = '#/admin/category'
            }
        },
        mounted() {
            unsub = this.$store.subscribe((mutation, state) => {
                if (mutation.type == "left_menu") {
                    this.instances.forEach(function (item, index) {
                        setTimeout(function () {
                            item.resize();
                        });
                    });
                    setTimeout(() => {
                        this.$refs.swiper.swiper.update();
                    });
                }
            });

        },
        created() {
            miniToastr.setIcon('error', 'i', {
                'class': 'fa fa-times'
            });
            miniToastr.setIcon('success', 'i', {
                'class': 'fa fa-arrow-circle-o-down'
            });
        },
        beforeRouteLeave(to, from, next) {
            unsub();
            next();
        },
    }
</script>

<style scoped>
    .edit-category{
        text-align: center;
    }
    .container-fluid{
      margin-top: 80px;
    }
    .btn-disable
    {
      cursor: not-allowed;
      pointer-events: none;

      /*Button disabled - CSS color class*/
      color: #c0c0c0;
      background-color: #ffffff;
      border: solid 1px green;

    }
</style>