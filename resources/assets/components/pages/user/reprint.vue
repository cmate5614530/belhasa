<template>
  <div style="width: 100%; margin: auto;margin-top: 60px;    font-weight: bold; font-size: 18px;" id="table">
    <div  v-if="arabic == 0">
      <div v-if="page_language == 'ar-ar' || page_language == 'ur-ur' || page_language == 'fa-fa'" style="direction: rtl;">
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
          </tbody>
        </table>
        <table class="table hea">
          <tbody class="heabody">
          <tr>
            <th style="font-size: initial;">
              <div v-if="test_final_result === 0">{{$t('print.fail')}}</div>
              <div v-if="test_final_result === 1">{{$t('print.pass')}}</div>
            </th>
          </tr>
          </tbody>
        </table>
        <!--        <table class="table hea">-->
        <table class="table table-bordered d3">
          <tbody class="heabody">
          <tr style="text-decoration: underline;">
            <th class="text-center">{{$t('print.topic_area')}}</th>
            <th><div class="text-center">{{$t('print.no_of_incorrect_answers')}}</div></th>
          </tr>
          <tr v-for="(item,key) in topicAreaResult">
            <td class="text-center" >
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
            <td><div class="text-center">{{correct_answer}}</div></td>
          </tr>
          </tbody>
        </table>
        <div style="margin-top: 10px"> {{$t('print.test_result')}} :<strong> {{$t('print.test_fail')}}</strong></div>
        <div style="width: 80%; margin: auto;display: flex" class="no-print option-btn">
          <button class="btn btn-social genPDF" @click="arabic_display" id = "download">Arabic</button>
          <button class="btn btn-social genPDF" @click="genPDF" id = "download" >PDF</button>
          <button class="btn btn-social genPDF" @click="print" id = "printCertificate">Print</button>
          <button class="btn btn-social genPDF" @click="close" id = "close_print">Close</button>
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
          </tbody>
        </table>
        <table class="table hea">
          <tbody class="heabody">
          <tr>
            <th style="font-size: initial;">
              <div v-if="test_final_result === 0">{{$t('print.fail')}}</div>
              <div v-if="test_final_result === 1">{{$t('print.pass')}}</div>
            </th>
          </tr>
          </tbody>
        </table>
        <!--        <table class="table hea">-->
        <table class="table table-bordered d3">
          <tbody class="heabody">
          <tr style="text-decoration: underline;">
            <th class="text-center">{{$t('print.topic_area')}}</th>
            <th><div class="text-center">{{$t('print.no_of_incorrect_answers')}}</div></th>
          </tr>
          <tr v-for="(item,key) in topicAreaResult">
            <td class="text-center" >
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
            <td><div class="text-center">{{correct_answer}}</div></td>
          </tr>
          </tbody>
        </table>
        <div style="margin-top: 10px"> {{$t('print.test_result')}} :<strong> {{$t('print.test_fail')}}</strong></div>
        <div style="width: 80%; margin: auto;display: flex" class="no-print option-btn">
          <button class="btn btn-social genPDF" @click="arabic_display" id = "download">Arabic</button>
          <button class="btn btn-social genPDF" @click="genPDF" id = "download" >PDF</button>
          <button class="btn btn-social genPDF" @click="print" id = "printCertificate">Print</button>
          <button class="btn btn-social genPDF" @click="close" id = "close_print">Close</button>
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
          <th style="width: 200px;">تاریخ اإلختبار</th>
          <td>{{today}}</td>
        </tr>
        <tr>
          <th>إسم الطالب</th>
          <td>{{ this.$store.state.user.name }}</td>
        </tr>
        <tr>
          <th>رقم الملف المروري</th>
          <td>{{this.$store.state.user.studentId}}</td>
        </tr>
        <tr>
          <th>الفئــة</th>
          <td>{{testConfigData.testCategoryName}}</td>
        </tr>
        </tbody>
      </table>
      <table class="table hea">
        <tbody class="heabody">
        <tr>
          <th style="font-size: initial;">
            <div v-if="test_final_result === 0">نأسف لقد رسبت فى الإختبار</div>
            <div v-if="test_final_result === 1">مبروك لقد نجحت فى الإختبار </div>
          </th>
        </tr>
        </tbody>
      </table>
      <!--        <table class="table hea">-->
      <table class="table table-bordered d3">
        <tbody class="heabody">
        <tr style="text-decoration: underline;">
          <th class="text-center">مضمون الإسئلة</th>
          <th><div class="text-center">الاخطاء</div></th>
        </tr>
        <tr v-for="(item,key) in topicAreaResult">
          <td class="text-center" >
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
          <td><div class="text-center">{{correct_answer}}</div></td>
        </tr>
        </tbody>
      </table>
      <div style="margin-top: 10px"> نتيجة الاختبار :<strong> Fail</strong></div>
      <div style="width: 80%; margin: auto;display: flex" class="no-print option-btn">
        <button class="btn btn-social genPDF" @click="normal_display" id = "download" >Normal</button>
        <button class="btn btn-social genPDF" @click="genPDF" id = "download" >PDF</button>
        <button class="btn btn-social genPDF" @click="print" id = "printCertificate">Print</button>
        <button class="btn btn-social genPDF" @click="close" id = "close_print">Close</button>
      </div>
    </div>
  </div>

</template>


<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
<script>
import User_ApiService from "common/user_api.service";
User_ApiService.init();
import jsPDF from 'jspdf'
import miniToastr from "mini-toastr";
export default {
  name: "print",
  data(){
    return {
      page_language:'',
      arabic:0,
      testConfigData:{},
      today:'',
      first_testResult:{},
      correct_answer:0,
      incorrect_answer:0,
      test_final_result:0,
      topicAreaResult:{},

      model:{
        testResultData:[],
        language:''
      }
    }
  },
  beforeMount() {

    //
  },
  methods:{
    arabic_display(){
      this.arabic = 1;
    },
    normal_display(){
      this.arabic = 0;
    },
    genPDF() {
      $(".genPDF ").hide();
      html2canvas(document.body, {
        onrendered: function (canvas) {
          var img = canvas.toDataURL("image/png");
          var doc = new jsPDF();
          doc.addImage(img, "JPEG", 0, 0, 210, 150);
          doc.save("testResult.pdf");

          $('#printCertificate').show();
          $('#download').show();
          $('#close_print').show();
        }
      });
    },
    print(){
      window.print();
    },
    close(){
      this.$store.dispatch('logout');
      this.$router.push('/login');
    },
  },
  mounted: function() {
    this.arabic = 0
    $(".left-aside").hide()
    $('header').hide()
    $(".right-aside").css("margin-left", 0);
    $(".right-aside").css("background-color", "#ffffff");
    $(".content-header ").hide();
    $(".wrapper ").css("margin-top", 10);
    $(".modal-backdrop").hide()

    if(this.$store.state.testConfigData){
      localStorage.setItem('testConfigData_print',  JSON.stringify(this.$store.state.testConfigData))
      localStorage.setItem('first_testResult',  JSON.stringify(this.$store.state.testResultsArray))
      this.testConfigData = JSON.parse(localStorage.getItem('testConfigData_print'));

    }
    else {
      this.testConfigData = JSON.parse(localStorage.getItem('testConfigData_print'));

    }




    this.model.testResultData = this.$store.state.testResultsForRePrint;
    this.model.language = this.$i18n.locale;

    console.log('this.modelthisddd.modelthis.model',this.model)


    User_ApiService.post('getTopicArea',this.model).then(
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





    var temp_review_data = [];
    var count = 0;
    for (var key in this.model.testResultData) {
      if (!this.model.testResultData.hasOwnProperty(key)) continue;
      var obj = this.model.testResultData[key];
      if(obj.status === true){
        count++;
      }
    }

    this.correct_answer = count;
    this.incorrect_answer = this.testConfigData.noofquestion-count;
    if(this.testConfigData.reqnoofanswer>count){
      this.test_final_result = 0;
    }else {
      this.test_final_result = 1;
    }

    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    // let current_datetime = new Date()
    // this.today = current_datetime.getDate() + "-" + months[current_datetime.getMonth()] + "-" + current_datetime.getFullYear()
    this.today = this.model.testResultData[0].updated_at

    },
  destroyed: function() {
  },
  created() {
    this.page_language = this.$i18n.locale;
  }

}
</script>
<style type="text/css" scoped>
.instruction{
  border: solid gray 1px;
}
.instruction-txt{
  padding: 10px;
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
.note-description-wrapper{
  padding: 110px 0;
}
</style>
<style>
@media print
{
  .no-print, .no-print *
  {
    display: none !important;
  }
}

</style>
