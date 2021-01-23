<?php

namespace App\Http\Controllers;


use App\Model\Testresults;
use App\Model\Testquestions;
use Illuminate\Http\Request;
use App\Model\Category;
use App\Model\Questions;
use App\Model\Testconfig;
use App\Model\Questionstate;
use App\Model\QuestionTranslations;
use DB;
use App\Traits\FileOperation;
use Illuminate\Support\Facades\Auth;
class TestController extends Controller
{
    use FileOperation;
    public function getQuestionStmt($questionId, $language) {
        $rows = QuestionTranslations::where('questionid',$questionId)->where('language', $language)->get()->toArray();
        foreach ($rows as $row) {
            $result = $row;
            $result['translationId'] = $result['id'];
            unset($result['id']);
            if ($result['language'] === $language) {
                return $result;
            }
        }
        if(!is_null($rows) && isset($rows[0])){
            $result = $rows[0];
            $result['translationId'] = $result['id'];
            unset($result['id']);
            return $result;
        }else{
            return Array();
        }
        // return $row;
    }

    public function getQuestionStmtAudio($response, $audio_language){


        foreach ($response as $key => $row) {
            $rows = QuestionTranslations::where('questionid',$row['id'])->get();
            $status = false;
            $audio = [];
            foreach ($rows as $qkey => $qrow) {
                $result = $qrow;
                if ($result['language'] == $audio_language) {
                    $status = true;
                    $audio = $qrow;
                }
            }
            if($status){
                $response[$key]['audio'] = $audio['audio'];
                $response[$key]['option1audio'] = $audio['option1audio'];
                $response[$key]['option2audio'] = $audio['option2audio'];
                $response[$key]['option3audio'] = $audio['option3audio'];
            }else{
                $response[$key]['audio'] = "";
                $response[$key]['option1audio'] = "";
                $response[$key]['option2audio'] = "";
                $response[$key]['option3audio'] = "";
            }
        }
        return $response;
    }

    public function getTestConfig(Request $request){

        $category = $request->input('category');
        if(!is_null($category) && $category!=""){
            $result=Testconfig::where('testcategory',$category)->get();
        }
        else{
            $result=Testconfig::all();
        }

        $update = [];
        foreach ($result as $k=> $result_data){
            $temp = $result_data;
            $temp['testCategoryName'] = DB::table('category')->where('id',$category)->first()->name;
            $update[] = $temp;
        }


        return response()->json([
            'status'=>'success',
            'data'=>$update
        ]);
    }

    public function loadTest(Request $request){



        $input=$request->all();

        $response = array();
        if ($input['testType'] == 'realtime') {
            if($input['common'] > 0) {
                $rows=Questions::where([['isCommon','=',1],['status','=',1]])->orderByRaw("RAND()")
                                ->limit($input['common'])->get()->toArray();
                foreach ($rows as $row){
                    $result = array_merge($row, $this->getQuestionStmt($row['id'], $input['language']));
                    $response[]=$result;
                }
            }
            if($input['specific'] > 0) {
                $rows = Questions::where([['category','=',$input['testCategory']],['isSpecific','=',1],['status','=',1]])->orderByRaw("RAND()")
                        ->limit($input['specific'])->get()->toArray();

                foreach ($rows as $row) {
                    $result = array_merge($row, $this->getQuestionStmt($row['id'], $input['language']));
                    $response[]=$result;
                }
            }
        }

        elseif($input['testType'] == 'practise') {
            $model = Questionstate::where('user_id',$input['user_id'])->get()->toArray();
            foreach ($model as $value) {
                $rows =Questions::where('id = '.$value->question_id)->get()->toArray();
                foreach ($rows as $kvalue) {
                    $result =  $kvalue;
                    $result = array_merge($result, $this->getQuestionStmt($result['id'], $input['language']));
                    $response[]=$result;
                }
            }
        }
        else {
            switch ($input['testType']) {
                case 'common':
                    $query1=['isCommon','=',1];
                    break;
                case 'specific':
                    $query1=['isSpecific','=',1];
                    break;
            }
            $response = array();
            $rows = Questions::where([['category','=',$input['testCategory']],['isPractise','=',1],['status','=',1],$query1,])
                                ->limit($input['limit'])->get()->toArray();

            foreach ($rows as $row) {
                $result =  $row;
                $result = array_merge($result, $this->getQuestionStmt($result['id'], $input['language']));
                array_push($response, $result);
            }
        }
        $audio_language = isset($input['audio_language']) ? $input['audio_language'] : null;



        if($audio_language != null){
            $response = $this->getQuestionStmtAudio($response, $audio_language);

        }

        return response()->json([
            'status' => 'success',
            'data' => $response
        ]);
        return $request->all();


    }

    public function testComplete(Request $request){

        $data = $request->input('result');
        if($data){
            $testResult = new Testresults;
            $testResult->studentid = $request->input('studentId');
            $testResult->test_time = $request->input('testTime');
            $testResult->duration = $request->input('duration');
            if($request->input('supervisoridByLogin')){
                $testResult->adminid = $request->input('supervisoridByLogin');
            }
            else{
                $testResult->adminid = 1;
            }

            $testResult->category = $request->input('category');
            $testResult->save();

            $testId = $testResult->id;
            foreach ($data as $row) {
                $Testquestions = new Testquestions;
                $Testquestions->testid = $testId;
                $Testquestions->questionid = $row['question'];
                $Testquestions->input = $row['input'];
                $Testquestions->input = 1;
                $Testquestions->status = $row['status'];
                $Testquestions->save();
            }

            if($Testquestions->save()){
                $result = [
                    'success' => true,
                    'data' => $data,
                    'message' => 'Test finished successfully'
                ];
            }else{
                $result = [
                    'success' => false,
                    'message' => 'Test data storing is failed'
                ];
            }
            return response()->json($result);
        }
        else{
            $result = [
                'success' => false,
                'message' => 'Changes you made may not be saved'
            ];
            return response()->json($result);
        }


    }
}
