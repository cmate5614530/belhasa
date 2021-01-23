<template>
  <div> <br><br>
    <div class="col-lg-12 mb-3">
      <b-card header="" header-tag="h4" class="bg-success-card datatable-material">
        <div class="card-header card-header-icon card-header-rose">
          <div class="card-icon">
            <i class="material-icons">assignment</i>
          </div>
        </div><br><br>
        <div class="card-body">
          <div class="card-body-row">
            <div class="form-row">
                <div class="col-md-12">
                  <label class="form-control-label"  for="input-file-import">Upload Excel File</label>
                  <input type="file" class="form-control bulk-upload-input" accept=".xlsx,.xls"    id="input-file-import" name="file_import" ref="import_file"  @change="onFileChange">
                </div>
            </div>
          </div><br>
          <div class="text-center">
            <button class="btn btn-success save-question" @click="proceedAction" v-if="saveDataButton">Save Question</button>
            <button class="btn btn-success save-question btn-disable" v-if="!saveDataButton">Save Question</button>
            <a :href="'#/admin/questionmanagement/'+ this.$route.params.category_id+ '/'+ this.$route.params.test_type"><button class="btn btn-danger">Cancel</button></a>
          </div>
        </div>
      </b-card>
    </div>
  </div>

</template>
<script>
import Admin_ApiService from '../../../common/admin_api.service';
Admin_ApiService.init();
import options from "src/validations/validations.js";
import miniToastr from "mini-toastr";
miniToastr.init();
var unsub;
import XLSX from 'xlsx';
import Vue from "vue";
import datatable from "../../plugins/DataTable/DataTable";



export default {
  name: "bulk_import",

  data() {
    return {
      saveDataButton:true,
      temp_modal_data:{},
      uploadConfigData: 0,
      testType : '',
      tempBulkData:[],

      model: {
        question_type:{},
        bulkData:[],

      }
    };
  },
  beforeRouteLeave(to, from, next) {
    unsub();
    next();
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
    this.tempBulkData.bulkData = []
    miniToastr.setIcon('error', 'i', {
      'class': 'fa fa-times'
    });
    miniToastr.setIcon('success', 'i', {
      'class': 'fa fa-arrow-circle-o-down'
    });
  },
  methods: {
    proceedAction(){

    this.model.bulkData = this.tempBulkData.bulkData;

      console.log('this.tempBulkData.bulkData.length',this.tempBulkData.bulkData.length)
      if(this.tempBulkData.bulkData.length>0){
        this.model.categoryId = this.$route.params.category_id

        switch(this.$route.params.test_type) {
          case 'realtime':
            this.testType = 'realtime'
            break;
          case 'common':
            this.testType = 'practise'
            break;
          case 'specific':
            this.testType = 'practise'
            break;
        }

        var question_type={
          testType:this.testType,
          isCommon:false,
          isSpecific:false
        };


        if (this.$route.params.test_type === 'common') {
          question_type.isCommon = true;
        } else if (this.$route.params.test_type === 'specific') {
          question_type.isSpecific = true;
        }
        else {
          question_type.isSpecific = true;
        }
        this.model.question_type = question_type;

        console.log('---------',this.model)
        this.saveDataButton = false
        Admin_ApiService.post('BulkUpload', this.model).then(
            result=>{
              let data=result.data;
              if(data.success){
                var files = ''
                $('#input-file-import').val('')
                this.tempBulkData.bulkData = []
                miniToastr.success(data.message)
                this.saveDataButton = true
              }
            },
            error=>{
              this.tempBulkData.bulkData
              console.log('error')
              miniToastr.error('Question creating is failed')
              this.saveDataButton = true
            }
        ).catch(function (error) {
          console.log(error)
        });
      }
      else{
        alert('upload file')
      }



    },
    onFileChange(e) {

      var files = e.target.files, f = files[0];
      var reader = new FileReader();
      reader.onload = function(e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, {type: 'array'});
        let sheetName = workbook.SheetNames[0]
        /* DO SOMETHING WITH workbook HERE */

        let worksheet = workbook.Sheets[sheetName];

        this.bulkData = XLSX.utils.sheet_to_json(worksheet)
      };
      this.tempBulkData = reader

      reader.readAsArrayBuffer(f);

    },
  }
}
</script>
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
.bulk-upload-input{
  background-image: none;
}
.card-body-row{
  border: solid gray 1px;
  padding: 10px;
  border-radius: 5px;
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