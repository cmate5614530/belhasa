<template>
  <div style="">
    <div class="panel-white-box" id = "practise" v-if="page_language == 'ar-ar' || page_language == 'ur-ur' || page_language == 'fa-fa'" style="  margin-top: 70px;direction: rtl;">
      <div class="">
        <b-dropdown-item exact class="dropdown_content" style="display: none">
          <a href="javascript:void(0)" exact id = "user_Logout" class="drpodowtext" @click.stop.prevent="logout">
            <i class="fa fa-sign-out"></i> Logout
          </a>
        </b-dropdown-item>
        <input type="text" style="display: none" id = "please_choose_your_answer" :value="$t('form.please_choose_your_answer')">
        <div class="section-title">{{$t('home.labels.welcome')}}</div>
        <div class="note-description-wrapper m-5 text-center">
<!--          <div v-if="showSelectionPractise == 0" class="col-lg-12 col-md-12 col-sm-12 practise_specific_item" @click="showModal"><i class="fa fa-product-hunt"></i>{{$t('testconfigure.specific')}}</div>-->
              <div  class="col-lg-12 col-md-12 col-sm-12 practise_specific_after"><i class="fa fa-product-hunt"></i> {{$t('form.practise')}}</div>
          <br><br><br><br><br><br><br><br>
          <div  class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 practise_specific" @click="practiseChoose('specific')"><i class="fa fa-search-plus"></i> {{$t('testconfigure.specific')}}</div>
            <div class="col-lg-6 col-md-6 col-sm-12 practise_common" @click="practiseChoose('common')"><i class="fa fa-shield"></i> {{$t('testconfigure.common')}}</div>
          </div>
        </div>
        <div class="full-width-modal" v-if="pageIndex == 'testStart'">
          <div class="loader-image" v-if="loader" style="position:fixed; top:50%;left:50%">
            <img src="~img/app-loader.gif">
          </div>
          <div class="full-modal-header background-1">
            <p class="text-size-1 text-white mb-0 mt-2"  style="float:right">
              {{$t('table.testfor')}} -   {{$t('table.candidate_name')}}  - {{$store.state.user.name}}
            </p>
            <div class="text-right text-white text-size-2"  style="float:left">
              <i class="fa fa-clock-o" aria-hidden="true"></i>
              {{$t('table.timerem')}} {{ minute }} : {{ display_second }}
              <br>
              <strong>#{{current_question_number+1}}/{{testConfig.noofquestion}}</strong>
            </div>
          </div>

          <div class="full-modal-body" v-if="questions.length>0">
            <div class="question-image-container text-center" v-if="question.photo">
              <img class="question-image" :src="question.photo">
            </div>
            <div class="question-text" @click.prevent="question.isPlaying0 ? play(question, 0) : pause(question, 0)">
              <span class="question-text" v-if="question.isPlaying0">{{question.question}}</span>
              <span class="question-text" style="color:#ff0000;" v-if="!question.isPlaying0 && this.$store.state.customer_option.audio_language >0">{{question.question}}</span>
              <span class="question-text" style="" v-if="!question.isPlaying0 && this.$store.state.customer_option.audio_language == 0">{{question.question}}</span>
            </div>
            <div class="question-choice-container">
              <table>
                <tr class="question-choice-item-wrapper">
                  <td class="question-choice-select-wrapper">
                    <input type="radio" value="1" id="choice-1"
                           @change="checkAnswer(1)"
                           :disabled="disableOption == 1"
                    />
                    <label class="normal" for="choice-1"></label>
                  </td>
                  <td class="question-choice-text-wrapper" @click.prevent="question.isPlaying1 ? pause(question, 1) : play(question, 1)">

                    <span class="question-choice-text" v-if="!question.isPlaying1">{{question.choice1}}</span>
                    <span class="question-choice-text" style="color:red;" v-if="question.isPlaying1">{{question.choice1}}</span>
                  </td>
                  <td>
                    <img :src="question.choice1photo" class="choice-photo-container" v-if="question.choice1photo">
                  </td>
                  <td class="choice-result-display">
                  <span>
                      <i class='fa fa-check-circle fa-3x animated zoomIn' v-if="optionResult.successFlag1"></i>
                  </span>
                    <span>
                      <i class='fa fa-times-circle fa-3x animated zoomIn' v-if="optionResult.errorFlag1"></i>
                  </span>
                  </td>
                </tr>
                <tr class="question-choice-item-wrapper">
                  <td class="question-choice-select-wrapper">
                    <input type="radio" value="2" id="choice-2"
                           @change="checkAnswer(2)"
                           :disabled="disableOption == 1"
                    />
                    <label class="normal" for="choice-2"></label>
                  </td>
                  <td class="question-choice-text-wrapper"  @click.prevent="question.isPlaying2 ? pause(question, 2) : play(question, 2)">
                    <audio style="display: none"></audio>
                    <span class="question-choice-text" v-if="!question.isPlaying2">{{question.choice2}}</span>
                    <span class="question-choice-text" style="color:red;" v-if="question.isPlaying2">{{question.choice2}}</span>
                  </td>
                  <td>
                    <img :src="question.choice2photo" class="choice-photo-container" v-if="question.choice1photo">
                  </td>
                  <td class="choice-result-display">
                <span>
                    <i class='fa fa-check-circle fa-3x animated zoomIn' v-if="optionResult.successFlag2"></i>
                </span>
                    <span>
                  <i class='fa fa-times-circle fa-3x animated zoomIn' v-if="optionResult.errorFlag2"></i>
               </span>
                  </td>
                </tr>
                <tr class="question-choice-item-wrapper">
                  <td class="question-choice-select-wrapper">
                    <input type="radio" value="3" id="choice-3"
                           @change="checkAnswer(3)"
                           :disabled="disableOption == 1"
                    />
                    <label class="normal" for="choice-3"></label>
                  </td>
                  <td class="question-choice-text-wrapper" @click.prevent="question.isPlaying3 ? pause(question, 3) : play(question, 3)">

                    <span class="question-choice-text" v-if="!question.isPlaying3">{{question.choice3}}</span>
                    <span class="question-choice-text" style="color:red;" v-if="question.isPlaying3">{{question.choice3}}</span>
                  </td>
                  <td>
                    <img :src="question.choice3photo" class="choice-photo-container" v-if="question.choice1photo">
                  </td>
                  <td class="choice-result-display">
                  <span>
                      <i class='fa fa-check-circle fa-3x animated zoomIn' v-if="optionResult.successFlag3"></i>
                  </span>
                    <span>
                  <i class='fa fa-times-circle fa-3x animated zoomIn' v-if="optionResult.errorFlag3"></i>
               </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="full-modal-footer background-1 p-3 pl-4">
            <div class="bottom-left-control">
              <button class="button-type-1" @click="review" v-if="reviewIndex == 1"><i class="fa fa-sign-in" aria-hidden="true"></i>Review</button>
            </div>
            <div class="bottom-right-control" style="float: left">
              <button class="button-type-1" @click="previousQuestion" v-if="current_question_number>0"><i class="fa fa-arrow-right ml-2" aria-hidden="true"></i>{{$t('test.link.previous')}}</button>
              <button class="button-type-1" @click="nextQuestion">{{$t('test.link.next')}}<i class="fa fa-arrow-left mr-2" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
        <!--    sho modal-->
        <div class="modal fade" id="showSelectModal" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
              </div>
              <div class="modal-body modal-text">
                <h3>{{$t('form.practise_test_msg')}}</h3><br>
              </div>
              <div class="modal-footer">
                <div class="modal-confirm">
                  <button type="button" class="btn btn-primary" data-dismiss="modal" @click="confirm">{{$t('resume.ok')}}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!---->
        <!--    sho modal-->
        <div class="modal fade" id="EnSureModal" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Do ypu need change </h4>
              </div>
              <div class="modal-body">
                <p>Are u sure from </p>
                <label id="FromDate"></label>
                <p>To</p>
                <label id="ToDate"></label>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">no</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">yes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---->
    </div>
    <div v-else>
      <div class="panel-white-box" id = "practise" style="  margin-top: 70px">
        <div class=" ">
          <b-dropdown-item exact class="dropdown_content" style="display: none">
            <a href="javascript:void(0)" exact id = "user_Logout" class="drpodowtext" @click.stop.prevent="logout">
              <i class="fa fa-sign-out"></i> Logout
            </a>
          </b-dropdown-item>
          <div class="section-title">{{$t('home.labels.welcome')}}</div>
          <div class="note-description-wrapper m-5 text-center">
<!--            <div v-if="showSelectionPractise == 0" class="col-lg-12 col-md-12 col-sm-12 practise_specific_item" @click="showModal"><i class="fa fa-product-hunt"></i>{{$t('testconfigure.specific')}}</div>-->
            <div   class="col-lg-12 col-md-12 col-sm-12 practise_specific_after">
              <i class="fa fa-product-hunt"></i> {{$t('form.practise')}}</div>
            <br><br><br><br><br><br><br><br>
            <div  class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 practise_common" @click="practiseChoose('common')"><i class="fa fa-shield"></i> {{$t('testconfigure.common')}}</div>
              <div class="col-lg-6 col-md-6 col-sm-12 practise_specific" @click="practiseChoose('specific')"><i class="fa fa-search-plus"></i> {{$t('testconfigure.specific')}}</div>
            </div>
          </div>

          <div class="full-width-modal" v-if="pageIndex == 'testStart'">
            <div class="loader-image" v-if="loader" style="position:fixed; top:50%;left:50%">
              <img src="~img/app-loader.gif">
            </div>
            <div class="full-modal-header background-1">
              <p class="text-size-1 text-white mb-0 mt-2"  style="float:left">
                {{$t('table.testfor')}} -   {{$t('table.candidate_name')}}  - {{$store.state.user.name}}
              </p>
              <div class="text-right text-white text-size-2"  style="float:right">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                {{$t('table.timerem')}} {{ minute }} : {{ display_second }}
                <br>
                <strong>#{{current_question_number+1}}/{{questions.length < testConfig.noofquestion ? questions.length : testConfig.noofquestion}}</strong>
<!--                <strong>{{questions.length < testConfig.noofquestion ? questions.length : testConfig.noofquestion}}</strong>-->
              </div>
            </div>

            <div class="full-modal-body" v-if="questions.length>0">
              <div class="question-image-container text-center" v-if="question.photo">
                <img class="question-image" :src="question.photo">
              </div>
              <div class="question-text audio-section"  @click.prevent="question.isPlaying0 ? play(question, 0) : pause(question, 0)">
<!--                <span class="question-text">{{question.question}}</span>-->
                <span class="question-text" v-if="question.isPlaying0">{{question.question}}</span>
                <span class="question-text" style="color:#ff0000;" v-if="!question.isPlaying0 && this.$store.state.customer_option.audio_language >0">{{question.question}}</span>
                <span class="question-text" style="" v-if="!question.isPlaying0 && this.$store.state.customer_option.audio_language == 0">{{question.question}}</span>
              </div>
              <div class="question-choice-container">
                <table>
                  <tr class="question-choice-item-wrapper">
                    <td class="question-choice-select-wrapper">
                      <input type="radio" value="1" id="choice-1"
                             @change="checkAnswer(1)"
                             :disabled="disableOption == 1"
                      />
                      <label class="normal" for="choice-1"></label>
                    </td>
                    <td class="question-choice-text-wrapper" @click.prevent="question.isPlaying1 ? pause(question, 1) : play(question, 1)">
                      <span class="question-choice-text" v-if="!question.isPlaying1">{{question.choice1}}</span>
                      <span class="question-choice-text" style="color:red;" v-if="question.isPlaying1">{{question.choice1}}</span>
                    </td>
                    <td v-if="question.choice1photo">
                      <img :src="question.choice1photo" class="choice-photo-container">
                    </td>
                    <td class="choice-result-display">
                  <span>
                      <i class='fa fa-check-circle fa-3x animated zoomIn' v-if="optionResult.successFlag1"></i>
                  </span>
                      <span>
                      <i class='fa fa-times-circle fa-3x animated zoomIn' v-if="optionResult.errorFlag1"></i>
                  </span>
                    </td>
                  </tr>
                  <tr class="question-choice-item-wrapper">
                    <td class="question-choice-select-wrapper">
                      <input type="radio" value="2" id="choice-2"
                             @change="checkAnswer(2)"
                             :disabled="disableOption == 1"
                      />
                      <label class="normal" for="choice-2"></label>
                    </td>
                    <td class="question-choice-text-wrapper" @click.prevent="question.isPlaying2 ? pause(question, 2) : play(question, 2)">
                      <span class="question-choice-text" v-if="!question.isPlaying2">{{question.choice2}}</span>
                      <span class="question-choice-text" style="color:red" v-if="question.isPlaying2">{{question.choice2}}</span>
                    </td>
                    <td v-if="question.choice1photo">
                      <img :src="question.choice2photo" class="choice-photo-container" >
                    </td>
                    <td class="choice-result-display">
                    <span>
                        <i class='fa fa-check-circle fa-3x animated zoomIn' v-if="optionResult.successFlag2"></i>
                    </span>
                      <span>
                        <i class='fa fa-times-circle fa-3x animated zoomIn' v-if="optionResult.errorFlag2"></i>
                     </span>
                    </td>
                  </tr>
                  <tr class="question-choice-item-wrapper">
                    <td class="question-choice-select-wrapper">
                      <input type="radio" value="3" id="choice-3"
                             @change="checkAnswer(3)"
                             :disabled="disableOption == 1"
                      />
                      <label class="normal" for="choice-3"></label>
                    </td>
                    <td class="question-choice-text-wrapper" @click.prevent="question.isPlaying3 ? pause(question, 3) : play(question, 3)">

                      <span class="question-choice-text" v-if="!question.isPlaying3">{{question.choice3}}</span>
                      <span class="question-choice-text" style="color:red" v-if="question.isPlaying3">{{question.choice3}}</span>
                    </td>
                    <td>
                      <img :src="question.choice3photo" class="choice-photo-container" v-if="question.choice1photo">
                    </td>
                    <td class="choice-result-display">
                  <span>
                      <i class='fa fa-check-circle fa-3x animated zoomIn' v-if="optionResult.successFlag3"></i>
                  </span>
                      <span>
                  <i class='fa fa-times-circle fa-3x animated zoomIn' v-if="optionResult.errorFlag3"></i>
               </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="full-modal-footer background-1 p-3 pl-4">
              <div class="bottom-left-control">
                <button class="button-type-1" @click="review" v-if="reviewIndex == 1"><i class="fa fa-sign-in" aria-hidden="true"></i>Review</button>
              </div>
              <div class="bottom-right-control" style="float: right">
                <button class="button-type-1" @click="previousQuestion" v-if="current_question_number>0"><i class="fa fa-arrow-left mr-2" aria-hidden="true"></i>{{$t('test.link.previous')}}</button>
                <button class="button-type-1" @click="nextQuestion">{{$t('test.link.next')}}<i class="fa fa-arrow-right ml-2" aria-hidden="true"></i></button>
              </div>
            </div>
          </div>


          <!--    sho modal-->
          <div class="modal fade" id="showSelectModal" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                </div>
                <div class="modal-body modal-text">
                  <h3>{{$t('form.practise_test_msg')}}</h3><br>
                </div>
                <div class="modal-footer">
                  <div class="modal-confirm">
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click="confirm">{{$t('resume.ok')}}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!---->
          <!--    sho modal-->
          <div class="modal fade" id="EnSureModal" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4 class="modal-title">Do ypu need change </h4>
                </div>
                <div class="modal-body">
                  <p>Are u sure from </p>
                  <label id="FromDate"></label>
                  <p>To</p>
                  <label id="ToDate"></label>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">no</button>
                  <button type="button" class="btn btn-default" data-dismiss="modal">yes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!---->
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import Admin_ApiService from '../../../common/admin_api.service';

Admin_ApiService.init();
Vue.use(VueAwesomeSwiper);
var unsub;
import {
  ClientTable,
  Event
} from 'vue-tables-2';
import datatable from "../../../components/plugins/DataTable/DataTable";
import miniToastr from "mini-toastr";
import User_ApiService from "common/user_api.service";
miniToastr.init();
User_ApiService.init();

Vue.use(ClientTable, {}, false);
export default {
  name: "category",
  components: {
    datatable
  },
  data() {
    return {
      isPlaying0:false,
      page_language:'',
      disableOption :0,
      selected:[],
      status: 'not_accepted',
      pageIndex:'',
      reviewUnansweredQuestion:[],
      minute : '',
      second : '59',
      display_second: '00',
      testConfig:{},
      current_question_number:-3,
      // current_testing_time:1800,
      questions:[],
      loader:false,
      rtl_screen:false,
      question:{},
      realtimetest:0,
      stopOption1:false,
      optionResult:{
        successFlag1:false,
        errorFlag1:false,
        successFlag2:false,
        errorFlag2:false,
        successFlag3:false,
        errorFlag3:false
      },
      selectoption:true,
      form_choice:0,
      optionDisabled:true,
      tempCheck:'',
      testOption:{},
      question_array_store:[],
      testResult_init:[],
      questionResultStatus:'',
      testResult: {
        question: null,
        input: null,
        status: null
      },
      first_testResult:[],
      unanswered_question:0,
      unansweredQuestionStartNum :0,
      reviewIndex:0,
      fullTestConfigData:[],
      showSelectionPractise:0,
      model: {

      }
    }
  },
  mounted: function () {

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

  beforeRouteLeave(to, from, next) {
    unsub();
    next();
  },

  methods: {
    play (question, id) {

      if(this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0){
        if(id == 0 && question.audio){
          question.isPlaying0 = false;
          question.isPlaying1 = false;
          question.isPlaying2 = false;
          question.isPlaying3 = false;
          question.option1audio.pause();
          question.option1audio.currentTime = 0;
          question.option2audio.pause();
          question.option2audio.currentTime = 0;
          question.option3audio.pause();
          question.option3audio.currentTime = 0;
          question.audio.play();
          question.audio.onended = function() {
            question.isPlaying0 = true;
          }
        }

        if(id == 1 && question.option1audio){
          question.isPlaying1 = true;
          question.isPlaying0 = true;
          question.isPlaying2 = false;
          question.isPlaying3 = false;
          question.audio.pause();
          question.audio.currentTime = 0;

          question.option2audio.pause();
          question.option2audio.currentTime = 0;
          question.option3audio.pause();
          question.option3audio.currentTime = 0;
          question.option1audio.play();
          question.option1audio.onended = function() {
            question.isPlaying1 = false;
          }

        }
        if(id == 2 && question.option2audio){
          question.isPlaying2 = true;
          question.isPlaying0 = true;
          question.isPlaying1 = false;
          question.isPlaying3 = false;
          question.audio.pause();
          question.audio.currentTime = 0;
          question.option1audio.pause();
          question.option1audio.currentTime = 0;
          question.option3audio.pause();
          question.option3audio.currentTime = 0;
          question.option2audio.play();
          question.option2audio.onended = function() {
            question.isPlaying2 = false;
          }

        }
        if(id == 3 && question.option3audio)
        {
          question.isPlaying3 = true;
          question.isPlaying0 = true;
          question.isPlaying1 = false;
          question.isPlaying2 = false;
          question.audio.pause();
          question.audio.currentTime = 0;
          question.option1audio.pause();
          question.option1audio.currentTime = 0;
          question.option2audio.pause();
          question.option2audio.currentTime = 0;
          question.option3audio.play();
          question.option3audio.onended = function() {
            question.isPlaying3 = false;
          }
        }
      }
    },
    pause(question, id){
      if(this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0){
        if(id == 0 && question.audio){
          question.isPlaying0 = true;
          question.audio.pause();
          question.audio.currentTime = 0;
        }
        if(id == 1 && question.option1audio){
          question.isPlaying1 = false;
          question.option1audio.pause();
          question.option1audio.currentTime = 0;
        }
        if(id == 2 && question.option2audio){
          question.isPlaying2 = false;
          question.option2audio.pause();
          question.option2audio.currentTime = 0;
        }
        if(id == 3 && question.option3audio){
          question.isPlaying3 = false;
          question.option3audio.pause();
          question.option3audio.currentTime = 0;
        }
      }
    },
    checkAnswer(choice){

      this.form_choice = choice;
      this.selectoption = false;

      if(this.fullTestConfigData[1].category != 'realtime'){
        this.optionResult = {};
        if(this.tempCheck == choice){
          this.tempCheck = '0';
          if(this.form_choice == this.questions[this.current_question_number].answer){
            this.optionResult['successFlag' + this.form_choice] = true;
          }else {
            this.optionResult['successFlag' + this.question.answer] = true;
          }
          if (!this.optionResult['successFlag' + this.form_choice]){
            this.optionResult['errorFlag' + this.form_choice] = true;
          }
          // this.form_choice = null;
        }else {
          this.tempCheck = choice;
          if(this.form_choice == this.questions[this.current_question_number].answer){
            this.optionResult['successFlag' + this.form_choice] = true;
          }else {
            this.optionResult['successFlag' + this.question.answer] = true;
          }
          if (!this.optionResult['successFlag' + this.form_choice]){
            this.optionResult['errorFlag' + this.form_choice] = true;
          }
          // this.form_choice = null;
        }
      }
     this.disableOption = 1;
    },
    showModal(){
      $("#showSelectModal").modal();
      console.log('user logged status1',this.$store.state.auth.logged)
    },
    confirm(){
      this.showSelectionPractise = 1;
    },
    confirm_end(){
      console.log('end!')
    },
    end_common(){
      console.log('end_common')
      $("#showSelectModal").modal();
    },
    practiseChoose(type){
      let config;
      if (type === 'common') {
        config = this.fullTestConfigData[1];
      } else if (type === 'specific') {
        config = this.fullTestConfigData[2];
      }
      console.log('----config config--->>>',config )
      this.openTest(config);
    },

    openTest(config){
      this.pageIndex = 'testStart';
      this.current_question_number=0;

      console.log('choosePractiseTest_config1233',config);
      this.minute = config.duration;
      this.second = config.duration*60;
    //
      this.loader=true
      let customer_option=this.$store.state.customer_option;

      console.log('userInformationuserInformationuserInformation', this.$store.state.userInformation)
      let testConfig=config;
      this.testConfig = config;
      var testOption = {
        testCategory:testConfig.testcategory,
        testType: testConfig.category,
        limit: testConfig.noofquestion,
        specific:testConfig.noofspecificquestion,
        common:testConfig.noofcommonquestion,
        type: testConfig.category,
        language: customer_option.text_language,
        audio_language: customer_option.audio_language,
      }

      console.log('---------------------testOption------->>>',testOption)
      this.testOption = testOption;
      User_ApiService.post('loadTest', testOption).then(
          result=>{
            var data=result.data;
            if(data.status==='success'){
              this.questions=data.data;
              console.log('All questions for the testing', data.data)
              // 12-9
              console.log('testOption.audio_language',testOption.audio_language)
              console.log('this.questions',this.questions)
              if(testOption.audio_language >0){

                this.questions.map((question, index)=>{
                  this.questions.index = index;
                  if(this.questions[index]['audio']){
                    this.questions[index]['audio']=new Audio(question.audio);
                  }
                  else {
                    this.questions[index]['audio'] = ''
                  }
                  if(this.questions[index]['option1audio']){
                    this.questions[index]['option1audio']=new Audio(question.option1audio);
                  }
                  else {
                    this.questions[index]['option1audio'] = ''
                  }
                  if(this.questions[index]['option2audio']){
                    this.questions[index]['option2audio']=new Audio(question.option2audio);
                  }
                  else {
                    this.questions[index]['option2audio'] = ''
                  }
                  if(this.questions[index]['option3audio']){
                    this.questions[index]['option3audio']=new Audio(question.option3audio);
                  }
                  else {
                    this.questions[index]['option3audio'] = ''
                  }
                })
                this.indexIndex = 0;


                var question = this.questions[0];

                // question.isPlaying0 = false
                this.audioSelectStatus = true;

                if(typeof this.questions[0]['audio'] !="undefined"){
                  this.questions[0]['audio'].play();
                  this.questions[0]['audio'].onended = function() {
                    question.isPlaying0 = true
                  }
                  question.isPlaying0 = false
                }
                else {
                  question.isPlaying0 = true
                }

              }
              else {
                this.audioSelectStatus = false;
                this.questions.map((question, index)=>{
                  this.questions.index = index;
                  this.questions[index]['audio']='';
                  this.questions[index]['option1audio']='';
                  this.questions[index]['option2audio']='';
                  this.questions[index]['option3audio']='';
                  question.isPlaying0 = false
                })
              }
              // 12-9
              this.countDownTimer()
            }
            this.loader=false;
            this.question=this.questions[0];
          },
          ()=>{
            this.loader=false;
          }
      )
    //

    },
    nextQuestion(){
      this.current_question_number++;
      console.log('this.current_question_number',this.current_question_number)

        $('#choice-1').prop('checked', false); // Unchecks it
        $('#choice-2').prop('checked', false); // Unchecks it
        $('#choice-3').prop('checked', false); // Unchecks it
        this.disableOption = 0;
        this.optionResult['successFlag1'] = false;
        this.optionResult['errorFlag1'] = false;
        this.optionResult['successFlag2'] = false;
        this.optionResult['errorFlag2'] = false;
        this.optionResult['successFlag3'] = false;
        this.optionResult['errorFlag3'] = false;

        let questionCount = 0;
        this.questions.length < this.testConfig.noofquestion ? questionCount = this.questions.length : questionCount = this.testConfig.noofquestion;

        if(this.current_question_number < questionCount){
          this.question=this.questions[this.current_question_number];
          var previousQuestionNumber=this.questions[this.current_question_number-1];
          console.log('displaying question', this.question)
          console.log('displaying question number', this.current_question_number)
          
          if(this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0 ){ //audio mode
              
                if(this.questions[this.current_question_number-1]['audio'] !== ''){
                  this.questions[this.current_question_number-1]['audio'].pause();
                  this.questions[this.current_question_number-1]['audio'].currentTime = 0;
                }
                if(this.questions[this.current_question_number-1]['option1audio'] !== ''){
                  this.questions[this.current_question_number-1]['option1audio'].pause();
                  this.questions[this.current_question_number-1]['option1audio'].currentTime = 0;
                }
                if(this.questions[this.current_question_number-1]['option2audio'] !== ''){
                  this.questions[this.current_question_number-1]['option2audio'].pause();
                  this.questions[this.current_question_number-1]['option2audio'].currentTime = 0;
                }
                if(this.questions[this.current_question_number-1]['option3audio'] !== ''){
                  this.questions[this.current_question_number-1]['option3audio'].pause();
                  this.questions[this.current_question_number-1]['option3audio'].currentTime = 0;
                }
                if(this.questions[this.current_question_number]['audio']){
                  this.questions[this.current_question_number]['audio'].play();
                  var question = this.questions[this.current_question_number];
                  question.isPlaying0 = false;
                  this.questions[this.current_question_number]['audio'].onended = function() {
                    question.isPlaying0 = true;
                  }
                }         
          } else { //no auidio mode
            var question = this.questions[this.current_question_number];
            question.isPlaying0 = true;
          }

        }else{
            if(this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0 && this.questions[this.current_question_number-1]['audio']){
              this.questions[this.current_question_number-1]['audio'].pause();
            }
            //alert('Time over for practice test! Click OK to log out')
            alert('Practise test finsihed! Click OK to log out.')
            this.$store.dispatch('logout');
            this.$router.push('/login');
        }
    },
    previousQuestion(){
      this.current_question_number--;
      this.optionResult['successFlag1'] = false;
      this.optionResult['errorFlag1'] = false;
      this.optionResult['successFlag2'] = false;
      this.optionResult['errorFlag2'] = false;
      this.optionResult['successFlag3'] = false;
      this.optionResult['errorFlag3'] = false;
      $('#choice-1').prop('checked', false); // Unchecks it
      $('#choice-2').prop('checked', false); // Unchecks it
      $('#choice-3').prop('checked', false); // Unchecks it

      this.question=this.questions[this.current_question_number];
      this.question_for=this.questions[this.current_question_number+1];
      console.log('this.question------->',this.question)
      if(!this.question_for.choice1photo){
        if(this.question_for['audio']){
          this.question_for['audio'].pause();
          this.question_for['audio'].currentTime = 0;
        }
        if(this.question_for['option1audio']){
          this.question_for['option1audio'].pause();
          this.question_for['option1audio'].currentTime = 0;
        }
        if(this.question_for['option2audio']){
          this.question_for['option2audio'].pause();
          this.question_for['option2audio'].currentTime = 0;
        }
        if(this.question_for['option3audio']){
          this.question_for['option3audio'].pause();
          this.question_for['option3audio'].currentTime = 0;
        }
        
        this.question_for.isPlaying1 = false;
        this.question_for.isPlaying2 = false;
        this.question_for.isPlaying3 = false;
        
        
        
        
      }
      if(!this.question.choice1photo){
        var question = this.questions[this.current_question_number];
        question.isPlaying0 = false;
        if(this.question.audio){
          this.question.audio.onended = function() {
            question.isPlaying0 = true;
          }
          this.question.audio.play();
        }
        
      }
      else{


        if(this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0 && typeof this.question['audio']){
          var question = this.questions[this.current_question_number];
          question.isPlaying0 = false;
          if(this.questions[this.current_question_number]['audio']){
            this.questions[this.current_question_number]['audio'].onended = function() {
              question.isPlaying0 = true;
            }

            this.questions[this.current_question_number]['audio'].play();
          }




          if(!this.question_for.choice1photo && this.question.choice1photo  ){
            if(this.question_for['audio']){
              this.question_for['audio'].pause();
              this.question_for['audio'].currentTime = 0;
            } 
            if(this.question_for['option1audio']){
              this.question_for['option1audio'].pause();  
              this.question_for['option1audio'].currentTime = 0;
            }
            if(this.question_for['option2audio']){
              this.question_for['option2audio'].pause();
              this.question_for['option2audio'].currentTime = 0;
            }
            if(this.question_for['option3audio']){
              this.question_for['option3audio'].pause();
              this.question_for['option3audio'].currentTime = 0;
            }
            
            this.question_for.isPlaying1 = false;
            this.question_for.isPlaying2 = false;
            this.question_for.isPlaying3 = false;
          }
          else {
            if(this.question['audio']){
              this.question['audio'].pause();
              this.question['audio'].currentTime = 0;
            }
            if(this.question['option1audio']){
              this.question['option1audio'].pause();
              this.question['option1audio'].currentTime = 0;
            }
            if(this.question['option2audio']){
              this.question['option2audio'].pause();
              this.question['option2audio'].currentTime = 0;
            }
            if(this.question['option3audio']){
              this.question['option3audio'].pause();
              this.question['option3audio'].currentTime = 0;
            }
            
            this.question.isPlaying1 = false;
            this.question.isPlaying2 = false;
            this.question.isPlaying3 = false;


            if(this.question_for['audio']){
              this.question_for['audio'].pause();
              this.question_for['audio'].currentTime = 0;
            } 
            if(this.question_for['option1audio']){
              this.question_for['option1audio'].pause();
              this.question_for['option1audio'].currentTime = 0;
            }
            if(this.question_for['option2audio']){
              this.question_for['option2audio'].pause();
              this.question_for['option2audio'].currentTime = 0;
            }
            if(this.question_for['option3audio']){
              this.question_for['option3audio'].pause();
              this.question_for['option3audio'].currentTime = 0;
            }
            
            this.question_for.isPlaying1 = false;
            this.question_for.isPlaying2 = false;
            this.question_for.isPlaying3 = false;
          }
        }
      }


      this.disableOption = 0
      this.question=this.questions[this.current_question_number];
      this.question_for=this.questions[this.current_question_number+1];
    },

    countDownTimer() {
      if(this.second > 0) {
        setTimeout(() => {
          this.second -= 1
          this.display_second = this.second%60;

          if(this.second%60=== 59){
            this.minute -= 1;
            if(this.minute < 10){
              this.minute = '0' + this.minute;
            }
          }
          if(this.display_second < 10){
            this.display_second = '0' + this.display_second;
          }
          this.countDownTimer()
        }, 1000)
      } else{
            //alert('Time is over!')
            this.$store.dispatch('logout');
            this.$router.push('/login');
      }
    },

    logout(){
      let path=this.$route.path;
      if(path.includes('admin')){ // if it is admin route
        this.$store.dispatch('adminLogout');
        this.$router.push('/admin/login');
      }
      else if(path.includes('supervisor')) {
        this.$store.dispatch('supervisorLogout');
        this.$router.push('/supervisor/login');
      }
      else {
        this.$store.dispatch('logout');
        this.$router.push('/login');
      }
    }

  },
  beforeMount() {
    this.page_language = this.$i18n.locale;
    User_ApiService.get('testConfig',{category:this.$store.state.customer_option.category}).then(
        result=>{
          let data=result.data;
          this.$store.commit('fullTestConfigData',data.data);
          this.fullTestConfigData = data.data;
        }
    )
    miniToastr.setIcon('error', 'i', {
      'class': 'fa fa-times'
    });
  }
}
</script>


<style scoped>

.item_unanswered{
  float: right;
  margin-top: -8px;
}
.instr_txt{
  padding: 10px;
}
.panel-title{
  padding: 10px;
}
.instruction-acc{
  font-size: 20px;
  color: white;
}
.presented-acc{
  font-size: 20px;
  color: white;
}
.instruction{
  border: solid gray 1px;
}
.instruction-txt{
  padding: 15px;
  font-size: 18px;
  color: black;
  font-weight: 400;
  line-height: 24px;
}
#color {
  height: 35px;
}

.form-control:active, .input-group .form-control:hover{
  z-index: 1;
}
.loader-image{
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}
.full-modal-body{
  margin-top:50px;
  padding:30px;
}
.question-image-container{
  height:100px;
  margin-bottom:20px;
}
.test-result-dashboard{
  padding: 6px; display: flex;border: solid gray 1px; border-left: none;
}


.question-image-container img{
  height: 100%;
}
.question-text{
  font-size:30px;
  color:#333;
}
.question-audio-icon {
  margin-right: 10px;
}
input[type='radio']{
  display: none;
}
.question-choice-container{
  padding:30px;
  margin-left:50px;
}
.choice-photo-container{
  width:75px;
  height:75px;
}
.question-choice-text {
  font-size: 30px;
  margin-right: 20px;
}
label.normal {
  margin-right: 20px;
  width: 75px;
  border: 5px solid black;
  border-radius: 5px;
  height: 75px;
  background: #984807;
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
  cursor: pointer;
}

input:checked + label {
  position: relative;
  display: inline-block;
  padding: 15px 25px;
  background: #E46C0A;
  text-decoration: none;
  color: #fff;
  font-size: 25px;
  font-weight: 100;
  border-radius: 3px;
  box-shadow: 0px 1px 4px -2px #333;
  text-shadow: 0px -1px #333;
  border-color: #797B7B;
}
.datatable-material{
  min-height: 100px;
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
.marked_checkbox{
  margin-top: 5px;
  margin-right: 3px;
}
.note-description-wrapper{
  padding: 10px 0;
}
.review_index:hover{
  cursor: pointer;
  color:greenyellow;
}
.page_title{
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  margin-top: -80px;
  margin-bottom: 16px;
}
.bottom-left-control{
  float: left;
}
.bottom-right-control{
  float: right;
}
.modal-dialog .modal-content {
  min-height: 200px;
  box-shadow: 0 27px 24px 0 rgba(0, 0, 0, .2), 0 40px 77px 0 rgba(0, 0, 0, .22);
  border-radius: 6px;
  border: none;
  width: 50%;
  margin: auto;
  margin-top: 10%;
}
.modal-text{
  font-size: 22px;
  text-align: center;
  color: black;
  font-weight: 500;
  line-height: 2rem;
}
.modal-confirm{
  text-align: center;
}


 .practise_common{
   font-size: 30px;
   cursor: pointer;
   color: green;
   padding-top: 40px;
   padding-bottom: 40px;
 }
 .practise_common:hover{
   color: #9c27b0;
 }
 .practise_specific{
   font-size: 30px;
   cursor: pointer;
   color: green;
   border-left: solid darkgrey 1px;
   height: 60px;
   padding-top: 40px;
   padding-bottom: 40px;
 }
 .practise_specific_item{
   font-size: 30px;
   cursor: pointer;
   color: green;
   margin-top: 12%;
 }
 .practise_specific_after{
   font-size: 30px;
   color: green;
   margin-top: 2%;
 }
 .practise_specific:hover{
   color: #9c27b0;
 }
 .modal-dialog .modal-content {
   min-height: 200px;
   width: 30%;
   margin: auto;
   margin-top: 10%;
   text-align:center;
 }
 #practise{
   min-height: 400px;
   border-radius: 8px;
   padding: 10px;
 }
 .modal-footer {
   display: inline !important;
   text-align: center !important;
 }
 .fa-check-circle{
   color: green;
 }
 .fa-times-circle{
   color: red;
 }
</style>
