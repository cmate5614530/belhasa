
<template>
  <div>
    <div v-if="showResult == 1">
      <div style="width: 100%; margin: auto;margin-top: -10px;    font-weight: bold; font-size: 18px;" id="table">
        <div  v-if="arabic == 0">
          <div v-if="page_language == 'ar-ar' || page_language == 'ur-ur' || page_language == 'fa-fa'" style="direction: rtl;">
            <div class="text-center">
              <img src="~img/pages/logo.png" class="logo-img">
            </div><br>
            <table class="table hea">
              <tbody class="heabody">
              <tr style="direction: initial; text-align: right;">
                <th style="width: 200px;">{{$t('print.date_tested')}}</th>
                <td>{{today}}</td>
              </tr>
              <tr>
                <th>{{$t('print.student_name')}}</th>
                <td>{{ this.$store.state.user.name }}</td>
              </tr>
              <tr>
                <th>{{$t('table.traffic_file_number')}}</th>
                <td>{{this.$store.state.user.studentId}}</td>
              </tr>
              <tr>
                <th>{{$t('print.category')}}</th>
                <td>{{testConfigData.testCategoryName}}</td>
              </tr>
              <tr>
                <td>{{$t('print.date_tested')}}</td>
                <td>{{this.testdate}}</td>
              </tr>
              <tr>
                <td>{{$t('testconfigure.duration')}}</td>
                <td>{{this.duration}}</td>
              </tr>
              <tr>
                <td>{{$t('table.test_duration')}}</td>
                <td>{{test_minute}} {{test_seconds}}</td>
              </tr>
              </tbody>
            </table>
            <table class="table hea">
              <tbody class="heabody">
              <tr>
                <th style="font-size: initial;">
                  <div v-if="this.test_final_result === 0">{{$t('print.fail')}}</div>
                  <div v-if="this.test_final_result === 1">{{$t('print.pass')}}</div>
                </th>
              </tr>
              </tbody>
            </table>
            <!--        <table class="table hea">-->
            <table class="table table-bordered d3">
              <tbody class="heabody">
              <tr style="text-decoration: underline;">
                <th class="">{{$t('print.topic_area')}}</th>
                <th><div class="text-center">{{$t('print.no_of_incorrect_answers')}}</div></th>
              </tr>
              <tr v-for="(item,key) in topicAreaResult">
                <td class="" >
                  {{key}}
                </td>
                <td class="text-center">
                  <div class="center"><div class="center">{{item}}</div></div>
                </td>
              </tr>
              </tbody>
            </table>
            <table class="table table-bordered" style="width: 100%;">
              <tbody>
              <tr>
                <th style="width: 30%;" class="text-center"><div class="text-center">{{$t('print.number_of_questions_per_test')}}</div></th>
                <th style="width: 35%;" class="text-center"><div class="text-center">{{$t('print.minimum_correct_answers_required')}}</div></th>
                <th style="width: 35%;" class="text-center"><div class="text-center">{{$t('print.correct_answers')}}</div></th>
              </tr>
              <tr>
                <td><div class="text-center">{{testConfigData.noofquestion}}</div></td>
                <td><div class="text-center">{{testConfigData.reqnoofanswer}}</div></td>
                <td><div class="text-center">{{numberofCorrects}}</div></td>
              </tr>
              </tbody>
            </table>
            <div style="margin-top: 10px"> {{$t('print.test_result')}} :<strong> {{$t('print.test_fail')}}</strong></div>
            <div style="width: 80%; margin: auto;display: flex" class="no-print option-btn">
              <button class="btn btn-social genPDF" @click="arabic_display" id = "download">{{$t('form.arabic')}}</button>
              <button class="btn btn-social genPDF" @click="genPDF" id = "download" >PDF</button>
              <button class="btn btn-social genPDF" @click="print" id = "printCertificate">{{$t('print.print')}}</button>
              <button class="btn btn-social genPDF" @click="close" id = "close_print">{{$t('print.close')}}</button>
            </div>
          </div>
          <div v-else>
            <div class="text-center">
              <img src="~img/pages/logo.png" class="logo-img">
            </div><br>
            <table class="table hea">
              <tbody class="heabody">
              <tr>
                <th style="width: 200px;">{{$t('print.date_tested')}}</th>
                <td>{{today}}</td>
              </tr>
              <tr>
                <th>{{$t('print.student_name')}}</th>
                <td>{{ this.$store.state.user.name }}</td>
              </tr>
              <tr>
                <th>{{$t('table.traffic_file_number')}}</th>
                <td>{{this.$store.state.user.studentId}}</td>
              </tr>
              <tr>
                <th>{{$t('print.category')}}</th>
                <td>{{testConfigData.testCategoryName}}</td>
              </tr>
              <tr>
                <td>{{$t('print.date_tested')}}</td>
                <td>{{this.testdate}}</td>
              </tr>
              <tr>
                <td>{{$t('testconfigure.duration')}}</td>
                <td>{{this.duration}}</td>
              </tr>
              <tr>
                <td>{{$t('table.test_duration')}}</td>
                <td>{{test_minute}} {{test_seconds}}</td>
              </tr>
              </tbody>
            </table>
            <table class="table hea">
              <tbody class="heabody">
              <tr>
                <th style="font-size: initial;">
                  <div v-if="this.test_final_result == 0">{{$t('print.fail')}}</div>
                  <div v-if="this.test_final_result == 1">{{$t('print.pass')}}</div>
                </th>
              </tr>
              </tbody>
            </table>
            <!--        <table class="table hea">-->
            <table class="table table-bordered d3">
              <tbody class="heabody">
              <tr style="text-decoration: underline;">
                <th class="">{{$t('print.topic_area')}}</th>
                <th><div class="text-center">{{$t('print.no_of_incorrect_answers')}}</div></th>
              </tr>
              <tr v-for="(item,key) in topicAreaResult">
                <td class="" >
                  {{key}}
                </td>
                <td class="text-center">
                  <div class="center"><div class="center">{{item}}</div></div>
                </td>
              </tr>
              </tbody>
            </table>
            <table class="table table-bordered" style="width: 100%;">
              <tbody>
              <tr>
                <th style="width: 30%;" class="text-center"><div class="text-center">{{$t('print.number_of_questions_per_test')}}</div></th>
                <th style="width: 35%;" class="text-center"><div class="text-center">{{$t('print.minimum_correct_answers_required')}}</div></th>
                <th style="width: 35%;" class="text-center"><div class="text-center">{{$t('print.correct_answers')}}</div></th>
              </tr>
              <tr>
                <td><div class="text-center">{{testConfigData.noofquestion}}</div></td>
                <td><div class="text-center">{{testConfigData.reqnoofanswer}}</div></td>
                <td><div class="text-center">{{numberofCorrects}}</div></td>
              </tr>
              </tbody>
            </table>
            <div style="margin-top: 10px"> {{$t('print.test_result')}} :<strong> {{$t('print.test_fail')}}</strong></div>
            <div style="width: 80%; margin: auto;display: flex" class="no-print option-btn">
              <button class="btn btn-social genPDF" @click="arabic_display" id = "download">{{$t('form.arabic')}}</button>
              <button class="btn btn-social genPDF" @click="genPDF" id = "download" >PDF</button>
              <button class="btn btn-social genPDF" @click="print" id = "printCertificate">{{$t('print.print')}}</button>
              <button class="btn btn-social genPDF" @click="close" id = "close_print">{{$t('print.close')}}</button>
            </div>
          </div>

        </div>
        <div  v-if="arabic == 1" style="direction: rtl">
          <div class="text-center">
            <img src="~img/pages/logo.png" class="logo-img">
          </div><br>
          <table class="table hea">
            <tbody class="heabody">
            <tr>
              <th style="width: 200px;text-align: right;">تاریخ اإلختبار</th>
              <td style="text-align: right;    direction: initial;">{{today}}</td>
            </tr>
            <tr style="direction: initial; text-align: right;">
              <th style="text-align: right;">إسم الطالب</th>
              <td style="text-align: right;">{{ this.$store.state.user.name }}</td>
            </tr>
            <tr>
              <th style="text-align: right;">رقم الملف المروري</th>
              <td style="text-align: right;">{{this.$store.state.user.studentId}}</td>
            </tr>
            <tr>
              <th style="text-align: right;">الفئــة</th>
              <td style="text-align: right;">{{testConfigData.testCategoryName}}</td>
            </tr>
            <tr>
              <td style="text-align: right;">تاريخ الاختبار</td>
              <td style="text-align: right;">{{this.testdate}}</td>
            </tr>
            <tr>
              <td style="text-align: right;">المدة الزمنية</td>
              <td style="text-align: right;">{{this.duration}}</td>
            </tr>
            <tr>
              <td style="text-align: right;">اختبار المدة ( في دقيقة)</td>
              <td style="text-align: right;">{{test_minute}} {{test_seconds}}</td>
            </tr>
            </tbody>
          </table>
          <table class="table hea">
            <tbody class="heabody">
            <tr>
              <th style="font-size: initial;">
                <div v-if="this.test_final_result == 0" class="text-right">نأسف لقد رسبت فى الإختبار</div>
                <div v-if="this.test_final_result == 1" class="text-right">مبروك لقد نجحت فى الإختبار </div>
              </th>
            </tr>
            </tbody>
          </table>
          <!--        <table class="table hea">-->
          <table class="table table-bordered d3">
            <tbody class="heabody">
            <tr style="text-decoration: underline;">
              <th class="text-right">مضمون الإسئلة</th>
              <th><div class="text-center">الاخطاء</div></th>
            </tr>
            <tr v-for="(item,key) in topicAreaResult">
              <td class="text-right" >
                {{key}}
              </td>
              <td class="text-center">
                <div class="center"><div class="center">{{item}}</div></div>
              </td>
            </tr>
            </tbody>
          </table>
          <table class="table table-bordered" style="width: 100%;">
            <tbody>
            <tr>
              <th style="width: 30%;" class="text-center"><div class="text-center">عدد الأسئلة</div></th>
              <th style="width: 35%;" class="text-center"><div class="text-center">الحد الأدنى للإجابات الصحيحة</div></th>
              <th style="width: 35%;" class="text-center"><div class="text-center">الأسئلة </div></th>
            </tr>
            <tr>
              <td><div class="text-center">{{testConfigData.noofquestion}}</div></td>
              <td><div class="text-center">{{testConfigData.reqnoofanswer}}</div></td>
              <td><div class="text-center">{{numberofCorrects}}</div></td>
            </tr>
            </tbody>
          </table>
          <div style="margin-top: 10px"> نتيجة الاختبار :<strong> Fail</strong></div>
          <div style="width: 80%; margin: auto;display: flex" class="no-print option-btn">
            <button class="btn btn-social genPDF" @click="normal_display" id = "download" >Normal</button>
            <button class="btn btn-social genPDF" @click="genPDF" id = "download" >PDF</button>
            <button class="btn btn-social genPDF" @click="print" id = "printCertificate">{{$t('print.print')}}</button>
            <button class="btn btn-social genPDF" @click="close" id = "close_print">{{$t('print.close')}}</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="col-lg-12 mb-3" style="  margin-top: 80px;    background: white; border-radius: 10px;">
        <b-card header="" header-tag="h4" class="bg-success-card datatable-material"><br><br>
          <div class="row">
            <div class="col-md-12" style="text-align: right">
              <button class="btn btn-success print-result" @click="PrintResult">Print Result</button>
            </div>
          </div>
          <hr>
          <div class="col-lg-12 mb-3" v-if="!loading" style="text-align: center">
            <img :src="'http://'+rootPath+'/belhasa/public/images/app-loader.gif'">
          </div>
          <div v-else>
            <div v-show="testResult.length">
              <div>Student Info</div>
              <table>
                <tr>
                  <td>Student ID</td>
                  <td>{{this.studentData.studentId}}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{{this.studentData.name}}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{{this.studentData.email}}</td>
                </tr>
                <tr>
                  <td>Test Date</td>
                  <td>{{this.testdate}}</td>
                </tr>
                <tr>
                  <td>Test Duration</td>
                  <td>{{this.duration}}</td>
                </tr>
                <tr>
                  <td>Test Time</td>
                  <td>{{test_minute}} {{test_seconds}}</td>
                </tr>
                <tr>
                  <td>Result</td>
                  <td>{{this.test_final_result}}</td>
                </tr>
              </table>
              <br>
              <table>
                <thead>
                <th>S.No</th>
                <th>Question</th>
                <th>Input</th>
                <th>Result</th>
                </thead>
                <tbody>
                <tr v-for="(item, index) in  testResult">
                  <td>{{item.key}}</td>
                  <td>{{item.question}}</td>
                  <td>{{item.input}}</td>
                  <td v-if="item.result == 0">
                    <i class="material-icons">close</i>
                  </td>
                  <td v-else>
                    <i class="material-icons">check</i>
                  </td>
                </tr>
                </tbody>
              </table>
              <table>
                <tr>
                  <td style="text-align: right">No of corrects : {{this.numberofCorrects}}</td>
                </tr>
                <tr>
                  <td style="text-align: right">No of incorrects:{{this.testConfig.noofquestion - this.numberofCorrects}}</td>
                </tr>
              </table>
            </div>
            <div class="no-result" v-show="testResult.length == 0">
              <div><li class="fa fa-warning"> Result not found</li></div>
            </div>
          </div>
        </b-card>
      </div>
    </div>

  </div>



</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
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
import jsPDF from "jspdf";

Vue.use(ClientTable, {}, false);
export default {
  name: "category",
  components: {
    datatable
  },
  data() {
    return {
      test_minute:'',
      test_seconds:'',
      duration:'',
      test_time:'',
      testdate:'',
      arabic:0,
      topicAreaResult:{},
      test_final_result:'',
      today:'',
      ResultofTest:'',
      numberofCorrects:'',
      testConfig:{},
      testResult:[],
      rootPath:'',
      loading: false,
      showResult: 0,
      columndata: [
        {
          label: 'No',
          field: 'key',
          numeric: true,
          width: "100px",
          html: false,
        },
        {
          label: 'Question',
          field: 'question',
          numeric: false,
          html: true,
        },
        {
          label: 'Input',
          field: 'input',
          numeric: true,
          html: true
        },
        {
          label: 'Result',
          field: 'result',
          numeric: true,
          html: true
        },

      ],
      model: {
        testId:'',
        studentid:''
      },
      model1:{
        testResultData:[],
        language:''

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

  watch:{
  },


  beforeRouteLeave(to, from, next) {
    unsub();
    next();
  },
  beforeRouteBefore  () {

  },
  methods: {
    close(){
      $(".left-aside").show()
      $('header').show()
      $(".right-aside").css("margin-left", 250);
      $(".right-aside").css("background-color", "#eee");
      $(".content-header ").show();
      $(".wrapper ").css("margin-top", 10);
      $(".modal-backdrop").show()

      var url = window.location.origin+'/belhasa/#/admin/results';
      window.location.href = url;


      //
      //
      // this.$store.dispatch('logout');
      // this.$router.push('/login');
    },
    genPDF() {
      $(".genPDF ").hide();
      let filename = this.$store.state.user.studentId+'.pdf'
      html2canvas(document.body, {
        onrendered: function (canvas) {
          var img = canvas.toDataURL("image/png");
          var doc = new jsPDF();
          doc.addImage(img, "JPEG", 0, 0, 210, 150);
          doc.save(filename);

          $('#printCertificate').show();
          $('#download').show();
          $('#close_print').show();
          $(".genPDF ").show();
        }
      });
    },
    arabic_display(){
      this.arabic = 1;
    },
    normal_display(){
      this.arabic = 0;
      console.log('normla')
    },
    print(){
      window.print();
    },
    PrintResult(){
      $(".left-aside").hide()
      $('header').hide()
      $(".right-aside").css("margin-left", 0);
      $(".right-aside").css("background-color", "#ffffff");
      $(".content-header ").hide();
      $(".wrapper ").css("margin-top", 10);
      $(".modal-backdrop").hide()

      this.showResult =1;
      // var testResultsForRePrint = this.testResult
      // this.$store.commit('testResultsForRePrint',testResultsForRePrint);
      //
      // var url = window.location.origin+'/belhasa/#/reprint';
      // window.location.href = url;
      // this.$store.dispatch('logout');
      // $('.content-header').hide()
      // $('.print-result').hide()
      // window.print();
    },

    myFunction() {
      alert("This document is now being printed");
    },
  },
  created() {
    console.log('this.$route.params.studentid',this.$route.params.studentId)
    Admin_ApiService.post('getStudentData',{studentid:this.$route.params.studentId}).then(
        result=>{
          let data=result.data;

          this.studentData = data.studentData[0];
          console.log('studentData',this.studentData )
          // console.log('this.testConfig=data.data[0]',this.testConfig=data.data[0])
          // console.log(this.testConfig.reqnoofanswer)
        }
    )


    this.page_language = this.$i18n.locale;
    this.rootPath = location.hostname
    this.model.testId = this.$route.params.id;
    this.model.language = this.$i18n.locale;
    //  get testConfigData
    Admin_ApiService.get('testConfig',{category:this.$route.params.categoryId}).then(
        result=>{
          let data=result.data;
          this.testConfigData = data.data[0];
          console.log('this.testConfig=data.data[0]',this.testConfig=data.data[0])
          console.log('this.testConfig.reqnoofanswer',this.testConfig.reqnoofanswer)
        }
    )
    //end
    //getTestResult
    Admin_ApiService.post('getTestResult',{testID:this.$route.params.id}).then(
        result=>{
          let data=result.data;
          console.log('-----------',data)
          this.duration = data.duration;
          this.test_time = data.test_time;
          var minutes = Math.floor(this.test_time / 60);
          var seconds = this.test_time - minutes * 60;
          if(minutes == 0){
            this.test_minute = ''
          }
          else {
            this.test_minute = minutes+'min'
          }
          if(seconds == 0){
            this.test_seconds = ''
          }
          else {
            this.test_seconds = seconds+'s'
          }
          this.testdate = data.testdate.split(" ")[1] ;
        }
    )
    //end

    Admin_ApiService.post('getTestDetail',this.model).then(
        result=>{
          let data=result.data;
          this.loading = true
          if(data.success === true){

            this.testResult = data.testResult;

            let date = this.testResult[0].updated_at.split(' ')[0];
            console.log('today---', date)
            let dateArray =  date.split("-");
            const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            let monthData = parseInt(dateArray[1])

            this.today = dateArray[2] + "-" + months[monthData-1] + "-" + dateArray[0]

            console.log(this.today);
            console.log('result-detail',this.testResult);
            this.testResult.forEach((item, index) => {
              this.$set(item,'key',index+1);
              this.$set(item,'question',item.question_text);
              this.$set(item,'input',item.choice);
              this.$set(item,'result',item.status);
            });


            var count = 0;
            for (var key in data.testResult) {
              var obj = data.testResult[key];
              if(obj.status === 1){
                count++;
              }
            }
            this.numberofCorrects = count;

            console.log('correct_number',count)
            this.model1.language = this.$i18n.locale;
            this.model1.testResultData = this.testResult
            console.log('this.model1',this.model1)
            Admin_ApiService.post('getTopicAreaForReprint',this.model1).then(
                result=>{
                  let data=result.data;
                  if(data.success === true){
                    console.log('data--12>>',data)
                    this.topicAreaResult = data.testResultData;

                  }
                  else {
                    miniToastr.error(data.message)
                    console.log(result.message);
                  }
                },
                error=>{
                }
            )

            if(this.testConfig.reqnoofanswer > count){

              this.test_final_result = false;
            }
            else {
              this.test_final_result = true;
            }

          }
          else {
            miniToastr.error(data.message)

            this.loading = true
          }
        },
        error=>{
        }
    )





  }
}
</script>

<style>
.custom-select{
  background: none;
}
</style>
<style scoped>
.datatable-context{
  border:none;
  padding: 0px !important;
  margin-top: 20px;
}
.datatable-context:hover{
  box-shadow: none;
}
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
.card-icon{
  border-radius: 3px;
  padding: 8px 16px;
  margin-top: -37px;
  display: flex;
  float: left;
  box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(255,152,0,.4);
  background: linear-gradient(60deg,#ec407a,#d81b60);
}
.card-icon p{
  margin-bottom: 0px;
  font-size: 14px;
  margin-left: 4px;
  color: white;
}
.display-icon{
  color: whitesmoke;
  font-size: 18px;
}
.card{
  box-shadow:none;
}
.select-date{
  display: flex;
}
.select-date-txt{
  margin-top: 10px;
  margin-right: 10px;
  font-family: sans-serif;
}
.no-result{
  text-align: center;
  min-height: 500px;
  padding: 240px;
}
.fa-warning{
  font-size: 30px;
  color:red
}
.form-control{
  width: 230px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
@media print
{
  .no-print, .no-print *
  {
    display: none !important;
  }
}
</style>
