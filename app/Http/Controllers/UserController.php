<?php

namespace App\Http\Controllers;

use App\Model\Language;
use App\Model\Questions;
use App\Model\Testconfig;
use App\Model\Testquestions;
use App\Model\Testresults;
use App\Model\QuestionTranslations;
use App\Model\Usersession;



use Illuminate\Http\Request;
use App\Model\User;
use App\Model\Topicarea;
use App\Model\Category;
use App\Traits\FileOperation;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Image;
use DB;
use App\Mail\SendMailable;
use App\Mail\SendMail;
use Illuminate\Support\Facades\Mail;
use DateTime;
use Illuminate\Support\Facades\Auth;
use Illuminate\Routing\UrlGenerator;
use Session;

//use Auth;

class UserController extends Controller
{
    use FileOperation;
    public function userLogin(Request $request){
        $studentId=$request->input('studentId');
        $supervisorId=$request->input('supervisorId');        
        $password=sha1($request->input('password'));
       
        $admin = User::Where('StudentId',$supervisorId)->where('password', $password)->where('status', 1)->get();
 
        if(count($admin)>0){
            $student = User::Where('StudentId',$studentId)->where('status', 1)->get();
            if(count($student)>0){
                $model = new Usersession;
                $model->sid = $request->input('studentId');
                $model->name = $admin[0]->name;
                $model->adminid = $admin[0]->id;
                $flag  = $model->save();

                $user=$student->first(); 
                $result =[
                    'success' => true,
                    'data' => $user
                ];
            }
            else{
                $result = [
                    'success' => false,
                    'message' => 'User ID or Password is wrong '
                ];
            }
        }
        else{
            $result = [
                'success' => false,
                'message' => 'User ID or Password is wrong '
            ];
        }
        
        return response()->json($result);


    }

    public function userLogout(Request $request){
        guard()->logout();
    }
    public function userRegister(Request $request){

//        echo $request->input('croppedImageSrc');
//        exit;

//        $profile_image = $request->input('croppedImageSrc');
        $validator = Validator::make($request->all(), [
            'studentId' => 'string|unique:user',
            'email' => 'string|unique:user',
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors();
            if ($errors->has('studentId')) {
                $message = $errors->first('studentId');
                $result = [
                    'success' => false,
                    'message' => $message
                ];
                return response()->json($result);
            }
            if ($errors->has('email')) {
                $message = $errors->first('email');
                $result = [
                    'success' => false,
                    'message' => $message
                ];
                return response()->json($result);
            }
        }

        if(!empty($request->input('croppedImageSrc'))){
            $profile_image = $request->input('croppedImageSrc');
            $image = str_replace('data:image/png;base64,', '', $profile_image);
            $image=base64_decode($image);
            $image_name = md5(uniqid(rand(), true));
            $filename = $image_name . '.' . 'png';
            $path = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\images\profile/';
            file_put_contents($path . $filename, $image);
            $photo = url('/').'/public/images/profile/'.$filename;
        }
        else{
            $photo = url('/').'/public/images/profile/avatar.png';
        }

        if($request->input('gender') == 'A') {
            $gender = 'Male';
        }
        else
            $gender = 'Female';
        if($request->input('married') == 'a'){
            $maritalStatus = 'Single';
        }
        else
            $maritalStatus = 'Married';

            $user = new User;
            $user->studentId = $request->input('studentId');
            $user->name = $request->input('first_name').' '.$request->input('last_name');
            $user->email = $request->input('email');
            $user->isAdmin = 0;
            $user->	resume_test = 0;
            $user->	time = new Datetime("now");
            $user->test = '';
            $user->photo = $photo;

            $user->gender = $gender;
            $user->nationality = $request->input('nationality');
            $user->dob = $request->input('dob');
            $user->age = $this->calculateAge($request->post('dob'));
            $user->maritalStatus = $maritalStatus;
            $user->password = sha1($request->input('password'));
            $user->confirmPassword = sha1($request->input('repeatPassword'));
            $user->passport = $request->input('passport_details');
            $user->emirates = $request->input('emirates_id_details');
            $user->language = '';
            $user->show_instruction = 0;
            $user->category = '';


            if ($request->post('adminPassCode')) {

                $admin = User::Where('password',sha1($request->post('adminPassCode')) )->where('isAdmin', 1)->get();
                if (count($admin) >0) {
                    $result =[
                        'success' => false,
                        'message' => 'Incorrect admin credentials'
                    ];
                    return response()->json($result);
                } else {
                    $user->status = 1;
                }
            }

        if($user->save()){
            if ($user->status === 1) {

                $result = array(
                    'success' => true,
                    'data' => 'success...'
                );
            } else {

                $verification_code = $this->getToken(4);

                $message = "Belhash Driving Center code is " . $verification_code . ". Don't share this code with others";
//                $data = array(
//                    'logo' =>url('/').'/public/images/symbol.png',
//                    'name' =>$user->name,
//                    'message' => $message,
//                );
//                Mail::to($user->email)->send(new SendMailable($data));
                $result = array(
                    'success' => true,
                    'message' => 'Thank you, your registration is success. You will receive an activation email shortly.'
                );
            }
        }
        else {
            $result = array(
                'success' => false,
                'message' => 'Unable to create account, Please contact your Administrator',
            );
        }
        return response()->json($result);
    }
    private function getToken($length)
    {
        $token = "";
        $codeAlphabet = "0123456789";
        $max = strlen($codeAlphabet);
        for ($i = 0; $i < $length; $i++) {
            $token .= $codeAlphabet[random_int(0, $max - 1)];
        }
        return $token;
    }

    private function calculateAge($dob) {
        $dob = explode("-",$dob);
        $curMonth = date("m");
        $curDay = date("j");
        $curYear = date("Y");
        $age = $curYear - $dob[0];
        if($curMonth<$dob[1] || ($curMonth==$dob[1] && $curDay<$dob[2]))
            $age--;
        return $age;
    }

    public function adminLogin(Request $request){
        $input=$request->all();
        $email=$input['email'];
        $password=sha1($input['password']);
        $temps=User::where([['email','=',$email],['password','=',$password],['isAdmin','=','1'], ['status','=','1']])->get();
        if($temps->count()>0){
            $user=$temps->first();
//            $user->photo=$this->getFileLink($user->photo, 'images/profile',1);
            $total_users = User::where('isAdmin', '!=', 1)->get();

            $result = [
                'success' => true,
                'data' => $user,
                'total_user_number' => count($total_users)
            ];
        }else{
            $result = [
                'success' => false,
                'message' => 'Incorrect Username / Password'
            ];
        }
        return $result;
    }

    public function admingetStudentData(Request $request){
        $studentId = $request->input('studentid');
        $studentData = DB::table('user')->where('id',$studentId)->get();
        if($studentId){
            $result = [
                'success' => true,
                'studentData' => $studentData,
            ];
        }
        else{
            $result = [
                'success' => false,
                'studentData' => $studentData,
            ];
        }
        return $result;


    }
    public function adminGetUsersData(){
        $approvalUsers = User::where('isAdmin', '!=', 1)->get();
        $requestedUsers = User::where('status', '=', 0)->get();
        $questions = Questions::where('status', '=', 1)->get();
        $testResults = Testresults::get();
        if(!empty($approvalUsers) && !empty($questions) && !empty($requestedUsers) && !empty($testResults)){
            $result = [
                'success' => true,
                'usersNum' => count($approvalUsers),
                'requestedUsersNum' => count($requestedUsers),
                'questionsNum' => count($questions),
                'testResultsNum' => count($testResults),

            ];
        }
        else{
            $result = [
                'success' => false,
                'usersNum' => count($approvalUsers),
                'requestedUsersNum' => count($requestedUsers),
                'questionsNum' => count($questions),
                'testResultsNum' => count($testResults),

            ];
        }
        return $result;
    }

    public function adminGetUsers(){
        $UsersData = User::orderBy('id', 'DESC')->get();
        if(!empty($UsersData)){
            $result = [
                'success' => true,
                'usersData' => $UsersData,
            ];
        }
        else{
            $result = [
                'success' => false,
                'usersNum' => $UsersData,
            ];
        }
        return $result;
    }

    public function adminGetCategory(){

        $CategoryData = Category::where('status', 1)->get();
        if(!empty($CategoryData)){
            $result = [
                'success' => true,
                'CategoryData' => $CategoryData,
            ];
        }
        else{
            $result = [
                'success' => false,
                'CategoryData' => $CategoryData,
            ];
        }
        return $result;
    }
    public function adminGetCategoryById(Request $request){
        $category_id = $request->input('category_id');

        $categoryData = Category::where('id', $category_id)->first()->name;
        if($categoryData){
            $result = [
                'success' => true,
                'categoryData' => $categoryData,
            ];
        }
        else{
            $result = [
                'success' => false,
                'categoryData' => $categoryData,
            ];
        }

        return $result;
    }

    public function adminGetLanguageData(){
        $languageData = Language::where('status', 1)->get();
        if(count($languageData)>0){
            $result = [
                'success' => true,
                'languageData' => $languageData,
            ];
        }
        else{
            $result = [
                'success' => false,
                'languageData' => $languageData,
            ];
        }
        return $result;
    }




    public function adminCreateUser(Request $request){

        $isAdmin = $request->input('isAdmin');
        $studentId = $request->input('studentId');
        $password = $request->input('password');

            $validator = Validator::make($request->all(), [
                'studentId' => 'string|unique:user',
                'email' => 'string|unique:user',
            ]);
            if ($validator->fails()) {
                $errors = $validator->errors();
                if ($errors->has('studentId')) {
                    if($isAdmin ==0){$message = 'Student Id already exist in App';}
                    if($isAdmin ==1){$message = 'Admin Id already exist in App';}
                    if($isAdmin ==2){$message = 'Supervisor Id already exist in App';}
                    $result = [
                        'success' => false,
                        'message' => $message
                    ];
                    return response()->json($result);
                }
                if ($errors->has('email')) {
                    $message = $errors->first('email');
                    $result = [
                        'success' => false,
                        'message' => $message
                    ];
                    return response()->json($result);
                }
            }
            if($isAdmin == 1){
                $check = User::where('password', sha1($password))->get();
                if(count($check)>0){
                    $result = [
                        'success' => false,
                        'message' => 'Passcode already exists. Please, try a different passcode'
                    ];
                    return response()->json($result);
                }
            }

        if(!empty($request->input('croppedImageSrc'))){
            $profile_image = $request->input('croppedImageSrc');
            $image = str_replace('data:image/png;base64,', '', $profile_image);
            $image=base64_decode($image);
            $image_name = md5(uniqid(rand(), true));
            $filename = $image_name . '.' . 'png';
            $path = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\images\profile/';
            file_put_contents($path . $filename, $image);
            $photo = url('/').'/public/images/profile/'.$filename;
        }
        else{
            $photo = url('/').'/public/images/profile/avatar.png';
        }

        if(!empty($request->input('dob'))){
            $dob = $request->input('dob');
            $age = $this->calculateAge($request->post('dob'));
        }
        else{
            $dob = '1900-01-01 ';
            $age = 0;
        }
        $user = new User;
        $user->studentId = $request->input('studentId');
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->isAdmin = $isAdmin;
        $user->	resume_test = 0;
        $user->	time = new Datetime("now");
        $user->test = '';
        $user->photo = $photo;
        $user->gender = $request->input('gender');
        $user->nationality = $request->input('nationality');
        $user->dob = $dob;
        $user->age = $age;
        $user->maritalStatus = $request->input('married');
        $user->password = sha1($request->input('password'));
        $user->confirmPassword = sha1($request->input('repeatPassword'));
        $user->passport = $request->input('passport_details');
        $user->emirates = $request->input('emirates_id_details');
        $user->language = '';
        $user->show_instruction = 0;
        $user->category = 1;
        $user->status = true;
        $user->save();
        if($user->save()){
            $result = [
                'success' => true,
                'message' => 'Created user successfully'
            ];
        }else{
            $result = [
                'success' => false,
                'message' => 'Unable to create account for this Student'
            ];
        }
        return response()->json($result);

    }

    public function adminViewUser($id){
        $userData = User::where('id', $id)->get();
        if(count($userData)){
            $result = [
                'success' => true,
                'userData' => $userData
            ];
        }
        else{
            $result = [
                'success' => false,
                'userData' => $userData
            ];
        }
        return response()->json($result);
    }

    public function adminChangeRole(Request $request){
        $userRole = $request->input('role');
        $id = $request->input('id');
        $userData = User::where('id', $id)->get();
        $userStatus = $userData[0]['status'];
        if($userStatus === 0){$Updated_userStatus = 1;}
        if($userStatus === 1){$Updated_userStatus = 0;}

        $update = User::where('id', $id)->update(['status' => $Updated_userStatus]);

        if($update){
            $result = [
                'success' => true,
                'id' => $id,
                'userRole' => $Updated_userStatus,
            ];
        }
        else{
            $result = [
                'success' => true,
                'id' => $id,
                'userRole' => $Updated_userStatus,
            ];
        }

        return response()->json($result);
    }

    public function userEditUser(Request $request){

        $name = $request->input('name');
        $studentId = $request->input('studentId');
        $email = $request->input('email');
        $gender = $request->input('gender');

        $category = $request->input('category');


        if(!empty($request->input('croppedImageSrc'))){
            $profile_image = $request->input('croppedImageSrc');
            $image = str_replace('data:image/png;base64,', '', $profile_image);
            $image=base64_decode($image);
            $image_name = md5(uniqid(rand(), true));
            $filename = $image_name . '.' . 'png';
            $path = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\images\profile/';
            file_put_contents($path . $filename, $image);
            $photo = url('/').'/public/images/profile/'.$filename;
        }
        else{
            $userData = User::where('id', $studentId)->get();
            $photo = $userData[0]['photo'];

        }

        $update = DB::table('user')->where('id', $studentId)->update([
            'name' => $name,
            'email' => $email,
            'gender' => $gender,
            'category' => $category,
            'photo' => $photo,
        ]);

        $updatedUserData = User::where('id', $studentId)->get();

        if($update){
            $result = [
                'success' => true,
                'updatedUserData' => $updatedUserData[0],
                'message' => 'Updated successfully',
            ];
        }
        else{
            $result = [
                'success' => false,
                'message' => 'Updated failed',
            ];
        }
        return response()->json($result);
    }


    public function adminEditUser(Request $request){
        $name = $request->input('name');
        $studentId = $request->input('studentId');
        $email = $request->input('email');
        $gender = $request->input('gender');

        $category = $request->input('category');
        $userType = $request->input('userType');
        $nationality = $request->input('nationality');
        $dob = $request->input('dob');
        $maritalStatus = $request->input('maritalStatus');
        $emirates_id_details = $request->input('emirates_id_details');
        $emirates_id_details = $request->input('emirates_id_details');
        $passport_details = $request->input('passport_details');

        if(!empty($request->input('croppedImageSrc'))){
            $profile_image = $request->input('croppedImageSrc');
            $image = str_replace('data:image/png;base64,', '', $profile_image);
            $image=base64_decode($image);
            $image_name = md5(uniqid(rand(), true));
            $filename = $image_name . '.' . 'png';
            $path = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\images\profile/';
            file_put_contents($path . $filename, $image);
            $photo = url('/').'/public/images/profile/'.$filename;
        }
        else{
            $userData = User::where('studentId', $studentId)->get();
            $photo = $userData[0]['photo'];
        }

        $update = User::where('studentId', $studentId)->update([
            'name' => $name,
            'email' => $email,
            'gender' => $gender,
            'category' => $category,
            'photo' => $photo,
            'isAdmin' => $userType,
            'nationality' => $nationality,
            'dob' => $dob,
            'maritalStatus' => $maritalStatus,
            'emirates' => $emirates_id_details,
            'passport' => $passport_details,
        ]);

            $result = [
                'success' => true,
                'message' => 'Updated successfully',
            ];

        return response()->json($result);
    }

    public function adminDeleteQuestion(Request $request){
        $id = $request->input('deletequestionid');
        $result1 = DB::table('questions')->where('id', $id)->delete();
        $result2 = DB::table('questions_translations')->where('questionid', $id)->delete();
        if(!empty($result1)){
            $result = [
                'success' => true,
                'message' => 'Deleted successfully',
            ];
        }
        else{
            $result = [
                'success' => false,
                'message' => 'Deleted Failed',
            ];
        }

        return $result;
    }

    public function adminGetCategories(){
        $CategoryData = Category::get();
        if(!empty($CategoryData)){
            $result = [
                'success' => true,
                'CategoryData' => $CategoryData,
            ];
        }
        else{
            $result = [
                'success' => false,
                'CategoryData' => $CategoryData,
            ];
        }
        return $result;
    }

    public function adminChangeCategoryStatus(Request $request){

        $category_id = $request->input('category_id');
        $action = $request->input('action');
        $category_update = Category::where('id', $category_id)->update(['status'=>$action]);
        if($category_update){
            $result = [
                'success' => true,
                'category_id' => $category_id,
                'action' => $action,
            ];
        }
        else{
            $result = [
                'success' => false,
                'category_id' => $category_id,
                'action' => $action,
            ];
        }
        return $result;
    }

    public function adminGetCategoryData($category_id){

        $categoryData = Category::where('id', $category_id)->get();
        if(count($categoryData)>0){
            $result = [
                'success' => true,
                'categoryData' => $categoryData[0],
            ];
        }
        else{
            $result = [
                'success' => false,
                'categoryData' => $categoryData[0],
            ];
        }

        return $result;
    }

    public function adminEditCategory(Request $request){
        $categoryId = $request->input('categoryId');
        $categoryName = $request->input('categoryName');

        $update = Category::where('id', $categoryId)->update(['name'=>$categoryName]);
        if($update){
            $result = [
                'success' => true,
                'categoryData' => $categoryId,
                'categoryName' => $categoryName,
                'message' => 'Updated successfully',
            ];
        }
        else{
            $result = [
                'success' => false,
                'categoryData' => $categoryId,
                'categoryName' => $categoryName,
                'message' => 'Updated is failed',
            ];
        }
        return $result;
    }

    function insertCategory($name, $testcategory, $category){
        $category_model = new Testconfig;
        $category_model->name = $name;
        $category_model->testcategory = $testcategory;
        $category_model->category = $category;
        $category_model->noofquestion = 0;
        $category_model->reqnoofanswer = 0;
        $category_model->noofspecificquestion = 0;
        $category_model->noofcommonquestion = 0;
        $category_model->noofreqspecificanswer = 0;
        $category_model->noofreqcommonanswer = 0;
        $category_model->duration = 0;
        $category_model->save();
        return ;
    }
    public function adminCreateCategory(Request $request){

        $categoryCheck = Category::where('name', $request->input('categoryName'))->get();





        if(count($categoryCheck)>0){
            $result = [
                'success' => false,
                'categoryName' => $request->input('categoryName'),
                'message' => 'Category already exist',
            ];
        }
        else{
            $category = new Category();
            $category->name = $request->input('categoryName');
            $category->status = 1;
            if($category->save()){



                $status = $this->insertCategory("Realtime Question",$category->id,"realtime");
                $status = $this->insertCategory("Common Question",$category->id,"common");
                $status = $this->insertCategory("Specific Question",$category->id,"specific");
                $result = [
                    'success' => true,
                    'categoryName' => $category->name,
                    'message' => 'Created successfully',
                ];
            }
            else{
                $result = [
                    'success' => false,
                    'categoryName' => $category->name,
                    'message' => 'Creating is failed',
                ];
            }
        }

        return $result;
    }

    public function adminGetTopicArea(){

        $topicAreaData = Topicarea::where('status', 1)->get();
        $result = [];
        foreach ($topicAreaData as $row){
            $temp = $row;
            $questionData = Questions::where('status', 1)->where('topicArea',$row['id'] )->get();
            $temp['questionCount'] = count($questionData);
            $result[] = $temp;
        }
        rsort($result);
        if(count($result)>0){
            $result = [
                'success' => true,
                'topicAreaData' => $result,
            ];
        }
        else{
            $result = [
                'success' => false,
                'topicAreaData' => $result,
            ];
        }
        return $result;
    }

    public function adminGetTopicAreaData($topic_id){
        $topicAreaData = Topicarea::where('id', $topic_id)->get();
        if(count($topicAreaData)){
            $result = [
                'success' => true,
                'topicAreaData' => $topicAreaData,
            ];
        }
        else{
            $result = [
                'success' => false,
                'topicAreaData' => $topicAreaData,
            ];
        }
        return $result;
    }

    public function adminEditTopicArea(Request $request){

        $topic_id = $request->input('topicId');
        $name = $request->input('name');
        $name_ar = $request->input('name_ar');if(empty($name_ar)){$name_ar = '';}
        $name_ta = $request->input('name_ta');if(empty($name_ta)){$name_ta = '';}
        $name_ur = $request->input('name_ur');if(empty($name_ur)){$name_ur = '';}
        $name_hi = $request->input('name_hi');if(empty($name_hi)){$name_hi = '';}
        $name_be = $request->input('name_be');if(empty($name_be)){$name_be = '';}
        $name_ma = $request->input('name_ma');if(empty($name_ma)){$name_ma = '';}
        $name_fa = $request->input('name_fa');if(empty($name_fa)){$name_fa = '';}
        $name_ch = $request->input('name_ch');if(empty($name_ch)){$name_ch = '';}
        $name_ru = $request->input('name_ru');if(empty($name_ru)){$name_ru = '';}
        $update = Topicarea::where('id', $topic_id)->update([
            'name' => $name,
            'name_ar' => $name_ar,
            'name_ta' => $name_ta,
            'name_ur' => $name_ur,
            'name_hi' => $name_hi,
            'name_be' => $name_be,
            'name_ma' => $name_ma,
            'name_fa' => $name_fa,
            'name_ch' => $name_ch,
            'name_ru' => $name_ru,
        ]);
        if($update){
            $result = [
                'success' => true,
                'updatedTopicAreaData' => $update,
                'message' => 'Topic Area details are saved.',
            ];
        }
        else{
            $result = [
                'success' => false,
                'updatedTopicAreaData' => $update,
                'message' => 'Topic Area name already exists.',
            ];
        }
        return $result;
    }

    public function adminCreateTopicArea(Request $request){
        $name = $request->input('name');

        $name_ar = $request->input('name_ar');if(empty($name_ar)){$name_ar = '';}
        $name_ta = $request->input('name_ta');if(empty($name_ta)){$name_ta = '';}
        $name_ur = $request->input('name_ur');if(empty($name_ur)){$name_ur = '';}
        $name_hi = $request->input('name_hi');if(empty($name_hi)){$name_hi = '';}
        $name_be = $request->input('name_be');if(empty($name_be)){$name_be = '';}
        $name_ma = $request->input('name_ma');if(empty($name_ma)){$name_ma = '';}
        $name_fa = $request->input('name_fa');if(empty($name_fa)){$name_fa = '';}
        $name_ch = $request->input('name_ch');if(empty($name_ch)){$name_ch = '';}
        $name_ru = $request->input('name_ru');if(empty($name_ru)){$name_ru = '';}
        $topicArea = new Topicarea;
        $topicArea->name = $name;
        $topicArea->name_ar = $name_ar;
        $topicArea->name_ta = $name_ta;
        $topicArea->name_ur = $name_ur;
        $topicArea->name_hi = $name_hi;
        $topicArea->name_be = $name_be;
        $topicArea->name_ma = $name_ma;
        $topicArea->name_fa = $name_fa;
        $topicArea->name_ch = $name_ch;
        $topicArea->name_ru = $name_ru;
        $topicArea->save();

        if($topicArea->save()){
            $result = [
                'success' => true,
                'message' => 'Topic Area details are saved.',
            ];
        }
        else{
            $result = [
                'success' => false,
                'message' => 'Topic Area details are failed.',
            ];
        }
        return $result;
    }

    public function adminDeleteTopicArea(Request $request){
        $topic_id = $request->input('topic_id');
        $update_topic = Topicarea::where('id',$topic_id)->update(['status' => 0]);
        $question = Questions::get();

        $result = [];
        foreach ($question as $k=> $row) {
            if($row['topicArea'] == $topic_id){
                Questions::where('id',$row['id'])->update(['status'=> 0]);
             }
        }
        if(!empty($update_topic)){
            $result = [
                'success' => true,
                'message' => $topic_id,
            ];
        }
        else{
            $result = [
                'success' => false,
                'message' => $topic_id,
            ];
        }
        return $result;
    }

    public function adminGetQuestionsCount(){

        $categories = Category::where('status', 1)->get();
        $count = array();
        foreach ($categories as $category) {

            $questions = Questions::where('category', $category['id'])->where('isRealtime', 1)->where('status', 1)->get();
            $realCount = count($questions);

            $questions= Questions::where('category', $category['id'])->where('isSpecific', 1)->where('isPractise', 1)->where('status', 1)->get();
            $specificCount = count($questions);

            $questions= Questions::where('category', $category['id'])->where('isCommon', 1)->where('isPractise', 1)->where('status', 1)->get();
            $commonCount = count($questions);

            $questions= Questions::where('category', $category['id'])->where('isCommon', 1)->where('isRealtime', 1)->where('status', 1)->get();
            $realtimeCommonCount = count($questions);

            $questions= Questions::where('category', $category['id'])->where('isSpecific', 1)->where('isRealtime', 1)->where('status', 1)->get();
            $realtimeSpecificCount = count($questions);

            array_push($count,  array('name'=>$category['name'], 'id' => $category['id'], 'realtime'=> $realCount, 'specificCount' => $specificCount, 'common'=>$commonCount, 'realtimeCommon'=>$realtimeCommonCount, 'realtimeSpecific'=>$realtimeSpecificCount));
        }
        if(count($count)){
            $result = [
                'success' => true,
                'data' => $count,
            ];
        }
        else{
            $result = [
                'success' => false,
                'data' => $count,
            ];
        }

        return $result;
    }

    public function adminGetQuestions(Request $request){

        $category_id = $request->input('category_id');
        $test_type = $request->input('test_type');

        if($test_type == 'realtime'){
            $questions= Questions::where('category', $category_id)->where('isSpecific', 1)->where('isRealtime', 1)->where('status', 1)->get();
        }
        else if($test_type == 'specific'){
            $questions= Questions::where('category', $category_id)->where('isSpecific', 1)->where('isPractise', 1)->where('status', 1)->get();
        }
        else{
            $questions= Questions::where('category', $category_id)->where('isCommon', 1)->where('isPractise', 1)->where('status', 1)->get();
        }

        $response = [];
        foreach ($questions as $k => $question){
            $item = $question;
            $item['topicAreaName'] = Topicarea::where('id', $question['topicArea'])->first()->name;
            $item['categoryName'] = Category::where('id', $question['category'])->first()->name;
            $questionTranslation = $this->getQuestionStmt($question['id'], 1);
            $temp = array_merge(json_decode(json_encode($item, true), true), json_decode(json_encode($questionTranslation, true), true));
            $response[] = $temp;
        }
        if(count($response)){
            $result_data= [
                'success' => true,
                'response' =>  $response,
            ];
        }
        else{
            $result_data= [
                'success' => false,
                'response' =>  $response,
            ];
        }
        return $result_data;
    }

    private function getQuestionStmt($questionId, $language) {

        $rows = QuestionTranslations::where('questionid',$questionId)->where('language', $language)->get();
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
    }

    public function adminLoadTestConfig(Request $request){

        $categoryId =$request->input('category_id');
        $testType =$request->input('test_type');

        $testConfigData = Testconfig::where('testcategory', $categoryId)->where('category', $testType)->get();
        if(count($testConfigData)>0){
            $result_data= [
                'success' => true,
                'testConfigData' =>  $testConfigData,
            ];
        }
        else{
            $result_data= [
                'success' => false,
                'testConfigData' =>  $testConfigData,
            ];
        }
        return $result_data;
    }

    public function adminEditTestConfig(Request $request){

        $no_spe_question = $request->input('no_spe_question');
        $no_com_question = $request->input('no_com_question');
        $total_question = $no_spe_question + $no_com_question;
        $no_spe_answer = $request->input('no_spe_answer');
        $no_com_answer = $request->input('no_com_answer');
        $duration = $request->input('duration');
        $testConfigDataId = $request->input('testConfigDataId');

        $update = Testconfig::where('id', $testConfigDataId)->update([
            'noofquestion' => $total_question,
            'noofspecificquestion' => $no_spe_question,
            'noofcommonquestion' => $no_com_question,
            'noofreqspecificanswer' => $no_spe_answer,
            'noofreqcommonanswer' => $no_com_answer,
            'reqnoofanswer' => $no_com_answer + $no_spe_answer,
            'duration' => $duration,

        ]);
        $result= [
            'success' => true,
            'message' => 'Updated successfully'
        ];

        return $result;
    }

    public function adminGetQuestionData(Request $request){

        $response = [];
        $questionId = $request->input('questionId');
        $questionData = Questions::where('id', $questionId)->get();
        $item = $questionData[0];


        $topicArea = Questions::where('id',$questionId)->first()->topicArea;
        $topicAreaName = Topicarea::where('id', $topicArea)->first()->name;
        $item['topicAreaName'] = $topicAreaName;

        $categoryId = Questions::where('id',$questionId)->first()->category;
        $categoryName = Category::where('id', $categoryId)->first()->name;
        $item['categoryName'] = $categoryName;

        $questionTranslation = $this->getQuestionStmt_all($request->input('questionId'));
        $temp = array_merge(json_decode(json_encode($item, true), true), json_decode(json_encode($questionTranslation, true), true));
        $response[] = $temp;


        if(count($response)>0){
            $result= [
                'success' => true,
                'questionData' => $response
            ];
        }
        else{
            $result= [
                'success' => false,
                'questionData' => $response
            ];
        }
        return $result;
    }

    private function getQuestionStmt_all($questionId){
        $rows = QuestionTranslations::where('questionid',$questionId)->get();
        foreach ($rows as $row) {
            $result = $row;
            $result['translationId'] = $result['id'];
            unset($result['id']);

        }
        if(!is_null($rows) && isset($rows[0])){
            $result = $rows[0];
            $result['translationId'] = $result['id'];
            unset($result['id']);
            return $result;
        }else{
            return Array();
        }
    }

    public function adminGetQuestionTransData(Request $request){
        $questionId = $request->input('questionId');
        $translationData = QuestionTranslations::where('questionid', $questionId)->get();
        $temp = [];
        foreach ($translationData as $item){
            $item['question_translate_id'] = $item['id'];
            $questionData = Questions::where('id', $item['questionid'])->get();
            $item = array_merge(json_decode(json_encode($item, true), true), json_decode(json_encode($questionData[0], true), true));
            $temp[] = $item;
        }
        if(count($temp)>0){
            $result= [
                'success' => true,
                'transData' => $temp
            ];
        }
        else{
            $result= [
                'success' => false,
                'transData' => $temp
            ];
        }
        return $result;
    }

    public function adminGetLogs(){
        $logs = Usersession::orderBy('id', 'DESC')->get();
        $adminData = User::whereNotIn('isAdmin', [0])->orderBy('id', 'DESC')->get();
        // $userData = User::where('isAdmin', 0)->orderBy('id', 'DESC')->get();
        $userData = User::orderBy('id', 'DESC')->get();
        if(count($logs)>0){
            $result= [
                'success' => true,
                'logs' => $logs,
                'student' => $userData,
                'admin' => $adminData,
            ];
        }
        else{
            $result= [
                'success' => false,
                'log' => $logs,
                'student' => $userData,
                'admin' => $adminData,
            ];
        }
        return $result;
    }

    public function usergetSupervisorId(Request  $request){

        $studentId = $request->input('supervisor_id');
        $id = DB::table('user')->where('studentId', $studentId)->first()->id;
        if($id){
            $result= [
                'success' => true,
                'id' => $id,
            ];
        }
        else{
            $result= [
                'success' => false,
            ];
        }
        return $result;
    }

    public function userGetResult(Request $request){

        $from = $request->input('from');
        $to = $request->input('to');
        $isAdmin = $request->input('isAdmin');
        $user_id= $request->input('user_id');

        $Result = Testresults::get();
        $resultCount = count($Result);
        $record = Testresults::whereBetween('testdate',[$from, $to])->get();

        if(count($record)>0){
            $test_ids=$record->pluck('id')->toArray();


            $user=User::where('id',$user_id)->get();


            $categoryIds = $record->pluck('category')->toArray();
            $categoryNames = Category::whereIn('id', $categoryIds)->get();
            $categoryName_maps = Array();
            foreach ($categoryNames as $categoryName){
                $categoryName_maps[strval($categoryName->id)] = $categoryName->name;
            }

            $test_questions=Testquestions::whereIn('testid',$test_ids)->get();
            $question_ids=$test_questions->pluck('questionid')->toArray();
            $test_question_maps=[];
            foreach ($test_questions as $question){
                $key=strval($question['testid']);
                $test_question_maps[$key][]=$question;
            }

            $question_translations=QuestionTranslations::whereIn('questionid', $question_ids)->get();
            $question_translation_maps=[];
            foreach ($question_translations as $question){
                $key=strval($question['questionid']);
                $question_translation_maps[$key][]=$question;
            }



            foreach ($record as $row){

                $correctSpecificAnswers = 0;
                $correctCommonAnswers = 0;

                $response = $row;

                $response['student'] = $user[0];

                $categoryName = isset($categoryName_maps[strval($row->category)])? $categoryName_maps[strval($row->category)]:Array();
                $response['categoryName'] = $categoryName;


                $questions = isset($test_question_maps[strval($row->id)]) ? $test_question_maps[strval($row->id)] : Array();

                foreach ($questions as $qrow){
                    if($qrow['status']){
                        $count = Questions::where('isRealtime', 1)->where('id', $qrow['questionid'])->get();
                        if(count($count)>0 && $count[0]['isSpecific']){
                            $correctSpecificAnswers++;
                        }
                        elseif (count($count) && $count[0]['isCommon']){
                            $correctCommonAnswers++;
                        }
                    }
                }

                $reqQuestions = Testconfig::where('testcategory',$row['category'])->where('category','realtime')->get();
                if(count($reqQuestions)>0 && $correctSpecificAnswers >= $reqQuestions[0]['noofreqspecificanswer'] && $correctCommonAnswers >= $reqQuestions[0]['noofreqcommonanswer']){
                    $response['result_status'] = 1;
                }
                else{
                    $response['result_status'] = 0;
                }
                $result[] = $response;
            }
            if(count($result)){
                $resultData= [
                    'success' => true,
                    'testResult' => $result,
                ];
            } else{
                $resultData= [
                    'success' => false,
                    'testResult' => $result,
                ];
            }

        }
        else{
            $resultData= [
                'success' => false,
                'testResult' => [],
            ];
        }
        return $resultData;

    }

    public function adminGetResult(Request $request){

        $from = $request->input('from');
        $to = $request->input('to');
        $isAdmin = $request->input('isAdmin');

        $Result = Testresults::get();
        $resultCount = count($Result);
        $record = Testresults::whereBetween('testdate',[$from, $to])->get();

        if(count($record)>0){
            $test_ids=$record->pluck('id')->toArray();

            $user_ids=$record->pluck('studentid')->toArray();
            $users=User::whereIn('id',$user_ids)->get();
            $user_maps=Array();
            foreach ($users as $user){
                $user_maps[strval($user->id)]=$user;
            }

            $categoryIds = $record->pluck('category')->toArray();
            $categoryNames = Category::whereIn('id', $categoryIds)->get();
            $categoryName_maps = Array();
            foreach ($categoryNames as $categoryName){
                $categoryName_maps[strval($categoryName->id)] = $categoryName->name;
            }

            $test_questions=Testquestions::whereIn('testid',$test_ids)->get();
            $question_ids=$test_questions->pluck('questionid')->toArray();
            $test_question_maps=[];
            foreach ($test_questions as $question){
                $key=strval($question['testid']);
                $test_question_maps[$key][]=$question;
            }

            $question_translations=QuestionTranslations::whereIn('questionid', $question_ids)->get();
            $question_translation_maps=[];
            foreach ($question_translations as $question){
                $key=strval($question['questionid']);
                $question_translation_maps[$key][]=$question;
            }

            foreach ($record as $row){

                $correctSpecificAnswers = 0;
                $correctCommonAnswers = 0;

                $response = $row;
                $user = isset($user_maps[strval($row->studentid)]) ? $user_maps[strval($row->studentid)] : Array();
                $response['student'] = $user;

                $categoryName = isset($categoryName_maps[strval($row->category)])? $categoryName_maps[strval($row->category)]:Array();
                $response['categoryName'] = $categoryName;


                $questions = isset($test_question_maps[strval($row->id)]) ? $test_question_maps[strval($row->id)] : Array();

                foreach ($questions as $qrow){
                    if($qrow['status']){
                        $count = Questions::where('isRealtime', 1)->where('id', $qrow['questionid'])->get();
                        if(count($count) > 0 && $count[0]['isSpecific']){
                            $correctSpecificAnswers++;
                        }
                        elseif (count($count) > 0 && $count[0]['isCommon']){
                            $correctCommonAnswers++;
                        }
                    }
                }

                $reqQuestions = Testconfig::where('testcategory',$row['category'])->where('category','realtime')->get();
                if(count($reqQuestions) > 0 && $correctSpecificAnswers >= $reqQuestions[0]['noofreqspecificanswer'] && $correctCommonAnswers >= $reqQuestions[0]['noofreqcommonanswer']){
                    $response['result_status'] = 1;
                }
                else{
                    $response['result_status'] = 0;
                }
                $result[] = $response;
            }
            if(count($result)){
                $resultData= [
                    'success' => true,
                    'testResult' => $result,
                ];
            } else{
                $resultData= [
                    'success' => false,
                    'testResult' => $result,
                ];
            }

        }
        else{
            $resultData= [
                'success' => false,
                'testResult' => [],
            ];
        }
        return $resultData;

    }

    public function getUserChoice($question, $choice) {
        switch ($choice) {
            case '1':
                return $question[0]['choice1'];
                break;
            case '2':
                return $question[0]['choice2'];
                break;
            case '3':
                return $question[0]['choice3'];
                break;
            case '4':
                return $question[0]['choice4'];
                break;

            default:
                # code...
                break;
        }
    }



    public function adminGetReport(Request $request){
//
//        $supervisor = User::where('isAdmin',2)->get();
//
//        $from = $request->input('from');
//        $to = $request->input('to');
//
//
//        $records =  Testresults::whereBetween('testdate',[$from, $to])->get();
//
//
//
//        $sresult = array();
//        foreach ($supervisor as $srow) {
//
//            $records =  Testresults::where('adminid',$srow['id'])->whereBetween('testdate',[$from, $to])->get();
//
//            $result = array();
//
//            foreach($records as $row) {
//                $correctSpecificAnswers = 0;
//                $correctCommonAnswers = 0;
//                $response = $row;
//                $user = User::where('id', $row['studentid'])->get();
//                $response['student'] = $user;
//                $response['questions'] = array();
//                $questions = Testquestions::where('testid',$response['id'])->get();
//                foreach ($questions as $qrow) {
//                    $record = $qrow;
//                    $question = QuestionTranslations::where('questionid',$record['questionid'])->get();
//
//                    $record['question'] = $question[0]['question'];
//
//
//                    $record['option'] = $this->getUserChoice($question, $record['input']);
//                    $examtestData = [];
//                    array_push($examtestData,$record);
//                    $response['questions'] = $examtestData;
//
//                    if($qrow['status']){
//                        $count = Questions::where('isRealtime', 1)->where('id',$record['questionid'])->get();
//
//                        if ($count[0]['isSpecific']) {
//                            $correctSpecificAnswers++;// = $correctSpecificAnswers+1;
//                        } elseif($count[0]['isCommon']) {
//                            $correctCommonAnswers++;// = $correctCommonAnswers+1;
//                        }
//                    }
//                }
//
//                $reqQuestions = Testconfig::where('testcategory', $response['category'])->where('category', 'realtime')->get();
//
//
//                if ($correctSpecificAnswers >= $reqQuestions[0]['noofreqspecificanswer'] && $correctCommonAnswers >= $reqQuestions[0]['noofreqcommonanswer']) {
//                    //print_r('Congratulations, you have passed your exam');
//                    $response['result_status'] = 1;
//                } else {
//                    //print_r('Unfortunately, you have failed your exam');
//                    $response['result_status'] = 0;
//                }
//
//                array_push($result, $response);
//                rsort($result);
//
//
//               }
//            echo json_encode($result, true);
//            exit;
//
//            array_push($sresult, array('id' => $srow['studentId'], 'result' => $result));
//
//        }
//
//
//        $report = array();
//        foreach ($sresult as $value) {
//            if(count($value['result'])){
//                $count = 0;
//                $pass = 0;
//                foreach ($value['result'] as $rvalue){
//                    $count++;
//                    if($rvalue['result_status'] == 1){
//                        $pass++;
//                    }
//
//                }
//                array_push($report, array('id' => $value['id'],'total' => $count,'passed' => $pass, 'percent' => round(($pass/$count) * 100 )));
//            }else{
//                array_push($report, array('id' => $value['id'],'total' => 0,'passed' => 0, 'percent' => 0 ));
//            }
//
//        }
//        sort($report);
//        echo json_encode(array(
//            'success' => true,
//            'data' => $report
//        ));
//        return;

        $from = $request->input('from');
        $to = $request->input('to');
        $isAdmin = $request->input('isAdmin');

        $Result = Testresults::get();
        $resultCount = count($Result);
        $record = Testresults::whereBetween('testdate',[$from, $to])->get();



        $test_ids=$record->pluck('id')->toArray();

        $user_ids=$record->pluck('studentid')->toArray();
        $users=User::whereIn('id',$user_ids)->get();
        $user_maps=Array();
        foreach ($users as $user){
            $user_maps[strval($user->id)]=$user;
        }

        $supervisor_ids=$record->pluck('adminid')->toArray();

        $supervisors=User::whereIn('id',$supervisor_ids)->get();
        $supervisor_maps=Array();
        foreach ($supervisors as $supervisor){
            $supervisor_maps[strval($supervisor->id)]=$supervisor;
        }

        $categoryIds = $record->pluck('category')->toArray();
        $categoryNames = Category::whereIn('id', $categoryIds)->get();
        $categoryName_maps = Array();
        foreach ($categoryNames as $categoryName){
            $categoryName_maps[strval($categoryName->id)] = $categoryName->name;
        }

        $test_questions=Testquestions::whereIn('testid',$test_ids)->get();
        $question_ids=$test_questions->pluck('questionid')->toArray();
        $test_question_maps=[];
        foreach ($test_questions as $question){
            $key=strval($question['testid']);
            $test_question_maps[$key][]=$question;
        }

        $question_translations=QuestionTranslations::whereIn('questionid', $question_ids)->get();
        $question_translation_maps=[];
        foreach ($question_translations as $question){
            $key=strval($question['questionid']);
            $question_translation_maps[$key][]=$question;
        }

//        $supervisor = User::where('isAdmin', 2)->get();


        $sresult = array();
        $report = [];
            foreach ($record as $row){

                $correctSpecificAnswers = 0;
                $correctCommonAnswers = 0;

                $response = $row;
                $user = isset($user_maps[strval($row->studentid)]) ? $user_maps[strval($row->studentid)] : Array();
                $response['student'] = $user;

                $supervisor = isset($supervisor_maps[strval($row->adminid)]) ? $supervisor_maps[strval($row->adminid)] : Array();
                $response['supervisor'] = $supervisor;

                $categoryName = isset($categoryName_maps[strval($row->category)])? $categoryName_maps[strval($row->category)]:Array();
                $response['categoryName'] = $categoryName;


                $questions = isset($test_question_maps[strval($row->id)]) ? $test_question_maps[strval($row->id)] : Array();

                foreach ($questions as $qrow){
                    if($qrow['status']){
                        $count = Questions::where('isRealtime', 1)->where('id', $qrow['questionid'])->get();
                        if(count($count) >0 && $count[0]['isSpecific']){
                            $correctSpecificAnswers++;
                        }
                        elseif (count($count) >0 && $count[0]['isCommon']){
                            $correctCommonAnswers++;
                        }
                    }
                }

                $reqQuestions = Testconfig::where('testcategory',$row['category'])->where('category','realtime')->get();

                if(count($reqQuestions) > 0 && $correctSpecificAnswers >= $reqQuestions[0]['noofreqspecificanswer'] && $correctCommonAnswers >= $reqQuestions[0]['noofreqcommonanswer']){
                    $response['result_status'] = 1;
                }
                else{
                    $response['result_status'] = 0;
                }
                $result[] = $response;
                sort($result);
            }

        foreach ($result as $value) {
            $count = 0;
            $pass = 0;
            $count++;
            if($value['result_status'] == 1){
                $pass++;
            }
            array_push($report, array('id' => $value['adminid'],'data' => $value, 'total' => $count,'passed' => $pass, 'percent' => round(($pass/$count) * 100 )));
        }

        if(count($report)){
            $resultData= [
                'success' => true,
                'reportResult' => $report,
            ];
        } else{
            $resultData= [
                'success' => false,
                'reportResult' => $report,
            ];
        }
        return $resultData;

    }

    public function adminBulkUpload(Request $request){
        $languages = Language::where('status', 1)->get();
        $question_type = $request->input('question_type');
        $categoryId = $request->input('categoryId');
        $data=$request->input('bulkData');
        $questionId=0;

        foreach ($data as $item){
            if(isset($item['No'])){
                $question = new Questions;
                $question->answer = $item['answer'];
                $question->category = isset($categoryId) ? $categoryId : '1';
                $topicAreaId = DB::table('topicarea')->where('name', $item['topicArea'])->first()->id;
                $question->topicArea = $topicAreaId;
                $question->photo = isset($item['photo']) ? $item['photo'] : '';
                $question->choice1photo = isset($item['choice1photo']) ? $item['choice1photo'] : '';
                $question->choice2photo = isset($item['choice2photo']) ? $item['choice2photo'] : '';
                $question->choice3photo = isset($item['choice3photo']) ? $item['choice3photo'] : '';
                if (isset($question_type['testType'])) {
                    if ($question_type['testType'] == 'realtime') {
                        $question->isRealtime = TRUE;
                        $question->isPractise = TRUE;
                        $question->parent = 'realtime';
                    } else {
                        $question->isRealtime = TRUE;
                        $question->isPractise = TRUE;
                    }
                } else {
                    $question->isRealtime = TRUE;
                    $question->isPractise = TRUE;
                }
                $question->isCommon = isset($question_type['isCommon']) ? $question_type['isCommon'] : FALSE;
                $question->isSpecific = isset($question_type['isSpecific']) ? $question_type['isSpecific'] : FALSE;
                if ($question->isCommon && $question->isPractise) {
                    $question->parent = 'common';
                } elseif ($question->isSpecific && $question->isPractise)  {
                    $question->parent = 'specific';
                }
                $result = $question->save();
                if ($result) {
                    $questionId = $question->id;
                }
            }
            foreach ($languages as $language){
                if($item['language']==$language['name']){
                    $item['language']=$language['id'];
                    $this->insertQuestionTranslation($questionId,[$item]);
                    break;
                }
            }
        }
        echo json_encode(array(
            'success' => true,
            'message' => 'Question created successfully'
        ));
        return;

//        $resultData= [
//            'success' => true,
//            '$data' => $data,
//            '$question_type' => $question_type['testType'],
//        ];
//        return $resultData;
    }

    public function insertQuestionTranslation($questionId, $question) {
        foreach ($question as $value) {
            $model = new QuestionTranslations;
            $model->questionid = $questionId;
            $model->language = $value['language'];
            $model->question = $value['query'];
            $model->audio = isset($value['audioUrl']) ?  $value['audioUrl'] : '';
            $model->choice1 = isset($value['choice1']) ? $value['choice1'] : '';
            $model->choice2 = isset($value['choice2']) ? $value['choice2'] : '';
            $model->choice3 = isset($value['choice3']) ? $value['choice3'] : '';
            $model->option1audio = isset($value['option1audio']) ? $value['option1audio'] : '';
            $model->option2audio = isset($value['option2audio']) ? $value['option2audio'] : '';
            $model->option3audio = isset($value['option3audio']) ? $value['option3audio'] : '';
            $model->save();
        }
        return;
    }

    public function usergetTopicArea(Request $request){
        $testResultData = $request->input('testResultData');
        $language = $request->input('language');
        $topicAreaResult = [];
        foreach ($testResultData as $k => $item){
            $result = $item;

            $topicarea_id = DB::table('questions')->where('id', $item['question'])->first()->topicArea;

            if(!empty($topicarea_id)){
                if ($language == "en-en") {
                    $topicArea = DB::table('topicarea')->where('id',$topicarea_id)->where('status', 1)->first()->name;
                } else {
                    $temp_lang = 'name_' . substr($language, 0, 2);
                    $topicArea1 = DB::table('topicarea')->where('id',$topicarea_id)->where('status', 1)->first()->$temp_lang;
                    if ($topicArea1) {
                        $topicArea = $topicArea1;
                    } else {
                        $topicArea = DB::table('topicarea')->where('id',$topicarea_id)->where('status', 1)->first()->name;
                    }
                }
            }
            else{
                $topicArea = "Unknown";
            }
            $result['topic_area'] = $topicArea;

            $topicAreaResult[] = $result;
        }




        $topics = array();
        foreach ($topicAreaResult as $topicAreaResultItem) {
            if (!isset($topics[$topicAreaResultItem['topic_area']])) {
                $topics[$topicAreaResultItem['topic_area']] = 0;
            }
            if (!$topicAreaResultItem['status']) {
                $topics[$topicAreaResultItem['topic_area']] = ($topics[$topicAreaResultItem['topic_area']] + 1);
            }

        }

        if($topicAreaResult){
            $resultData= [
                'success' => true,
                'testResultData' => $topics,
                '$language' => $language,
            ];
        }
        else{
            $resultData= [
                'success' => false,
                'testResultData' => $topics,
                '$language' => $language,
            ];
        }

        return $resultData;
    }

    public function usergetTopicAreaForReprint(Request $request){
        $testResultData = $request->input('testResultData');
        $language = $request->input('language');
        $topicAreaResult = [];
        foreach ($testResultData as $k => $item){
            $result = $item;

            $topicarea_id = DB::table('questions')->where('id', $item['questionid'])->first()->topicArea;

            if(!empty($topicarea_id)){ // My changing part
                if ($language == "en-en") {
                    $topicArea = DB::table('topicarea')->where('id',$topicarea_id)->where('status', 1)->first()->name;
                } else {
                    $temp_lang = 'name_' . substr($language, 0, 2);
                    $topicArea1 = DB::table('topicarea')->where('id',$topicarea_id)->where('status', 1)->first()->$temp_lang;
                    if ($topicArea1) {
                        $topicArea = $topicArea1;
                    } else {
                        $topicArea = DB::table('topicarea')->where('id',$topicarea_id)->where('status', 1)->first()->name;
                    }
                }
            }
            else{
                $topicArea = "Unknown";
            }
            $result['topic_area'] = $topicArea;

            $topicAreaResult[] = $result;
        }




        $topics = array();
        foreach ($topicAreaResult as $topicAreaResultItem) {
            if (!isset($topics[$topicAreaResultItem['topic_area']])) {
                $topics[$topicAreaResultItem['topic_area']] = 0;
            }
            if (!$topicAreaResultItem['status']) {
                $topics[$topicAreaResultItem['topic_area']] = ($topics[$topicAreaResultItem['topic_area']] + 1);
            }

        }

        if($topicAreaResult){
            $resultData= [
                'success' => true,
                'testResultData' => $topics,
                '$language' => $language,
            ];
        }
        else{
            $resultData= [
                'success' => false,
                'testResultData' => $topics,
                '$language' => $language,
            ];
        }

        return $resultData;
    }

    public function adminQuestionUpdate(Request $request){

        $id = $request->input('id');
        $newFlagphoto =  $request->input('newFlagphoto');
        $newFlagchoice1photo =  $request->input('newFlagchoice1photo');
        $newFlagchoice2photo =  $request->input('newFlagchoice2photo');
        $newFlagchoice3photo =  $request->input('newFlagchoice3photo');
        if(isset($newFlagphoto)){
            $profile_image = $request->input('photo');
            $image = str_replace('data:image/png;base64,', '', $profile_image);
            $image=base64_decode($image);
            $image_name = md5(uniqid(rand(), true));
            $filename = $image_name . '.' . 'png';
            $path = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\images\profile/';
            file_put_contents($path . $filename, $image);
            $photo = url('/').'/public/images/profile/'.$filename;
        }
        else{
            $photo = $request->input('photo');
            if(empty($photo)){
                $photo = '';
            }
        }
        if(isset($newFlagchoice1photo)){
            $profile_image1 = $request->input('choice1photo');
            $image1 = str_replace('data:image/png;base64,', '', $profile_image1);
            $image1=base64_decode($image1);
            $image_name1 = md5(uniqid(rand(), true));
            $filename1 = $image_name1 . '.' . 'png';
            $path1 = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\images\profile/';
            file_put_contents($path1 . $filename1, $image1);
            $photo1 = url('/').'/public/images/profile/'.$filename1;
        }
        else{
            $photo1 = $request->input('choice1photo');
            if(empty($photo1)){
                $photo1 = '';
            }
        }
        if(isset($newFlagchoice2photo)){
            $profile_image2 = $request->input('choice2photo');
            $image2 = str_replace('data:image/png;base64,', '', $profile_image2);
            $image2=base64_decode($image2);
            $image_name2 = md5(uniqid(rand(), true));
            $filename2 = $image_name2 . '.' . 'png';
            $path2 = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\images\profile/';
            file_put_contents($path2 . $filename2, $image2);
            $photo2 = url('/').'/public/images/profile/'.$filename2;
        }
        else{
            $photo2 = $request->input('choice2photo');
            if(empty($photo2)){
                $photo2 = '';
            }
        }
        if(isset($newFlagchoice3photo)){
            $profile_image3 = $request->input('choice3photo');
            $image3 = str_replace('data:image/png;base64,', '', $profile_image3);
            $image3=base64_decode($image3);
            $image_name3 = md5(uniqid(rand(), true));
            $filename3 = $image_name3 . '.' . 'png';
            $path3 = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\images\profile/';
            file_put_contents($path3 . $filename3, $image3);
            $photo3 = url('/').'/public/images/profile/'.$filename3;
        }
        else{
            $photo3 = $request->input('choice3photo');
            if(empty($photo3)){
                $photo3 = '';
            }
        }

        DB::table('questions')->where('id',$id)
            ->update([
                'answer' => $request->input('answer'),
                'topicArea' => $request->input('topicArea'),
                'photo' => $photo,
                'choice1photo' => $photo1,
                'choice2photo' => $photo2,
                'choice3photo' => $photo3,
            ]);

        foreach ($request->input('queries') as $query) {
            if (isset($query['question_translate_id'])) {

                    if(isset($query['newFlagAudio'])){
                        $query_audio = $query['q_audio'];
                        $audio = str_replace('data:audio/mp3;base64,', '', $query_audio);
                        $audio=base64_decode($audio);
                        $audio_name = md5(uniqid(rand(), true));
                        $filename = $audio_name . '.' . 'mp3';
                        $path = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\audio/';
                        file_put_contents($path . $filename, $audio);
                        $audioPath = url('/').'/public/audio/'.$filename;
                    }
                    else{
                        if($query['audio']){
                            $audioPath = $query['audio'];
                        }
                        else{
                            $audioPath = ' ';
                        }
                    }

                    if(isset($query['newFlagaudioOption1'])){
                        $query_choice1 = $query['audioOption1'];
                        $choice1 = str_replace('data:audio/mp3;base64,', '', $query_choice1);
                        $choice1=base64_decode($choice1);
                        $choice1_name = md5(uniqid(rand(), true));
                        $filename1 = $choice1_name . '.' . 'mp3';
                        $path1 = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\audio/';
                        file_put_contents($path1 . $filename1, $choice1);
                        $option1Path = url('/').'/public/audio/'.$filename1;
                    }
                    else{
                        if($query['option1audio']){
                            $option1Path = $query['option1audio'];
                        }
                        else
                            $option1Path = '';
                    }

                    if(isset($query['newFlagaudioOption2'])){
                        $query_choice2 = $query['audioOption2'];
                        $choice2 = str_replace('data:audio/mp3;base64,', '', $query_choice2);
                        $choice2=base64_decode($choice2);
                        $choice2_name = md5(uniqid(rand(), true));
                        $filename2 = $choice2_name . '.' . 'mp3';
                        $path2 = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\audio/';
                        file_put_contents($path2 . $filename2, $choice2);
                        $option2Path = url('/').'/public/audio/'.$filename2;
                    }
                    else{
                        if($query['option2audio']){
                            $option2Path = $query['option2audio'];
                        }
                        else
                            $option2Path = ' ';
                    }

                    if(isset($query['audioOption3'])){
                        $query_choice3 = $query['audioOption3'];
                        $choice3 = str_replace('data:audio/mp3;base64,', '', $query_choice3);
                        $choice3=base64_decode($choice3);
                        $choice3_name = md5(uniqid(rand(), true));
                        $filename3 = $choice3_name . '.' . 'mp3';
                        $path3 = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\audio/';
                        file_put_contents($path3 . $filename3, $choice3);
                        $option3Path = url('/').'/public/audio/'.$filename3;
                    }
                    else{
                        if($query['option3audio']){
                            $option3Path = $query['option3audio'];
                        }
                        else
                            $option3Path = ' ';

                    }

                    $choice1 = isset($query['choice1']) ? $query['choice1'] : '';
                    $choice2 = isset($query['choice2']) ? $query['choice2'] : '';
                    $choice3 = isset($query['choice3']) ? $query['choice3'] : '';

                    $updateQuestionData = DB::table('questions_translations')->where('id', $query['question_translate_id'])
                        ->update([
                            'language'=>$query['language'],
                            'question'=>$query['question'],
                            'audio'=>$audioPath,
                            'option1audio'=>$option1Path,
                            'option2audio'=>$option2Path,
                            'option3audio'=>$option3Path,
                            'choice1'=>$choice1,
                            'choice2'=>$choice2,
                            'choice3'=>$choice3,
                        ]);
            }
            else {

                if(isset($query['q_audio'])){
                    $query_audio = $query['q_audio'];
                    $audio = str_replace('data:audio/mp3;base64,', '', $query_audio);
                    $audio=base64_decode($audio);
                    $audio_name = md5(uniqid(rand(), true));
                    $filename = $audio_name . '.' . 'mp3';
                    $path = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\audio/';
                    file_put_contents($path . $filename, $audio);
                    $audioPath = url('/').'/public/audio/'.$filename;
                }
                else{
                    $audioPath = '';
                }

                if(isset($query['audioOption1'])){
                    $query_choice1 = $query['audioOption1'];
                    $choice1 = str_replace('data:audio/mp3;base64,', '', $query_choice1);
                    $choice1=base64_decode($choice1);
                    $choice1_name = md5(uniqid(rand(), true));
                    $filename1 = $choice1_name . '.' . 'mp3';
                    $path1 = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\audio/';
                    file_put_contents($path1 . $filename1, $choice1);
                    $option1Path = url('/').'/public/audio/'.$filename1;
                }
                else{
                    $option1Path = '';
                }

                if(isset($value['audioOption2'])){
                    $query_choice2 = $value['audioOption2'];
                    $choice2 = str_replace('data:audio/mp3;base64,', '', $query_choice2);
                    $choice2=base64_decode($choice2);
                    $choice2_name = md5(uniqid(rand(), true));
                    $filename2 = $choice2_name . '.' . 'mp3';
                    $path2 = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\audio/';
                    file_put_contents($path2 . $filename2, $choice2);
                    $option2Path = url('/').'/public/audio/'.$filename2;
                }
                else{
                    $option2Path = '';
                }

                if(isset($value['audioOption3'])){
                    $query_choice3 = $value['audioOption3'];
                    $choice3 = str_replace('data:audio/mp3;base64,', '', $query_choice3);
                    $choice3=base64_decode($choice3);
                    $choice3_name = md5(uniqid(rand(), true));
                    $filename3 = $choice3_name . '.' . 'mp3';
                    $path3 = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\audio/';
                    file_put_contents($path3 . $filename3, $choice3);
                    $option3Path = url('/').'/public/audio/'.$filename3;
                }
                else{
                    $option3Path = '';
                }

                $model = new QuestionTranslations;
                $model->questionid = $request->input('id');
                $model->language = $query['language'];
                $model->question = $query['question'];

                    $model->audio = $query['$audioPath'];

                $model->choice1 = isset($query['choice1']) ? $query['choice1'] : '';
                $model->choice2 = isset($query['choice2']) ? $query['choice2'] : '';
                $model->choice3 = isset($query['choice3']) ? $query['choice3'] : '';
                $model->option1audio = isset($query['option1Path']) ? $query['option1Path'] : '';
                $model->option2audio = isset($query['option2Path']) ? $query['option2Path'] : '';
                $model->option3audio = isset($query['option3Path']) ? $query['option3Path'] : '';
                $model->save();


            }

        }
        DB::table('questions_translations')->whereIn('id',$request->input('deletedTranslateIds'))->delete();


            $resultData = [
                'success' => true,
                'message' => 'Question updated'
            ];



        return $resultData;

    }

    public function adminQuestionCreate(Request $request){

        $question = new Questions;
        $question->answer = $request->input('answer');
        $question->category = $request->input('category_id');
        $question->topicArea = $request->input('topicArea');

        if($request->input('photo')){
            $profile_image = $request->input('photo');
            $image = str_replace('data:image/png;base64,', '', $profile_image);
            $image=base64_decode($image);
            $image_name = md5(uniqid(rand(), true));
            $filename = $image_name . '.' . 'png';
            $path = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\images\profile/';
            file_put_contents($path . $filename, $image);
            $photo = url('/').'/public/images/profile/'.$filename;
        }
        else{
            $photo = '';
        }

        if($request->input('choice1photo')){
            $profile_image1 = $request->input('choice1photo');
            $image1 = str_replace('data:image/png;base64,', '', $profile_image1);
            $image1=base64_decode($image1);
            $image_name1 = md5(uniqid(rand(), true));
            $filename1 = $image_name1 . '.' . 'png';
            $path1 = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\images\profile/';
            file_put_contents($path1 . $filename1, $image1);
            $photo1 = url('/').'/public/images/profile/'.$filename1;
        }
        else{
            $photo1 = '';
        }

        if($request->input('choice2photo')){
            $profile_image2 = $request->input('choice2photo');
            $image2 = str_replace('data:image/png;base64,', '', $profile_image2);
            $image2=base64_decode($image2);
            $image_name2 = md5(uniqid(rand(), true));
            $filename2 = $image_name2 . '.' . 'png';
            $path2 = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\images\profile/';
            file_put_contents($path2 . $filename2, $image2);
            $photo2 = url('/').'/public/images/profile/'.$filename2;
        }
        else{
            $photo2 = '';
        }

        if($request->input('choice3photo')){
            $profile_image3 = $request->input('choice3photo');
            $image3 = str_replace('data:image/png;base64,', '', $profile_image3);
            $image3=base64_decode($image3);
            $image_name3 = md5(uniqid(rand(), true));
            $filename3 = $image_name3 . '.' . 'png';
            $path3 = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\images\profile/';
            file_put_contents($path3 . $filename3, $image3);
            $photo3 = url('/').'/public/images/profile/'.$filename3;
        }
        else{
            $photo3 = '';
        }




        $question->photo = $photo;
        $question->choice1photo = $photo1;
        $question->choice2photo = $photo2;
        $question->choice3photo = $photo3;



        if ($request->input('testType')) {
            if ($request->input('testType')== 'realtime') {
                $question->isRealtime = TRUE;
                $question->isPractise = TRUE;
                $question->parent = 'realtime';
            } else {
                $question->isRealtime = TRUE;
                $question->isPractise = TRUE;

            }
        } else {
            $question->isRealtime = TRUE;
            $question->isPractise = TRUE;
            $question->parent = 'realtime';
        }
        $question->isCommon = $request->input('isCommon');
        $question->isSpecific = $request->input('isSpecific');

        if ($question->isCommon && $question->isPractise) {
            $question->parent = 'common';
        } elseif ($question->isSpecific && $question->isPractise)  {
            $question->parent = 'specific';
        } else {
            //
        }
        $result = $question->save();
//


        if ($result) {
            $questionId = $question->id;
            $this->insertQuestionTranslation_($questionId, $request->input('queries'));



            $resultData = [
                'success' => true,
                'message' => 'Question created'
            ];

        } else {
            $resultData = [
                'success' => false,
                'message' => 'Unable to create the question'
            ];
        }
        return $resultData;
    }

    public function insertQuestionTranslation_($questionId, $question) {
        foreach ($question as $value) {
            $model = new QuestionTranslations;
            $model->questionid = $questionId;
            $model->language = $value['language'];
            $model->question = $value['query'];



            if(isset($value['audio'])){
                $query_audio = $value['audio'];
                $audio = str_replace('data:audio/mp3;base64,', '', $query_audio);
                $audio=base64_decode($audio);
                $audio_name = md5(uniqid(rand(), true));
                $filename = $audio_name . '.' . 'mp3';
                $path = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\audio/';
                file_put_contents($path . $filename, $audio);
                $audioPath = url('/').'/public/audio/'.$filename;
            }
            else{
                $audioPath = '';
            }

            if(isset($value['audioOption1'])){
                $query_choice1 = $value['audioOption1'];
                $choice1 = str_replace('data:audio/mp3;base64,', '', $query_choice1);
                $choice1=base64_decode($choice1);
                $choice1_name = md5(uniqid(rand(), true));
                $filename1 = $choice1_name . '.' . 'mp3';
                $path1 = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\audio/';
                file_put_contents($path1 . $filename1, $choice1);
                $option1Path = url('/').'/public/audio/'.$filename1;
            }
            else{
                $option1Path = '';
            }

            if(isset($value['audioOption2'])){
                $query_choice2 = $value['audioOption2'];
                $choice2 = str_replace('data:audio/mp3;base64,', '', $query_choice2);
                $choice2=base64_decode($choice2);
                $choice2_name = md5(uniqid(rand(), true));
                $filename2 = $choice2_name . '.' . 'mp3';
                $path2 = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\audio/';
                file_put_contents($path2 . $filename2, $choice2);
                $option2Path = url('/').'/public/audio/'.$filename2;
            }
            else{
                $option2Path = '';
            }

            if(isset($value['audioOption3'])){
                $query_choice3 = $value['audioOption3'];
                $choice3 = str_replace('data:audio/mp3;base64,', '', $query_choice3);
                $choice3=base64_decode($choice3);
                $choice3_name = md5(uniqid(rand(), true));
                $filename3 = $choice3_name . '.' . 'mp3';
                $path3 = str_replace("app\Http","",dirname(dirname(__FILE__))).'public\audio/';
                file_put_contents($path3 . $filename3, $choice3);
                $option3Path = url('/').'/public/audio/'.$filename3;
            }
            else{
                $option3Path = '';
            }


            $model->audio = $audioPath;
            $model->choice1 = isset($value['choice1']) ? $value['choice1'] : '';
            $model->choice2 = isset($value['choice2']) ? $value['choice2'] : '';
            $model->choice3 = isset($value['choice3']) ? $value['choice3'] : '';
            $model->option1audio = $option1Path;
            $model->option2audio = $option2Path;
            $model->option3audio = $option3Path;
            $model->save();
        }
        return;
    }

    public function usergetTestDetail(Request $request){
        $testId = $request->input('testId');
        $language = $request->input('language');
        $languageId = DB::table('language')->where('code', $language)->where('status',1)->first()->id;
        $testResultData = DB::table('testquestions')->where('testid',$testId)->get();
        if($testResultData){
            $testResult = [];
            foreach (json_decode($testResultData, true) as $k=>$item){
                $temp = $item;
                $temp['question_text'] = DB::table('questions_translations')->where('questionid', $item['questionid'])->where('language', $languageId)->first()->question;
                $choice = 'choice'.$item['input'];
                $temp['choice'] = DB::table('questions_translations')->where('questionid', $item['questionid'])->where('language', $languageId)->first()->$choice;
                $testResult[] = $temp;
            }
            $data = [
                'success' => true,
                'testResult'=>$testResult,
                '$testResultData'=>$testResultData
            ];
        }
        else{
            $data = [
                'success' => false,
                'testResult'=>'There is no test result'
            ];
        }
        return $data;
    }
    public function usergetTestResult(Request $request){
        $testId = $request->input('testID');
        $duration = DB::table('testresults')->where('id', $testId)->first()->duration;
        $test_time = DB::table('testresults')->where('id', $testId)->first()->test_time;
        $testdate = DB::table('testresults')->where('id', $testId)->first()->testdate;
        if($testdate){
            $data = [
                'success' => true,
                'duration'=>$duration,
                'test_time'=>$test_time,
                'testdate'=>$testdate
            ];
        }
        else{
            $data = [
                'success' => false,
                'duration'=>$duration,
                'test_time'=>$test_time,
                'testdate'=>$testdategetTopicAreaForReprint
            ];
        }
        return $data;
    }
}
