webpackJsonp([103],{

/***/ 1110:
/***/ (function(module, exports) {

module.exports = "/vuejs-laravel/public/images/app-loader.gif?7ac99b075223d901652cf3ad95e0f3d7";

/***/ }),

/***/ 1412:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1413);
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

/***/ 1413:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n.item_unanswered[data-v-fffb44e2]{\n  float: right;\n  margin-top: -8px;\n}\n.instr_txt[data-v-fffb44e2]{\n  padding: 10px;\n}\n.panel-title[data-v-fffb44e2]{\n  padding: 10px;\n}\n.instruction-acc[data-v-fffb44e2]{\n  font-size: 20px;\n  color: white;\n}\n.presented-acc[data-v-fffb44e2]{\n  font-size: 20px;\n  color: white;\n}\n.instruction[data-v-fffb44e2]{\n  border: solid gray 1px;\n}\n.instruction-txt[data-v-fffb44e2]{\n  padding: 15px;\n  font-size: 18px;\n  color: black;\n  font-weight: 400;\n  line-height: 24px;\n}\n#color[data-v-fffb44e2] {\n  height: 35px;\n}\n.form-control[data-v-fffb44e2]:active, .input-group .form-control[data-v-fffb44e2]:hover{\n  z-index: 1;\n}\n.loader-image[data-v-fffb44e2]{\n  position: fixed;\n  top:50%;\n  left:50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);\n}\n.full-modal-body[data-v-fffb44e2]{\n  margin-top:100px;\n  padding:30px;\n}\n.question-image-container[data-v-fffb44e2]{\n  height:150px;\n  margin-bottom:20px;\n}\n.test-result-dashboard[data-v-fffb44e2]{\n  padding: 6px; display: -webkit-box; display: -ms-flexbox; display: flex;border: solid gray 1px; border-left: none;\n}\n.question-image-container img[data-v-fffb44e2]{\n  height: 100%;\n}\n.question-text[data-v-fffb44e2]{\n  font-size:30px;\n  color:#333;\n}\n.question-audio-icon[data-v-fffb44e2] {\n  display: none;\n  margin-right: 10px;\n}\ninput[type='radio'][data-v-fffb44e2]{\n  display: none;\n}\n.question-choice-container[data-v-fffb44e2]{\n  padding:30px;\n  margin-left:50px;\n}\n.choice-photo-container[data-v-fffb44e2]{\n  width:90px;\n  height:90px;\n}\n.question-choice-text[data-v-fffb44e2] {\n  /* display: none; */\n  font-size: 30px;\n  margin-right: 20px;\n}\nlabel.normal[data-v-fffb44e2] {\n  margin-right: 20px;\n  width: 75px;\n  border: 5px solid black;\n  border-radius: 5px;\n  height: 75px;\n  background: #984807;\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: 700;\n  cursor: pointer;\n}\ninput:checked + label[data-v-fffb44e2] {\n  position: relative;\n  display: inline-block;\n  padding: 15px 25px;\n  background: #E46C0A;\n  text-decoration: none;\n  color: #fff;\n  font-size: 25px;\n  font-weight: 100;\n  border-radius: 3px;\n  -webkit-box-shadow: 0px 1px 4px -2px #333;\n          box-shadow: 0px 1px 4px -2px #333;\n  text-shadow: 0px -1px #333;\n  border-color: #797B7B;\n}\n.datatable-material[data-v-fffb44e2]{\n  min-height: 700px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n  margin: 30px 0;\n  overflow: unset;\n  -webkit-box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\n  box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\n  border-radius: 6px;\n  background: #fff;\n  font-family: \"Helvetica Neue\", Roboto, Arial, \"Droid Sans\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  color: #333333;\n  border: none;\n}\n.marked_checkbox[data-v-fffb44e2]{\n  margin-top: 5px;\n  margin-right: 3px;\n}\n.note-description-wrapper[data-v-fffb44e2]{\n  padding: 200px 0;\n}\n.review_index[data-v-fffb44e2]:hover{\n  cursor: pointer;\n  color:greenyellow;\n}\n.page_title[data-v-fffb44e2]{\n  text-align: center;\n  font-size: 22px;\n  font-weight: 500;\n  margin-top: -80px;\n  margin-bottom: 16px;\n}\n.bottom-left-control[data-v-fffb44e2]{\n  float: left;\n}\n.bottom-right-control[data-v-fffb44e2]{\n  float: right;\n}\n.modal-dialog .modal-content[data-v-fffb44e2] {\n  min-height: 200px;\n  -webkit-box-shadow: 0 27px 24px 0 rgba(0, 0, 0, .2), 0 40px 77px 0 rgba(0, 0, 0, .22);\n          box-shadow: 0 27px 24px 0 rgba(0, 0, 0, .2), 0 40px 77px 0 rgba(0, 0, 0, .22);\n  border-radius: 6px;\n  border: none;\n  width: 50%;\n  margin: auto;\n  margin-top: 10%;\n}\n.modal-text[data-v-fffb44e2]{\n  font-size: 22px;\n  text-align: center;\n  color: black;\n  font-weight: 500;\n  line-height: 2rem;\n}\n.modal-confirm[data-v-fffb44e2]{\n  text-align: center;\n}\n \n", ""]);

// exports


/***/ }),

/***/ 1414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_i18n__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_common_user_api_service__ = __webpack_require__(997);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mini_toastr__ = __webpack_require__(808);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




__WEBPACK_IMPORTED_MODULE_2_mini_toastr__["a" /* default */].init();
__WEBPACK_IMPORTED_MODULE_1_common_user_api_service__["a" /* default */].init();

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "home",
  data: function data() {
    return {
      selected: [],
      status: 'not_accepted',
      pageIndex: '',
      reviewUnansweredQuestion: [],
      minute: '',
      second: '59',
      display_second: '00',
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

    console.log('this.$store.state.customer_option', this.$store.state.customer_option);
    __WEBPACK_IMPORTED_MODULE_1_common_user_api_service__["a" /* default */].get('testConfig', { category: this.$store.state.customer_option.category }).then(function (result) {
      var data = result.data;
      console.log('testconfig data', data.data[0]);
      _this.$store.commit('testConfigData', data.data[0]);
      _this.minute = data.data[0].duration;
      _this.second = data.data[0].duration * 60;
      if (data.status) {
        _this.testConfig = data.data[0];
      }
    });
  },

  methods: {
    showModal: function showModal() {
      this.$refs['my-modal'].show();
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
    },
    toggleModal: function toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn');
    },
    review: function review() {

      var testResultData = this.$store.state.testResultsArray;
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
    endReview123: function endReview123() {

      $("#EnSureModal_endReview123").modal();
    },
    endReviewConfirm: function endReviewConfirm() {
      localStorage.setItem('home_reload', 0);
      var studentId = this.$store.state.user.id;
      var data = {
        studentId: studentId,
        category: this.testConfig.testcategory,
        result: this.first_testResult,
        admin_id: localStorage.getItem('admin_id')
      };

      console.log('endReview', data);

      __WEBPACK_IMPORTED_MODULE_1_common_user_api_service__["a" /* default */].post('TestComplete', data).then(function (result) {
        var data = result.data;
        if (data.success === true) {
          console.log('data-->>', data);
          var url = window.location.origin + '/vuejs-laravel/#/print';
          window.location.href = url;
        } else {
          __WEBPACK_IMPORTED_MODULE_2_mini_toastr__["a" /* default */].error(data.message);
          console.log(result.message);
        }
      }, function (error) {});
    },
    reviewByIndex: function reviewByIndex(num) {
      this.current_question_number = num;
      this.question = this.questions[num];
      this.pageIndex = 'testStart';
      this.reviewIndex = 1;
    },
    reviewAll: function reviewAll() {
      this.current_question_number = 0;
      this.pageIndex = 'testStart';
      this.reviewIndex = 1;
    },
    markedForReview: function markedForReview() {

      console.log('this.first_testResult-----markedforreview', this.first_testResult);
      var markedForReview = [];
      for (var key in this.first_testResult) {
        if (!this.first_testResult.hasOwnProperty(key)) continue;
        var obj = this.first_testResult[key];
        if (obj.checked === true) {
          markedForReview.push(obj);
        }
      }
      console.log('markedForReview-----markedforreview', markedForReview);
      this.reviewUnansweredQuestion = markedForReview;
      if (markedForReview.length > 0) {
        this.current_question_number = markedForReview[0].num;
        this.pageIndex = 'ReviewUnanswered';
        this.reviewIndex = 1;
      } else {
        console.log('FALSE!!!');
        $("#EnSureModal").modal();
      }
    },
    reviewUnanswered: function reviewUnanswered() {

      var reviewUnansweredQuestion = [];
      for (var key in this.first_testResult) {
        if (!this.first_testResult.hasOwnProperty(key)) continue;
        var obj = this.first_testResult[key];
        console.log('-----------pppp', obj.question);
        obj.num = parseInt(key);
        if (obj.input == 0) {
          reviewUnansweredQuestion.push(obj);
        }
      }
      this.reviewUnansweredQuestion = reviewUnansweredQuestion;
      console.log('reviewUnansweredQuestion', reviewUnansweredQuestion);
      this.current_question_number = reviewUnansweredQuestion[0].num;
      this.pageIndex = 'ReviewUnanswered';
    },
    ReviewUnansweredNextQuestion: function ReviewUnansweredNextQuestion() {

      this.unansweredQuestionStartNum++;

      console.log('unansweredQuestionStartNum--------->>', this.unansweredQuestionStartNum);
      console.log('this.reviewUnansweredQuestion.length--------->>', this.reviewUnansweredQuestion.length);

      if (this.unansweredQuestionStartNum == this.reviewUnansweredQuestion.length) {
        if (this.testConfig.type != 'realtime' && this.form_choice == '99') {} else {
          if (this.testOption.testType == 'realtime') {

            this.saveAnswer();
          }
          this.form_choice = 0;

          var testResultData = this.$store.state.testResultsArray;
          console.log('final_result', testResultData);

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
          console.log('unanswered_question_num', unanswered_question_num);
          this.unanswered_question = unanswered_question_num;
          this.current_question_number = -2;
          this.unansweredQuestionStartNum = 0;
          this.pageIndex = 'testResultDashboard';
        }

        //

        // this.unansweredQuestionStartNum++;
        //
        // console.log('unansweredQuestionStartNum--------->>',this.unansweredQuestionStartNum);
        // console.log('this.reviewUnansweredQuestion.length--------->>',this.reviewUnansweredQuestion.length);
        // console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee--------->>');
        //
        // if(this.unansweredQuestionStartNum == this.reviewUnansweredQuestion.length){
        //   this.saveAnswer();
        //   this.first_testResult = this.$store.state.testResultsArray
        //   var unanswered_question_num = 0;
        //   var tempData = [];
        //   for (var key in this.first_testResult) {
        //     if (!this.first_testResult.hasOwnProperty(key)) continue;
        //     var obj = this.first_testResult[key];
        //     obj.num = parseInt(key);
        //     obj.checked = false;
        //     tempData.push(obj)
        //     obj.checked=false;
        //     if(obj.input== 0){
        //       unanswered_question_num++;
        //     }
        //   }
        //   this.first_testResult = tempData;
        //
        //   console.log('unanswered_question_num', unanswered_question_num)
        //   this.unanswered_question = unanswered_question_num;
        //   this.unansweredQuestionStartNum = 0;
        //   this.pageIndex = 'testResultDashboard';
        //   console.log('this.first_testResult ', this.first_testResult )

        //
      } else {

        this.current_question_number = this.reviewUnansweredQuestion[this.unansweredQuestionStartNum].num;

        this.question = this.questions[this.current_question_number];
        console.log('displaying question', this.question);
        console.log('displaying question number', this.current_question_number);

        if (this.testConfig.type != 'realtime' && this.form_choice == '99') {} else {
          if (this.testOption.testType == 'realtime') {

            this.saveAnswer();
          }
          this.form_choice = 0;

          if (this.current_question_number !== this.testConfig.noofquestion + 1) {} else {
            var testResultData = this.$store.state.testResultsArray;
            console.log('final_result', testResultData);

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
            console.log('unanswered_question_num', unanswered_question_num);
            this.unanswered_question = unanswered_question_num;
            this.current_question_number = -2;
            console.log('finished');
            console.log('this.first_testResult ', this.first_testResult);
          }
        }
      }
    },
    ReviewUnansweredPreviousQuestion: function ReviewUnansweredPreviousQuestion() {

      this.unansweredQuestionStartNum--;
      if (this.unansweredQuestionStartNum >= 0) {
        this.current_question_number = this.reviewUnansweredQuestion[this.unansweredQuestionStartNum].num;
        console.log('this.current_question_number', this.current_question_number);
        this.question = this.questions[this.current_question_number];
        console.log('this.current_question_id', this.question.id);

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
      var _this2 = this;

      if (this.second > 0) {
        setTimeout(function () {
          _this2.second -= 1;
          _this2.display_second = _this2.second % 60;

          if (_this2.second % 60 === 59) {
            _this2.minute -= 1;
            if (_this2.minute < 10) {
              _this2.minute = '0' + _this2.countDown;
            }
          }
          if (_this2.display_second < 10) {
            _this2.display_second = '0' + _this2.display_second;
          }
          _this2.countDownTimer();
        }, 1000);
      } else {
        this.endReview123();
        // alert('time is over')
        // $("#EnSureModal_endReview123").modal();

        //  $( "#dialog" ).modal();
      }
    },
    startTest: function startTest() {
      this.current_question_number = 0;
      this.pageIndex = 'testStart';
      console.log('this.current_question_number', this.current_question_number);
      this.loadTest();
    },
    loadTest: function loadTest() {
      var _this3 = this;

      this.loader = true;
      var customer_option = this.$store.state.customer_option;

      console.log('userInformationuserInformationuserInformation', this.$store.state.userInformation);
      var testConfig = this.testConfig;
      var testOption = {
        testCategory: testConfig.testcategory,
        testType: testConfig.category,
        limit: testConfig.noofquestion,
        specific: testConfig.noofspecificquestion,
        common: testConfig.noofcommonquestion,
        type: testConfig.category,
        language: customer_option.text_language,
        audio_language: customer_option.audio_language
      };
      console.log('display_testOption', testOption);
      this.testOption = testOption;
      __WEBPACK_IMPORTED_MODULE_1_common_user_api_service__["a" /* default */].post('loadTest', testOption).then(function (result) {
        var data = result.data;
        if (data.status === 'success') {
          _this3.questions = data.data;
          console.log('All questions for the testing', data.data);
          _this3.questions.map(function (question, index) {
            _this3.questions[index]['audio'] = "https://www.kozco.com/tech/LRMonoPhase4.wav";
          });
          _this3.countDownTimer();
        }
        _this3.loader = false;
        _this3.question = _this3.questions[0];
      }, function () {
        _this3.loader = false;
      });
    },
    nextQuestion: function nextQuestion() {

      this.current_question_number++;
      if (this.current_question_number < this.testConfig.noofquestion) {
        this.question = this.questions[this.current_question_number];
        console.log('displaying question', this.question);
        console.log('displaying question number', this.current_question_number);

        if (this.testConfig.type != 'realtime' && this.form_choice == '99') {} else {
          if (this.testOption.testType == 'realtime') {
            this.saveAnswer();
          }
          this.form_choice = 0;

          if (this.current_question_number !== this.testConfig.noofquestion + 1) {} else {
            var testResultData = this.$store.state.testResultsArray;
            console.log('final_result', testResultData);

            this.first_testResult = testResultData;

            var unanswered_question_num = 0;

            for (var key in testResultData) {
              if (!testResultData.hasOwnProperty(key)) continue;
              var obj = testResultData[key];
              if (obj.input == 0) {
                unanswered_question_num++;
              }
            }
            console.log('unanswered_question_num', unanswered_question_num);
            this.unanswered_question = unanswered_question_num;
            this.current_question_number = -2;
            console.log('finished');
            console.log('this.first_testResult ', this.first_testResult);
          }
        }
      } else {

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

        console.log('unanswered_question_num', unanswered_question_num);
        this.unanswered_question = unanswered_question_num;
        this.pageIndex = 'testResultDashboard';
        console.log('this.first_testResult ', this.first_testResult);
      }
    },
    saveAnswer: function saveAnswer() {
      var _this4 = this;

      var testResultData = this.$store.state.testResultsArray;
      console.log('selected_answer...', this.form_choice);
      console.log('correct_answer...', this.questions[this.current_question_number - 1].answer);
      this.question_check(this.form_choice, this.questions[this.current_question_number - 1].answer);

      var testResult = {
        question: this.questions[this.current_question_number - 1].id,
        input: this.form_choice,
        status: this.questionResultStatus
      };

      if (this.$store.state.testResultsArray) {
        var testResultData = this.$store.state.testResultsArray;
      } else {
        this.$store.commit('testResults', []);
        var testResultData = this.$store.state.testResultsArray;
      }

      console.log('stored_testResults', testResultData);

      var confirm_status = 0;

      console.log('*************this.question.id', this.question.id);

      for (var key in testResultData) {
        if (!testResultData.hasOwnProperty(key)) continue;
        var obj = testResultData[key];
        if (obj.question == this.questions[this.current_question_number - 1].id) {
          console.log('obj.question', obj.question);
          console.log('this.question.id', this.question.id);
          var _testResultData = this.$store.state.testResultsArray;
          var objIndex = _testResultData.findIndex(function (obj) {
            return obj.question == _this4.questions[_this4.current_question_number - 1].id;
          });
          if (this.form_choice !== 0) {
            _testResultData[objIndex].input = this.form_choice;
            _testResultData[objIndex].status = this.questionResultStatus;
          }

          confirm_status = 1;
        }
      }
      this.$store.commit('testResults', testResultData);
      console.log('confirm_status', confirm_status);

      if (confirm_status == 0) {
        testResultData.push(testResult);
        this.$store.commit('testResults', testResultData);
      }
      console.log('this.$store.state.testResultsArray', this.$store.state.testResultsArray);
      this.first_testResult = this.$store.state.testResultsArray;
    },
    question_check: function question_check(selected_answer, correct_answer) {
      if (selected_answer == correct_answer) {
        this.questionResultStatus = true;
      } else {
        this.questionResultStatus = false;
      }
    },
    saveAnswer_prev: function saveAnswer_prev() {
      var _this5 = this;

      console.log('this.form_choice for next ', this.form_choice);
      console.log('this.question.answer', this.question.answer);

      if (this.form_choice == this.question.answer) {
        this.questionResultStatus = true;
      } else {
        this.questionResultStatus = false;
      }
      console.log('@@@@@@@', this.current_question_number);
      var testResult = {
        question: this.questions[this.current_question_number + 1].id,
        input: this.form_choice,
        status: this.questionResultStatus
      };
      console.log('testResulttestResult', testResult);
      console.log('testResultData###', this.$store.state.testResultsArray);
      console.log('*************this.question.id***previous', this.question.id);
      var testResultData = this.$store.state.testResultsArray;
      for (var key in testResultData) {
        if (!testResultData.hasOwnProperty(key)) continue;
        var obj = testResultData[key];
        console.log('obj.question----------->', obj.question);
        if (obj.question == this.question.id) {

          var objIndex = testResultData.findIndex(function (obj) {
            return obj.question == _this5.questions[_this5.current_question_number + 1].id;
          });
          console.log('objIndex', objIndex);
          if (objIndex !== -1 && this.form_choice !== 0) {
            testResultData[objIndex].input = this.form_choice;
            testResultData[objIndex].status = this.questionResultStatus;
          }
        }
      }

      console.log('this.$store.state.testResultsArray_previous', this.$store.state.testResultsArray);
      this.first_testResult = this.$store.state.testResultsArray;
    },
    previousQuestion: function previousQuestion() {
      this.current_question_number--;
      console.log('this.current_question_number', this.current_question_number);
      this.question = this.questions[this.current_question_number];
      console.log('this.current_question_id', this.question.id);

      if (this.testConfig.type != 'realtime' && this.form_choice == '99') {} else {
        if (this.testOption.testType == 'realtime') {
          this.saveAnswer_prev();
        }
        this.form_choice = 0;
        if (this.current_question_number !== this.testConfig.noofquestion) {}
      }
    },
    checkAnswer: function checkAnswer(choice) {

      console.log('---------form_choice-555----', choice);
      this.form_choice = choice;

      if (this.tempCheck == choice) {
        this.tempCheck = '0';
        this.form_choice = null;
      } else {
        this.tempCheck = choice;
        console.log(this.tempCheck);
        console.log('-------form_choice----', choice);
      }
    },
    playOption: function playOption(question_id, choice_number) {}
  },

  created: function created() {
    __WEBPACK_IMPORTED_MODULE_2_mini_toastr__["a" /* default */].setIcon('error', 'i', {
      'class': 'fa fa-times'
    });
    $("#dialog").dialog({ // <-- Initialize your dialog/popup
      autoOpen: false,
      modal: true });
  },


  mounted: function mounted() {
    console.log(__WEBPACK_IMPORTED_MODULE_0__common_i18n__["a" /* i18n */].locale);
  },

  destroyed: function destroyed() {}

});

/***/ }),

/***/ 1415:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "panel-white-box", staticStyle: { "min-height": "500px" } },
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
                    staticStyle: { position: "fixed", top: "50%", left: "50%" }
                  },
                  [_c("img", { attrs: { src: __webpack_require__(1110) } })]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "full-modal-header background-1 grid-column-2" },
              [
                _c("p", { staticClass: "text-size-1 text-white mb-0 mt-2" }, [
                  _vm._v(
                    "\n         " +
                      _vm._s(_vm.$t("table.testfor")) +
                      " -   " +
                      _vm._s(_vm.$t("table.candidate_name")) +
                      "  - " +
                      _vm._s(_vm.$store.state.user.name) +
                      "\n       "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-right text-white text-size-2" },
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
                        "\n         "
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
              ]
            ),
            _vm._v(" "),
            _vm.questions.length > 0
              ? _c("div", { staticClass: "full-modal-body" }, [
                  _c(
                    "div",
                    { staticClass: "question-image-container text-center" },
                    [
                      _c("img", {
                        staticClass: "question-image",
                        attrs: { src: _vm.question.photo }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "question-text" }, [
                    _vm.question.audio
                      ? _c("i", {
                          staticClass: "fa fa-volume-up question-audio-icon"
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c("span", { staticClass: "question-text" }, [
                      _vm._v(_vm._s(_vm.question.question))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "question-choice-container" }, [
                    _c("table", [
                      _c(
                        "tr",
                        { staticClass: "question-choice-item-wrapper" },
                        [
                          _c(
                            "td",
                            { staticClass: "question-choice-select-wrapper" },
                            [
                              _vm.realtimetest === "1"
                                ? _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.question.answered_value,
                                        expression: "question.answered_value"
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
                                        value: _vm.question.answered_value,
                                        expression: "question.answered_value"
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
                              staticClass: "question-choice-text-wrapper",
                              on: {
                                click: function($event) {
                                  return _vm.playOption(_vm.question.id, 1)
                                }
                              }
                            },
                            [
                              _c("audio", { staticStyle: { display: "none" } }),
                              _vm._v(" "),
                              !_vm.stopOption1
                                ? _c(
                                    "span",
                                    { staticClass: "question-choice-text" },
                                    [_vm._v(_vm._s(_vm.question.choice1))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.stopOption1
                                ? _c(
                                    "span",
                                    { staticClass: "question-choice-text" },
                                    [_vm._v(_vm._s(_vm.question.choice1))]
                                  )
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _vm.question.choice1photo
                            ? _c("td", [
                                _c("img", {
                                  staticClass: "choice-photo-container",
                                  attrs: { src: _vm.question.choice1photo }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("td", { staticClass: "choice-result-display" }, [
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
                            { staticClass: "question-choice-select-wrapper" },
                            [
                              _vm.realtimetest === "1"
                                ? _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.question.answered_value,
                                        expression: "question.answered_value"
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
                                        value: _vm.question.answered_value,
                                        expression: "question.answered_value"
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
                              staticClass: "question-choice-text-wrapper",
                              on: {
                                click: function($event) {
                                  return _vm.playOption(_vm.question.id, 2)
                                }
                              }
                            },
                            [
                              _c("audio", { staticStyle: { display: "none" } }),
                              _vm._v(" "),
                              !_vm.stopOption1
                                ? _c(
                                    "span",
                                    { staticClass: "question-choice-text" },
                                    [_vm._v(_vm._s(_vm.question.choice2))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.stopOption1
                                ? _c(
                                    "span",
                                    { staticClass: "question-choice-text" },
                                    [_vm._v(_vm._s(_vm.question.choice2))]
                                  )
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _vm.question.choice1photo
                            ? _c("td", [
                                _vm.question.choice1photo
                                  ? _c("img", {
                                      staticClass: "choice-photo-container",
                                      attrs: { src: _vm.question.choice2photo }
                                    })
                                  : _vm._e()
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("td", { staticClass: "choice-result-display" }, [
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
                            { staticClass: "question-choice-select-wrapper" },
                            [
                              _vm.realtimetest === "1"
                                ? _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.question.answered_value,
                                        expression: "question.answered_value"
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
                                        value: _vm.question.answered_value,
                                        expression: "question.answered_value"
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
                              staticClass: "question-choice-text-wrapper",
                              on: {
                                click: function($event) {
                                  return _vm.playOption(_vm.question.id, 3)
                                }
                              }
                            },
                            [
                              _c("audio", { staticStyle: { display: "none" } }),
                              _vm._v(" "),
                              !_vm.stopOption1
                                ? _c(
                                    "span",
                                    { staticClass: "question-choice-text" },
                                    [_vm._v(_vm._s(_vm.question.choice3))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.stopOption1
                                ? _c(
                                    "span",
                                    { staticClass: "question-choice-text" },
                                    [_vm._v(_vm._s(_vm.question.choice3))]
                                  )
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _vm.question.choice1photo
                            ? _c("td", [
                                _c("img", {
                                  staticClass: "choice-photo-container",
                                  attrs: { src: _vm.question.choice3photo }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("td", { staticClass: "choice-result-display" }, [
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
                          ])
                        ]
                      )
                    ])
                  ])
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
                _c("div", { staticClass: "bottom-right-control" }, [
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
                ])
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.pageIndex == "testResultDashboard"
        ? _c("div", { staticClass: "full-width-modal" }, [
            _c(
              "div",
              { staticClass: "full-modal-header background-1 grid-column-2" },
              [
                _c("p", { staticClass: "text-size-1 text-white mb-0 mt-2" }, [
                  _vm._v(
                    "\n         Theory Driving Test for - Candidate Name - " +
                      _vm._s(_vm.$store.state.user.name) +
                      "\n       "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-right text-white text-size-2" },
                  [
                    _c("i", {
                      staticClass: "fa fa-clock-o",
                      attrs: { "aria-hidden": "true" }
                    }),
                    _vm._v(
                      "\n         " +
                        _vm._s(_vm.$t("table.timerem")) +
                        " " +
                        _vm._s(_vm.minute) +
                        " : " +
                        _vm._s(_vm.display_second) +
                        "\n         "
                    ),
                    _c("br")
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "full-modal-body" }, [
              _c("div", { staticClass: "page_title" }, [
                _vm._v("\n         Section Review\n       ")
              ]),
              _vm._v(" "),
              _vm._m(0),
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
                        _vm._v("Presented Questions")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "instr_txt item_unanswered" }, [
                        _vm._v(
                          "(Unseen/Unanswered " +
                            _vm._s(_vm.unanswered_question) +
                            " )"
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "instruction-txt row" },
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
                          attrs: { type: "checkbox", id: item.question },
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
                                    _vm.$set(item, "checked", $$a.concat([$$v]))
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
                        _vm._v(" "),
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
                          [_vm._v("Question " + _vm._s(key + 1))]
                        ),
                        _vm._v(" "),
                        item.input == 0
                          ? _c("div", { staticStyle: { color: "red" } }, [
                              _vm._v("Unanswered")
                            ])
                          : _vm._e()
                      ]
                    )
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(2),
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
                      attrs: { id: "EnSureModal_endReview", role: "dialog" }
                    },
                    [
                      _c("div", { staticClass: "modal-dialog" }, [
                        _c("div", { staticClass: "modal-content" }, [
                          _c("div", { staticClass: "modal-header" }),
                          _vm._v(" "),
                          _vm._m(3),
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
                                [_vm._v("OK")]
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
                                [_vm._v("Cancel")]
                              )
                            ])
                          ])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "modal fade",
                      attrs: { id: "EnSureModal_endReview123", role: "dialog" }
                    },
                    [
                      _c("div", { staticClass: "modal-dialog" }, [
                        _c("div", { staticClass: "modal-content" }, [
                          _c("div", { staticClass: "modal-header" }),
                          _vm._v(" "),
                          _vm._m(4),
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
                                [_vm._v("OK")]
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
                                [_vm._v("Cancel")]
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
                      _vm._v("End Review")
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
                      _vm._v("Review All")
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
                      _vm._v("Review Unanswered")
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
                      _vm._v("Marked for Review")
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
                          _c("div", { staticClass: "modal-body modal-text" }, [
                            _vm._v(
                              " \n                 " +
                                _vm._s(
                                  _vm.$t(
                                    "review.no_questions_have_been_flagged"
                                  )
                                ) +
                                " \n               "
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(5)
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
                    staticStyle: { position: "fixed", top: "50%", left: "50%" }
                  },
                  [_c("img", { attrs: { src: __webpack_require__(1110) } })]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "full-modal-header background-1 grid-column-2" },
              [
                _c("p", { staticClass: "text-size-1 text-white mb-0 mt-2" }, [
                  _vm._v(
                    "\n         Theory Driving Test for - Candidate Name - " +
                      _vm._s(_vm.$store.state.user.name) +
                      "\n       "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-right text-white text-size-2" },
                  [
                    _c("i", {
                      staticClass: "fa fa-clock-o",
                      attrs: { "aria-hidden": "true" }
                    }),
                    _vm._v(
                      "\n         " +
                        _vm._s(_vm.$t("table.timerem")) +
                        " " +
                        _vm._s(_vm.minute) +
                        " : " +
                        _vm._s(_vm.display_second) +
                        "\n         "
                    ),
                    _c("br"),
                    _vm._v(" "),
                    this.unansweredQuestionStartNum <
                    this.reviewUnansweredQuestion.length
                      ? _c("strong", [
                          _vm._v(
                            "\n           #" +
                              _vm._s(_vm.current_question_number + 1) +
                              "/" +
                              _vm._s(_vm.testConfig.noofquestion)
                          )
                        ])
                      : _vm._e()
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _vm.questions.length > 0
              ? _c("div", { staticClass: "full-modal-body" }, [
                  _c(
                    "div",
                    { staticClass: "question-image-container text-center" },
                    [
                      _c("img", {
                        staticClass: "question-image",
                        attrs: {
                          src: _vm.questions[_vm.current_question_number].photo
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "question-text" }, [
                    _vm.questions[_vm.current_question_number].audio
                      ? _c("i", {
                          staticClass: "fa fa-volume-up question-audio-icon"
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c("span", { staticClass: "question-text" }, [
                      _vm._v(
                        _vm._s(
                          _vm.questions[_vm.current_question_number].question
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "question-choice-container" }, [
                    _c("table", [
                      _c(
                        "tr",
                        { staticClass: "question-choice-item-wrapper" },
                        [
                          _c(
                            "td",
                            { staticClass: "question-choice-select-wrapper" },
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
                                              _vm.current_question_number
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
                                              _vm.current_question_number
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
                              staticClass: "question-choice-text-wrapper",
                              on: {
                                click: function($event) {
                                  return _vm.playOption(
                                    _vm.questions[_vm.current_question_number]
                                      .id,
                                    1
                                  )
                                }
                              }
                            },
                            [
                              _c("audio", { staticStyle: { display: "none" } }),
                              _vm._v(" "),
                              !_vm.stopOption1
                                ? _c(
                                    "span",
                                    { staticClass: "question-choice-text" },
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
                              _vm.stopOption1
                                ? _c(
                                    "span",
                                    { staticClass: "question-choice-text" },
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
                                      _vm.questions[_vm.current_question_number]
                                        .choice1photo
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
                            { staticClass: "question-choice-select-wrapper" },
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
                                              _vm.current_question_number
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
                                              _vm.current_question_number
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
                              staticClass: "question-choice-text-wrapper",
                              on: {
                                click: function($event) {
                                  return _vm.playOption(
                                    _vm.questions[_vm.current_question_number]
                                      .id,
                                    2
                                  )
                                }
                              }
                            },
                            [
                              _c("audio", { staticStyle: { display: "none" } }),
                              _vm._v(" "),
                              !_vm.stopOption1
                                ? _c(
                                    "span",
                                    { staticClass: "question-choice-text" },
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
                              _vm.stopOption1
                                ? _c(
                                    "span",
                                    { staticClass: "question-choice-text" },
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
                                      _vm.questions[_vm.current_question_number]
                                        .choice2photo
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
                            { staticClass: "question-choice-select-wrapper" },
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
                                              _vm.current_question_number
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
                                              _vm.current_question_number
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
                              staticClass: "question-choice-text-wrapper",
                              on: {
                                click: function($event) {
                                  return _vm.playOption(
                                    _vm.questions[_vm.current_question_number]
                                      .id,
                                    3
                                  )
                                }
                              }
                            },
                            [
                              _c("audio", { staticStyle: { display: "none" } }),
                              _vm._v(" "),
                              !_vm.stopOption1
                                ? _c(
                                    "span",
                                    { staticClass: "question-choice-text" },
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
                              _vm.stopOption1
                                ? _c(
                                    "span",
                                    { staticClass: "question-choice-text" },
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
                                      _vm.questions[_vm.current_question_number]
                                        .choice3photo
                                  }
                                })
                              : _vm._e()
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "full-modal-footer background-1 p-3 pl-4" },
              [
                _c("div", { staticClass: "bottom-left-control" }, [
                  _c(
                    "button",
                    { staticClass: "button-type-1", on: { click: _vm.review } },
                    [
                      _c("i", {
                        staticClass: "fa fa-sign-in",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v("Review")
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "bottom-right-control" }, [
                  _vm.unansweredQuestionStartNum > 0
                    ? _c(
                        "button",
                        {
                          staticClass: "button-type-1 434343434343",
                          on: { click: _vm.ReviewUnansweredPreviousQuestion }
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
                      staticClass: "button-type-1 123123123",
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
                ])
              ]
            )
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel instruction" }, [
      _c(
        "div",
        {
          staticClass: "panel-heading",
          staticStyle: { "background-color": "#984807", color: "white" }
        },
        [
          _c("h4", { staticClass: "panel-title" }, [
            _c(
              "a",
              { attrs: { "data-toggle": "collapse", href: "#collapse1" } },
              [
                _c("i", {
                  staticClass: "fa fa-minus-square-o instruction-acc",
                  attrs: { "aria-hidden": "true" }
                })
              ]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "instr_txt" }, [_vm._v("Instruction")])
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { attrs: { id: "" } }, [
        _c("div", { staticClass: "instruction-txt" }, [
          _vm._v(
            "\n             Below is a Summary of your answers. You can view your question in three (3) different ways."
          ),
          _c("br"),
          _vm._v(
            "\n             The button in the lower right-hand corner correspond to these choice:"
          ),
          _c("br"),
          _vm._v("\n             1. Review all of your questions and answers."),
          _c("br"),
          _vm._v("\n             2. Review questions that are unanswered."),
          _c("br"),
          _vm._v(
            "\n             3. Review questions that are marked for review."
          ),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(
            "\n             You may also click on a question number to link directly to its location in the exam.\n           "
          )
        ])
      ])
    ])
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
    return _c("div", { attrs: { id: "#dialog" } }, [
      _c("div", [_vm._v("time is over")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body modal-text" }, [
      _c("h3", [
        _vm._v(
          "You have chosen to end the current review. If you click Yes, you will NOT be able to return to this review."
        )
      ]),
      _c("br"),
      _vm._v(" "),
      _c("h3", [_vm._v("Are you sure you want to end this review?")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body modal-text" }, [
      _c("h3", [
        _vm._v(
          "You have chosen to end the current review. If you click Yes, you will NOT be able to return to this review."
        )
      ]),
      _c("br"),
      _vm._v(" "),
      _c("h3", [_vm._v("Are you sure you want to end this review?")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c("div", { staticClass: "modal-confirm" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            attrs: { type: "button", "data-dismiss": "modal" }
          },
          [_vm._v("OK")]
        )
      ])
    ])
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

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1412)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1414)
/* template */
var __vue_template__ = __webpack_require__(1415)
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

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};!function(){function o(e,t){if(!o.installed){if(o.installed=!0,!t)return void console.error("You have to install axios");e.axios=t,Object.defineProperties(e.prototype,{axios:{get:function(){return t}},$http:{get:function(){return t}}})}}"object"==( false?"undefined":_typeof(exports))?module.exports=o: true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return o}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):window.Vue&&window.axios&&Vue.use(o,window.axios)}();

/***/ }),

/***/ 808:
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

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_axios__ = __webpack_require__(806);
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

/***/ })

});