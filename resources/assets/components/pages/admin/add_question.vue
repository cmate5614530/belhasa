
<template>
  <div><br><br>
    <div class="col-lg-12 mb-3">
      <b-card header="" header-tag="h4" class="bg-success-card datatable-material">
        <div class="card-header card-header-icon card-header-rose">
          <div class="card-icon">
            <i class="material-icons">assignment</i>
          </div>
        </div><br><br><br><br>



        <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="p-3 bg-white shadow rounded-lg">
                  <div class="container-fluid img_backgrond">
                    <div class="panel-body r-content">
                      <div class="p-3 bg-white shadow rounded-lg">
                        <input type="file" name="image" required accept="image/*" @change="setImage1" />
                        <img :src="model.croppedImageSrc1" width="100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="cancelQuestionImageChoice(indexModal)">Close</button>
                <button type="button" class="btn btn-primary" @click="saveQuestionImageChoice(indexModal)">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="p-3 bg-white shadow rounded-lg">
                  <div class="container-fluid img_backgrond">
                    <div class="panel-body r-content">
                      <div class="p-3 bg-white shadow rounded-lg">
                        <input type="file" name="image" required accept="image/*" @change="setImage2" />
                        <img :src="croppedImageSrc2" width="100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="cancelQuestionImageChoice(indexModal)">Close</button>
                <button type="button" class="btn btn-primary" @click="saveQuestionImageChoice(indexModal)">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="p-3 bg-white shadow rounded-lg">
                  <div class="container-fluid img_backgrond">
                    <div class="panel-body r-content">
                      <div class="p-3 bg-white shadow rounded-lg">
                        <input type="file" name="image" required accept="image/*" @change="setImage3" />
                        <img :src="croppedImageSrc3" width="100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="cancelQuestionImageChoice(indexModal)">Close</button>
                <button type="button" class="btn btn-primary" @click="saveQuestionImageChoice(indexModal)">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <vue-form :state="formstate1" @submit.prevent="onSubmit(2)">
          <div class="card-body">
            <div v-for="(query, index) in model.queries">
              <div class="child-item">
                <div class="close-trans"  >
                  <button v-if="index" class="btn btn-danger btn-sm close-translation logMe" @click="delete_row(index)">
                    <li class="material-icons">close</li></button>
                </div>
                <div class="row">
                  <div class="col-lg-9">
                    <label>Enter your question here...</label>

                    <validate tag="div">
                      <b-form-textarea
                          v-model="query.query"
                          id="textarea-large"
                          required
                          size="lg"
                          placeholder=""
                          rows="10"
                          class="r-content"
                          ref = "question"
                          name="questionData"
                      ></b-form-textarea>
                      <field-messages name="questionData" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Question is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                  <div class="col-lg-3">
                    <div>
                      <input type="file" name="image" required accept="image/*" @change="setImage"/>
                      <img v-if="!index" class="bg-light" :src="model.photo" style="    margin-top: 45px; width: 200px;"/>

                    </div>
                  </div>
                </div><br><br>
                <div class="table-responsive">
                  <table class="table table-striped">
                    <tbody>
                    <tr>
                      <td class="text-left">Audio</td>
                      <td>
                        <input type="file" accept="audio/mp3" :id = "index+'audio'"  v-on:change="onFileChange">
                        <div :class="index+'audio'"> </div>
                      </td>
                    </tr>
                    <tr v-if="index == 0">
                      <td class="text-left">Choose Topic Area</td>
                      <td>
                        <validate tag="div">
                          <b-form-select
                              v-model="model.topicArea"
                              :options="TopicAreaData"
                              value-field="id"
                              text-field="name"
                              class="mb-3 r-content form-control"
                              name = "topicAreaDataInput"
                              id = "topic-area"
                              required
                              disabled-field="notEnabled"
                          >
                          </b-form-select>
                          <field-messages name="topicAreaDataInput" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">topicArea is a required field</div>
                          </field-messages>
                        </validate>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-left">Choose Language</td>
                      <td>
                        <validate tag="div">
                          <b-form-select
                              v-model="query.language"
                              :options="languageData"
                              value-field="id"
                              text-field="name"
                              class="mb-3 r-content form-control"
                              name = "languageDataInput"
                              id = "language"
                              required
                              disabled-field="notEnabled"
                          >
                          </b-form-select>
                          <field-messages name="languageDataInput" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">language is a required field</div>
                          </field-messages>
                        </validate>
                      </td>
                    </tr>
                    <tr v-if="!index">
                      <td class="text-left">Category</td>
                      <td>
                        {{model.category}}
                      </td>
                    </tr>
                    <tr v-if="!index">
                      <td class="text-left">Question Sections	</td>
                      <td>
                        {{model.testType}}
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div class="table-responsive add-translation-content"><br>
                  <div>Answer Questions</div><br>
                  <table class="table table-striped">
                    <tbody>
                    <tr>
                      <td class="text-center" v-if="!index">
                        <label>
                          <input type="radio" name="some-radios" value=1 id = "choice_1" v-model = "model.answer">
                        </label>
                      </td>
                      <td>
                        <input type="text" v-model = "query.choice1" class="form-control r-content" ref="choice1"  placeholder="Option 1">
                      </td>
                      <td>
                        <input type="file" name="image" required accept="image/*" @change="setImage1"/>
                        <img v-if="!index" class="bg-light" :src="model.choice1photo" style="width: 100px"/>
                      </td>
                      <td>
                        <label>Choose new audio:</label>

                        <input type="file" accept="audio/mp3" :id = "index" name = 0 v-on:change="onFileChangeOption">
                        <div :class="index+'audioOption0'"> </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center" v-if="!index">
                        <label>
                          <input type="radio" name="some-radios" value=2 id = "choice_2" v-model = "model.answer">
                        </label>
                      </td>
                      <td>
                        <input type="text" v-model = "query.choice2" class="form-control r-content" ref="choice2"   placeholder="Option 2">
                      </td>
                      <td>
                        <input type="file" name="image" required accept="image/*" @change="setImage2"/>
                        <img v-if="!index" class="bg-light" :src="model.choice2photo" style="width: 100px"/>
                      </td>
                      <td>
                        <label>Choose new audio:</label>
                        <input type="file" accept="audio/mp3" :id = "index" name = 1 v-on:change="onFileChangeOption">
                        <div :class="index+'audioOption1'"> </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center" v-if="!index">
                        <label>
                          <input type="radio" name="some-radios" value=3 id = "choice_3" v-model = "model.answer">
                        </label>

                      </td>
                      <td>
                        <input type="text" v-model = "query.choice3" class="form-control r-content" ref="choice3"  placeholder="Option 3">
                      </td>
                      <td>
                        <input type="file" name="image" required accept="image/*" @change="setImage3"/>
                        <img v-if="!index" class="bg-light" :src="model.choice3photo" style="width: 100px"/>
                      </td>
                      <td>
                        <label>Choose new audio:</label>
                        <input type="file" accept="audio/mp3" :id = "index" name = 2 v-on:change="onFileChangeOption">
                        <div :class="index+'audioOption2'"> </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="add-translation">
              <button class="btn btn-success" @click="addTranslation">
                <i class="material-icons">add_circle_outline</i>
                Add Translation
              </button>
            </div>
          </div>
          <div class="text-center">
            <button class="btn btn-success"> Save Question</button>

            <a :href="'#/admin/questionmanagement/'+ this.$route.params.category_id+ '/'+ this.$route.params.test_type"><button class="btn btn-danger">Cancel</button></a>
          </div>
        </vue-form>

      </b-card>
    </div>

  </div>
</template>
<script>
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
import Vue from 'vue'
import VueForm from "vue-form";
import options from "src/validations/validations.js";
import Datepicker from 'vuejs-datepicker'
import Admin_ApiService from "../../../common/admin_api.service";
Admin_ApiService.init();
import miniToastr from "mini-toastr";
miniToastr.init();

Vue.use(VueForm, options);
export default {
  components: {
    VueCropper
  },
  name: "register",
  data: function() {
    return {
      formstate1:{},
      saveDataButton : true,
      category_id:this.$route.params.category_id,
      imageSrc: "",
      imageSrc1: "",
      imageSrc2: "",
      imageSrc3: "",
      indexModal:'',
      counter:1,
      value: '',
      formstate: {},
      croppedImageSrc: "",
      croppedImageSrc1: "",
      croppedImageSrc2: "",
      croppedImageSrc3: "",
      TopicAreaData: [],
      languageData: [],

      model: {
        photo:'',
        choice1photo:'',
        choice2photo:'',
        choice3photo:'',
        testType:'',
        queries:[

        ],
        topicArea:'',
        category: '',
        answer:'1'
      },
    }
  },

  methods: {
    onFileChange(e){
      var fileInput = e.target.files[0]
      var id = e.target.id
      var index=parseInt(id.replace('audio',''));
      var reader = new FileReader();
      reader.readAsDataURL(fileInput);
      var query = this.model.queries[index];
      reader.onload = function () {
        console.log(reader.result);

        query.audio = reader.result;
        var audio = '<audio controls id=""><source src="' + reader.result + '" type="audio/mpeg"></audio>';
        var className = "." + id;
        $(className).html(audio)
      };
    },
    onFileChangeOption(e){
      var fileInput = e.target.files[0]
      var index = e.target.id
      var name = e.target.name

      var reader = new FileReader();
      reader.readAsDataURL(fileInput);
      var query = this.model.queries[index];
      reader.onload = function () {
        console.log(reader.result);
       if(name == 0){
         query.audioOption1 = reader.result;
       }
       if(name == 1){
         query.audioOption2 = reader.result;
       }
       if(name == 2){
         query.audioOption3 = reader.result;
       }
        var audio = '<audio controls id=""><source src="' + reader.result + '" type="audio/mpeg"></audio>';
        var className = "." + index + 'audioOption'+name;
        $(className).html(audio)
      };
    },


    onSubmit(){
      this.saveDataButton = false;
      if (this.formstate1.$invalid) {
        return;
      }else {
        console.log('this.model', this.model)
        Admin_ApiService.post('QuestionCreate', this.model).then(
            result => {
              let data = result.data;
              if (data.success) {
                // this.getData = data;
                //
                // this.TopicAreaData = data.topicAreaData;
                this.saveDataButton = true
                var obj = {};
                this.model.queries = [];
                this.model.queries.push(obj)
                miniToastr.success(data.message)

              }
            },
            error => {
              console.log('error')
              // this.saveDataButton = true
              // var obj = {};
              // this.model.queries = [];
              // this.model.queries.push(obj)
              miniToastr.error('Question creating is failed')
            }
        )
      }

    },
    cancelQuestionImage(){
      this.croppedImageSrc = ''
      this.imageSrc = ''
    },
    saveQuestionImage(){
      this.model.photo = this.croppedImageSrc;
      $('#exampleModal').hide();
      $('.modal-backdrop').hide();
    },
    cancelQuestionImageChoice(index){


      if(index ==  1){
        this.croppedImageSrc1 = ''
        this.imageSrc1 = ''
      }
      else if(index ==  2){
        this.croppedImageSrc2 = ''
        this.imageSrc2 = ''
      }
      else{
        this.croppedImageSrc3 = ''
        this.imageSrc3 = ''
      }

    },

    modal_popup(index){

      this.indexModal = index
    },
    delete_row(index) {

      this.model.queries.splice(index, 1);

    },
    showAlert:function(){
      alert("Hola");
    },

    delete_item(){

    },


    addTranslation(){
      this.model.queries.push({})

    },
    CancelCropImage(){
      this.croppedImageSrc = ''
    },
    setImage: function (e) {
      const file = e.target.files[0];
      if (!file.type.includes('image/')) {
        alert('Please select an image file');
        return;
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.model.photo = event.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Sorry, FileReader API not supported');
      }
    },
    setImage1: function (e) {
      const file = e.target.files[0];
      if (!file.type.includes('image/')) {
        alert('Please select an image file');
        return;
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.model.choice1photo = event.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Sorry, FileReader API not supported');
      }
    },
    setImage2: function (e) {
      const file = e.target.files[0];
      if (!file.type.includes('image/')) {
        alert('Please select an image file');
        return;
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.model.choice2photo = event.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Sorry, FileReader API not supported');
      }
    },
    setImage3: function (e) {
      const file = e.target.files[0];
      if (!file.type.includes('image/')) {
        alert('Please select an image file');
        return;
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.model.choice3photo = event.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Sorry, FileReader API not supported');
      }
    },


  },


  created() {
    var obj = {};
    this.model.queries = [];
    this.model.queries.push(obj)


    Admin_ApiService.post('GetTopicArea').then(
        result => {
          let data = result.data;
          if (data.success) {
            this.getData = data;
            this.TopicAreaData = data.topicAreaData;
            console.log('this.TopicAreaData',this.TopicAreaData)
          }
        },
        error => {
          console.log('error')
        }
    )

    var categoryIdData = {
      category_id: this.$route.params.category_id

    }
    this.model.category_id = this.$route.params.category_id;

    console.log('categoryIdData',categoryIdData)

    Admin_ApiService.post('GetCategoryById',categoryIdData).then(
        result => {
          let data = result.data;
          if (data.success) {
            this.getData = data;
            console.log('getData',data)
            this.model.category =  data.categoryData;

          }
        },
        error => {
          console.log('error')
        }
    )
    Admin_ApiService.post('getLanguage').then(
        result => {
          let data = result.data;
          if (data.success) {
            this.getData = data;
            this.languageData = data.languageData;
          }
        },
        error => {
          console.log('error')
        }
    )
    miniToastr.setIcon('error', 'i', {
      'class': 'fa fa-times'
    });
    miniToastr.setIcon('success', 'i', {
      'class': 'fa fa-arrow-circle-o-down'
    });
  },
  mounted: function() {

    if(this.$route.params.test_type == 'realtime' || this.$route.params.test_type == 'specific'){
      this.model.testType = 'specific'
      this.model.isSpecific = true
      this.model.isCommon = false
    }
    if(this.$route.params.test_type == 'common'){
      this.model.testType = 'common'
      this.model.isCommon = true
      this.model.isSpecific = false
    }

    $('.logMe').on('click', (evt) => {

      const data = $(evt.target).data('logId');
      this.logData(data);
    });
    function showAlert23(e)
    {
      e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
    }
  },
  destroyed: function() {
  },
}
</script>

<style>
.custom-select{
  background: none;
}
</style>
<style scoped>

.datatable-material{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin: 30px 0;
  overflow: unset;
  -webkit-box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
  border-radius: 6px;
  background: #fff;
  font-family: "Helvetica Neue", Roboto, Arial, "Droid Sans", sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #333333;
  border: none;
}


.topic-title{
  width: 25%;
}
.question-num{
  width: 45%;
}
.card-header-icon{
  margin-top: -20px;
}
#topic-area{
  width: 100%;
}
.audio{
  width: 50%;
}
.r-content{
  width: 100%;
}
.question-available{
  display: flex;
}
.add-translation{
  text-align: right;
}
.r-content{
  border: 1px solid gray;
  border-radius: 3px;
  padding: 6px 12px;
}
.form-control:read-only {
  background-image: none;
}
select, select.form-control {
  -moz-appearance: none;
  -webkit-appearance: auto;
}
#modal-xl .modal-dialog modal-xl{
  display: initial !important;
}
.upload-question-image{
  margin-top: 26px;
}
.form-control, .is-focused .form-control {
  background-image: none;
}
.close-translation{
  width: 30px;
  padding: 8px;
  height: 30px;
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
<style>
.custom-control-indicator{
  margin-right: 5px;
}
.close-trans{
  text-align: right;
  margin-top: 30px;
}

</style>
