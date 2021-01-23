webpackJsonp([33],{

/***/ 1102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1103);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("1bc9383e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fffb44e2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fffb44e2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n.item_unanswered[data-v-fffb44e2]{\n  float: right;\n  margin-top: -8px;\n}\n.instr_txt[data-v-fffb44e2]{\n  padding: 10px;\n}\n.panel-title[data-v-fffb44e2]{\n  padding: 10px;\n}\n.instruction-acc[data-v-fffb44e2]{\n  font-size: 20px;\n  color: white;\n}\n.presented-acc[data-v-fffb44e2]{\n  font-size: 20px;\n  color: white;\n}\n.instruction[data-v-fffb44e2]{\n  border: solid gray 1px;\n}\n.instruction-txt[data-v-fffb44e2]{\n  padding: 15px;\n  font-size: 18px;\n  color: black;\n  font-weight: 400;\n  line-height: 24px;\n}\n#color[data-v-fffb44e2] {\n  height: 35px;\n}\n.form-control[data-v-fffb44e2]:active, .input-group .form-control[data-v-fffb44e2]:hover{\n  z-index: 1;\n}\n.loader-image[data-v-fffb44e2]{\n  position: fixed;\n  top:50%;\n  left:50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n}\n.full-modal-body[data-v-fffb44e2]{\n  margin-top:50px;\n  padding:30px;\n}\n.question-image-container[data-v-fffb44e2]{\n  height:150px;\n  margin-bottom:20px;\n}\n.test-result-dashboard[data-v-fffb44e2]{\n  padding: 6px; display: -webkit-box; display: -ms-flexbox; display: flex;border: solid gray 1px; border-left: none;\n}\n.question-image-container img[data-v-fffb44e2]{\n  height: 100%;\n}\n.question-text[data-v-fffb44e2]{\n  font-size:30px;\n  color:#333;\n  line-height: initial;\n}\n.question-audio-icon[data-v-fffb44e2] {\n  display: none;\n  margin-right: 10px;\n}\ninput[type='radio'][data-v-fffb44e2]{\n  display: none;\n}\n.question-choice-container[data-v-fffb44e2]{\n  padding:30px;\n  margin-left:50px;\n}\n.choice-photo-container[data-v-fffb44e2]{\n  width:90px;\n  height:90px;\n}\n.question-choice-text[data-v-fffb44e2] {\n  /* display: none; */\n  font-size: 30px;\n  margin-right: 20px;\n}\nlabel.normal[data-v-fffb44e2] {\n  margin-right: 20px;\n  width: 75px;\n  border: 5px solid black;\n  border-radius: 5px;\n  height: 75px;\n  background: #984807;\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: 700;\n  cursor: pointer;\n}\ninput:checked + label[data-v-fffb44e2] {\n  position: relative;\n  display: inline-block;\n  padding: 15px 25px;\n  background: #E46C0A;\n  text-decoration: none;\n  color: #fff;\n  font-size: 25px;\n  font-weight: 100;\n  border-radius: 3px;\n  -webkit-box-shadow: 0px 1px 4px -2px #333;\n          box-shadow: 0px 1px 4px -2px #333;\n  text-shadow: 0px -1px #333;\n  border-color: #797B7B;\n}\n.datatable-material[data-v-fffb44e2]{\n  min-height: 100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n  margin: 30px 0;\n  overflow: unset;\n  -webkit-box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\n  box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\n  border-radius: 6px;\n  background: #fff;\n  font-family: \"Helvetica Neue\", Roboto, Arial, \"Droid Sans\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  color: #333333;\n  border: none;\n  margin-top: 75px;\n}\n.marked_checkbox[data-v-fffb44e2]{\n  margin-top: 5px;\n  margin-right: 3px;\n}\n.note-description-wrapper[data-v-fffb44e2]{\n  padding: 110px 0;\n}\n.review_index[data-v-fffb44e2]:hover{\n  cursor: pointer;\n  color:greenyellow;\n}\n.page_title[data-v-fffb44e2]{\n  text-align: center;\n  font-size: 22px;\n  font-weight: 500;\n  margin-top: -80px;\n  margin-bottom: 16px;\n}\n.bottom-left-control[data-v-fffb44e2]{\n  float: left;\n}\n.bottom-right-control[data-v-fffb44e2]{\n}\n.modal-dialog .modal-content[data-v-fffb44e2] {\n  min-height: 200px;\n  -webkit-box-shadow: 0 27px 24px 0 rgba(0, 0, 0, .2), 0 40px 77px 0 rgba(0, 0, 0, .22);\n          box-shadow: 0 27px 24px 0 rgba(0, 0, 0, .2), 0 40px 77px 0 rgba(0, 0, 0, .22);\n  border-radius: 6px;\n  border: none;\n  width: 50%;\n  margin: auto;\n  margin-top: 10%;\n}\n.modal-text[data-v-fffb44e2]{\n  font-size: 22px;\n  text-align: center;\n  color: black;\n  font-weight: 500;\n  line-height: 2rem;\n}\n.modal-confirm[data-v-fffb44e2]{\n  text-align: center;\n}\n.audio-section[data-v-fffb44e2]:hover{\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 1104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_i18n__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mini_toastr__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_common_user_api_service__ = __webpack_require__(928);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



__WEBPACK_IMPORTED_MODULE_1_mini_toastr__["a" /* default */].init();

__WEBPACK_IMPORTED_MODULE_2_common_user_api_service__["a" /* default */].init();

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "home",
  data: function data() {
    return {
      markedIndex: 0,
      isPlaying0: false,
      errorMessageType: '',
      question_index: 0,
      page_language: '',
      playStatus: '',
      selected: [],
      status: 'not_accepted',
      pageIndex: '',
      reviewUnansweredQuestion: [],
      minute: '',
      second: '59',
      display_second: '00',
      unansweredQuestionStatus: 0,
      testConfig: {},
      current_question_number: -3,
      // current_testing_time:1800,
      questions: [],

      loader: false,
      rtl_screen: false,
      question: {},
      realtimetest: 0,
      stopOption1: false,
      optionResult: {
        successFlag1: false,
        errorFlag1: false
      },

      form_choice: 0,
      optionDisabled: true,
      tempCheck: '',
      testOption: {},
      question_array_store: [],
      testResult_init: [],
      questionResultStatus: '',
      testResult: {
        question: null,
        input: null,
        status: null
      },
      first_testResult: [],
      unanswered_question: 0,
      unansweredQuestionStartNum: 0,
      reviewIndex: 0

    };
  },
  beforeMount: function beforeMount() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_2_common_user_api_service__["a" /* default */].get('testConfig', { category: this.$store.state.customer_option.category }).then(function (result) {
      var data = result.data;
      _this.$store.commit('testConfigData', data.data[0]);
      // console.log('testConfigData-testConfigData', data)
      _this.minute = data.data[0].duration;
      _this.second = data.data[0].duration * 60;
      if (data.status) {
        _this.testConfig = data.data[0];
        console.log('--testConfig--', _this.testConfig);
      }
    });
  },

  methods: {
    play: function play(question, id) {

      if (this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0) {
        if (id == 0 && question.audio) {
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
          question.audio.onended = function () {
            question.isPlaying0 = true;
          };
        }

        if (id == 1 && question.option1audio) {
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
          question.option1audio.onended = function () {
            question.isPlaying1 = false;
          };
        }
        if (id == 2 && question.option2audio) {
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
          question.option2audio.onended = function () {
            question.isPlaying2 = false;
          };
        }
        if (id == 3 && question.option3audio) {
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
          question.option3audio.onended = function () {
            question.isPlaying3 = false;
          };
        }
      }
    },
    pause: function pause(question, id) {
      if (this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0) {
        if (id == 0 && question.audio) {
          question.isPlaying0 = true;
          question.audio.pause();
          question.audio.currentTime = 0;
        }
        if (id == 1 && question.option1audio) {
          question.isPlaying1 = false;
          question.option1audio.pause();
          question.option1audio.currentTime = 0;
        }
        if (id == 2 && question.option2audio) {
          question.isPlaying2 = false;
          question.option2audio.pause();
          question.option2audio.currentTime = 0;
        }
        if (id == 3 && question.option3audio) {
          question.isPlaying3 = false;
          question.option3audio.pause();
          question.option3audio.currentTime = 0;
        }
      }
    },
    finish_testing: function finish_testing() {
      var _this2 = this;

      if (this.errorMessageType == 'empty') {

        this.$store.dispatch('logout');
        this.$router.push('/login');
      } else {

        localStorage.setItem('home_reload', 0);
        var studentId = this.$store.state.user.id;

        var supervisoridByLogin = this.$store.state.supervisoridBylogin;

        var data = {
          studentId: studentId,
          category: this.testConfig.testcategory,
          result: this.first_testResult,

          supervisoridByLogin: supervisoridByLogin
        };

        __WEBPACK_IMPORTED_MODULE_2_common_user_api_service__["a" /* default */].post('TestComplete', data).then(function (result) {

          var data = result.data;
          if (data.success === true) {

            __WEBPACK_IMPORTED_MODULE_1_mini_toastr__["a" /* default */].success(data.message);
            var url = window.location.origin + '/belhasa/#/print';
            window.location.href = url;
          } else {
            __WEBPACK_IMPORTED_MODULE_1_mini_toastr__["a" /* default */].error(data.message);

            if (data.message == 'Changes you made may not be saved') {
              _this2.errorMessageType = 'empty';
            }
          }
        }, function (error) {});
      }
    },
    showModal_: function showModal_() {
      this.$refs['my-modal'].show();
    },
    hideModal_: function hideModal_() {
      this.$refs['my-modal'].hide();
    },
    toggleModal_: function toggleModal_() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn');
    },
    review: function review() {
      if (this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0 && this.questions[this.current_question_number]['audio']) {
        this.questions[this.current_question_number]['audio'].pause();
        this.questions[this.current_question_number]['audio'].currentTime = 0;
      }

      var testResultData = this.$store.state.testResultsArray;
      console.log('--testResultData--', testResultData);
      var temp_review_data = [];
      for (var key in testResultData) {
        if (!testResultData.hasOwnProperty(key)) continue;
        var obj = testResultData[key];
        obj.checked = false;
        temp_review_data.push(obj);
      }
      this.first_testResult = temp_review_data;

      this.pageIndex = 'testResultDashboard';

      this.unansweredQuestionStartNum = 0;
    },
    endReview: function endReview() {

      $("#EnSureModal_endReview").modal();
    },
    endReviewConfirm: function endReviewConfirm() {
      var _this3 = this;

      localStorage.setItem('home_reload', 0);
      var studentId = this.$store.state.user.id;
      var supervisoridByLogin = this.$store.state.supervisoridBylogin;

      var test_min = this.$store.state.testConfigData.duration - this.minute - 1;
      var test_sec = 60 - this.display_second;

      console.log('test_min', test_min);
      console.log('test_sec', test_sec);

      var test_time = test_min * 60 + test_sec;
      console.log('test_time', test_time);

      var data = {
        studentId: studentId,
        category: this.testConfig.testcategory,
        result: this.first_testResult,
        supervisoridByLogin: supervisoridByLogin,
        testTime: test_time,
        duration: this.$store.state.testConfigData.duration
      };

      __WEBPACK_IMPORTED_MODULE_2_common_user_api_service__["a" /* default */].post('TestComplete', data).then(function (result) {
        var data = result.data;
        if (data.success === true) {
          _this3.$store.commit('testMinute', test_min);
          _this3.$store.commit('testSecond', test_sec);
          var url = window.location.origin + '/belhasa/#/print';
          window.location.href = url;
          __WEBPACK_IMPORTED_MODULE_1_mini_toastr__["a" /* default */].success(data.message);
        } else {
          __WEBPACK_IMPORTED_MODULE_1_mini_toastr__["a" /* default */].error(data.message);
          if (data.message == 'Changes you made may not be saved') {
            _this3.errorMessageType = 'empty';
          }
        }
      }, function (error) {});
    },
    reviewByIndex: function reviewByIndex(num) {
      this.current_question_number = num;
      this.question = this.questions[num];
      this.pageIndex = 'testStart';
      this.reviewIndex = 1;

      this.questions[this.current_question_number]['audio'].play();
      var question = this.questions[this.current_question_number];
      this.questions[this.current_question_number]['audio'].onended = function () {

        question.isPlaying0 = true;
        // console.log('question.isPlaying0',question.isPlaying0)
      };
      question.isPlaying0 = false;
      // console.log('question.isPlaying0s',question.isPlaying0)
    },
    reviewAll: function reviewAll() {
      this.current_question_number = 0;

      //audio player
      if (this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0 && this.questions[0]['audio']) {
        var question = this.questions[0];
        if (this.questions[0]['audio']) {
          this.questions[0]['audio'].play();
          this.questions[0]['audio'].onended = function () {
            question.isPlaying0 = true;
          };
          question.isPlaying0 = false;
        } else {
          question.isPlaying0 = true;
        }
        // var question = this.questions[0];
      }
      //end
      this.pageIndex = 'testStart';
      this.reviewIndex = 1;

      this.question = this.questions[this.current_question_number];
    },
    markedForReview: function markedForReview() {

      var markedForReview = [];
      console.log('+_+__this.first_testResult++_++', this.first_testResult);
      for (var key in this.first_testResult) {
        if (!this.first_testResult.hasOwnProperty(key)) continue;
        var obj = this.first_testResult[key];
        if (obj.checked === true) {
          markedForReview.push(obj);
        }
      }

      this.reviewUnansweredQuestion = markedForReview;
      console.log('----markedForReview---', markedForReview);
      //pcs
      // markedForReview.map((Item, index)=>{
      //   this.questions.index = index;
      //     this.questions.map((question, index)=>{
      //       if(Item.num == (index+1) ){
      //         this.questions.push(question)
      //       }
      //     })
      // })
      //

      if (markedForReview.length > 0) {
        this.current_question_number = markedForReview[0].num;
        if (this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0) {
          var question = this.questions[this.current_question_number];
          if (this.questions[this.current_question_number] && this.questions[this.current_question_number]['audio']) {
            this.questions[this.current_question_number]['audio'].play();
            this.questions[this.current_question_number]['audio'].onended = function () {
              question.isPlaying0 = true;
            };
            question.isPlaying0 = false;
          } else {
            question.isPlaying0 = true;
          }
        }

        this.unansweredQuestionStatus = 1;
        if (this.unansweredQuestionStatus == 1) {
          this.unansweredQuestionStartNum = 0;
        }

        this.pageIndex = 'ReviewUnanswered';

        this.reviewIndex = 1;
      } else {

        $("#EnSureModal").modal();
      }
    },
    reviewUnanswered: function reviewUnanswered() {

      var reviewUnansweredQuestion = [];
      for (var key in this.first_testResult) {
        if (!this.first_testResult.hasOwnProperty(key)) continue;
        var obj = this.first_testResult[key];

        obj.num = parseInt(key);
        if (obj.input == 0) {
          reviewUnansweredQuestion.push(obj);
        }
      }
      if (reviewUnansweredQuestion && reviewUnansweredQuestion[0]) {
        this.reviewUnansweredQuestion = reviewUnansweredQuestion;
        this.current_question_number = reviewUnansweredQuestion[0].num;
        var question = this.questions[this.current_question_number];
        if (this.questions[this.current_question_number]['audio']) {
          this.questions[this.current_question_number]['audio'].play();
          this.questions[this.current_question_number]['audio'].onended = function () {
            question.isPlaying0 = true;
          };
          question.isPlaying0 = false;
        } else {
          question.isPlaying0 = true;
        }

        this.pageIndex = 'ReviewUnanswered';
      }
    },
    ReviewUnansweredNextQuestion: function ReviewUnansweredNextQuestion() {
      console.log('sdfsdfaaa');

      this.unansweredQuestionStartNum++;
      if (this.unansweredQuestionStartNum == this.reviewUnansweredQuestion.length) {

        if (this.testConfig.type != 'realtime' && this.form_choice == '99') {} else {
          if (this.testOption.testType == 'realtime') {
            this.saveAnswer();
          }

          this.form_choice = 0;
          var testResultData = this.$store.state.testResultsArray;

          this.first_testResult = testResultData;

          var unanswered_question_num = 0;
          var temp_unanswered_next = [];
          for (var key in testResultData) {
            if (!testResultData.hasOwnProperty(key)) continue;
            var obj = testResultData[key];
            obj.checked = false;
            temp_unanswered_next.push(obj);
            if (obj.input == 0) {
              unanswered_question_num++;
            }
          }
          this.first_testResult = temp_unanswered_next;

          this.unanswered_question = unanswered_question_num;

          this.questions[this.current_question_number]['audio'].pause();
          this.questions[this.current_question_number]['option1audio'].pause();
          this.questions[this.current_question_number]['option2audio'].pause();
          this.questions[this.current_question_number]['option3audio'].pause();
          this.questions[this.current_question_number]['audio'].currentTime = 0;
          this.questions[this.current_question_number]['option1audio'].currentTime = 0;
          this.questions[this.current_question_number]['option2audio'].currentTime = 0;
          this.questions[this.current_question_number]['option3audio'].currentTime = 0;

          this.current_question_number = -2;
          this.unansweredQuestionStartNum = 0;
          this.pageIndex = 'testResultDashboard';
        }
      } else {

        this.current_question_number = this.reviewUnansweredQuestion[this.unansweredQuestionStartNum].num;

        this.question = this.questions[this.current_question_number];

        //audio- player
        if (this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0 && this.questions[this.current_question_number - 1]['audio']) {
          this.questions[this.current_question_number - 1]['audio'].pause();
          this.questions[this.current_question_number - 1]['option1audio'].pause();
          this.questions[this.current_question_number - 1]['option2audio'].pause();
          this.questions[this.current_question_number - 1]['option3audio'].pause();
          this.questions[this.current_question_number - 1]['audio'].currentTime = 0;
          this.questions[this.current_question_number - 1]['option1audio'].currentTime = 0;
          this.questions[this.current_question_number - 1]['option2audio'].currentTime = 0;
          this.questions[this.current_question_number - 1]['option3audio'].currentTime = 0;
          this.questions[this.current_question_number]['audio'].play();

          var question = this.questions[this.current_question_number];
          question.isPlaying0 = false;
          this.questions[this.current_question_number]['audio'].onended = function () {
            question.isPlaying0 = true;
          };
        }
        //end


        if (this.testConfig.type != 'realtime' && this.form_choice == '99') {} else {
          if (this.testOption.testType == 'realtime') {

            this.saveAnswer();
          }
          this.form_choice = 0;

          if (this.current_question_number !== this.testConfig.noofquestion + 1) {} else {
            var testResultData = this.$store.state.testResultsArray;

            this.first_testResult = testResultData;

            var unanswered_question_num = 0;
            var temp_unanswered_next = [];
            for (var key in testResultData) {
              if (!testResultData.hasOwnProperty(key)) continue;
              var obj = testResultData[key];
              obj.checked = false;
              temp_unanswered_next.push(obj);
              if (obj.input == 0) {
                unanswered_question_num++;
              }
            }
            this.first_testResult = temp_unanswered_next;

            this.unanswered_question = unanswered_question_num;
            this.current_question_number = -2;
          }
        }
      }
    },
    ReviewUnansweredNextQuestionStatus: function ReviewUnansweredNextQuestionStatus() {
      console.log('---here is ReviewUnanswerNextQuestionStatus() function');
      ++this.unansweredQuestionStartNum;
      if (this.unansweredQuestionStartNum > this.reviewUnansweredQuestion.length - 1) {
        this.saveAnswerStatus(this.current_question_number, this.form_choice);

        this.unansweredQuestionStartNum = 0;
        this.pageIndex = 'testResultDashboard';
        if (this.questions[this.current_question_number]['audio']) {
          this.questions[this.current_question_number]['audio'].pause();
          this.questions[this.current_question_number]['audio'].currentTime = 0;
        }
        if (this.questions[this.current_question_number]['option1audio']) {
          this.questions[this.current_question_number]['option1audio'].pause();
          this.questions[this.current_question_number]['option1audio'].currentTime = 0;
        }
        if (this.questions[this.current_question_number]['option2audio']) {
          this.questions[this.current_question_number]['option2audio'].pause();
          this.questions[this.current_question_number]['option2audio'].currentTime = 0;
        }
        if (this.questions[this.current_question_number]['option3audio']) {
          this.questions[this.current_question_number]['option3audio'].pause();
          this.questions[this.current_question_number]['option3audio'].currentTime = 0;
        }
        this.current_question_number = -2;
      } else if (this.unansweredQuestionStartNum == this.reviewUnansweredQuestion.length - 1) {
        var current_question_number_1 = this.reviewUnansweredQuestion[this.unansweredQuestionStartNum - 1].num;
        this.current_question_number = this.reviewUnansweredQuestion[this.unansweredQuestionStartNum].num;

        if (this.testConfig.type != 'realtime' && this.form_choice == '99') {} else {

          if (this.testOption.testType == 'realtime') {

            if (this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0) {
              if (this.questions[current_question_number_1] && this.questions[current_question_number_1]['audio']) {
                this.questions[current_question_number_1]['audio'].pause();
                this.questions[current_question_number_1]['audio'].currentTime = 0;
              }
              if (this.questions[current_question_number_1] && this.questions[current_question_number_1]['option1audio']) {
                this.questions[current_question_number_1]['option1audio'].pause();
                this.questions[current_question_number_1]['option1audio'].currentTime = 0;
              }
              if (this.questions[current_question_number_1] && this.questions[current_question_number_1]['option2audio']) {
                this.questions[current_question_number_1]['option2audio'].pause();
                this.questions[current_question_number_1]['option2audio'].currentTime = 0;
              }
              if (this.questions[current_question_number_1] && this.questions[current_question_number_1]['option3audio']) {
                this.questions[current_question_number_1]['option3audio'].pause();
                this.questions[current_question_number_1]['option3audio'].currentTime = 0;
              }
              if (this.questions[this.current_question_number] && this.questions[this.current_question_number]['audio']) this.questions[this.current_question_number]['audio'].play();
            }

            this.saveAnswerStatus(current_question_number_1, this.form_choice);
            console.log('ooooooo this.current_question_number--', current_question_number_1, this.form_choice);
          }

          this.form_choice = 0;
          var testResultData = this.$store.state.testResultsArray;
          this.first_testResult = testResultData;
          var unanswered_question_num = 0;
          var temp_unanswered_next = [];
          for (var key in testResultData) {
            if (!testResultData.hasOwnProperty(key)) continue;
            var obj = testResultData[key];
            obj.checked = false;
            temp_unanswered_next.push(obj);
            if (obj.input == 0) {
              unanswered_question_num++;
            }
          }
          this.first_testResult = temp_unanswered_next;
          this.unanswered_question = unanswered_question_num;
        }
      } else {

        this.current_question_number = this.reviewUnansweredQuestion[this.unansweredQuestionStartNum].num;
        var current_question_number_1 = this.reviewUnansweredQuestion[this.unansweredQuestionStartNum - 1].num;
        console.log('---here is ReviewUnanswerNextQuestionStatus() function---current_question_number--before_current_question_number', this.current_question_number, current_question_number_1);
        this.question = this.questions[this.current_question_number];

        //audio- player
        if (this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0 && this.questions[this.current_question_number] && this.questions[this.current_question_number]['audio']) {
          this.questions[current_question_number_1]['audio'].pause();
          this.questions[current_question_number_1]['option1audio'].pause();
          this.questions[current_question_number_1]['option2audio'].pause();
          this.questions[current_question_number_1]['option3audio'].pause();
          this.questions[current_question_number_1]['audio'].currentTime = 0;
          this.questions[current_question_number_1]['option1audio'].currentTime = 0;
          this.questions[current_question_number_1]['option2audio'].currentTime = 0;
          this.questions[current_question_number_1]['option3audio'].currentTime = 0;

          this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum].num]['audio'].play();

          var question = this.questions[this.current_question_number];

          question.isPlaying0 = false;
          this.questions[this.current_question_number]['audio'].onended = function () {
            question.isPlaying0 = true;
          };
        }
        //end
        if (this.testConfig.type != 'realtime' && this.form_choice == '99') {} else {

          if (this.testOption.testType == 'realtime') {

            // this.saveAnswer();
            this.saveAnswerStatus(current_question_number_1, this.form_choice);
            console.log('pppppp this.current_question_number--', current_question_number_1, this.form_choice);
          }
          this.form_choice = 0;
          if (this.current_question_number !== this.testConfig.noofquestion + 1) {} else {

            var testResultData = this.$store.state.testResultsArray;
            this.first_testResult = testResultData;
            var unanswered_question_num = 0;
            var temp_unanswered_next = [];
            for (var key in testResultData) {
              if (!testResultData.hasOwnProperty(key)) continue;
              var obj = testResultData[key];
              obj.checked = false;
              temp_unanswered_next.push(obj);
              if (obj.input == 0) {
                unanswered_question_num++;
              }
            }
            this.first_testResult = temp_unanswered_next;

            this.unanswered_question = unanswered_question_num;
            this.current_question_number = -2;
          }
        }
      }
    },
    ReviewUnansweredPreviousQuestion: function ReviewUnansweredPreviousQuestion() {

      this.unansweredQuestionStartNum--;
      if (this.unansweredQuestionStartNum >= 0) {
        this.current_question_number = this.reviewUnansweredQuestion[this.unansweredQuestionStartNum].num;

        this.question = this.questions[this.current_question_number];

        //audio player


        if (this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0 && this.question['audio']) {

          if (this.questions[this.current_question_number]['audio']) {
            this.questions[this.current_question_number]['audio'].pause();
            this.questions[this.current_question_number]['audio'].currentTime = 0;
          }

          if (this.questions[this.current_question_number]['option1audio']) {
            this.questions[this.current_question_number]['option1audio'].pause();
            this.questions[this.current_question_number]['option1audio'].currentTime = 0;
          }
          if (this.questions[this.current_question_number]['option2audio']) {
            this.questions[this.current_question_number]['option2audio'].pause();
            this.questions[this.current_question_number]['option2audio'].currentTime = 0;
          }
          if (this.questions[this.current_question_number]['option3audio']) {
            this.questions[this.current_question_number]['option3audio'].pause();
            this.questions[this.current_question_number]['option3audio'].currentTime = 0;
          }
          this.questions[this.current_question_number].isPlaying1 = false;
          this.questions[this.current_question_number].isPlaying2 = false;
          this.questions[this.current_question_number].isPlaying3 = false;

          this.question_for = this.questions[this.current_question_number + 1];

          this.question_for['audio'].pause();
          this.question_for['option1audio'].pause();
          this.question_for['option2audio'].pause();
          this.question_for['option3audio'].pause();

          this.question_for.isPlaying1 = false;
          this.question_for.isPlaying2 = false;
          this.question_for.isPlaying3 = false;

          this.question_for['audio'].currentTime = 0;
          this.question_for['option1audio'].currentTime = 0;
          this.question_for['option2audio'].currentTime = 0;
          this.question_for['option3audio'].currentTime = 0;
          var question = this.questions[this.current_question_number];

          this.questions[this.current_question_number]['audio'].play();
          question.isPlaying0 = false;
          this.questions[this.current_question_number]['audio'].onended = function () {
            question.isPlaying0 = true;
          };
        }
        //end

        if (this.testConfig.type != 'realtime' && this.form_choice == '99') {} else {
          if (this.testOption.testType == 'realtime') {
            this.saveAnswer_prev();
          }
          this.form_choice = 0;
          if (this.current_question_number !== this.testConfig.noofquestion) {}
        }
      }
    },
    ReviewUnansweredPreviousQuestionStatus: function ReviewUnansweredPreviousQuestionStatus() {

      this.unansweredQuestionStartNum--;

      if (this.unansweredQuestionStartNum >= 0) {
        this.current_question_number = this.reviewUnansweredQuestion[this.unansweredQuestionStartNum].num;

        this.question = this.questions[this.current_question_number];

        //audio player


        if (this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0 && this.$store.state.customer_option.audio_language !== 0 && this.question['audio']) {

          if (this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum + 1].num]['audio']) {
            this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum + 1].num]['audio'].pause();
            this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum + 1].num]['audio'].currentTime = 0;
          }
          if (this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum + 1].num]['option1audio']) {
            this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum + 1].num]['option1audio'].pause();
            this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum + 1].num]['option1audio'].currentTime = 0;
          }
          if (this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum + 1].num]['option2audio']) {
            this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum + 1].num]['option2audio'].pause();
            this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum + 1].num]['option2audio'].currentTime = 0;
          }
          if (this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum + 1].num]['option3audio']) {
            this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum + 1].num]['option3audio'].pause();
            this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum + 1].num]['option3audio'].currentTime = 0;
          }

          this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum + 1].num].isPlaying1 = false;
          this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum + 1].num].isPlaying2 = false;
          this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum + 1].num].isPlaying3 = false;

          this.question_for = this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum].num + 1 + 1];

          this.question_for['audio'].pause();
          this.question_for['option1audio'].pause();
          this.question_for['option2audio'].pause();
          this.question_for['option3audio'].pause();
          this.question_for.isPlaying1 = false;
          this.question_for.isPlaying2 = false;
          this.question_for.isPlaying3 = false;

          this.question_for['audio'].currentTime = 0;
          this.question_for['option1audio'].currentTime = 0;
          this.question_for['option2audio'].currentTime = 0;
          this.question_for['option3audio'].currentTime = 0;
          var question = this.questions[this.current_question_number];

          this.questions[this.current_question_number]['audio'].play();
          question.isPlaying0 = false;
          this.questions[this.current_question_number]['audio'].onended = function () {
            question.isPlaying0 = true;
          };
        }
        //end

        if (this.testConfig.type != 'realtime' && this.form_choice == '99') {} else {
          if (this.testOption.testType == 'realtime') {
            this.saveAnswer_prev();
          }
          this.form_choice = 0;
          if (this.current_question_number !== this.testConfig.noofquestion) {}
        }
      }
    },
    countDownTimer: function countDownTimer() {
      var _this4 = this;

      if (this.second > 0) {
        setTimeout(function () {

          _this4.second -= 1;
          _this4.display_second = _this4.second % 60;

          if (_this4.second % 60 === 59) {
            _this4.minute -= 1;
            if (_this4.minute < 10) {
              _this4.minute = '0' + _this4.minute;
            }
          }
          if (_this4.display_second < 10) {
            _this4.display_second = '0' + _this4.display_second;
          }
          _this4.countDownTimer();
        }, 1000);
      } else {
        this.timeisover();
      }
    },
    timeisover: function timeisover() {
      this.pageIndex = 'time_expired';
      this.$refs['my-modal'].show();
      // alert('time is over')
    },
    startTest: function startTest() {
      this.current_question_number = 0;
      this.pageIndex = 'testStart';
      this.loadTest();
    },
    loadTest: function loadTest() {
      var _this5 = this;

      this.loader = true;
      var customer_option = this.$store.state.customer_option;
      //console.log('----customer_option---', customer_option);
      var testConfig = this.testConfig;
      var testOption = {
        testCategory: testConfig.testcategory, //32
        testType: testConfig.category, //'realtime'
        limit: testConfig.noofquestion, //20
        specific: testConfig.noofspecificquestion, //10
        common: testConfig.noofcommonquestion, //10
        type: testConfig.category, //'realtime'
        language: customer_option.text_language, //1
        audio_language: customer_option.audio_language //1
      };
      console.log('--home/line1661 testOption--', testOption);
      this.testOption = testOption;
      this.first_testResult = [{}];
      this.$store.commit('testResults', []);
      __WEBPACK_IMPORTED_MODULE_2_common_user_api_service__["a" /* default */].post('loadTest', testOption).then(function (result) {
        var data = result.data;

        if (data.status === 'success') {
          _this5.questions = data.data;
          console.log('============', _this5.questions);

          if (testOption.audio_language > 0) {
            _this5.questions.map(function (question, index) {
              _this5.questions.index = index;
              if (_this5.questions[index]['audio']) {
                _this5.questions[index]['audio'] = new Audio(question.audio);
              } else {
                _this5.questions[index]['audio'] = '';
              }
              if (_this5.questions[index]['option1audio']) {
                _this5.questions[index]['option1audio'] = new Audio(question.option1audio);
              } else {
                _this5.questions[index]['option1audio'] = '';
              }
              if (_this5.questions[index]['option2audio']) {
                _this5.questions[index]['option2audio'] = new Audio(question.option2audio);
              } else {
                _this5.questions[index]['option2audio'] = '';
              }
              if (_this5.questions[index]['option3audio']) {
                _this5.questions[index]['option3audio'] = new Audio(question.option3audio);
              } else {
                _this5.questions[index]['option3audio'] = '';
              }
            });
            _this5.indexIndex = 0;

            var question = _this5.questions[0];
            // question.isPlaying0 = false
            _this5.audioSelectStatus = true;
            if (_this5.questions[0]['audio']) {
              _this5.questions[0]['audio'].play();
              _this5.questions[0]['audio'].onended = function () {
                question.isPlaying0 = true;
              };
              question.isPlaying0 = false;
            } else {
              question.isPlaying0 = true;
            }
          } else {
            _this5.audioSelectStatus = false;
            _this5.questions.map(function (question, index) {
              _this5.questions.index = index;
              _this5.questions[index]['audio'] = '';
              _this5.questions[index]['option1audio'] = '';
              _this5.questions[index]['option2audio'] = '';
              _this5.questions[index]['option3audio'] = '';
              question.isPlaying0 = false;
            });
          }
          _this5.countDownTimer();
        }
        _this5.loader = false;
        _this5.question = _this5.questions[0];
        _this5.question_index = 0;
      }, function () {
        _this5.loader = false;
      });
    },
    nextQuestion: function nextQuestion() {
      var markedIndex = this.markedIndex;
      this.current_question_number++;
      //console.log('*****current_question_number****', this.current_question_number);
      //console.log('*****current_array****', this.$store.state.testResultsArray);
      if (this.current_question_number < this.testConfig.noofquestion) {
        this.question = this.questions[this.current_question_number];
        //-----------audio play-------------

        // if((this.questions[this.current_question_number-1].choice1photo || this.questions[this.current_question_number-1].choice2photo || this.questions[this.current_question_number-1].choice3photo)){
        //   if(this.questions[this.current_question_number]['audio']){
        //     this.questions[this.current_question_number]['audio'].play();
        //     var question = this.questions[this.current_question_number];
        //     question.isPlaying0 = false;
        //     this.questions[this.current_question_number]['audio'].onended = function() {
        //       question.isPlaying0 = true;
        //     }
        //   }
        //   else{
        //     var question = this.questions[this.current_question_number];
        //     question.isPlaying0 = true;
        //   }
        // }

        if (this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0 && this.questions[this.current_question_number - 1]['audio']) {
          if (this.questions[this.current_question_number]['audio']) {
            this.questions[this.current_question_number]['audio'].play();
            var question = this.questions[this.current_question_number];
            question.isPlaying0 = false;
            this.questions[this.current_question_number]['audio'].onended = function () {
              question.isPlaying0 = true;
            };
          } else {
            var question = this.questions[this.current_question_number];
            question.isPlaying0 = true;
          }

          if (this.questions[this.current_question_number - 1]['audio'] !== '') {
            this.questions[this.current_question_number - 1]['audio'].pause();
            this.questions[this.current_question_number - 1]['audio'].currentTime = 0;
          }
          if (this.questions[this.current_question_number - 1]['option1audio'] !== '') {
            this.questions[this.current_question_number - 1]['option1audio'].pause();
            this.questions[this.current_question_number - 1]['option1audio'].currentTime = 0;
          }
          if (this.questions[this.current_question_number - 1]['option2audio'] !== '') {
            this.questions[this.current_question_number - 1]['option2audio'].pause();
            this.questions[this.current_question_number - 1]['option2audio'].currentTime = 0;
          }
          if (this.questions[this.current_question_number - 1]['option3audio'] !== '') {
            this.questions[this.current_question_number - 1]['option3audio'].pause();
            this.questions[this.current_question_number - 1]['option3audio'].currentTime = 0;
          }
        }

        if (this.testConfig.type != 'realtime' && this.form_choice == '99') {} else {
          if (this.testOption.testType == 'realtime') {
            this.saveAnswer();
          }
          this.form_choice = 0;
          if (this.current_question_number !== this.testConfig.noofquestion + 1) {} else {
            var testResultData = this.$store.state.testResultsArray;
            this.first_testResult = testResultData;
            var unanswered_question_num = 0;

            for (var key in testResultData) {
              if (!testResultData.hasOwnProperty(key)) continue;
              var obj = testResultData[key];
              if (obj.input == 0) {
                unanswered_question_num++;
              }
            }
            this.unanswered_question = unanswered_question_num;
            this.current_question_number = -2;
          }
        }
      } else {

        // this.questions[this.current_question_number]['audio']
        // this.questions[this.current_question_number]['audio'].currentTime = 0;

        if (this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0 && this.questions[this.current_question_number - 1]['audio']) {

          this.questions[this.current_question_number - 1]['audio'].pause();
        }

        this.saveAnswer();
        this.first_testResult = this.$store.state.testResultsArray;
        var unanswered_question_num = 0;
        var tempData = [];
        for (var key in this.first_testResult) {
          if (!this.first_testResult.hasOwnProperty(key)) continue;
          var obj = this.first_testResult[key];
          obj.num = parseInt(key);
          obj.checked = false;
          tempData.push(obj);
          if (obj.input == 0) {
            unanswered_question_num++;
          }
        }
        this.first_testResult = tempData;
        this.unanswered_question = unanswered_question_num;
        this.pageIndex = 'testResultDashboard';
      }
    },
    saveAnswer: function saveAnswer() {

      var testResultData = this.$store.state.testResultsArray;

      this.question_check(this.form_choice, this.questions[this.current_question_number - 1].answer);

      var testResult = {
        question: this.questions[this.current_question_number - 1].id,
        input: this.form_choice,
        status: this.questionResultStatus
      };

      console.log('**Here is saveAnswer()**', this.current_question_number - 1, testResult);

      if (!testResultData[this.current_question_number - 1]) {
        testResultData.push(testResult);
      } else {
        testResultData[this.current_question_number - 1] = testResult;
      }
      this.$store.commit('testResults', testResultData);
      this.first_testResult = this.$store.state.testResultsArray;
    },
    saveAnswerStatus: function saveAnswerStatus(current_question_number_1, form_choice) {
      var testResultData = this.$store.state.testResultsArray;
      console.log('aaaaaa-this.reviewUnansweredQuestion', this.reviewUnansweredQuestion);
      console.log('aaaaaaa-this.questions[this.current_question_number]', this.questions[this.current_question_number]);

      this.question_check(form_choice, this.questions[current_question_number_1].answer);

      var testResult = {
        num: current_question_number_1,
        checked: true,
        question: this.questions[current_question_number_1].id,
        input: form_choice,
        status: this.questionResultStatus
      };

      // if(this.$store.state.testResultsArray){
      //   var testResultData = this.$store.state.testResultsArray;
      // }
      // else{
      //   this.$store.commit('testResults',[])
      //   var testResultData = this.$store.state.testResultsArray;
      // }
      // var confirm_status = 0;
      // for (var key in testResultData) {
      //   if (!testResultData.hasOwnProperty(key)) continue;
      //   var obj = testResultData[key];
      //   if(obj.question == this.questions[this.current_question_number].id){
      //
      //     let testResultData = this.$store.state.testResultsArray;
      //     var objIndex = testResultData.findIndex((obj => obj.question == this.questions[this.current_question_number].id));
      //     if(this.form_choice !== 0){
      //       testResultData[objIndex].input = this.form_choice
      //       testResultData[objIndex].status = this.questionResultStatus
      //     }
      //     confirm_status = 1;
      //   }
      // }
      // this.$store.commit('testResults',testResultData);
      // if(confirm_status == 0){
      //   testResultData.push(testResult);
      //   this.$store.commit('testResults',testResultData);
      // }
      // if(!!testResultData[current_question_number_1-1] && testResultData[current_question_number_1-1] !== {}){
      //   testResultData[this.current_question_number-1] = testResult;
      // }
      // if(!testResultData[this.current_question_number-1]){
      //   testResultData.push(testResult);
      // }
      if (testResultData[current_question_number_1]) {
        testResultData[current_question_number_1].input = form_choice;
        testResultData[current_question_number_1].status = this.questionResultStatus;
      }
      this.$store.commit('testResults', testResultData);

      this.first_testResult = this.$store.state.testResultsArray;
      console.log('******firt_testRsult', this.first_testResult);
      if (this.pageIndex = 'ReviewUnanswered') {
        this.current_question_number = this.current_question_number;
      } else {
        this.current_question_number = this.current_question_number + 1;
      }
    },
    question_check: function question_check(selected_answer, correct_answer) {
      if (selected_answer == correct_answer) {
        this.questionResultStatus = true;
      } else {
        this.questionResultStatus = false;
      }
    },
    saveAnswer_prev: function saveAnswer_prev() {

      if (this.form_choice == this.question.answer) {
        this.questionResultStatus = true;
      } else {
        this.questionResultStatus = false;
      }
      var testResult = {
        question: this.questions[this.current_question_number + 1].id,
        input: this.form_choice,
        status: this.questionResultStatus
      };

      var testResultData = this.$store.state.testResultsArray;
      // for (var key in testResultData) {
      //   if (!testResultData.hasOwnProperty(key)) continue;
      //   var obj = testResultData[key];
      //
      //   if(obj.question == this.question.id){
      //
      //     var objIndex = testResultData.findIndex((obj => obj.question == this.questions[this.current_question_number+1].id));
      //
      //     if(objIndex !== -1 && this.form_choice !== 0){
      //       testResultData[objIndex].input = this.form_choice
      //       testResultData[objIndex].status = this.questionResultStatus
      //     }
      //   }
      // }
      if (!!testResultData[this.current_question_number + 1] && testResultData[this.current_question_number + 1] !== {}) {
        testResultData[this.current_question_number + 1] = testResult;
      }
      if (!testResultData[this.current_question_number + 1]) {
        testResultData.push(testResult);
      }
      this.$store.commit('testResults', testResultData);

      this.first_testResult = this.$store.state.testResultsArray;
    },
    saveAnswer_prevStatus: function saveAnswer_prevStatus() {

      if (this.form_choice == this.question.answer) {
        this.questionResultStatus = true;
      } else {
        this.questionResultStatus = false;
      }
      var testResult = {
        question: this.questions[this.current_question_number].id,
        input: this.form_choice,
        status: this.questionResultStatus
      };

      var testResultData = this.$store.state.testResultsArray;
      // for (var key in testResultData) {
      //   if (!testResultData.hasOwnProperty(key)) continue;
      //   var obj = testResultData[key];
      //
      //   if(obj.question == this.question.id){
      //
      //     var objIndex = testResultData.findIndex((obj => obj.question == this.questions[this.current_question_number].id));
      //
      //     if(objIndex !== -1 && this.form_choice !== 0){
      //       testResultData[objIndex].input = this.form_choice
      //       testResultData[objIndex].status = this.questionResultStatus
      //     }
      //   }
      // }
      if (!!testResultData[this.current_question_number] && testResultData[this.current_question_number] !== {}) {
        testResultData[this.current_question_number] = testResult;
      }
      if (!testResultData[this.current_question_number]) {
        testResultData.push(testResult);
      }
      this.$store.commit('testResults', testResultData);

      this.first_testResult = this.$store.state.testResultsArray;
    },
    previousQuestion: function previousQuestion() {
      this.current_question_number--;

      this.question = this.questions[this.current_question_number];
      this.question_for = this.questions[this.current_question_number + 1];

      if (this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0 && this.question['audio']) {

        var question = this.questions[this.current_question_number];
        question.isPlaying0 = false;
        this.questions[this.current_question_number]['audio'].onended = function () {
          question.isPlaying0 = true;
        };

        if (this.question['audio']) this.question['audio'].pause();
        if (this.question['option1audio']) this.question['option1audio'].pause();
        if (this.question['option2audio']) this.question['option2audio'].pause();
        if (this.question['option3audio']) this.question['option3audio'].pause();
        this.question.isPlaying1 = false;
        this.question.isPlaying2 = false;
        this.question.isPlaying3 = false;

        if (this.question['audio']) this.question['audio'].currentTime = 0;
        if (this.question['option1audio']) this.question['option1audio'].currentTime = 0;
        if (this.question['option2audio']) this.question['option2audio'].currentTime = 0;
        if (this.question['option3audio']) this.question['option3audio'].currentTime = 0;

        if (this.question_for['audio']) this.question_for['audio'].pause();
        if (this.question_for['option1audio']) this.question_for['option1audio'].pause();
        if (this.question_for['option2audio']) this.question_for['option2audio'].pause();
        if (this.question_for['option3audio']) this.question_for['option3audio'].pause();
        this.question_for.isPlaying1 = false;
        this.question_for.isPlaying2 = false;
        this.question_for.isPlaying3 = false;
        if (this.question_for['audio']) this.question_for['audio'].currentTime = 0;
        if (this.question_for['option1audio']) this.question_for['option1audio'].currentTime = 0;
        if (this.question_for['option2audio']) this.question_for['option2audio'].currentTime = 0;
        if (this.question_for['option3audio']) this.question_for['option3audio'].currentTime = 0;

        if (this.questions[this.current_question_number] && this.questions[this.current_question_number]['audio']) this.questions[this.current_question_number]['audio'].play();
      }

      if (this.testConfig.type != 'realtime' && this.form_choice == '99') {} else {
        if (this.testOption.testType == 'realtime') {
          this.saveAnswer_prev();
        }
        this.form_choice = 0;
        if (this.current_question_number !== this.testConfig.noofquestion) {}
      }
    },
    checkAnswer: function checkAnswer(choice) {
      this.form_choice = choice;
      if (this.tempCheck == choice) {
        this.tempCheck = '0';
        this.form_choice = null;
      } else {
        this.tempCheck = choice;
      }
    },
    playOption: function playOption(audio_src) {
      audio_src.stop();
    }
  },

  created: function created() {

    this.page_language = this.$i18n.locale;

    __WEBPACK_IMPORTED_MODULE_1_mini_toastr__["a" /* default */].setIcon('error', 'i', {
      'class': 'fa fa-times'
    });
  },

  mounted: function mounted() {
    // console.log(i18n.locale);
  },

  destroyed: function destroyed() {}

});

/***/ }),

/***/ 1105:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel-white-box" }, [
    _vm.page_language == "ar-ar" ||
    _vm.page_language == "ur-ur" ||
    _vm.page_language == "fa-fa"
      ? _c(
          "div",
          { staticStyle: { direction: "rtl" } },
          [
            _c(
              "b-card",
              {
                staticClass: "bg-success-card datatable-material",
                attrs: { header: "", "header-tag": "h4" }
              },
              [
                _c("div", { staticClass: "section-title" }, [
                  _vm._v(
                    _vm._s(_vm.$t("home.labels.welcome")) +
                      " " +
                      _vm._s(_vm.$store.state.user.name)
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "note-description-wrapper m-5 text-center" },
                  [
                    _c("p", { staticClass: "note-description-text" }, [
                      _vm._v(
                        _vm._s(_vm.$t("form.testdismock")) +
                          " " +
                          _vm._s(_vm.minute) +
                          " minutes " +
                          _vm._s(_vm.$t("form.testdismockend"))
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success btn-lg",
                        on: { click: _vm.startTest }
                      },
                      [_vm._v(_vm._s(_vm.$t("home.labels.start_test")))]
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _vm.pageIndex == "testStart"
              ? _c("div", { staticClass: "full-width-modal" }, [
                  _vm.loader
                    ? _c(
                        "div",
                        {
                          staticClass: "loader-image",
                          staticStyle: {
                            position: "fixed",
                            top: "50%",
                            left: "50%"
                          }
                        },
                        [
                          _c("img", {
                            attrs: { src: __webpack_require__(962) }
                          })
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "full-modal-header background-1" }, [
                    _c(
                      "p",
                      {
                        staticClass: "text-size-1 text-white mb-0 mt-2",
                        staticStyle: { float: "right" }
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("table.testfor")) +
                            " " +
                            _vm._s(
                              this.$store.state.testConfigData.testCategoryName
                            ) +
                            "-   " +
                            _vm._s(_vm.$t("table.candidate_name")) +
                            "  - " +
                            _vm._s(_vm.$store.state.user.name) +
                            "\n        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "text-right text-white text-size-2",
                        staticStyle: { float: "left" }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-clock-o",
                          attrs: { "aria-hidden": "true" }
                        }),
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("table.timerem")) +
                            " " +
                            _vm._s(_vm.minute) +
                            " : " +
                            _vm._s(_vm.display_second) +
                            "\n          "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("strong", [
                          _vm._v(
                            "#" +
                              _vm._s(_vm.current_question_number + 1) +
                              "/" +
                              _vm._s(_vm.testConfig.noofquestion)
                          )
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.questions.length > 0
                    ? _c("div", { staticClass: "full-modal-body" }, [
                        _vm.question.photo
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "question-image-container text-center"
                              },
                              [
                                _c("img", {
                                  staticClass: "question-image",
                                  attrs: { src: _vm.question.photo }
                                })
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "question-text audio-section",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.question.isPlaying0
                                  ? _vm.play(_vm.question, 0)
                                  : _vm.pause(_vm.question, 0)
                              }
                            }
                          },
                          [
                            _vm.question.isPlaying0
                              ? _c("span", { staticClass: "question-text" }, [
                                  _vm._v(_vm._s(_vm.question.question))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.question.isPlaying0 &&
                            this.$store.state.customer_option.audio_language > 0
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "question-text",
                                    staticStyle: { color: "#ff0000" }
                                  },
                                  [_vm._v(_vm._s(_vm.question.question))]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.question.isPlaying0 &&
                            this.$store.state.customer_option.audio_language ==
                              0
                              ? _c("span", { staticClass: "question-text" }, [
                                  _vm._v(_vm._s(_vm.question.question))
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "question-choice-container" },
                          [
                            _c("table", [
                              _c(
                                "tr",
                                { staticClass: "question-choice-item-wrapper" },
                                [
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-select-wrapper"
                                    },
                                    [
                                      _vm.realtimetest === "1"
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.question.answered_value,
                                                expression:
                                                  "question.answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "1",
                                              id: "choice-1",
                                              name: "1"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.question.answered_value,
                                                "1"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.question,
                                                    "answered_value",
                                                    "1"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(1)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.realtimetest === 0
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.question.answered_value,
                                                expression:
                                                  "question.answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "1",
                                              id: "choice-1"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.question.answered_value,
                                                "1"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.question,
                                                    "answered_value",
                                                    "1"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(1)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("label", {
                                        staticClass: "normal",
                                        attrs: { for: "choice-1" }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-text-wrapper audio-section",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.question.isPlaying1
                                            ? _vm.pause(_vm.question, 1)
                                            : _vm.play(_vm.question, 1)
                                        }
                                      }
                                    },
                                    [
                                      !_vm.question.isPlaying1
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.question.choice1)
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.question.isPlaying1
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text",
                                              staticStyle: { color: "red" }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.question.choice1)
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.question.choice1photo
                                    ? _c("td", [
                                        _c("img", {
                                          staticClass: "choice-photo-container",
                                          attrs: {
                                            src: _vm.question.choice1photo
                                          }
                                        })
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "choice-result-display" },
                                    [
                                      _c("span", [
                                        _vm.optionResult.successFlag1
                                          ? _c("i", {
                                              staticClass:
                                                "fa fa-check-circle fa-3x animated zoomIn"
                                            })
                                          : _vm._e()
                                      ]),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm.optionResult.errorFlag1
                                          ? _c("i", {
                                              staticClass:
                                                "fa fa-times-circle fa-3x animated zoomIn"
                                            })
                                          : _vm._e()
                                      ])
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                { staticClass: "question-choice-item-wrapper" },
                                [
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-select-wrapper"
                                    },
                                    [
                                      _vm.realtimetest === "1"
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.question.answered_value,
                                                expression:
                                                  "question.answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "2",
                                              id: "choice-2"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.question.answered_value,
                                                "2"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.question,
                                                    "answered_value",
                                                    "2"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(2)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.realtimetest === 0
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.question.answered_value,
                                                expression:
                                                  "question.answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "2",
                                              id: "choice-2"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.question.answered_value,
                                                "2"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.question,
                                                    "answered_value",
                                                    "2"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(2)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("label", {
                                        staticClass: "normal",
                                        attrs: { for: "choice-2" }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-text-wrapper audio-section",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.question.isPlaying2
                                            ? _vm.pause(_vm.question, 2)
                                            : _vm.play(_vm.question, 2)
                                        }
                                      }
                                    },
                                    [
                                      !_vm.question.isPlaying2
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.question.choice2)
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.question.isPlaying2
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text",
                                              staticStyle: { color: "red" }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.question.choice2)
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.question.choice1photo
                                    ? _c("td", [
                                        _vm.question.choice1photo
                                          ? _c("img", {
                                              staticClass:
                                                "choice-photo-container",
                                              attrs: {
                                                src: _vm.question.choice2photo
                                              }
                                            })
                                          : _vm._e()
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "choice-result-display" },
                                    [
                                      _c("span", [
                                        _vm.optionResult.successFlag1
                                          ? _c("i", {
                                              staticClass:
                                                "fa fa-check-circle fa-3x animated zoomIn"
                                            })
                                          : _vm._e()
                                      ]),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm.optionResult.errorFlag1
                                          ? _c("i", {
                                              staticClass:
                                                "fa fa-times-circle fa-3x animated zoomIn"
                                            })
                                          : _vm._e()
                                      ])
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                { staticClass: "question-choice-item-wrapper" },
                                [
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-select-wrapper"
                                    },
                                    [
                                      _vm.realtimetest === "1"
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.question.answered_value,
                                                expression:
                                                  "question.answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "3",
                                              id: "choice-3"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.question.answered_value,
                                                "3"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.question,
                                                    "answered_value",
                                                    "3"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(3)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.realtimetest === 0
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.question.answered_value,
                                                expression:
                                                  "question.answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "3",
                                              id: "choice-3"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.question.answered_value,
                                                "3"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.question,
                                                    "answered_value",
                                                    "3"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(3)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("label", {
                                        staticClass: "normal",
                                        attrs: { for: "choice-3" }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-text-wrapper audio-section",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.question.isPlaying3
                                            ? _vm.pause(_vm.question, 3)
                                            : _vm.play(_vm.question, 3)
                                        }
                                      }
                                    },
                                    [
                                      !_vm.question.isPlaying3
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.question.choice3)
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.question.isPlaying3
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text",
                                              staticStyle: { color: "red" }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.question.choice3)
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.question.choice1photo
                                    ? _c("td", [
                                        _c("img", {
                                          staticClass: "choice-photo-container",
                                          attrs: {
                                            src: _vm.question.choice3photo
                                          }
                                        })
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "choice-result-display" },
                                    [
                                      _c("span", [
                                        _vm.optionResult.successFlag1
                                          ? _c("i", {
                                              staticClass:
                                                "fa fa-check-circle fa-3x animated zoomIn"
                                            })
                                          : _vm._e()
                                      ]),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm.optionResult.errorFlag1
                                          ? _c("i", {
                                              staticClass:
                                                "fa fa-times-circle fa-3x animated zoomIn"
                                            })
                                          : _vm._e()
                                      ])
                                    ]
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "full-modal-footer background-1 p-3 pl-4" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "bottom-left-control",
                          staticStyle: { float: "right" }
                        },
                        [
                          _vm.reviewIndex == 1
                            ? _c(
                                "button",
                                {
                                  staticClass: "button-type-1",
                                  on: { click: _vm.review }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-sign-in",
                                    attrs: { "aria-hidden": "true" }
                                  }),
                                  _vm._v(_vm._s(_vm.$t("review.review")))
                                ]
                              )
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "bottom-right-control",
                          staticStyle: { float: "left" }
                        },
                        [
                          _vm.current_question_number > 0
                            ? _c(
                                "button",
                                {
                                  staticClass: "button-type-1",
                                  on: { click: _vm.previousQuestion }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-arrow-right ml-2",
                                    attrs: { "aria-hidden": "true" }
                                  }),
                                  _vm._v(_vm._s(_vm.$t("test.link.previous")))
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "button-type-1",
                              on: { click: _vm.nextQuestion }
                            },
                            [
                              _vm._v(_vm._s(_vm.$t("test.link.next"))),
                              _c("i", {
                                staticClass: "fa fa-arrow-left mr-2",
                                attrs: { "aria-hidden": "true" }
                              })
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.pageIndex == "testResultDashboard"
              ? _c("div", { staticClass: "full-width-modal" }, [
                  _c("div", { staticClass: "full-modal-header background-1" }, [
                    _c(
                      "p",
                      {
                        staticClass: "text-size-1 text-white mb-0 mt-2",
                        staticStyle: { float: "right" }
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("table.testfor")) +
                            " " +
                            _vm._s(
                              this.$store.state.testConfigData.testCategoryName
                            ) +
                            " -   " +
                            _vm._s(_vm.$t("table.candidate_name")) +
                            "- " +
                            _vm._s(_vm.$store.state.user.name) +
                            "\n        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "text-right text-white text-size-2",
                        staticStyle: { float: "left" }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-clock-o",
                          attrs: { "aria-hidden": "true" }
                        }),
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("table.timerem")) +
                            " " +
                            _vm._s(_vm.minute) +
                            " : " +
                            _vm._s(_vm.display_second) +
                            "\n          "
                        ),
                        _c("br")
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "full-modal-body",
                      staticStyle: { "padding-top": "90px" }
                    },
                    [
                      _c("div", { staticClass: "page_title" }, [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("review.section_review")) +
                            "\n        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "panel instruction" }, [
                        _c(
                          "div",
                          {
                            staticClass: "panel-heading",
                            staticStyle: {
                              "background-color": "#984807",
                              color: "white"
                            }
                          },
                          [
                            _c("h4", { staticClass: "panel-title" }, [
                              _vm._m(0),
                              _vm._v(" "),
                              _c("span", { staticClass: "instr_txt" }, [
                                _vm._v(_vm._s(_vm.$t("review.instruction")))
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { attrs: { id: "" } }, [
                          _c("div", { staticClass: "instruction-txt" }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.$t("review.line1"))
                            ),
                            _c("br"),
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.$t("review.line2"))
                            ),
                            _c("br"),
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.$t("review.line3"))
                            ),
                            _c("br"),
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.$t("review.line4"))
                            ),
                            _c("br"),
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.$t("review.line5"))
                            ),
                            _c("br"),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.$t("review.line6")) +
                                "\n            "
                            )
                          ])
                        ])
                      ]),
                      _c("br"),
                      _vm._v(" "),
                      _c("div", { staticClass: "panel instruction" }, [
                        _c(
                          "div",
                          {
                            staticClass: "panel-heading",
                            staticStyle: {
                              "background-color": "#984807",
                              color: "white"
                            }
                          },
                          [
                            _c("h4", { staticClass: "panel-title" }, [
                              _vm._m(1),
                              _vm._v(" "),
                              _c("span", { staticClass: "instr_txt" }, [
                                _vm._v(
                                  _vm._s(_vm.$t("review.presented_questions"))
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "instr_txt item_unanswered" },
                                [
                                  _vm._v(
                                    "(" +
                                      _vm._s(
                                        _vm.$t("review.Unseen_Unanswered")
                                      ) +
                                      " " +
                                      _vm._s(_vm.unanswered_question) +
                                      " )"
                                  )
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "instruction-txt row",
                            staticStyle: { "margin-bottom": "30px" }
                          },
                          _vm._l(_vm.first_testResult, function(item, key) {
                            return _c(
                              "div",
                              {
                                staticClass:
                                  "col-xl-2 col-lg-3 col-md-4 col-sm-6 test-result-dashboard"
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.checked,
                                      expression: "item.checked"
                                    }
                                  ],
                                  staticClass: "marked_checkbox",
                                  attrs: {
                                    type: "checkbox",
                                    id: item.question
                                  },
                                  domProps: {
                                    checked: Array.isArray(item.checked)
                                      ? _vm._i(item.checked, null) > -1
                                      : item.checked
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = item.checked,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = null,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              item,
                                              "checked",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              item,
                                              "checked",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(item, "checked", $$c)
                                      }
                                    }
                                  }
                                }),
                                _vm._v("   \n              "),
                                _c(
                                  "a",
                                  {
                                    staticClass: "review_index",
                                    on: {
                                      click: function($event) {
                                        return _vm.reviewByIndex(item.num)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.$t("review.question")) +
                                        " " +
                                        _vm._s(key + 1)
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                item.input == 0
                                  ? _c(
                                      "div",
                                      { staticStyle: { color: "red" } },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.$t("review.unanswered"))
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            )
                          }),
                          0
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "full-modal-footer background-1 p-3 pl-4" },
                    [
                      _c("div", { staticStyle: { float: "right" } }, [
                        _c(
                          "div",
                          {
                            staticClass: "modal fade",
                            attrs: {
                              id: "EnSureModal_endReview",
                              role: "dialog"
                            }
                          },
                          [
                            _c("div", { staticClass: "modal-dialog" }, [
                              _c("div", { staticClass: "modal-content" }, [
                                _c("div", { staticClass: "modal-header" }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "modal-body modal-text" },
                                  [
                                    _c("h3", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t(
                                            "review.end_the_current_review"
                                          )
                                        )
                                      )
                                    ]),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("h3", [
                                      _vm._v(
                                        _vm._s(_vm.$t("review.are_you_sure"))
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "modal-footer" }, [
                                  _c("div", { staticClass: "modal-confirm" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-primary",
                                        attrs: { type: "button" },
                                        on: { click: _vm.endReviewConfirm }
                                      },
                                      [_vm._v(_vm._s(_vm.$t("resume.ok")))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-danger",
                                        attrs: {
                                          type: "button",
                                          "data-dismiss": "modal"
                                        }
                                      },
                                      [_vm._v(_vm._s(_vm.$t("table.cancel")))]
                                    )
                                  ])
                                ])
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            directives: [
                              {
                                name: "b-modal",
                                rawName: "v-b-modal.modal-sm",
                                modifiers: { "modal-sm": true }
                              }
                            ],
                            staticClass: "button-type-1",
                            on: { click: _vm.endReview }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-sign-in",
                              attrs: { "aria-hidden": "true" }
                            }),
                            _vm._v(_vm._s(_vm.$t("review.end_review")))
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticStyle: { float: "left" } }, [
                        _c(
                          "button",
                          {
                            staticClass: "button-type-1",
                            on: { click: _vm.reviewAll }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-files-o",
                              attrs: { "aria-hidden": "true" }
                            }),
                            _vm._v(_vm._s(_vm.$t("review.review_all")))
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "button-type-1",
                            on: { click: _vm.reviewUnanswered }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-files-o",
                              attrs: { "aria-hidden": "true" }
                            }),
                            _vm._v(_vm._s(_vm.$t("review.review_unanswered")))
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "button-type-1",
                            on: { click: _vm.markedForReview }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-question-circle",
                              attrs: { "aria-hidden": "true" }
                            }),
                            _vm._v(_vm._s(_vm.$t("review.marked_for_review")))
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "modal fade",
                            attrs: { id: "EnSureModal", role: "dialog" }
                          },
                          [
                            _c("div", { staticClass: "modal-dialog" }, [
                              _c("div", { staticClass: "modal-content" }, [
                                _c("div", { staticClass: "modal-header" }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "modal-body modal-text" },
                                  [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(
                                          _vm.$t(
                                            "review.no_questions_have_been_flagged"
                                          )
                                        ) +
                                        "\n                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "modal-footer" }, [
                                  _c("div", { staticClass: "modal-confirm" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-primary",
                                        attrs: {
                                          type: "button",
                                          "data-dismiss": "modal"
                                        }
                                      },
                                      [_vm._v(_vm._s(_vm.$t("resume.ok")))]
                                    )
                                  ])
                                ])
                              ])
                            ])
                          ]
                        )
                      ])
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.pageIndex == "ReviewUnanswered"
              ? _c("div", { staticClass: "full-width-modal" }, [
                  _vm.loader
                    ? _c(
                        "div",
                        {
                          staticClass: "loader-image",
                          staticStyle: {
                            position: "fixed",
                            top: "50%",
                            left: "50%"
                          }
                        },
                        [
                          _c("img", {
                            attrs: { src: __webpack_require__(962) }
                          })
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "full-modal-header background-1" }, [
                    _c(
                      "p",
                      {
                        staticClass: "text-size-1 text-white mb-0 mt-2",
                        staticStyle: { float: "right" }
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("table.testfor")) +
                            " " +
                            _vm._s(
                              this.$store.state.testConfigData.testCategoryName
                            ) +
                            " - " +
                            _vm._s(_vm.$t("table.candidate_name")) +
                            " - " +
                            _vm._s(_vm.$store.state.user.name) +
                            "\n        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "text-right text-white text-size-2",
                        staticStyle: { float: "left" }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-clock-o",
                          attrs: { "aria-hidden": "true" }
                        }),
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("table.timerem")) +
                            " " +
                            _vm._s(_vm.minute) +
                            " : " +
                            _vm._s(_vm.display_second) +
                            "\n          "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        this.unansweredQuestionStartNum <
                        this.reviewUnansweredQuestion.length
                          ? _c("strong", [
                              _vm._v(
                                "\n            #" +
                                  _vm._s(_vm.current_question_number + 1) +
                                  "/" +
                                  _vm._s(_vm.testConfig.noofquestion)
                              )
                            ])
                          : _vm._e()
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.questions.length > 0
                    ? _c("div", { staticClass: "full-modal-body" }, [
                        _vm.questions[_vm.current_question_number].photo
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "question-image-container text-center"
                              },
                              [
                                _c("img", {
                                  staticClass: "question-image",
                                  attrs: {
                                    src:
                                      _vm.questions[_vm.current_question_number]
                                        .photo
                                  }
                                })
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "question-text audio-section",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.questions[_vm.current_question_number]
                                  .isPlaying0
                                  ? _vm.play(
                                      _vm.questions[
                                        _vm.current_question_number
                                      ],
                                      0
                                    )
                                  : _vm.pause(
                                      _vm.questions[
                                        _vm.current_question_number
                                      ],
                                      0
                                    )
                              }
                            }
                          },
                          [
                            _vm.questions[_vm.current_question_number]
                              .isPlaying0
                              ? _c("span", { staticClass: "question-text" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.questions[_vm.current_question_number]
                                        .question
                                    )
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.questions[_vm.current_question_number]
                              .isPlaying0 &&
                            this.$store.state.customer_option.audio_language > 0
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "question-text",
                                    staticStyle: { color: "#ff0000" }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.questions[
                                          _vm.current_question_number
                                        ].question
                                      )
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.questions[_vm.current_question_number]
                              .isPlaying0 &&
                            this.$store.state.customer_option.audio_language ==
                              0
                              ? _c("span", { staticClass: "question-text" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.questions[_vm.current_question_number]
                                        .question
                                    )
                                  )
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "question-choice-container" },
                          [
                            _c("table", [
                              _c(
                                "tr",
                                { staticClass: "question-choice-item-wrapper" },
                                [
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-select-wrapper"
                                    },
                                    [
                                      _vm.realtimetest === "1"
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].answered_value,
                                                expression:
                                                  "questions[current_question_number].answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "1",
                                              id: "choice-1",
                                              name: "1"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ].answered_value,
                                                "1"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.questions[
                                                      _vm
                                                        .current_question_number
                                                    ],
                                                    "answered_value",
                                                    "1"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(1)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.realtimetest === 0
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].answered_value,
                                                expression:
                                                  "questions[current_question_number].answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "1",
                                              id: "choice-1"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ].answered_value,
                                                "1"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.questions[
                                                      _vm
                                                        .current_question_number
                                                    ],
                                                    "answered_value",
                                                    "1"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(1)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("label", {
                                        staticClass: "normal",
                                        attrs: { for: "choice-1" }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-text-wrapper audio-section",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.questions[
                                            _vm.current_question_number
                                          ].isPlaying1
                                            ? _vm.pause(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ],
                                                1
                                              )
                                            : _vm.play(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ],
                                                1
                                              )
                                        }
                                      }
                                    },
                                    [
                                      !_vm.questions[
                                        _vm.current_question_number
                                      ].isPlaying1
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].choice1
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.questions[_vm.current_question_number]
                                        .isPlaying1
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text",
                                              staticStyle: { color: "red" }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].choice1
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.questions[_vm.current_question_number]
                                    .choice1photo
                                    ? _c("td", [
                                        _c("img", {
                                          staticClass: "choice-photo-container",
                                          attrs: {
                                            src:
                                              _vm.questions[
                                                _vm.current_question_number
                                              ].choice1photo
                                          }
                                        })
                                      ])
                                    : _vm._e()
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                { staticClass: "question-choice-item-wrapper" },
                                [
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-select-wrapper"
                                    },
                                    [
                                      _vm.realtimetest === "1"
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].answered_value,
                                                expression:
                                                  "questions[current_question_number].answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "2",
                                              id: "choice-2"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ].answered_value,
                                                "2"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.questions[
                                                      _vm
                                                        .current_question_number
                                                    ],
                                                    "answered_value",
                                                    "2"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(2)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.realtimetest === 0
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].answered_value,
                                                expression:
                                                  "questions[current_question_number].answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "2",
                                              id: "choice-2"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ].answered_value,
                                                "2"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.questions[
                                                      _vm
                                                        .current_question_number
                                                    ],
                                                    "answered_value",
                                                    "2"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(2)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("label", {
                                        staticClass: "normal",
                                        attrs: { for: "choice-2" }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-text-wrapper audio-section",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.questions[
                                            _vm.current_question_number
                                          ].isPlaying2
                                            ? _vm.pause(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ],
                                                2
                                              )
                                            : _vm.play(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ],
                                                2
                                              )
                                        }
                                      }
                                    },
                                    [
                                      !_vm.questions[
                                        _vm.current_question_number
                                      ].isPlaying2
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].choice2
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.questions[_vm.current_question_number]
                                        .isPlaying2
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text",
                                              staticStyle: { color: "red" }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].choice2
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm.questions[_vm.current_question_number]
                                      .choice1photo
                                      ? _c("img", {
                                          staticClass: "choice-photo-container",
                                          attrs: {
                                            src:
                                              _vm.questions[
                                                _vm.current_question_number
                                              ].choice2photo
                                          }
                                        })
                                      : _vm._e()
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                { staticClass: "question-choice-item-wrapper" },
                                [
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-select-wrapper"
                                    },
                                    [
                                      _vm.realtimetest === "1"
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].answered_value,
                                                expression:
                                                  "questions[current_question_number].answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "3",
                                              id: "choice-3"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ].answered_value,
                                                "3"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.questions[
                                                      _vm
                                                        .current_question_number
                                                    ],
                                                    "answered_value",
                                                    "3"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(3)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.realtimetest === 0
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].answered_value,
                                                expression:
                                                  "questions[current_question_number].answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "3",
                                              id: "choice-3"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ].answered_value,
                                                "3"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.questions[
                                                      _vm
                                                        .current_question_number
                                                    ],
                                                    "answered_value",
                                                    "3"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(3)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("label", {
                                        staticClass: "normal",
                                        attrs: { for: "choice-3" }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-text-wrapper audio-section",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.questions[
                                            _vm.current_question_number
                                          ].isPlaying3
                                            ? _vm.pause(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ],
                                                3
                                              )
                                            : _vm.play(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ],
                                                3
                                              )
                                        }
                                      }
                                    },
                                    [
                                      !_vm.questions[
                                        _vm.current_question_number
                                      ].isPlaying3
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].choice3
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.questions[_vm.current_question_number]
                                        .isPlaying3
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text",
                                              staticStyle: { color: "red" }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].choice3
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm.questions[_vm.current_question_number]
                                      .choice1photo
                                      ? _c("img", {
                                          staticClass: "choice-photo-container",
                                          attrs: {
                                            src:
                                              _vm.questions[
                                                _vm.current_question_number
                                              ].choice3photo
                                          }
                                        })
                                      : _vm._e()
                                  ])
                                ]
                              )
                            ])
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "full-modal-footer background-1 p-3 pl-4" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "bottom-left-control",
                          staticStyle: { float: "right" }
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "button-type-1",
                              on: { click: _vm.review }
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-sign-in",
                                attrs: { "aria-hidden": "true" }
                              }),
                              _vm._v(_vm._s(_vm.$t("review.review")))
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.unansweredQuestionStatus == 1,
                              expression: "unansweredQuestionStatus == 1"
                            }
                          ],
                          staticClass: "bottom-right-control",
                          staticStyle: { float: "left" }
                        },
                        [
                          _vm.unansweredQuestionStartNum > 0
                            ? _c(
                                "button",
                                {
                                  staticClass: "button-type-1  ",
                                  on: {
                                    click:
                                      _vm.ReviewUnansweredPreviousQuestionStatus
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-arrow-right ml-2",
                                    attrs: { "aria-hidden": "true" }
                                  }),
                                  _vm._v(_vm._s(_vm.$t("test.link.previous")))
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "button-type-1  ",
                              on: {
                                click: _vm.ReviewUnansweredNextQuestionStatus
                              }
                            },
                            [
                              _vm._v(_vm._s(_vm.$t("test.link.next"))),
                              _c("i", {
                                staticClass: "fa fa-arrow-left mr-2",
                                attrs: { "aria-hidden": "true" }
                              })
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.unansweredQuestionStatus == 0,
                              expression: "unansweredQuestionStatus == 0"
                            }
                          ],
                          staticClass: "bottom-right-control",
                          staticStyle: { float: "left" }
                        },
                        [
                          _vm.unansweredQuestionStartNum > 0
                            ? _c(
                                "button",
                                {
                                  staticClass: "button-type-1  ",
                                  on: {
                                    click: _vm.ReviewUnansweredPreviousQuestion
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-arrow-right ml-2",
                                    attrs: { "aria-hidden": "true" }
                                  }),
                                  _vm._v(_vm._s(_vm.$t("test.link.previous")))
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "button-type-1  ",
                              on: { click: _vm.ReviewUnansweredNextQuestion }
                            },
                            [
                              _vm._v(_vm._s(_vm.$t("test.link.next"))),
                              _c("i", {
                                staticClass: "fa fa-arrow-left mr-2",
                                attrs: { "aria-hidden": "true" }
                              })
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.pageIndex == "timeexpired"
              ? _c("div", { staticClass: "full-width-modal" }, [
                  _c(
                    "div",
                    { staticStyle: { padding: "20%", "text-align": "center" } },
                    [
                      _c("h2", [_vm._v(_vm._s(_vm.$t("table.ansprocessing")))]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            border: "solid gray 1px",
                            padding: "40px",
                            "border-radius": "3px"
                          }
                        },
                        [
                          _c("div", { staticClass: "d-block text-center" }, [
                            _c("h3", [
                              _vm._v(_vm._s(_vm.$t("form.test_timeout_msg")))
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-primary",
                              attrs: { variant: "outline-danger", block: "" },
                              on: { click: _vm.finish_testing }
                            },
                            [_vm._v(_vm._s(_vm.$t("resume.ok")))]
                          )
                        ]
                      )
                    ]
                  )
                ])
              : _vm._e()
          ],
          1
        )
      : _c(
          "div",
          [
            _c(
              "b-card",
              {
                staticClass: "bg-success-card datatable-material",
                attrs: { header: "", "header-tag": "h4" }
              },
              [
                _c("div", { staticClass: "section-title" }, [
                  _vm._v(
                    _vm._s(_vm.$t("home.labels.welcome")) +
                      " " +
                      _vm._s(_vm.$store.state.user.name)
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "note-description-wrapper m-5 text-center" },
                  [
                    _c("p", { staticClass: "note-description-text" }, [
                      _vm._v(
                        _vm._s(_vm.$t("form.testdismock")) +
                          " " +
                          _vm._s(_vm.minute) +
                          " minutes " +
                          _vm._s(_vm.$t("form.testdismockend"))
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success btn-lg",
                        on: { click: _vm.startTest }
                      },
                      [_vm._v(_vm._s(_vm.$t("home.labels.start_test")))]
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _vm.pageIndex == "testStart"
              ? _c("div", { staticClass: "full-width-modal" }, [
                  _vm.loader
                    ? _c(
                        "div",
                        {
                          staticClass: "loader-image",
                          staticStyle: {
                            position: "fixed",
                            top: "50%",
                            left: "50%"
                          }
                        },
                        [
                          _c("img", {
                            attrs: { src: __webpack_require__(962) }
                          })
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "full-modal-header background-1" }, [
                    _c(
                      "p",
                      {
                        staticClass: "text-size-1 text-white mb-0 mt-2",
                        staticStyle: { float: "left" }
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("table.testfor")) +
                            " " +
                            _vm._s(
                              this.$store.state.testConfigData.testCategoryName
                            ) +
                            " -   " +
                            _vm._s(_vm.$t("table.candidate_name")) +
                            "  - " +
                            _vm._s(_vm.$store.state.user.name) +
                            "\n        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "text-right text-white text-size-2",
                        staticStyle: { float: "right" }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-clock-o",
                          attrs: { "aria-hidden": "true" }
                        }),
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("table.timerem")) +
                            " " +
                            _vm._s(_vm.minute) +
                            " : " +
                            _vm._s(_vm.display_second) +
                            "\n          "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("strong", [
                          _vm._v(
                            "#" +
                              _vm._s(_vm.current_question_number + 1) +
                              "/" +
                              _vm._s(_vm.testConfig.noofquestion)
                          )
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.questions.length > 0
                    ? _c("div", { staticClass: "full-modal-body" }, [
                        _vm.question.photo
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "question-image-container text-center"
                              },
                              [
                                _c("img", {
                                  staticClass: "question-image",
                                  attrs: { src: _vm.question.photo }
                                })
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "question-text audio-section",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.question.isPlaying0
                                  ? _vm.play(_vm.question, 0)
                                  : _vm.pause(_vm.question, 0)
                              }
                            }
                          },
                          [
                            _vm.question.isPlaying0
                              ? _c("span", { staticClass: "question-text" }, [
                                  _vm._v(_vm._s(_vm.question.question))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.question.isPlaying0 &&
                            this.$store.state.customer_option.audio_language > 0
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "question-text",
                                    staticStyle: { color: "#ff0000" }
                                  },
                                  [_vm._v(_vm._s(_vm.question.question))]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.question.isPlaying0 &&
                            this.$store.state.customer_option.audio_language ==
                              0
                              ? _c("span", { staticClass: "question-text" }, [
                                  _vm._v(_vm._s(_vm.question.question))
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "question-choice-container" },
                          [
                            _c("table", [
                              _c(
                                "tr",
                                { staticClass: "question-choice-item-wrapper" },
                                [
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-select-wrapper"
                                    },
                                    [
                                      _vm.realtimetest === "1"
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.question.answered_value,
                                                expression:
                                                  "question.answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "1",
                                              id: "choice-1",
                                              name: "1"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.question.answered_value,
                                                "1"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.question,
                                                    "answered_value",
                                                    "1"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(1)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.realtimetest === 0
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.question.answered_value,
                                                expression:
                                                  "question.answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "1",
                                              id: "choice-1"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.question.answered_value,
                                                "1"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.question,
                                                    "answered_value",
                                                    "1"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(1)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("label", {
                                        staticClass: "normal",
                                        attrs: { for: "choice-1" }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-text-wrapper audio-section",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.question.isPlaying1
                                            ? _vm.pause(_vm.question, 1)
                                            : _vm.play(_vm.question, 1)
                                        }
                                      }
                                    },
                                    [
                                      !_vm.question.isPlaying1
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.question.choice1)
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.question.isPlaying1
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text",
                                              staticStyle: { color: "red" }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.question.choice1)
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.question.choice1photo
                                    ? _c("td", [
                                        _c("img", {
                                          staticClass: "choice-photo-container",
                                          attrs: {
                                            src: _vm.question.choice1photo
                                          }
                                        })
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "choice-result-display" },
                                    [
                                      _c("span", [
                                        _vm.optionResult.successFlag1
                                          ? _c("i", {
                                              staticClass:
                                                "fa fa-check-circle fa-3x animated zoomIn"
                                            })
                                          : _vm._e()
                                      ]),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm.optionResult.errorFlag1
                                          ? _c("i", {
                                              staticClass:
                                                "fa fa-times-circle fa-3x animated zoomIn"
                                            })
                                          : _vm._e()
                                      ])
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                { staticClass: "question-choice-item-wrapper" },
                                [
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-select-wrapper"
                                    },
                                    [
                                      _vm.realtimetest === "1"
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.question.answered_value,
                                                expression:
                                                  "question.answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "2",
                                              id: "choice-2"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.question.answered_value,
                                                "2"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.question,
                                                    "answered_value",
                                                    "2"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(2)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.realtimetest === 0
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.question.answered_value,
                                                expression:
                                                  "question.answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "2",
                                              id: "choice-2"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.question.answered_value,
                                                "2"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.question,
                                                    "answered_value",
                                                    "2"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(2)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("label", {
                                        staticClass: "normal",
                                        attrs: { for: "choice-2" }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-text-wrapper audio-section",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.question.isPlaying2
                                            ? _vm.pause(_vm.question, 2)
                                            : _vm.play(_vm.question, 2)
                                        }
                                      }
                                    },
                                    [
                                      !_vm.question.isPlaying2
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.question.choice2)
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.question.isPlaying2
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text",
                                              staticStyle: { color: "red" }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.question.choice2)
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.question.choice1photo
                                    ? _c("td", [
                                        _vm.question.choice1photo
                                          ? _c("img", {
                                              staticClass:
                                                "choice-photo-container",
                                              attrs: {
                                                src: _vm.question.choice2photo
                                              }
                                            })
                                          : _vm._e()
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "choice-result-display" },
                                    [
                                      _c("span", [
                                        _vm.optionResult.successFlag1
                                          ? _c("i", {
                                              staticClass:
                                                "fa fa-check-circle fa-3x animated zoomIn"
                                            })
                                          : _vm._e()
                                      ]),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm.optionResult.errorFlag1
                                          ? _c("i", {
                                              staticClass:
                                                "fa fa-times-circle fa-3x animated zoomIn"
                                            })
                                          : _vm._e()
                                      ])
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                { staticClass: "question-choice-item-wrapper" },
                                [
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-select-wrapper"
                                    },
                                    [
                                      _vm.realtimetest === "1"
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.question.answered_value,
                                                expression:
                                                  "question.answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "3",
                                              id: "choice-3"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.question.answered_value,
                                                "3"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.question,
                                                    "answered_value",
                                                    "3"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(3)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.realtimetest === 0
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.question.answered_value,
                                                expression:
                                                  "question.answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "3",
                                              id: "choice-3"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.question.answered_value,
                                                "3"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.question,
                                                    "answered_value",
                                                    "3"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(3)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("label", {
                                        staticClass: "normal",
                                        attrs: { for: "choice-3" }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-text-wrapper audio-section",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.question.isPlaying3
                                            ? _vm.pause(_vm.question, 3)
                                            : _vm.play(_vm.question, 3)
                                        }
                                      }
                                    },
                                    [
                                      !_vm.question.isPlaying3
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.question.choice3)
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.question.isPlaying3
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text",
                                              staticStyle: { color: "red" }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.question.choice3)
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.question.choice1photo
                                    ? _c("td", [
                                        _c("img", {
                                          staticClass: "choice-photo-container",
                                          attrs: {
                                            src: _vm.question.choice3photo
                                          }
                                        })
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    { staticClass: "choice-result-display" },
                                    [
                                      _c("span", [
                                        _vm.optionResult.successFlag1
                                          ? _c("i", {
                                              staticClass:
                                                "fa fa-check-circle fa-3x animated zoomIn"
                                            })
                                          : _vm._e()
                                      ]),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm.optionResult.errorFlag1
                                          ? _c("i", {
                                              staticClass:
                                                "fa fa-times-circle fa-3x animated zoomIn"
                                            })
                                          : _vm._e()
                                      ])
                                    ]
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "full-modal-footer background-1 p-3 pl-4" },
                    [
                      _c("div", { staticClass: "bottom-left-control" }, [
                        _vm.reviewIndex == 1
                          ? _c(
                              "button",
                              {
                                staticClass: "button-type-1",
                                on: { click: _vm.review }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-sign-in",
                                  attrs: { "aria-hidden": "true" }
                                }),
                                _vm._v(_vm._s(_vm.$t("review.review")))
                              ]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "bottom-right-control",
                          staticStyle: { float: "right" }
                        },
                        [
                          _vm.current_question_number > 0
                            ? _c(
                                "button",
                                {
                                  staticClass: "button-type-1",
                                  on: { click: _vm.previousQuestion }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-arrow-left mr-2",
                                    attrs: { "aria-hidden": "true" }
                                  }),
                                  _vm._v(_vm._s(_vm.$t("test.link.previous")))
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "button-type-1",
                              on: { click: _vm.nextQuestion }
                            },
                            [
                              _vm._v(_vm._s(_vm.$t("test.link.next"))),
                              _c("i", {
                                staticClass: "fa fa-arrow-right ml-2",
                                attrs: { "aria-hidden": "true" }
                              })
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.pageIndex == "testResultDashboard"
              ? _c("div", { staticClass: "full-width-modal" }, [
                  _c(
                    "div",
                    { staticClass: "full-modal-header background-1 " },
                    [
                      _c(
                        "p",
                        {
                          staticClass: "text-size-1 text-white mb-0 mt-2",
                          staticStyle: { float: "left" }
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.$t("table.testfor")) +
                              " " +
                              _vm._s(
                                this.$store.state.testConfigData
                                  .testCategoryName
                              ) +
                              " -   " +
                              _vm._s(_vm.$t("table.candidate_name")) +
                              "- " +
                              _vm._s(_vm.$store.state.user.name) +
                              "\n        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "text-right text-white text-size-2",
                          staticStyle: { float: "right" }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-clock-o",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.$t("table.timerem")) +
                              " " +
                              _vm._s(_vm.minute) +
                              " : " +
                              _vm._s(_vm.display_second) +
                              "\n          "
                          ),
                          _c("br")
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "full-modal-body",
                      staticStyle: { "padding-top": "90px" }
                    },
                    [
                      _c("div", { staticClass: "page_title" }, [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("review.section_review")) +
                            "\n        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "panel instruction" }, [
                        _c(
                          "div",
                          {
                            staticClass: "panel-heading",
                            staticStyle: {
                              "background-color": "#984807",
                              color: "white"
                            }
                          },
                          [
                            _c("h4", { staticClass: "panel-title" }, [
                              _vm._m(2),
                              _vm._v(" "),
                              _c("span", { staticClass: "instr_txt" }, [
                                _vm._v(_vm._s(_vm.$t("review.instruction")))
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { staticClass: "instruction-txt" }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.$t("review.line1"))
                            ),
                            _c("br"),
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.$t("review.line2"))
                            ),
                            _c("br"),
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.$t("review.line3"))
                            ),
                            _c("br"),
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.$t("review.line4"))
                            ),
                            _c("br"),
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.$t("review.line5"))
                            ),
                            _c("br"),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.$t("review.line6")) +
                                "\n            "
                            )
                          ])
                        ])
                      ]),
                      _c("br"),
                      _vm._v(" "),
                      _c("div", { staticClass: "panel instruction" }, [
                        _c(
                          "div",
                          {
                            staticClass: "panel-heading",
                            staticStyle: {
                              "background-color": "#984807",
                              color: "white"
                            }
                          },
                          [
                            _c("h4", { staticClass: "panel-title" }, [
                              _vm._m(3),
                              _vm._v(" "),
                              _c("span", { staticClass: "instr_txt" }, [
                                _vm._v(
                                  _vm._s(_vm.$t("review.presented_questions"))
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "instr_txt item_unanswered" },
                                [
                                  _vm._v(
                                    "(" +
                                      _vm._s(
                                        _vm.$t("review.Unseen_Unanswered")
                                      ) +
                                      " " +
                                      _vm._s(_vm.unanswered_question) +
                                      " )"
                                  )
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "instruction-txt row",
                            staticStyle: { "margin-bottom": "30px" }
                          },
                          _vm._l(_vm.first_testResult, function(item, key) {
                            return _c(
                              "div",
                              {
                                staticClass:
                                  "col-xl-2 col-lg-3 col-md-4 col-sm-6 test-result-dashboard"
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.checked,
                                      expression: "item.checked"
                                    }
                                  ],
                                  staticClass: "marked_checkbox",
                                  attrs: {
                                    type: "checkbox",
                                    id: item.question
                                  },
                                  domProps: {
                                    checked: Array.isArray(item.checked)
                                      ? _vm._i(item.checked, null) > -1
                                      : item.checked
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = item.checked,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = null,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              item,
                                              "checked",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              item,
                                              "checked",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(item, "checked", $$c)
                                      }
                                    }
                                  }
                                }),
                                _vm._v("   \n              "),
                                _c(
                                  "a",
                                  {
                                    staticClass: "review_index",
                                    on: {
                                      click: function($event) {
                                        return _vm.reviewByIndex(item.num)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.$t("review.question")) +
                                        " " +
                                        _vm._s(key + 1)
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                item.input == 0
                                  ? _c(
                                      "div",
                                      { staticStyle: { color: "red" } },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.$t("review.unanswered"))
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            )
                          }),
                          0
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "full-modal-footer background-1 p-3 pl-4" },
                    [
                      _c("div", { staticStyle: { float: "left" } }, [
                        _c(
                          "div",
                          {
                            staticClass: "modal fade",
                            attrs: {
                              id: "EnSureModal_endReview",
                              role: "dialog"
                            }
                          },
                          [
                            _c("div", { staticClass: "modal-dialog" }, [
                              _c("div", { staticClass: "modal-content" }, [
                                _c("div", { staticClass: "modal-header" }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "modal-body modal-text" },
                                  [
                                    _c("h3", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t(
                                            "review.end_the_current_review"
                                          )
                                        )
                                      )
                                    ]),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("h3", [
                                      _vm._v(
                                        _vm._s(_vm.$t("review.are_you_sure"))
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "modal-footer" }, [
                                  _c("div", { staticClass: "modal-confirm" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-primary",
                                        attrs: { type: "button" },
                                        on: { click: _vm.endReviewConfirm }
                                      },
                                      [_vm._v(_vm._s(_vm.$t("resume.ok")))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-danger",
                                        attrs: {
                                          type: "button",
                                          "data-dismiss": "modal"
                                        }
                                      },
                                      [_vm._v(_vm._s(_vm.$t("table.cancel")))]
                                    )
                                  ])
                                ])
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            directives: [
                              {
                                name: "b-modal",
                                rawName: "v-b-modal.modal-sm",
                                modifiers: { "modal-sm": true }
                              }
                            ],
                            staticClass: "button-type-1",
                            on: { click: _vm.endReview }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-sign-in",
                              attrs: { "aria-hidden": "true" }
                            }),
                            _vm._v(_vm._s(_vm.$t("review.end_review")))
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticStyle: { float: "right" } }, [
                        _c(
                          "button",
                          {
                            staticClass: "button-type-1",
                            on: { click: _vm.reviewAll }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-files-o",
                              attrs: { "aria-hidden": "true" }
                            }),
                            _vm._v(_vm._s(_vm.$t("review.review_all")))
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "button-type-1",
                            on: { click: _vm.reviewUnanswered }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-files-o",
                              attrs: { "aria-hidden": "true" }
                            }),
                            _vm._v(_vm._s(_vm.$t("review.review_unanswered")))
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "button-type-1",
                            on: { click: _vm.markedForReview }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-question-circle",
                              attrs: { "aria-hidden": "true" }
                            }),
                            _vm._v(_vm._s(_vm.$t("review.marked_for_review")))
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "modal fade",
                            attrs: { id: "EnSureModal", role: "dialog" }
                          },
                          [
                            _c("div", { staticClass: "modal-dialog" }, [
                              _c("div", { staticClass: "modal-content" }, [
                                _c("div", { staticClass: "modal-header" }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "modal-body modal-text" },
                                  [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(
                                          _vm.$t(
                                            "review.no_questions_have_been_flagged"
                                          )
                                        ) +
                                        "\n                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "modal-footer" }, [
                                  _c("div", { staticClass: "modal-confirm" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-primary",
                                        attrs: {
                                          type: "button",
                                          "data-dismiss": "modal"
                                        }
                                      },
                                      [_vm._v(_vm._s(_vm.$t("resume.ok")))]
                                    )
                                  ])
                                ])
                              ])
                            ])
                          ]
                        )
                      ])
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.pageIndex == "ReviewUnanswered"
              ? _c("div", { staticClass: "full-width-modal" }, [
                  _vm.loader
                    ? _c(
                        "div",
                        {
                          staticClass: "loader-image",
                          staticStyle: {
                            position: "fixed",
                            top: "50%",
                            left: "50%"
                          }
                        },
                        [
                          _c("img", {
                            attrs: { src: __webpack_require__(962) }
                          })
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "full-modal-header background-1" }, [
                    _c(
                      "p",
                      {
                        staticClass: "text-size-1 text-white mb-0 mt-2",
                        staticStyle: { float: "left" }
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("table.testfor")) +
                            " " +
                            _vm._s(
                              this.$store.state.testConfigData.testCategoryName
                            ) +
                            " - " +
                            _vm._s(_vm.$t("table.candidate_name")) +
                            " - " +
                            _vm._s(_vm.$store.state.user.name) +
                            "\n        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "text-right text-white text-size-2",
                        staticStyle: { float: "right" }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-clock-o",
                          attrs: { "aria-hidden": "true" }
                        }),
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("table.timerem")) +
                            " " +
                            _vm._s(_vm.minute) +
                            " : " +
                            _vm._s(_vm.display_second) +
                            "\n          "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        this.unansweredQuestionStartNum <
                        this.reviewUnansweredQuestion.length
                          ? _c("strong", [
                              _vm._v(
                                "\n\n            #" +
                                  _vm._s(_vm.current_question_number + 1) +
                                  "/" +
                                  _vm._s(_vm.testConfig.noofquestion)
                              )
                            ])
                          : _vm._e()
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.questions.length > 0
                    ? _c("div", { staticClass: "full-modal-body" }, [
                        _vm.questions[_vm.current_question_number].photo
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "question-image-container text-center"
                              },
                              [
                                _c("img", {
                                  staticClass: "question-image",
                                  attrs: {
                                    src:
                                      _vm.questions[_vm.current_question_number]
                                        .photo
                                  }
                                })
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "question-text audio-section",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.questions[_vm.current_question_number]
                                  .isPlaying0
                                  ? _vm.play(
                                      _vm.questions[
                                        _vm.current_question_number
                                      ],
                                      0
                                    )
                                  : _vm.pause(
                                      _vm.questions[
                                        _vm.current_question_number
                                      ],
                                      0
                                    )
                              }
                            }
                          },
                          [
                            _vm.questions[_vm.current_question_number]
                              .isPlaying0
                              ? _c("span", { staticClass: "question-text" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.questions[_vm.current_question_number]
                                        .question
                                    )
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.questions[_vm.current_question_number]
                              .isPlaying0 &&
                            this.$store.state.customer_option.audio_language > 0
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "question-text",
                                    staticStyle: { color: "#ff0000" }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.questions[
                                          _vm.current_question_number
                                        ].question
                                      )
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.questions[_vm.current_question_number]
                              .isPlaying0 &&
                            this.$store.state.customer_option.audio_language ==
                              0
                              ? _c("span", { staticClass: "question-text" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.questions[_vm.current_question_number]
                                        .question
                                    )
                                  )
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "question-choice-container" },
                          [
                            _c("table", [
                              _c(
                                "tr",
                                { staticClass: "question-choice-item-wrapper" },
                                [
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-select-wrapper"
                                    },
                                    [
                                      _vm.realtimetest === "1"
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].answered_value,
                                                expression:
                                                  "questions[current_question_number].answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "1",
                                              id: "choice-1",
                                              name: "1"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ].answered_value,
                                                "1"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.questions[
                                                      _vm
                                                        .current_question_number
                                                    ],
                                                    "answered_value",
                                                    "1"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(1)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.realtimetest === 0
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].answered_value,
                                                expression:
                                                  "questions[current_question_number].answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "1",
                                              id: "choice-1"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ].answered_value,
                                                "1"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.questions[
                                                      _vm
                                                        .current_question_number
                                                    ],
                                                    "answered_value",
                                                    "1"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(1)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("label", {
                                        staticClass: "normal",
                                        attrs: { for: "choice-1" }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-text-wrapper audio-section",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.questions[
                                            _vm.current_question_number
                                          ].isPlaying1
                                            ? _vm.pause(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ],
                                                1
                                              )
                                            : _vm.play(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ],
                                                1
                                              )
                                        }
                                      }
                                    },
                                    [
                                      !_vm.questions[
                                        _vm.current_question_number
                                      ].isPlaying1
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].choice1
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.questions[_vm.current_question_number]
                                        .isPlaying1
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text",
                                              staticStyle: { color: "red" }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].choice1
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.questions[_vm.current_question_number]
                                    .choice1photo
                                    ? _c("td", [
                                        _c("img", {
                                          staticClass: "choice-photo-container",
                                          attrs: {
                                            src:
                                              _vm.questions[
                                                _vm.current_question_number
                                              ].choice1photo
                                          }
                                        })
                                      ])
                                    : _vm._e()
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                { staticClass: "question-choice-item-wrapper" },
                                [
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-select-wrapper"
                                    },
                                    [
                                      _vm.realtimetest === "1"
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].answered_value,
                                                expression:
                                                  "questions[current_question_number].answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "2",
                                              id: "choice-2"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ].answered_value,
                                                "2"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.questions[
                                                      _vm
                                                        .current_question_number
                                                    ],
                                                    "answered_value",
                                                    "2"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(2)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.realtimetest === 0
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].answered_value,
                                                expression:
                                                  "questions[current_question_number].answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "2",
                                              id: "choice-2"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ].answered_value,
                                                "2"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.questions[
                                                      _vm
                                                        .current_question_number
                                                    ],
                                                    "answered_value",
                                                    "2"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(2)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("label", {
                                        staticClass: "normal",
                                        attrs: { for: "choice-2" }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-text-wrapper audio-section",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.questions[
                                            _vm.current_question_number
                                          ].isPlaying2
                                            ? _vm.pause(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ],
                                                2
                                              )
                                            : _vm.play(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ],
                                                2
                                              )
                                        }
                                      }
                                    },
                                    [
                                      !_vm.questions[
                                        _vm.current_question_number
                                      ].isPlaying2
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].choice2
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.questions[_vm.current_question_number]
                                        .isPlaying2
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text",
                                              staticStyle: { color: "red" }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].choice2
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm.questions[_vm.current_question_number]
                                      .choice1photo
                                      ? _c("img", {
                                          staticClass: "choice-photo-container",
                                          attrs: {
                                            src:
                                              _vm.questions[
                                                _vm.current_question_number
                                              ].choice2photo
                                          }
                                        })
                                      : _vm._e()
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "tr",
                                { staticClass: "question-choice-item-wrapper" },
                                [
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-select-wrapper"
                                    },
                                    [
                                      _vm.realtimetest === "1"
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].answered_value,
                                                expression:
                                                  "questions[current_question_number].answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "3",
                                              id: "choice-3"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ].answered_value,
                                                "3"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.questions[
                                                      _vm
                                                        .current_question_number
                                                    ],
                                                    "answered_value",
                                                    "3"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(3)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.realtimetest === 0
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].answered_value,
                                                expression:
                                                  "questions[current_question_number].answered_value"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              value: "3",
                                              id: "choice-3"
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ].answered_value,
                                                "3"
                                              )
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  return _vm.$set(
                                                    _vm.questions[
                                                      _vm
                                                        .current_question_number
                                                    ],
                                                    "answered_value",
                                                    "3"
                                                  )
                                                },
                                                function($event) {
                                                  return _vm.checkAnswer(3)
                                                }
                                              ]
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("label", {
                                        staticClass: "normal",
                                        attrs: { for: "choice-3" }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    {
                                      staticClass:
                                        "question-choice-text-wrapper audio-section",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.questions[
                                            _vm.current_question_number
                                          ].isPlaying3
                                            ? _vm.pause(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ],
                                                3
                                              )
                                            : _vm.play(
                                                _vm.questions[
                                                  _vm.current_question_number
                                                ],
                                                3
                                              )
                                        }
                                      }
                                    },
                                    [
                                      !_vm.questions[
                                        _vm.current_question_number
                                      ].isPlaying3
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].choice3
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.questions[_vm.current_question_number]
                                        .isPlaying3
                                        ? _c(
                                            "span",
                                            {
                                              staticClass:
                                                "question-choice-text",
                                              staticStyle: { color: "red" }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.questions[
                                                    _vm.current_question_number
                                                  ].choice3
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm.questions[_vm.current_question_number]
                                      .choice1photo
                                      ? _c("img", {
                                          staticClass: "choice-photo-container",
                                          attrs: {
                                            src:
                                              _vm.questions[
                                                _vm.current_question_number
                                              ].choice3photo
                                          }
                                        })
                                      : _vm._e()
                                  ])
                                ]
                              )
                            ])
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "full-modal-footer background-1 p-3 pl-4" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "bottom-left-control",
                          staticStyle: { float: "left" }
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "button-type-1",
                              on: { click: _vm.review }
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-sign-in",
                                attrs: { "aria-hidden": "true" }
                              }),
                              _vm._v(_vm._s(_vm.$t("review.review")))
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.unansweredQuestionStatus == 1,
                              expression: "unansweredQuestionStatus == 1"
                            }
                          ],
                          staticClass: "bottom-right-control",
                          staticStyle: { float: "right" }
                        },
                        [
                          _vm.unansweredQuestionStartNum > -1
                            ? _c(
                                "button",
                                {
                                  staticClass: "button-type-1  ",
                                  on: {
                                    click:
                                      _vm.ReviewUnansweredPreviousQuestionStatus
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-arrow-left mr-2",
                                    attrs: { "aria-hidden": "true" }
                                  }),
                                  _vm._v(_vm._s(_vm.$t("test.link.previous")))
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "button-type-1  ",
                              on: {
                                click: _vm.ReviewUnansweredNextQuestionStatus
                              }
                            },
                            [
                              _vm._v(_vm._s(_vm.$t("test.link.next"))),
                              _c("i", {
                                staticClass: "fa fa-arrow-right ml-2",
                                attrs: { "aria-hidden": "true" }
                              })
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.unansweredQuestionStatus == 0,
                              expression: "unansweredQuestionStatus == 0"
                            }
                          ],
                          staticClass: "bottom-right-control",
                          staticStyle: { float: "right" }
                        },
                        [
                          _vm.unansweredQuestionStartNum > 0
                            ? _c(
                                "button",
                                {
                                  staticClass: "button-type-1  ",
                                  on: {
                                    click: _vm.ReviewUnansweredPreviousQuestion
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-arrow-left mr-2",
                                    attrs: { "aria-hidden": "true" }
                                  }),
                                  _vm._v(_vm._s(_vm.$t("test.link.previous")))
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "button-type-1  ",
                              on: { click: _vm.ReviewUnansweredNextQuestion }
                            },
                            [
                              _vm._v(_vm._s(_vm.$t("test.link.next"))),
                              _c("i", {
                                staticClass: "fa fa-arrow-right ml-2",
                                attrs: { "aria-hidden": "true" }
                              })
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.pageIndex == "time_expired"
              ? _c("div", { staticClass: "full-width-modal" }, [
                  _c(
                    "div",
                    { staticStyle: { padding: "20%", "text-align": "center" } },
                    [
                      _c("h2", [_vm._v(_vm._s(_vm.$t("table.ansprocessing")))]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            border: "solid gray 1px",
                            padding: "40px",
                            "border-radius": "3px"
                          }
                        },
                        [
                          _c("div", { staticClass: "d-block text-center" }, [
                            _c("h3", [
                              _vm._v(_vm._s(_vm.$t("form.test_timeout_msg")))
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-primary",
                              attrs: { variant: "outline-danger", block: "" },
                              on: { click: _vm.finish_testing }
                            },
                            [_vm._v(_vm._s(_vm.$t("resume.ok")))]
                          )
                        ]
                      )
                    ]
                  )
                ])
              : _vm._e()
          ],
          1
        )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { attrs: { "data-toggle": "collapse", href: "#collapse1" } },
      [
        _c("i", {
          staticClass: "fa fa-minus-square-o instruction-acc",
          attrs: { "aria-hidden": "true" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { attrs: { "data-toggle": "collapse", href: "#collapse1" } },
      [
        _c("i", {
          staticClass: "fa fa-minus-square-o presented-acc",
          attrs: { "aria-hidden": "true" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { attrs: { "data-toggle": "collapse", href: "#collapse1" } },
      [
        _c("i", {
          staticClass: "fa fa-minus-square-o instruction-acc",
          attrs: { "aria-hidden": "true" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { attrs: { "data-toggle": "collapse", href: "#collapse1" } },
      [
        _c("i", {
          staticClass: "fa fa-minus-square-o presented-acc",
          attrs: { "aria-hidden": "true" }
        })
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fffb44e2", module.exports)
  }
}

/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1102)
}
var normalizeComponent = __webpack_require__(47)
/* script */
var __vue_script__ = __webpack_require__(1104)
/* template */
var __vue_template__ = __webpack_require__(1105)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fffb44e2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/pages/home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fffb44e2", Component.options)
  } else {
    hotAPI.reload("data-v-fffb44e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};!function(){function o(e,t){if(!o.installed){if(o.installed=!0,!t)return void console.error("You have to install axios");e.axios=t,Object.defineProperties(e.prototype,{axios:{get:function(){return t}},$http:{get:function(){return t}}})}}"object"==( false?"undefined":_typeof(exports))?module.exports=o: true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return o}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):window.Vue&&window.axios&&Vue.use(o,window.axios)}();

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fadeOut */
/* unused harmony export flatten */
/* unused harmony export makeCss */
/* unused harmony export appendStyles */
/* unused harmony export makeNode */
/* unused harmony export createIcon */
/* unused harmony export addElem */
/* unused harmony export getTypeClass */
function fadeOut (element, cb) {
  if (element.style.opacity && element.style.opacity > 0.05) {
    element.style.opacity = element.style.opacity - 0.05
  } else if (element.style.opacity && element.style.opacity <= 0.1) {
    if (element.parentNode) {
      element.parentNode.removeChild(element)
      if (cb) cb()
    }
  } else {
    element.style.opacity = 0.9
  }
  setTimeout(() => fadeOut.apply(this, [element, cb]), 1000 / 30
  )
}

const LIB_NAME = 'mini-toastr'
/* unused harmony export LIB_NAME */


const ERROR = 'error'
/* unused harmony export ERROR */

const WARN = 'warn'
/* unused harmony export WARN */

const SUCCESS = 'success'
/* unused harmony export SUCCESS */

const INFO = 'info'
/* unused harmony export INFO */

const CONTAINER_CLASS = LIB_NAME
/* unused harmony export CONTAINER_CLASS */

const NOTIFICATION_CLASS = `${LIB_NAME}__notification`
/* unused harmony export NOTIFICATION_CLASS */

const TITLE_CLASS = `${LIB_NAME}-notification__title`
/* unused harmony export TITLE_CLASS */

const ICON_CLASS = `${LIB_NAME}-notification__icon`
/* unused harmony export ICON_CLASS */

const MESSAGE_CLASS = `${LIB_NAME}-notification__message`
/* unused harmony export MESSAGE_CLASS */

const ERROR_CLASS = `-${ERROR}`
/* unused harmony export ERROR_CLASS */

const WARN_CLASS = `-${WARN}`
/* unused harmony export WARN_CLASS */

const SUCCESS_CLASS = `-${SUCCESS}`
/* unused harmony export SUCCESS_CLASS */

const INFO_CLASS = `-${INFO}`
/* unused harmony export INFO_CLASS */

const DEFAULT_TIMEOUT = 3000
/* unused harmony export DEFAULT_TIMEOUT */



function flatten (obj, into, prefix) {
  into = into || {}
  prefix = prefix || ''

  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      const prop = obj[k]
      if (prop && typeof prop === 'object' && !(prop instanceof Date || prop instanceof RegExp)) {
        flatten(prop, into, prefix + k + ' ')
      } else {
        if (into[prefix] && typeof into[prefix] === 'object') {
          into[prefix][k] = prop
        } else {
          into[prefix] = {}
          into[prefix][k] = prop
        }
      }
    }
  }

  return into
}

function makeCss (obj) {
  const flat = flatten(obj)
  let str = JSON.stringify(flat, null, 2)
  str = str.replace(/"([^"]*)": {/g, '$1 {')
    .replace(/"([^"]*)"/g, '$1')
    .replace(/(\w*-?\w*): ([\w\d .#]*),?/g, '$1: $2;')
    .replace(/},/g, '}\n')
    .replace(/ &([.:])/g, '$1')

  str = str.substr(1, str.lastIndexOf('}') - 1)

  return str
}

function appendStyles (css) {
  let head = document.head || document.getElementsByTagName('head')[0]
  let styleElem = makeNode('style')
  styleElem.id = `${LIB_NAME}-styles`
  styleElem.type = 'text/css'

  if (styleElem.styleSheet) {
    styleElem.styleSheet.cssText = css
  } else {
    styleElem.appendChild(document.createTextNode(css))
  }

  head.appendChild(styleElem)
}

const config = {
  types: {ERROR, WARN, SUCCESS, INFO},
  animation: fadeOut,
  timeout: DEFAULT_TIMEOUT,
  icons: {},
  appendTarget: document.body,
  node: makeNode(),
  style: {
    [`.${CONTAINER_CLASS}`]: {
      position: 'fixed',
      'z-index': 99999,
      right: '12px',
      top: '12px'
    },
    [`.${NOTIFICATION_CLASS}`]: {
      cursor: 'pointer',
      padding: '12px 18px',
      margin: '0 0 6px 0',
      'background-color': '#000',
      opacity: 0.8,
      color: '#fff',
      'border-radius': '3px',
      'box-shadow': '#3c3b3b 0 0 12px',
      width: '300px',
      [`&.${ERROR_CLASS}`]: {
        'background-color': '#D5122B'
      },
      [`&.${WARN_CLASS}`]: {
        'background-color': '#F5AA1E'
      },
      [`&.${SUCCESS_CLASS}`]: {
        'background-color': '#7AC13E'
      },
      [`&.${INFO_CLASS}`]: {
        'background-color': '#4196E1'
      },
      '&:hover': {
        opacity: 1,
        'box-shadow': '#000 0 0 12px'
      }
    },
    [`.${TITLE_CLASS}`]: {
      'font-weight': '500'
    },
    [`.${MESSAGE_CLASS}`]: {
      display: 'inline-block',
      'vertical-align': 'middle',
      width: '240px',
      padding: '0 12px'
    }
  }
}
/* unused harmony export config */


function makeNode (type = 'div') {
  return document.createElement(type)
}

function createIcon (node, type, config) {
  const iconNode = makeNode(config.icons[type].nodeType)
  const attrs = config.icons[type].attrs

  for (const k in attrs) {
    if (attrs.hasOwnProperty(k)) {
      iconNode.setAttribute(k, attrs[k])
    }
  }

  node.appendChild(iconNode)
}

function addElem (node, text, className) {
  const elem = makeNode()
  elem.className = className
  elem.appendChild(document.createTextNode(text))
  node.appendChild(elem)
}

function getTypeClass (type) {
  if (type === SUCCESS) return SUCCESS_CLASS
  if (type === WARN) return WARN_CLASS
  if (type === ERROR) return ERROR_CLASS
  if (type === INFO) return INFO_CLASS

  return ''
}

const miniToastr = {
  config,
  isInitialised: false,
  showMessage (message, title, type, timeout, cb, overrideConf) {
    const config = {}
    Object.assign(config, this.config)
    Object.assign(config, overrideConf)

    const notificationElem = makeNode()
    notificationElem.className = `${NOTIFICATION_CLASS} ${getTypeClass(type)}`

    notificationElem.onclick = function () {
      config.animation(notificationElem, null)
    }

    if (title) addElem(notificationElem, title, TITLE_CLASS)
    if (config.icons[type]) createIcon(notificationElem, type, config)
    if (message) addElem(notificationElem, message, MESSAGE_CLASS)

    config.node.insertBefore(notificationElem, config.node.firstChild)
    setTimeout(() => config.animation(notificationElem, cb), timeout || config.timeout
    )

    if (cb) cb()
    return this
  },
  init (aConfig) {
    const newConfig = {}
    Object.assign(newConfig, config)
    Object.assign(newConfig, aConfig)
    this.config = newConfig

    const cssStr = makeCss(newConfig.style)
    appendStyles(cssStr)

    newConfig.node.id = CONTAINER_CLASS
    newConfig.node.className = CONTAINER_CLASS
    newConfig.appendTarget.appendChild(newConfig.node)

    Object.keys(newConfig.types).forEach(v => {
        this[newConfig.types[v]] = function (message, title, timeout, cb, config) {
          this.showMessage(message, title, newConfig.types[v], timeout, cb, config)
          return this
        }.bind(this)
      }
    )

    this.isInitialised = true;

    return this
  },
  setIcon (type, nodeType = 'i', attrs = []) {
    attrs.class = attrs.class ? attrs.class + ' ' + ICON_CLASS : ICON_CLASS

    this.config.icons[type] = {nodeType, attrs}
  }
}

/* harmony default export */ __webpack_exports__["a"] = (miniToastr);

/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_axios__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jwt_service__ = __webpack_require__(228);





var User_ApiService = {
    init: function init() {
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_axios___default.a, __WEBPACK_IMPORTED_MODULE_1_axios___default.a);
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.defaults.baseURL = 'api/user/';
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    },
    setHeader: function setHeader() {
        var user_data = __WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* default */].getUser('user');
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.defaults.headers.common["user_id"] = "" + user_data.user_id;
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.defaults.headers.common["password"] = "" + user_data.password;
    },
    query: function query(resource, params) {
        return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.get(resource, params).catch(function (error) {
            throw new Error("[RWV] ApiService " + error);
        });
    },
    get: function get(resource) {
        var slug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        if (__WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* default */].getUser() !== null) {
            this.setHeader();
        }
        var params = '';
        if (!_.isNaN(slug)) {
            params = '?' + slug;
        }
        if (_.isObject(slug)) {
            params = '?' + _.keys(slug).filter(function (key) {
                return slug[key] != null && slug[key] !== 'null';
            }).map(function (key) {
                return key + '=' + slug[key];
            }).join('&');
        }
        return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.get("" + resource + params).catch(function (error) {
            throw new Error("[RWV] ApiService " + error);
        });
    },
    post: function post(resource, params) {
        console.log(__WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios);
        if (__WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* default */].getUser() !== null) {
            this.setHeader();
        }
        return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.post("" + resource, params);
    }
};

/* harmony default export */ __webpack_exports__["a"] = (User_ApiService);

/***/ }),

/***/ 962:
/***/ (function(module, exports) {

module.exports = "/belhasa/public/images/app-loader.gif?7ac99b075223d901652cf3ad95e0f3d7";

/***/ })

});