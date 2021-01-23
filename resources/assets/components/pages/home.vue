<template>
  <div class="panel-white-box">
    <div v-if="page_language == 'ar-ar' || page_language == 'ur-ur' || page_language == 'fa-fa'" style="direction: rtl;">
      <b-card header="" header-tag="h4" class="bg-success-card datatable-material">
        <div class="section-title">{{$t('home.labels.welcome')}} {{$store.state.user.name}}</div>
        <div class="note-description-wrapper m-5 text-center">
          <p class="note-description-text">{{$t('form.testdismock')}} {{minute}} minutes {{$t('form.testdismockend')}}</p>
          <button class="btn btn-success btn-lg" @click="startTest">{{$t('home.labels.start_test')}}</button>
        </div>
      </b-card>
      <div class="full-width-modal" v-if="pageIndex == 'testStart'">
        <div class="loader-image" v-if="loader" style="position:fixed; top:50%;left:50%">
          <img src="~img/app-loader.gif">
        </div>
        <div class="full-modal-header background-1">
          <p class="text-size-1 text-white mb-0 mt-2" style="float:right">
            {{$t('table.testfor')}} {{this.$store.state.testConfigData.testCategoryName}}-   {{$t('table.candidate_name')}}  - {{$store.state.user.name}}
          </p>
          <div class="text-right text-white text-size-2" style="float:left">
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
          <div class="question-text audio-section" @click.prevent="question.isPlaying0 ? play(question, 0) : pause(question, 0)">
            <span class="question-text" v-if="question.isPlaying0">{{question.question}}</span>
            <span class="question-text" style="color:#ff0000;" v-if="!question.isPlaying0 && this.$store.state.customer_option.audio_language >0">{{question.question}}</span>
            <span class="question-text" style="" v-if="!question.isPlaying0 && this.$store.state.customer_option.audio_language == 0">{{question.question}}</span>
          </div>
          <div class="question-choice-container">
            <table>
              <tr class="question-choice-item-wrapper">
                <td class="question-choice-select-wrapper">
                  <input type="radio" value="1" id="choice-1"
                         v-model="question.answered_value"
                         v-if="realtimetest === '1'"
                         name = "1"
                         @change="checkAnswer(1)"
                  />
                  <input type="radio" value="1" id="choice-1"
                         v-model="question.answered_value"
                         v-if="realtimetest === 0" @change="checkAnswer(1)"
                  />
                  <label class="normal" for="choice-1"></label>
                </td>
                <td class="question-choice-text-wrapper audio-section" @click.prevent="question.isPlaying1 ? pause(question, 1) : play(question, 1)">
                  <span class="question-choice-text" v-if="!question.isPlaying1">{{question.choice1}}</span>
                  <span class="question-choice-text" style="color:red;" v-if="question.isPlaying1">{{question.choice1}}</span>
                </td>
                <td v-if="question.choice1photo">
                  <img :src="question.choice1photo" class="choice-photo-container" >
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
                  <input type="radio" value="2"
                         v-model="question.answered_value" id="choice-2"
                         v-if="realtimetest === '1'"
                         @change="checkAnswer(2)"
                  />
                  <input type="radio" value="2" id="choice-2"
                         v-model="question.answered_value"
                         v-if="realtimetest === 0" @change="checkAnswer(2)"
                  />
                  <label class="normal" for="choice-2"></label>
                </td>
                <td class="question-choice-text-wrapper audio-section" @click.prevent="question.isPlaying2 ? pause(question, 2) : play(question, 2)">
                  <span class="question-choice-text" v-if="!question.isPlaying2">{{question.choice2}}</span>
                  <span class="question-choice-text" style="color:red;" v-if="question.isPlaying2">{{question.choice2}}</span>
                </td>
                <td v-if="question.choice1photo">
                  <img :src="question.choice2photo" class="choice-photo-container" v-if="question.choice1photo">
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
                  <input type="radio" value="3" id="choice-3"
                         v-model="question.answered_value"
                         v-if="realtimetest === '1'"
                         @change="checkAnswer(3)"
                  />
                  <input type="radio" value="3" id="choice-3"
                         v-model="question.answered_value"
                         v-if="realtimetest === 0" @change="checkAnswer(3)"
                  />
                  <label class="normal" for="choice-3"></label>
                </td>
                <td class="question-choice-text-wrapper audio-section" @click.prevent="question.isPlaying3 ? pause(question, 3) : play(question, 3)">
                  <span class="question-choice-text" v-if="!question.isPlaying3">{{question.choice3}}</span>
                  <span class="question-choice-text" style="color:red;" v-if="question.isPlaying3">{{question.choice3}}</span>
                </td>
                <td v-if="question.choice1photo">
                  <img :src="question.choice3photo" class="choice-photo-container" >
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
            </table>
          </div>
        </div>
        <div class="full-modal-footer background-1 p-3 pl-4">
          <div class="bottom-left-control" style="float:right;">
            <button class="button-type-1" @click="review" v-if="reviewIndex == 1">
              <i class="fa fa-sign-in" aria-hidden="true"></i>{{$t('review.review')}}</button>
          </div>
          <div class="bottom-right-control" style="float: left">
            <button class="button-type-1" @click="previousQuestion" v-if="current_question_number>0"><i class="fa fa-arrow-right ml-2" aria-hidden="true"></i>{{$t('test.link.previous')}}</button>
            <button class="button-type-1" @click="nextQuestion">{{$t('test.link.next')}}<i class="fa fa-arrow-left mr-2" aria-hidden="true"></i></button>
          </div>
        </div>
      </div>


      <div class="full-width-modal" v-if="pageIndex == 'testResultDashboard'">
        <div class="full-modal-header background-1">
          <p class="text-size-1 text-white mb-0 mt-2" style="float: right">
            {{$t('table.testfor')}} {{this.$store.state.testConfigData.testCategoryName}} -   {{$t('table.candidate_name')}}- {{$store.state.user.name}}
          </p>
          <div class="text-right text-white text-size-2" style="float: left">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            {{$t('table.timerem')}} {{ minute }} : {{ display_second }}
            <br>
          </div>
        </div>
        <div class="full-modal-body" style="padding-top: 90px">
          <div class="page_title">
            {{$t('review.section_review')}}
          </div>
          <div class="panel instruction">
            <div class="panel-heading" style="background-color: #984807; color: white;">
              <h4 class="panel-title">
                <a data-toggle="collapse" href="#collapse1">
                  <i class="fa fa-minus-square-o instruction-acc" aria-hidden="true"></i>
                </a>
                <span class="instr_txt">{{$t('review.instruction')}}</span>
              </h4>
            </div>
            <div id="" class="">
              <div class="instruction-txt">
                {{$t('review.line1')}}<br>
                {{$t('review.line2')}}<br>
                {{$t('review.line3')}}<br>
                {{$t('review.line4')}}<br>
                {{$t('review.line5')}}<br>
                <br>
                {{$t('review.line6')}}
              </div>
            </div>
          </div><br>

          <div class="panel instruction">
            <div class="panel-heading" style="background-color: #984807; color: white;">
              <h4 class="panel-title">
                <a data-toggle="collapse" href="#collapse1">
                  <i class="fa fa-minus-square-o presented-acc" aria-hidden="true"></i>
                </a>
                <span class="instr_txt">{{$t('review.presented_questions')}}</span>
                <span class="instr_txt item_unanswered">({{$t('review.Unseen_Unanswered')}} {{unanswered_question}} )</span>
              </h4>
            </div>
            <div class="instruction-txt row" style="margin-bottom: 30px;">
              <div  class="col-xl-2 col-lg-3 col-md-4 col-sm-6 test-result-dashboard" v-for="(item,key) in first_testResult">
                <input type="checkbox" :id="item.question" v-model="item.checked" class="marked_checkbox">&nbsp;&nbsp;&nbsp;
                <a @click="reviewByIndex(item.num)" class="review_index">{{$t('review.question')}} {{key+1}}</a>
                <div v-if="item.input == 0" style="color: red">{{$t('review.unanswered')}}</div>
              </div>
            </div>

          </div>
        </div>

        <div class="full-modal-footer background-1 p-3 pl-4">
          <div style="float: right;">
            <div class="modal fade" id="EnSureModal_endReview" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                  </div>
                  <div class="modal-body modal-text">
                    <h3>{{$t('review.end_the_current_review')}}</h3><br>
                    <h3>{{$t('review.are_you_sure')}}</h3>
                  </div>
                  <div class="modal-footer">
                    <div class="modal-confirm">
                      <button type="button" class="btn btn-primary" @click="endReviewConfirm">{{$t('resume.ok')}}</button>
                      <button type="button" class="btn btn-danger" data-dismiss="modal">{{$t('table.cancel')}}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="button-type-1" v-b-modal.modal-sm @click="endReview"><i class="fa fa-sign-in" aria-hidden="true"></i>{{$t('review.end_review')}}</button>
          </div>
          <div style="float: left;">
            <button class="button-type-1" @click="reviewAll"><i class="fa fa-files-o" aria-hidden="true"></i>{{$t('review.review_all')}}</button>
            <button class="button-type-1" @click="reviewUnanswered"><i class="fa fa-files-o" aria-hidden="true"></i>{{$t('review.review_unanswered')}}</button>
            <button class="button-type-1" @click="markedForReview"><i class="fa fa-question-circle" aria-hidden="true"></i>{{$t('review.marked_for_review')}}</button>
            <div class="modal fade" id="EnSureModal" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                  </div>
                  <div class="modal-body modal-text">
                    {{$t('review.no_questions_have_been_flagged')}}
                  </div>
                  <div class="modal-footer">
                    <div class="modal-confirm">
                      <button type="button" class="btn btn-primary" data-dismiss="modal">{{$t('resume.ok')}}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="full-width-modal" v-if="pageIndex == 'ReviewUnanswered'">
        <div class="loader-image" v-if="loader" style="position:fixed; top:50%;left:50%">
          <img src="~img/app-loader.gif">
        </div>
        <div class="full-modal-header background-1">
          <p class="text-size-1 text-white mb-0 mt-2" style="float: right">
            {{$t('table.testfor')}} {{this.$store.state.testConfigData.testCategoryName}} - {{$t('table.candidate_name')}} - {{$store.state.user.name}}
          </p>
          <div class="text-right text-white text-size-2" style="float: left">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            {{$t('table.timerem')}} {{ minute }} : {{ display_second }}
            <br>
            <strong v-if="this.unansweredQuestionStartNum<this.reviewUnansweredQuestion.length">
              #{{current_question_number+1}}/{{testConfig.noofquestion}}</strong>
          </div>
        </div>

        <div class="full-modal-body" v-if="questions.length>0">
          <div class="question-image-container text-center" v-if="questions[current_question_number].photo">
            <img class="question-image" :src="questions[current_question_number].photo">
          </div>

          <div class="question-text audio-section" @click.prevent="questions[current_question_number].isPlaying0 ? play(questions[current_question_number], 0) : pause(questions[current_question_number], 0)">
            <span class="question-text" v-if="questions[current_question_number].isPlaying0">{{questions[current_question_number].question}}</span>
            <span class="question-text" style="color:#ff0000;" v-if="!questions[current_question_number].isPlaying0 && this.$store.state.customer_option.audio_language >0">{{questions[current_question_number].question}}</span>
            <span class="question-text" style="" v-if="!questions[current_question_number].isPlaying0 && this.$store.state.customer_option.audio_language == 0">{{questions[current_question_number].question}}</span>
          </div>
          <div class="question-choice-container">
            <table>
              <tr class="question-choice-item-wrapper">
                <td class="question-choice-select-wrapper">
                  <input type="radio" value="1" id="choice-1"
                         v-model="questions[current_question_number].answered_value"
                         v-if="realtimetest === '1'"
                         name = "1"
                         @change="checkAnswer(1)"
                  />
                  <input type="radio" value="1" id="choice-1"
                         v-model="questions[current_question_number].answered_value"
                         v-if="realtimetest === 0" @change="checkAnswer(1)"
                  />
                  <label class="normal" for="choice-1"></label>
                </td>

                <td class="question-choice-text-wrapper audio-section" @click.prevent="questions[current_question_number].isPlaying1 ? pause(questions[current_question_number], 1) : play(questions[current_question_number], 1)">
                  <span class="question-choice-text" v-if="!questions[current_question_number].isPlaying1">{{questions[current_question_number].choice1}}</span>
                  <span class="question-choice-text" style="color:red;" v-if="questions[current_question_number].isPlaying1">{{questions[current_question_number].choice1}}</span>
                </td>



                <td v-if="questions[current_question_number].choice1photo">
                  <img :src="questions[current_question_number].choice1photo" class="choice-photo-container">
                </td>
              </tr>
              <tr class="question-choice-item-wrapper">
                <td class="question-choice-select-wrapper">
                  <input type="radio" value="2"
                         v-model="questions[current_question_number].answered_value" id="choice-2"
                         v-if="realtimetest === '1'"
                         @change="checkAnswer(2)"
                  />
                  <input type="radio" value="2" id="choice-2"
                         v-model="questions[current_question_number].answered_value"
                         v-if="realtimetest === 0" @change="checkAnswer(2)"
                  />
                  <label class="normal" for="choice-2"></label>
                </td>

                <td class="question-choice-text-wrapper audio-section" @click.prevent="questions[current_question_number].isPlaying2 ? pause(questions[current_question_number], 2) : play(questions[current_question_number], 2)">
                  <span class="question-choice-text" v-if="!questions[current_question_number].isPlaying2">{{questions[current_question_number].choice2}}</span>
                  <span class="question-choice-text" style="color:red;" v-if="questions[current_question_number].isPlaying2">{{questions[current_question_number].choice2}}</span>
                </td>

                <td>
                  <img :src="questions[current_question_number].choice2photo" class="choice-photo-container" v-if="questions[current_question_number].choice1photo">
                </td>
              </tr>
              <tr class="question-choice-item-wrapper">
                <td class="question-choice-select-wrapper">
                  <input type="radio" value="3" id="choice-3"
                         v-model="questions[current_question_number].answered_value"
                         v-if="realtimetest === '1'"
                         @change="checkAnswer(3)"
                  />
                  <input type="radio" value="3" id="choice-3"
                         v-model="questions[current_question_number].answered_value"
                         v-if="realtimetest === 0" @change="checkAnswer(3)"
                  />
                  <label class="normal" for="choice-3"></label>
                </td>


                <td class="question-choice-text-wrapper audio-section" @click.prevent="questions[current_question_number].isPlaying3 ? pause(questions[current_question_number], 3) : play(questions[current_question_number], 3)">
                  <span class="question-choice-text" v-if="!questions[current_question_number].isPlaying3">{{questions[current_question_number].choice3}}</span>
                  <span class="question-choice-text" style="color:red;" v-if="questions[current_question_number].isPlaying3">{{questions[current_question_number].choice3}}</span>
                </td>

                <td>
                  <img :src="questions[current_question_number].choice3photo" class="choice-photo-container" v-if="questions[current_question_number].choice1photo">
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="full-modal-footer background-1 p-3 pl-4">
          <div class="bottom-left-control" style="float:right;">
            <button class="button-type-1" @click="review"><i class="fa fa-sign-in" aria-hidden="true"></i>{{$t('review.review')}}</button>
          </div>
          <div class="bottom-right-control"  style="float: left" v-show="unansweredQuestionStatus == 1">
            <button class="button-type-1  " @click="ReviewUnansweredPreviousQuestionStatus" v-if="unansweredQuestionStartNum>0"><i class="fa fa-arrow-right ml-2" aria-hidden="true"></i>{{$t('test.link.previous')}}</button>
            <button class="button-type-1  " @click="ReviewUnansweredNextQuestionStatus">{{$t('test.link.next')}}<i class="fa fa-arrow-left mr-2" aria-hidden="true"></i></button>
          </div>
          <div class="bottom-right-control"  style="float: left" v-show="unansweredQuestionStatus == 0">
            <button class="button-type-1  " @click="ReviewUnansweredPreviousQuestion" v-if="unansweredQuestionStartNum>0"><i class="fa fa-arrow-right ml-2" aria-hidden="true"></i>{{$t('test.link.previous')}}</button>
            <button class="button-type-1  " @click="ReviewUnansweredNextQuestion">{{$t('test.link.next')}}<i class="fa fa-arrow-left mr-2" aria-hidden="true"></i></button>
          </div>
        </div>
      </div>
      <div class="full-width-modal" v-if = "pageIndex == 'timeexpired'">

        <div style="    padding: 20%; text-align: center;">
          <h2>{{$t('table.ansprocessing')}}</h2>
          <div style="border: solid gray 1px; padding: 40px; border-radius: 3px;">
            <div class="d-block text-center">
              <h3>{{$t('form.test_timeout_msg')}}</h3>
            </div>
            <button class="btn btn-outline-primary" variant="outline-danger" block @click="finish_testing">{{$t('resume.ok')}}</button>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <b-card header="" header-tag="h4" class="bg-success-card datatable-material">
        <div class="section-title">{{$t('home.labels.welcome')}} {{$store.state.user.name}}</div>
        <div class="note-description-wrapper m-5 text-center">
          <p class="note-description-text">{{$t('form.testdismock')}} {{minute}} minutes {{$t('form.testdismockend')}}</p>
          <button class="btn btn-success btn-lg" @click="startTest">{{$t('home.labels.start_test')}}</button>
        </div>
      </b-card>
      <div class="full-width-modal" v-if="pageIndex == 'testStart'">
        <div class="loader-image" v-if="loader" style="position:fixed; top:50%;left:50%">
          <img src="~img/app-loader.gif">
        </div>
        <div class="full-modal-header background-1">
          <p class="text-size-1 text-white mb-0 mt-2" style="float: left">
            {{$t('table.testfor')}} {{this.$store.state.testConfigData.testCategoryName}} -   {{$t('table.candidate_name')}}  - {{$store.state.user.name}}
          </p>
          <div class="text-right text-white text-size-2" style="float: right">
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

          <div class="question-text audio-section" @click.prevent="question.isPlaying0 ? play(question, 0) : pause(question, 0)">
            <span class="question-text" v-if="question.isPlaying0">{{question.question}}</span>
            <span class="question-text" style="color:#ff0000;" v-if="!question.isPlaying0 && this.$store.state.customer_option.audio_language >0">{{question.question}}</span>
            <span class="question-text" style="" v-if="!question.isPlaying0 && this.$store.state.customer_option.audio_language == 0">{{question.question}}</span>
          </div>
          <div class="question-choice-container">
            <table>
              <tr class="question-choice-item-wrapper">
                <td class="question-choice-select-wrapper">
                  <input type="radio" value="1" id="choice-1"
                         v-model="question.answered_value"
                         v-if="realtimetest === '1'"
                         name = "1"
                         @change="checkAnswer(1)"
                  />
                  <input type="radio" value="1" id="choice-1"
                         v-model="question.answered_value"
                         v-if="realtimetest === 0" @change="checkAnswer(1)"
                  />
                  <label class="normal" for="choice-1"></label>
                </td>

                <td class="question-choice-text-wrapper audio-section" @click.prevent="question.isPlaying1 ? pause(question, 1) : play(question, 1)">
                  <span class="question-choice-text" v-if="!question.isPlaying1">{{question.choice1}}</span>
                  <span class="question-choice-text" style="color:red;" v-if="question.isPlaying1">{{question.choice1}}</span>
                </td>
                <td v-if="question.choice1photo">
                  <img :src="question.choice1photo" class="choice-photo-container" >
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
                  <input type="radio" value="2"
                         v-model="question.answered_value" id="choice-2"
                         v-if="realtimetest === '1'"
                         @change="checkAnswer(2)"
                  />
                  <input type="radio" value="2" id="choice-2"
                         v-model="question.answered_value"
                         v-if="realtimetest === 0" @change="checkAnswer(2)"
                  />
                  <label class="normal" for="choice-2"></label>
                </td>
                <td class="question-choice-text-wrapper audio-section" @click.prevent="question.isPlaying2 ? pause(question, 2) : play(question, 2)">
                  <span class="question-choice-text" v-if="!question.isPlaying2">{{question.choice2}}</span>
                  <span class="question-choice-text" style="color:red" v-if="question.isPlaying2">{{question.choice2}}</span>
                </td>
                <td v-if="question.choice1photo">
                  <img :src="question.choice2photo" class="choice-photo-container" v-if="question.choice1photo">
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
                  <input type="radio" value="3" id="choice-3"
                         v-model="question.answered_value"
                         v-if="realtimetest === '1'"
                         @change="checkAnswer(3)"
                  />
                  <input type="radio" value="3" id="choice-3"
                         v-model="question.answered_value"
                         v-if="realtimetest === 0" @change="checkAnswer(3)"
                  />
                  <label class="normal" for="choice-3"></label>
                </td>
                <td class="question-choice-text-wrapper audio-section" @click.prevent="question.isPlaying3 ? pause(question, 3) : play(question, 3)">
                  <span class="question-choice-text" v-if="!question.isPlaying3">{{question.choice3}}</span>
                  <span class="question-choice-text" style="color:red" v-if="question.isPlaying3">{{question.choice3}}</span>
                </td>
                <td v-if="question.choice1photo">
                  <img :src="question.choice3photo" class="choice-photo-container" >
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
            </table>
          </div>
        </div>
        <div class="full-modal-footer background-1 p-3 pl-4">
          <div class="bottom-left-control">
            <button class="button-type-1" @click="review" v-if="reviewIndex == 1"><i class="fa fa-sign-in" aria-hidden="true"></i>{{$t('review.review')}}</button>
          </div>
          <div class="bottom-right-control" style="float: right">
            <button class="button-type-1" @click="previousQuestion" v-if="current_question_number>0"><i class="fa fa-arrow-left mr-2" aria-hidden="true"></i>{{$t('test.link.previous')}}</button>
            <button class="button-type-1" @click="nextQuestion">{{$t('test.link.next')}}<i class="fa fa-arrow-right ml-2" aria-hidden="true"></i></button>
          </div>
        </div>
      </div>


      <div class="full-width-modal" v-if="pageIndex == 'testResultDashboard'">
        <div class="full-modal-header background-1 ">
          <p class="text-size-1 text-white mb-0 mt-2" style="float:left;">
            {{$t('table.testfor')}} {{this.$store.state.testConfigData.testCategoryName}} -   {{$t('table.candidate_name')}}- {{$store.state.user.name}}
          </p>
          <div class="text-right text-white text-size-2" style="float: right">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            {{$t('table.timerem')}} {{ minute }} : {{ display_second }}
            <br>
          </div>
        </div>
        <div class="full-modal-body" style="padding-top: 90px">
          <div class="page_title">
            {{$t('review.section_review')}}
          </div>
          <div class="panel instruction">
            <div class="panel-heading" style="background-color: #984807; color: white;">
              <h4 class="panel-title">
                <a data-toggle="collapse" href="#collapse1">
                  <i class="fa fa-minus-square-o instruction-acc" aria-hidden="true"></i>
                </a>
                <span class="instr_txt">{{$t('review.instruction')}}</span>
              </h4>
            </div>
            <div>
              <div class="instruction-txt">
                {{$t('review.line1')}}<br>
                {{$t('review.line2')}}<br>
                {{$t('review.line3')}}<br>
                {{$t('review.line4')}}<br>
                {{$t('review.line5')}}<br>
                <br>
                {{$t('review.line6')}}
              </div>
            </div>
          </div><br>

          <div class="panel instruction">
            <div class="panel-heading" style="background-color: #984807; color: white;">
              <h4 class="panel-title">
                <a data-toggle="collapse" href="#collapse1">
                  <i class="fa fa-minus-square-o presented-acc" aria-hidden="true"></i>
                </a>
                <span class="instr_txt">{{$t('review.presented_questions')}}</span>
                <span class="instr_txt item_unanswered">({{$t('review.Unseen_Unanswered')}} {{unanswered_question}} )</span>
              </h4>
            </div>
            <div class="instruction-txt row" style="margin-bottom: 30px;">
              <div  class="col-xl-2 col-lg-3 col-md-4 col-sm-6 test-result-dashboard" v-for="(item,key) in first_testResult">
                <input type="checkbox" :id="item.question" v-model="item.checked" class="marked_checkbox">&nbsp;&nbsp;&nbsp;
                <a @click="reviewByIndex(item.num)" class="review_index">{{$t('review.question')}} {{key+1}}</a>
                <div v-if="item.input == 0" style="color: red">{{$t('review.unanswered')}}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="full-modal-footer background-1 p-3 pl-4">
          <div style="float: left;">
            <div class="modal fade" id="EnSureModal_endReview" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                  </div>
                  <div class="modal-body modal-text">
                    <h3>{{$t('review.end_the_current_review')}}</h3><br>
                    <h3>{{$t('review.are_you_sure')}}</h3>
                  </div>
                  <div class="modal-footer">
                    <div class="modal-confirm">
                      <button type="button" class="btn btn-primary" @click="endReviewConfirm">{{$t('resume.ok')}}</button>
                      <button type="button" class="btn btn-danger" data-dismiss="modal">{{$t('table.cancel')}}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="button-type-1" v-b-modal.modal-sm @click="endReview"><i class="fa fa-sign-in" aria-hidden="true"></i>{{$t('review.end_review')}}</button>
          </div>
          <div style="float: right;">
            <button class="button-type-1" @click="reviewAll"><i class="fa fa-files-o" aria-hidden="true"></i>{{$t('review.review_all')}}</button>
            <button class="button-type-1" @click="reviewUnanswered"><i class="fa fa-files-o" aria-hidden="true"></i>{{$t('review.review_unanswered')}}</button>
            <button class="button-type-1" @click="markedForReview"><i class="fa fa-question-circle" aria-hidden="true"></i>{{$t('review.marked_for_review')}}</button>
            <div class="modal fade" id="EnSureModal" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                  </div>
                  <div class="modal-body modal-text">
                    {{$t('review.no_questions_have_been_flagged')}}
                  </div>
                  <div class="modal-footer">
                    <div class="modal-confirm">
                      <button type="button" class="btn btn-primary" data-dismiss="modal">{{$t('resume.ok')}}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="full-width-modal" v-if="pageIndex == 'ReviewUnanswered'">
        <div class="loader-image" v-if="loader" style="position:fixed; top:50%;left:50%">
          <img src="~img/app-loader.gif">
        </div>
        <div class="full-modal-header background-1">
          <p class="text-size-1 text-white mb-0 mt-2" style="float: left">
            {{$t('table.testfor')}} {{this.$store.state.testConfigData.testCategoryName}} - {{$t('table.candidate_name')}} - {{$store.state.user.name}}
          </p>
          <div class="text-right text-white text-size-2" style="float:right;">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            {{$t('table.timerem')}} {{ minute }} : {{ display_second }}
            <br>
            <strong v-if="this.unansweredQuestionStartNum<this.reviewUnansweredQuestion.length">

              #{{current_question_number+1}}/{{testConfig.noofquestion}}</strong>
          </div>
        </div>

        <div class="full-modal-body" v-if="questions.length>0">
          <div class="question-image-container text-center" v-if="questions[current_question_number].photo">
            <img class="question-image" :src="questions[current_question_number].photo">
          </div>

          <div class="question-text audio-section" @click.prevent="questions[current_question_number].isPlaying0 ? play(questions[current_question_number], 0) : pause(questions[current_question_number], 0)">
            <span class="question-text" v-if="questions[current_question_number].isPlaying0">{{questions[current_question_number].question}}</span>
            <span class="question-text" style="color:#ff0000;" v-if="!questions[current_question_number].isPlaying0 && this.$store.state.customer_option.audio_language >0">{{questions[current_question_number].question}}</span>
            <span class="question-text" v-if="!questions[current_question_number].isPlaying0 && this.$store.state.customer_option.audio_language == 0">{{questions[current_question_number].question}}</span>
          </div>



          <div class="question-choice-container">
            <table>
              <tr class="question-choice-item-wrapper">
                <td class="question-choice-select-wrapper">
                  <input type="radio" value="1" id="choice-1"
                         v-model="questions[current_question_number].answered_value"
                         v-if="realtimetest === '1'"
                         name = "1"
                         @change="checkAnswer(1)"
                  />
                  <input type="radio" value="1" id="choice-1"
                         v-model="questions[current_question_number].answered_value"
                         v-if="realtimetest === 0" @change="checkAnswer(1)"
                  />
                  <label class="normal" for="choice-1"></label>
                </td>


                <td class="question-choice-text-wrapper audio-section" @click.prevent="questions[current_question_number].isPlaying1 ? pause(questions[current_question_number], 1) : play(questions[current_question_number], 1)">
                  <span class="question-choice-text" v-if="!questions[current_question_number].isPlaying1">{{questions[current_question_number].choice1}}</span>
                  <span class="question-choice-text" style="color:red;" v-if="questions[current_question_number].isPlaying1">{{questions[current_question_number].choice1}}</span>
                </td>

                <td v-if="questions[current_question_number].choice1photo">
                  <img :src="questions[current_question_number].choice1photo" class="choice-photo-container">
                </td>
              </tr>
              <tr class="question-choice-item-wrapper">
                <td class="question-choice-select-wrapper">
                  <input type="radio" value="2"
                         v-model="questions[current_question_number].answered_value" id="choice-2"
                         v-if="realtimetest === '1'"
                         @change="checkAnswer(2)"
                  />
                  <input type="radio" value="2" id="choice-2"
                         v-model="questions[current_question_number].answered_value"
                         v-if="realtimetest === 0" @change="checkAnswer(2)"
                  />
                  <label class="normal" for="choice-2"></label>
                </td>

                <td class="question-choice-text-wrapper audio-section" @click.prevent="questions[current_question_number].isPlaying2 ? pause(questions[current_question_number], 2) : play(questions[current_question_number], 2)">
                  <span class="question-choice-text" v-if="!questions[current_question_number].isPlaying2">{{questions[current_question_number].choice2}}</span>
                  <span class="question-choice-text" style="color:red;" v-if="questions[current_question_number].isPlaying2">{{questions[current_question_number].choice2}}</span>
                </td>

                <td>
                  <img :src="questions[current_question_number].choice2photo" class="choice-photo-container" v-if="questions[current_question_number].choice1photo">
                </td>
              </tr>
              <tr class="question-choice-item-wrapper">
                <td class="question-choice-select-wrapper">
                  <input type="radio" value="3" id="choice-3"
                         v-model="questions[current_question_number].answered_value"
                         v-if="realtimetest === '1'"
                         @change="checkAnswer(3)"
                  />
                  <input type="radio" value="3" id="choice-3"
                         v-model="questions[current_question_number].answered_value"
                         v-if="realtimetest === 0" @change="checkAnswer(3)"
                  />
                  <label class="normal" for="choice-3"></label>
                </td>

                <td class="question-choice-text-wrapper audio-section" @click.prevent="questions[current_question_number].isPlaying3 ? pause(questions[current_question_number], 3) : play(questions[current_question_number], 3)">
                  <span class="question-choice-text" v-if="!questions[current_question_number].isPlaying3">{{questions[current_question_number].choice3}}</span>
                  <span class="question-choice-text" style="color:red;" v-if="questions[current_question_number].isPlaying3">{{questions[current_question_number].choice3}}</span>
                </td>
                <td>
                  <img :src="questions[current_question_number].choice3photo" class="choice-photo-container" v-if="questions[current_question_number].choice1photo">
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="full-modal-footer background-1 p-3 pl-4">
          <div class="bottom-left-control" style="float: left">
            <button class="button-type-1" @click="review"><i class="fa fa-sign-in" aria-hidden="true"></i>{{$t('review.review')}}</button>
          </div>

          <div class="bottom-right-control" style="float: right" v-show="unansweredQuestionStatus == 1">
            <button class="button-type-1  " @click="ReviewUnansweredPreviousQuestionStatus" v-if="unansweredQuestionStartNum>-1"><i class="fa fa-arrow-left mr-2" aria-hidden="true"></i>{{$t('test.link.previous')}}</button>
            <button class="button-type-1  " @click="ReviewUnansweredNextQuestionStatus">{{$t('test.link.next')}}<i class="fa fa-arrow-right ml-2" aria-hidden="true"></i></button>
          </div>
          <div class="bottom-right-control" style="float: right" v-show="unansweredQuestionStatus == 0">
            <button class="button-type-1  " @click="ReviewUnansweredPreviousQuestion" v-if="unansweredQuestionStartNum>0"><i class="fa fa-arrow-left mr-2" aria-hidden="true"></i>{{$t('test.link.previous')}}</button>
            <button class="button-type-1  " @click="ReviewUnansweredNextQuestion">{{$t('test.link.next')}}<i class="fa fa-arrow-right ml-2" aria-hidden="true"></i></button>
          </div>

        </div>
      </div>

      <div class="full-width-modal" v-if = "pageIndex == 'time_expired'">

        <div style="    padding: 20%; text-align: center;">
          <h2>{{$t('table.ansprocessing')}}</h2>
          <div style="border: solid gray 1px; padding: 40px; border-radius: 3px;">
            <div class="d-block text-center">
              <h3>{{$t('form.test_timeout_msg')}}</h3>
            </div>
            <button class="btn btn-outline-primary" variant="outline-danger" block @click="finish_testing">{{$t('resume.ok')}}</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
import {i18n} from "../../common/i18n";
import miniToastr from "mini-toastr";
miniToastr.init();
import User_ApiService from "common/user_api.service";
User_ApiService.init();

export default {
  name: "home",
  data(){
    return {
      markedIndex:0,
      isPlaying0:false,
      errorMessageType:'',
      question_index:0,
      page_language:'',
      playStatus:'',
      selected:[],
      status: 'not_accepted',
      pageIndex:'',
      reviewUnansweredQuestion:[],
      minute : '',
      second : '59',
      display_second: '00',
      unansweredQuestionStatus:0,
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
        errorFlag1:false
      },

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

    }
  },
  beforeMount() {
    User_ApiService.get('testConfig',{category:this.$store.state.customer_option.category}).then(
        result=>{
          let data=result.data;
          this.$store.commit('testConfigData',data.data[0]);
          // console.log('testConfigData-testConfigData', data)
          this.minute = data.data[0].duration;
          this.second = data.data[0].duration*60;
          if(data.status){
            this.testConfig=data.data[0];
            console.log('--testConfig--', this.testConfig);
          }
        }
    )
  },
  methods:{

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


    finish_testing(){

      if(this.errorMessageType == 'empty'){

        this.$store.dispatch('logout');
        this.$router.push('/login');
      }
      else{

        localStorage.setItem('home_reload', 0);
        var studentId = this.$store.state.user.id

        var supervisoridByLogin = this.$store.state.supervisoridBylogin;

        var data = {
          studentId : studentId,
          category: this.testConfig.testcategory,
          result:this.first_testResult,

          supervisoridByLogin: supervisoridByLogin
        };






        User_ApiService.post('TestComplete', data).then(
            result=>{

              let data=result.data;
              if(data.success === true){

                miniToastr.success(data.message)
                var url = window.location.origin+'/belhasa/#/print';
                window.location.href = url;
              }
              else {
                miniToastr.error(data.message)

                if(data.message == 'Changes you made may not be saved'){
                  this.errorMessageType = 'empty'
                }
              }
            },
            error=>{
            }
        )
      }


    },

    showModal_() {
      this.$refs['my-modal'].show()
    },

    hideModal_() {
      this.$refs['my-modal'].hide()
    },
    toggleModal_() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    },

    review(){
      if(this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0 && this.questions[this.current_question_number]['audio']){
        this.questions[this.current_question_number]['audio'].pause();
        this.questions[this.current_question_number]['audio'].currentTime = 0;
      }

      var testResultData = this.$store.state.testResultsArray;
      console.log('--testResultData--', testResultData)
      var temp_review_data = [];
      for (var key in testResultData) {
        if (!testResultData.hasOwnProperty(key)) continue;
        var obj = testResultData[key];
        obj.checked=false;
        temp_review_data.push(obj);
      }
      this.first_testResult = temp_review_data;


      this.pageIndex = 'testResultDashboard'

      this.unansweredQuestionStartNum = 0;
    },

    endReview() {

      $("#EnSureModal_endReview").modal();

    },


    endReviewConfirm(){
      localStorage.setItem('home_reload', 0);
      var studentId = this.$store.state.user.id
      var supervisoridByLogin = this.$store.state.supervisoridBylogin;

      var test_min = this.$store.state.testConfigData.duration-this.minute-1
      var test_sec = 60-this.display_second;

      console.log('test_min',test_min)
      console.log('test_sec',test_sec)


      var test_time = test_min*60+test_sec
      console.log('test_time',test_time)

      var data = {
        studentId : studentId,
        category: this.testConfig.testcategory,
        result:this.first_testResult,
        supervisoridByLogin: supervisoridByLogin,
        testTime:test_time,
        duration:this.$store.state.testConfigData.duration,
      };

      User_ApiService.post('TestComplete', data).then(
          result=>{
            let data=result.data;
            if(data.success === true){
              this.$store.commit('testMinute',test_min)
              this.$store.commit('testSecond',test_sec);
              var url = window.location.origin+'/belhasa/#/print';
              window.location.href = url;
              miniToastr.success(data.message)
            }
            else {
              miniToastr.error(data.message)
              if(data.message == 'Changes you made may not be saved'){
                this.errorMessageType = 'empty'
              }
            }
          },
          error=>{
          }
      )

    },

    reviewByIndex(num){
      this.current_question_number = num;
      this.question=this.questions[num];
      this.pageIndex = 'testStart';
      this.reviewIndex = 1;

      this.questions[this.current_question_number]['audio'].play();
      var question = this.questions[this.current_question_number]
      this.questions[this.current_question_number]['audio'].onended = function() {

        question.isPlaying0 = true
        // console.log('question.isPlaying0',question.isPlaying0)
      }
      question.isPlaying0 = false
      // console.log('question.isPlaying0s',question.isPlaying0)

    },

    reviewAll(){
      this.current_question_number=0;

      //audio player
      if(this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0 && this.questions[0]['audio']){
        var question =  this.questions[0]
        if(this.questions[0]['audio']){
          this.questions[0]['audio'].play();
          this.questions[0]['audio'].onended = function() {
            question.isPlaying0 = true
          }
          question.isPlaying0 = false
        }
        else {
          question.isPlaying0 = true
        }
        // var question = this.questions[0];
      }
      //end
      this.pageIndex = 'testStart';
      this.reviewIndex = 1;

      this.question=this.questions[this.current_question_number]
    },

    markedForReview(){

      var markedForReview = [];
      console.log('+_+__this.first_testResult++_++', this.first_testResult)
      for (var key in this.first_testResult) {
        if (!this.first_testResult.hasOwnProperty(key)) continue;
        var obj = this.first_testResult[key];
        if(obj.checked === true){
          markedForReview.push(obj)
        }
      }

      this.reviewUnansweredQuestion = markedForReview;
console.log('----markedForReview---', markedForReview)
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

      if (markedForReview.length>0){
        this.current_question_number = markedForReview[0].num;
        if(this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0){
          var question =  this.questions[this.current_question_number]
          if(this.questions[this.current_question_number] && this.questions[this.current_question_number]['audio']){
            this.questions[this.current_question_number]['audio'].play();
            this.questions[this.current_question_number]['audio'].onended = function() {
              question.isPlaying0 = true
            }
            question.isPlaying0 = false
          }
          else {
            question.isPlaying0 = true
          }
        }

        this.unansweredQuestionStatus = 1
        if(this.unansweredQuestionStatus == 1){
          this.unansweredQuestionStartNum = 0

        }


        this.pageIndex = 'ReviewUnanswered';

        this.reviewIndex = 1;
      }
      else{

        $("#EnSureModal").modal();
      }

    },

    reviewUnanswered(){

      var reviewUnansweredQuestion = [];
      for (var key in this.first_testResult) {
        if (!this.first_testResult.hasOwnProperty(key)) continue;
        var obj = this.first_testResult[key];

        obj.num = parseInt(key);
        if(obj.input == 0){
          reviewUnansweredQuestion.push(obj)
        }
      }
      if(reviewUnansweredQuestion && reviewUnansweredQuestion[0]){
          this.reviewUnansweredQuestion = reviewUnansweredQuestion;
          this.current_question_number = reviewUnansweredQuestion[0].num;
          var question =  this.questions[this.current_question_number]
          if(this.questions[this.current_question_number]['audio']){
            this.questions[this.current_question_number]['audio'].play();
            this.questions[this.current_question_number]['audio'].onended = function() {
              question.isPlaying0 = true
            }
            question.isPlaying0 = false
          }
          else {
            question.isPlaying0 = true
          }

          this.pageIndex = 'ReviewUnanswered';
      }
      
    },





    ReviewUnansweredNextQuestion(){
      console.log('sdfsdfaaa')

      this.unansweredQuestionStartNum++;
      if(this.unansweredQuestionStartNum == this.reviewUnansweredQuestion.length){

        if(this.testConfig.type != 'realtime' && this.form_choice == '99'){

        }else {
          if(this.testOption.testType =='realtime'){
            this.saveAnswer();
          }

          this.form_choice = 0;
          var testResultData = this.$store.state.testResultsArray;


          this.first_testResult = testResultData

          var unanswered_question_num = 0;
          var temp_unanswered_next = [];
          for (var key in testResultData) {
            if (!testResultData.hasOwnProperty(key)) continue;
            var obj = testResultData[key];
            obj.checked=false;
            temp_unanswered_next.push(obj);
            if(obj.input== 0){
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
      }else {


        this.current_question_number = this.reviewUnansweredQuestion[this.unansweredQuestionStartNum].num;


        this.question=this.questions[this.current_question_number];

        //audio- player
        if(this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0 && this.questions[this.current_question_number-1]['audio']){
          this.questions[this.current_question_number-1]['audio'].pause();
          this.questions[this.current_question_number-1]['option1audio'].pause();
          this.questions[this.current_question_number-1]['option2audio'].pause();
          this.questions[this.current_question_number-1]['option3audio'].pause();
          this.questions[this.current_question_number-1]['audio'].currentTime = 0;
          this.questions[this.current_question_number-1]['option1audio'].currentTime = 0;
          this.questions[this.current_question_number-1]['option2audio'].currentTime = 0;
          this.questions[this.current_question_number-1]['option3audio'].currentTime = 0;
          this.questions[this.current_question_number]['audio'].play();

          var question = this.questions[this.current_question_number]
          question.isPlaying0  = false;
          this.questions[this.current_question_number]['audio'].onended = function() {
            question.isPlaying0  = true;

          }
        }
        //end




        if(this.testConfig.type != 'realtime' && this.form_choice == '99'){

        }else {
          if(this.testOption.testType =='realtime'){

            this.saveAnswer();
          }
          this.form_choice = 0;


          if(this.current_question_number !== this.testConfig.noofquestion+1){

          }else {
            var testResultData = this.$store.state.testResultsArray;


            this.first_testResult = testResultData

            var unanswered_question_num = 0;
            var temp_unanswered_next = [];
            for (var key in testResultData) {
              if (!testResultData.hasOwnProperty(key)) continue;
              var obj = testResultData[key];
              obj.checked=false;
              temp_unanswered_next.push(obj);
              if(obj.input== 0){
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
    ReviewUnansweredNextQuestionStatus(){
      console.log('---here is ReviewUnanswerNextQuestionStatus() function')
      ++this.unansweredQuestionStartNum;
      if(this.unansweredQuestionStartNum > this.reviewUnansweredQuestion.length-1){
        this.saveAnswerStatus(this.current_question_number, this.form_choice);

        this.unansweredQuestionStartNum = 0;
        this.pageIndex = 'testResultDashboard';
        if(this.questions[this.current_question_number]['audio']) {
          this.questions[this.current_question_number]['audio'].pause();
          this.questions[this.current_question_number]['audio'].currentTime = 0;
        }
        if(this.questions[this.current_question_number]['option1audio']){
          this.questions[this.current_question_number]['option1audio'].pause();
          this.questions[this.current_question_number]['option1audio'].currentTime = 0;
        }
        if(this.questions[this.current_question_number]['option2audio']) {
          this.questions[this.current_question_number]['option2audio'].pause();
          this.questions[this.current_question_number]['option2audio'].currentTime = 0;
        }
        if(this.questions[this.current_question_number]['option3audio']) {
          this.questions[this.current_question_number]['option3audio'].pause();
          this.questions[this.current_question_number]['option3audio'].currentTime = 0;
        }
        this.current_question_number = -2;
      }
      else if(this.unansweredQuestionStartNum == this.reviewUnansweredQuestion.length-1){
        var current_question_number_1 = this.reviewUnansweredQuestion[this.unansweredQuestionStartNum-1].num;
        this.current_question_number = this.reviewUnansweredQuestion[this.unansweredQuestionStartNum].num;

        if(this.testConfig.type != 'realtime' && this.form_choice == '99'){

        }else {

          if(this.testOption.testType =='realtime'){

            if(this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0 ){
              if(this.questions[current_question_number_1] && this.questions[current_question_number_1]['audio']){
                  this.questions[current_question_number_1]['audio'].pause();
                  this.questions[current_question_number_1]['audio'].currentTime = 0;
              }
              if(this.questions[current_question_number_1] && this.questions[current_question_number_1]['option1audio']){
                  this.questions[current_question_number_1]['option1audio'].pause();
                  this.questions[current_question_number_1]['option1audio'].currentTime = 0;
              }
              if(this.questions[current_question_number_1] && this.questions[current_question_number_1]['option2audio']){
                  this.questions[current_question_number_1]['option2audio'].pause();
                  this.questions[current_question_number_1]['option2audio'].currentTime = 0;
              }
              if(this.questions[current_question_number_1] && this.questions[current_question_number_1]['option3audio']){
                  this.questions[current_question_number_1]['option3audio'].pause();
                  this.questions[current_question_number_1]['option3audio'].currentTime = 0;
              }
              if(this.questions[this.current_question_number] && this.questions[this.current_question_number]['audio']) this.questions[this.current_question_number]['audio'].play();
            }

            this.saveAnswerStatus(current_question_number_1, this.form_choice);
            console.log('ooooooo this.current_question_number--', current_question_number_1, this.form_choice)

          }

          this.form_choice = 0;
          var testResultData = this.$store.state.testResultsArray;
          this.first_testResult = testResultData
          var unanswered_question_num = 0;
          var temp_unanswered_next = [];
          for (var key in testResultData) {
            if (!testResultData.hasOwnProperty(key)) continue;
            var obj = testResultData[key];
            obj.checked=false;
            temp_unanswered_next.push(obj);
            if(obj.input== 0){
              unanswered_question_num++;
            }
          }
          this.first_testResult = temp_unanswered_next;
          this.unanswered_question = unanswered_question_num;


        }

      }else {

        this.current_question_number = this.reviewUnansweredQuestion[this.unansweredQuestionStartNum].num;
        var current_question_number_1 = this.reviewUnansweredQuestion[this.unansweredQuestionStartNum-1].num;
console.log('---here is ReviewUnanswerNextQuestionStatus() function---current_question_number--before_current_question_number', this.current_question_number, current_question_number_1);
        this.question=this.questions[this.current_question_number];

        //audio- player
        if(this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0 && this.questions[this.current_question_number] && this.questions[this.current_question_number]['audio']){
          this.questions[current_question_number_1]['audio'].pause();
          this.questions[current_question_number_1]['option1audio'].pause();
          this.questions[current_question_number_1]['option2audio'].pause();
          this.questions[current_question_number_1]['option3audio'].pause();
          this.questions[current_question_number_1]['audio'].currentTime = 0;
          this.questions[current_question_number_1]['option1audio'].currentTime = 0;
          this.questions[current_question_number_1]['option2audio'].currentTime = 0;
          this.questions[current_question_number_1]['option3audio'].currentTime = 0;

          this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum].num]['audio'].play();

          var question = this.questions[this.current_question_number]

          question.isPlaying0  = false;
          this.questions[this.current_question_number]['audio'].onended = function() {
            question.isPlaying0  = true;

          }
        }
        //end
        if(this.testConfig.type != 'realtime' && this.form_choice == '99'){

        }else {

          if(this.testOption.testType =='realtime'){

            // this.saveAnswer();
            this.saveAnswerStatus(current_question_number_1, this.form_choice);
            console.log('pppppp this.current_question_number--', current_question_number_1, this.form_choice)


          }
          this.form_choice = 0;
          if(this.current_question_number !== this.testConfig.noofquestion+1){

          }else {

            var testResultData = this.$store.state.testResultsArray;
            this.first_testResult = testResultData
            var unanswered_question_num = 0;
            var temp_unanswered_next = [];
            for (var key in testResultData) {
              if (!testResultData.hasOwnProperty(key)) continue;
              var obj = testResultData[key];
              obj.checked=false;
              temp_unanswered_next.push(obj);
              if(obj.input== 0){
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


    ReviewUnansweredPreviousQuestion(){

      this.unansweredQuestionStartNum--;
      if(this.unansweredQuestionStartNum>=0){
        this.current_question_number = this.reviewUnansweredQuestion[this.unansweredQuestionStartNum].num;

        this.question=this.questions[this.current_question_number];

        //audio player


        if(this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language!==0 && this.question['audio']){

          if(this.questions[this.current_question_number]['audio']){
              this.questions[this.current_question_number]['audio'].pause();
              this.questions[this.current_question_number]['audio'].currentTime = 0;
          } 
          
          if(this.questions[this.current_question_number]['option1audio']) {
              this.questions[this.current_question_number]['option1audio'].pause();
              this.questions[this.current_question_number]['option1audio'].currentTime = 0;
          }
          if(this.questions[this.current_question_number]['option2audio']){
              this.questions[this.current_question_number]['option2audio'].pause();
              this.questions[this.current_question_number]['option2audio'].currentTime = 0;
          } 
          if(this.questions[this.current_question_number]['option3audio']){
              this.questions[this.current_question_number]['option3audio'].pause();
              this.questions[this.current_question_number]['option3audio'].currentTime = 0;
          } 
          this.questions[this.current_question_number].isPlaying1 = false;
          this.questions[this.current_question_number].isPlaying2 = false;
          this.questions[this.current_question_number].isPlaying3 = false;

          this.question_for=this.questions[this.current_question_number+1];

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
          var question = this.questions[this.current_question_number]


          this.questions[this.current_question_number]['audio'].play();
          question.isPlaying0 = false;
          this.questions[this.current_question_number]['audio'].onended = function() {
            question.isPlaying0 = true;
          }
        }
        //end

        if(this.testConfig.type != 'realtime' && this.form_choice == '99'){

        }else {
          if(this.testOption.testType =='realtime'){
            this.saveAnswer_prev();
          }
          this.form_choice = 0;
          if(this.current_question_number !== this.testConfig.noofquestion){

          }
        }
      }
    },
    ReviewUnansweredPreviousQuestionStatus(){

      this.unansweredQuestionStartNum--;

      if(this.unansweredQuestionStartNum>=0){
        this.current_question_number = this.reviewUnansweredQuestion[this.unansweredQuestionStartNum].num;

        this.question=this.questions[this.current_question_number];

        //audio player


        if(this.$store.state.customer_option.audio_language &&this.$store.state.customer_option.audio_language!==0 && this.$store.state.customer_option.audio_language !== 0 && this.question['audio']){


          if(this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum+1].num]['audio']){
              this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum+1].num]['audio'].pause();
              this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum+1].num]['audio'].currentTime = 0;

          } 
          if(this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum+1].num]['option1audio']){
              this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum+1].num]['option1audio'].pause();
              this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum+1].num]['option1audio'].currentTime = 0;
          } 
          if(this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum+1].num]['option2audio']){
              this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum+1].num]['option2audio'].pause();
              this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum+1].num]['option2audio'].currentTime = 0;
          }
          if(this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum+1].num]['option3audio']){
              this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum+1].num]['option3audio'].pause();
              this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum+1].num]['option3audio'].currentTime = 0;
          }
          
          this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum+1].num].isPlaying1 = false;
          this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum+1].num].isPlaying2 = false;
          this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum+1].num].isPlaying3 = false;

          this.question_for=this.questions[this.reviewUnansweredQuestion[this.unansweredQuestionStartNum].num+1+1];

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
          var question = this.questions[this.current_question_number]

          this.questions[this.current_question_number]['audio'].play();
          question.isPlaying0 = false;
          this.questions[this.current_question_number]['audio'].onended = function() {
            question.isPlaying0 = true;
          }
        }
        //end

        if(this.testConfig.type != 'realtime' && this.form_choice == '99'){

        }else {
          if(this.testOption.testType =='realtime'){
            this.saveAnswer_prev();
          }
          this.form_choice = 0;
          if(this.current_question_number !== this.testConfig.noofquestion){

          }
        }
      }
    },

    countDownTimer() {
      if(this.second > 0) {
        setTimeout(() => {

          this.second -= 1
          this.display_second = this.second%60;

          if(this.second%60=== 59){
            this.minute -= 1;
            if(this.minute < 10){
              this.minute = '0'+this.minute;
            }
          }
          if(this.display_second < 10){
            this.display_second = '0' + this.display_second;
          }
          this.countDownTimer()
        }, 1000)
      }
      else{
        this.timeisover();

      }
    },

    timeisover(){
      this.pageIndex = 'time_expired';
      this.$refs['my-modal'].show()
      // alert('time is over')
    },

    startTest(){
      this.current_question_number=0;
      this.pageIndex='testStart';
      this.loadTest();
    },

    loadTest(){
      this.loader=true
      let customer_option=this.$store.state.customer_option;
//console.log('----customer_option---', customer_option);
      let testConfig=this.testConfig;
      var testOption = {
        testCategory:testConfig.testcategory,               //32
        testType: testConfig.category,                      //'realtime'
        limit: testConfig.noofquestion,                     //20
        specific:testConfig.noofspecificquestion,           //10
        common:testConfig.noofcommonquestion,               //10
        type: testConfig.category,                          //'realtime'
        language: customer_option.text_language,            //1
        audio_language: customer_option.audio_language,     //1
      }
      console.log('--home/line1661 testOption--', testOption);
      this.testOption = testOption;
      this.first_testResult = [{}];
      this.$store.commit('testResults',[]);
      User_ApiService.post('loadTest', testOption).then(
          result=>{
            var data=result.data;

            if(data.status==='success'){
              this.questions=data.data;
               console.log('============',this.questions)

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
                if(this.questions[0]['audio']){
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
              this.countDownTimer()
            }
            this.loader=false;
            this.question=this.questions[0];
            this.question_index = 0;
          },
          ()=>{
            this.loader=false;
          }
      )
    },

    nextQuestion(){
      var markedIndex = this.markedIndex;
      this.current_question_number++;
      //console.log('*****current_question_number****', this.current_question_number);
      //console.log('*****current_array****', this.$store.state.testResultsArray);
      if(this.current_question_number < this.testConfig.noofquestion){
        this.question=this.questions[this.current_question_number];
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

        if(this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0 && this.questions[this.current_question_number-1]['audio']){
          if(this.questions[this.current_question_number]['audio']){
            this.questions[this.current_question_number]['audio'].play();
            var question = this.questions[this.current_question_number];
            question.isPlaying0 = false;
            this.questions[this.current_question_number]['audio'].onended = function() {
              question.isPlaying0 = true;
            }
          }
          else{
            var question = this.questions[this.current_question_number];
            question.isPlaying0 = true;
          }

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

        }


        if(this.testConfig.type != 'realtime' && this.form_choice == '99'){

        }else {
          if(this.testOption.testType =='realtime'){
            this.saveAnswer();
          }
          this.form_choice = 0;
          if(this.current_question_number !== this.testConfig.noofquestion+1){

          }else {
            var testResultData = this.$store.state.testResultsArray;
            this.first_testResult = testResultData
            var unanswered_question_num = 0;

            for (var key in testResultData) {
              if (!testResultData.hasOwnProperty(key)) continue;
              var obj = testResultData[key];
              if(obj.input== 0){
                unanswered_question_num++;
              }
            }
            this.unanswered_question = unanswered_question_num;
            this.current_question_number = -2;
          }
        }
      }else{

        // this.questions[this.current_question_number]['audio']
        // this.questions[this.current_question_number]['audio'].currentTime = 0;

        if(this.$store.state.customer_option.audio_language && this.$store.state.customer_option.audio_language !== 0 && this.questions[this.current_question_number-1]['audio']){

          this.questions[this.current_question_number-1]['audio'].pause();
        }



        this.saveAnswer();
        this.first_testResult = this.$store.state.testResultsArray
        var unanswered_question_num = 0;
        var tempData = [];
        for (var key in this.first_testResult) {
          if (!this.first_testResult.hasOwnProperty(key)) continue;
          var obj = this.first_testResult[key];
          obj.num = parseInt(key);
          obj.checked = false;
          tempData.push(obj)
          if(obj.input== 0){
            unanswered_question_num++;
          }
        }
        this.first_testResult = tempData;
        this.unanswered_question = unanswered_question_num;
        this.pageIndex = 'testResultDashboard';
      }
    },

    saveAnswer(){

        var testResultData = this.$store.state.testResultsArray;

        this.question_check(this.form_choice, this.questions[this.current_question_number-1].answer);

        let testResult = {
          question : this.questions[this.current_question_number-1].id,
          input :  this.form_choice,
          status : this.questionResultStatus,
        };

console.log('**Here is saveAnswer()**', this.current_question_number-1, testResult)

        if(!testResultData[this.current_question_number-1]){
          testResultData.push(testResult);
        } else{
          testResultData[this.current_question_number-1] = testResult;
        }
        this.$store.commit('testResults', testResultData);
        this.first_testResult  = this.$store.state.testResultsArray;
    },

    saveAnswerStatus(current_question_number_1, form_choice){
      var testResultData = this.$store.state.testResultsArray;
      console.log('aaaaaa-this.reviewUnansweredQuestion', this.reviewUnansweredQuestion);
      console.log('aaaaaaa-this.questions[this.current_question_number]',this.questions[this.current_question_number])

      this.question_check(form_choice, this.questions[current_question_number_1].answer);

      let testResult = {
        num : current_question_number_1,
        checked: true,
        question : this.questions[current_question_number_1].id,
        input :  form_choice,
        status : this.questionResultStatus,
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
      if(testResultData[current_question_number_1]){
        testResultData[current_question_number_1].input = form_choice;
        testResultData[current_question_number_1].status = this.questionResultStatus;
      }
      this.$store.commit('testResults', testResultData);

      this.first_testResult  = this.$store.state.testResultsArray;
      console.log('******firt_testRsult', this.first_testResult);
      if(this.pageIndex = 'ReviewUnanswered'){
        this.current_question_number = this.current_question_number
      }
      else {
        this.current_question_number = this.current_question_number+1
      }

    },

    question_check(selected_answer, correct_answer){
      if(selected_answer == correct_answer){
        this.questionResultStatus = true;
      } else {
        this.questionResultStatus = false;
      }
    },

    saveAnswer_prev(){

      if(this.form_choice == this.question.answer){
        this.questionResultStatus = true;
      }
      else {
        this.questionResultStatus = false;
      }
      var testResult = {
        question : this.questions[this.current_question_number+1].id,
        input :  this.form_choice,
        status : this.questionResultStatus,
      };

      let testResultData = this.$store.state.testResultsArray;
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
      if(!!testResultData[this.current_question_number+1] && testResultData[this.current_question_number+1] !== {}){
        testResultData[this.current_question_number+1] = testResult;
      }
      if(!testResultData[this.current_question_number+1]){
        testResultData.push(testResult);
      }
      this.$store.commit('testResults', testResultData);

      this.first_testResult  = this.$store.state.testResultsArray;
    },
    saveAnswer_prevStatus(){

      if(this.form_choice == this.question.answer){
        this.questionResultStatus = true;
      }
      else {
        this.questionResultStatus = false;
      }
      var testResult = {
        question : this.questions[this.current_question_number].id,
        input :  this.form_choice,
        status : this.questionResultStatus,
      };

      let testResultData = this.$store.state.testResultsArray;
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
      if(!!testResultData[this.current_question_number] && testResultData[this.current_question_number] !== {}){
        testResultData[this.current_question_number] = testResult;
      }
      if(!testResultData[this.current_question_number]){
        testResultData.push(testResult);
      }
      this.$store.commit('testResults', testResultData);

      this.first_testResult  = this.$store.state.testResultsArray;
    },


    previousQuestion(){
      this.current_question_number--;

      this.question=this.questions[this.current_question_number];
      this.question_for=this.questions[this.current_question_number+1];

      if(this.$store.state.customer_option.audio_language  && this.$store.state.customer_option.audio_language !== 0 &&  this.question['audio']){



        var question = this.questions[this.current_question_number];
        question.isPlaying0 = false;
        this.questions[this.current_question_number]['audio'].onended = function() {
          question.isPlaying0 = true;
        }

        if(this.question['audio']) this.question['audio'].pause();
        if(this.question['option1audio']) this.question['option1audio'].pause();
        if(this.question['option2audio']) this.question['option2audio'].pause();
        if(this.question['option3audio']) this.question['option3audio'].pause();
        this.question.isPlaying1 = false;
        this.question.isPlaying2 = false;
        this.question.isPlaying3 = false;

        if(this.question['audio']) this.question['audio'].currentTime = 0;
        if(this.question['option1audio']) this.question['option1audio'].currentTime = 0;
        if(this.question['option2audio']) this.question['option2audio'].currentTime = 0;
        if(this.question['option3audio']) this.question['option3audio'].currentTime = 0;


        if(this.question_for['audio']) this.question_for['audio'].pause();
        if(this.question_for['option1audio']) this.question_for['option1audio'].pause();
        if(this.question_for['option2audio']) this.question_for['option2audio'].pause();
        if(this.question_for['option3audio']) this.question_for['option3audio'].pause();
        this.question_for.isPlaying1 = false;
        this.question_for.isPlaying2 = false;
        this.question_for.isPlaying3 = false;
        if(this.question_for['audio']) this.question_for['audio'].currentTime = 0;
        if(this.question_for['option1audio']) this.question_for['option1audio'].currentTime = 0;
        if(this.question_for['option2audio']) this.question_for['option2audio'].currentTime = 0;
        if(this.question_for['option3audio']) this.question_for['option3audio'].currentTime = 0;

        if(this.questions[this.current_question_number] && this.questions[this.current_question_number]['audio']) this.questions[this.current_question_number]['audio'].play();
      }

      if(this.testConfig.type != 'realtime' && this.form_choice == '99'){

      }else {
        if(this.testOption.testType =='realtime'){
          this.saveAnswer_prev();
        }
        this.form_choice = 0;
        if(this.current_question_number !== this.testConfig.noofquestion){

        }
      }
    },

    checkAnswer(choice){
      this.form_choice = choice;
      if(this.tempCheck == choice){
        this.tempCheck = '0';
        this.form_choice = null;
      }else{
        this.tempCheck = choice;
      }
    },

    playOption(audio_src){
      audio_src.stop()
    }
  },

  created() {

    this.page_language = this.$i18n.locale;

    miniToastr.setIcon('error', 'i', {
      'class': 'fa fa-times'
    });
  },
  mounted: function() {
    // console.log(i18n.locale);
  },

  destroyed: function() {
  },

}
</script>
<style type="text/css" scoped>
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
  height:150px;
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
  line-height: initial;
}
.question-audio-icon {
  display: none;
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
  width:90px;
  height:90px;
}
.question-choice-text {
  /* display: none; */
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
  margin-top: 75px;
}
.marked_checkbox{
  margin-top: 5px;
  margin-right: 3px;
}
.note-description-wrapper{
  padding: 110px 0;
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
.audio-section:hover{
  cursor: pointer;
}
</style>
