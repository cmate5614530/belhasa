<?php

use Illuminate\Http\Request;

Route::get('/api123',function (){
   return 'll123';
});
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::Group(['prefix'=>'user'], function (){
    Route::post('login','UserController@userLogin');
    Route::post('Logout','UserController@userLogout');
    Route::post('userRegister','UserController@userRegister');
    Route::get('get_language_categories','CategoryController@getLanguageCategories');
    Route::get('testConfig','TestController@getTestConfig');
    Route::post('loadTest','TestController@loadTest');
    Route::post('TestComplete','TestController@testComplete');
    Route::post('EditUser','UserController@userEditUser');
    Route::post('GetCategory','UserController@adminGetCategory');
    Route::get('ViewUser/{id}','UserController@adminViewUser');
    Route::post('GetResult','UserController@userGetResult');
    Route::post('getTopicArea','UserController@usergetTopicArea');
    Route::post('getTopicAreaForReprint','UserController@usergetTopicAreaForReprint');
    Route::post('getSupervisorId','UserController@usergetSupervisorId');

    Route::post('getTestDetail','UserController@usergetTestDetail');
    Route::post('getTestResult','UserController@usergetTestResult');

});

Route::Group(['prefix'=>'admin'], function (){

    Route::post('login','UserController@adminLogin');
    Route::post('GetUsersData','UserController@adminGetUsersData');
    Route::post('getStudentData','UserController@admingetStudentData');
    Route::post('GetUsers','UserController@adminGetUsers');
    Route::post('GetCategory','UserController@adminGetCategory');
    Route::post('GetCategoryById','UserController@adminGetCategoryById');
    Route::post('getTopicAreaForReprint','UserController@usergetTopicAreaForReprint');
    Route::get('testConfig','TestController@getTestConfig');
    Route::post('getLanguage','UserController@adminGetLanguageData');
    Route::post('CreateUser','UserController@admincreateUser');
    Route::get('ViewUser/{id}','UserController@adminViewUser');
    Route::post('ChangeRole','UserController@adminChangeRole');
    Route::post('EditUser','UserController@adminEditUser');
    Route::post('GetCategories','UserController@adminGetCategories');
    Route::post('ChangeCategoryStatus','UserController@adminChangeCategoryStatus');
    Route::post('EditCategory','UserController@adminEditCategory');
    Route::post('CreateCategory','UserController@adminCreateCategory');
    Route::get('GetCategoryData/{category_id}','UserController@adminGetCategoryData');
    Route::post('GetTopicArea','UserController@adminGetTopicArea');
    Route::get('GetTopicAreaData/{topic_id}','UserController@adminGetTopicAreaData');
    Route::post('EditTopicArea','UserController@adminEditTopicArea');
    Route::post('CreateTopicArea','UserController@adminCreateTopicArea');
    Route::post('DeleteTopicArea','UserController@adminDeleteTopicArea');
    Route::post('DeleteQuestion','UserController@adminDeleteQuestion');
    Route::post('GetQuestionsCount','UserController@adminGetQuestionsCount');
    Route::post('GetQuestions','UserController@adminGetQuestions');
    Route::post('loadTestConfig','UserController@adminLoadTestConfig');
    Route::post('EditTestConfig','UserController@adminEditTestConfig');
    Route::post('GetQuestionData','UserController@adminGetQuestionData');
    Route::post('GetQuestionTransData','UserController@adminGetQuestionTransData');
    Route::post('GetLogs','UserController@adminGetLogs');
    Route::post('GetResult','UserController@adminGetResult');
    Route::post('GetReport','UserController@adminGetReport');

    Route::post('BulkUpload','UserController@adminBulkUpload');
    Route::post('QuestionCreate','UserController@adminQuestionCreate');
    Route::post('QuestionUpdate','UserController@adminQuestionUpdate');
    Route::post('getTestDetail','UserController@usergetTestDetail');
    Route::post('getTestResult','UserController@usergetTestResult');
});


